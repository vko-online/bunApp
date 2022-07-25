import { useSelector } from 'react-redux'
import {
  useNewMessageSubscription,
  MessagesDocument,
  SortOrder,
  MessagesQuery,
  useMarkAsReceivedMutation,
  MyConversationsQuery,
  MyConversationsDocument
} from 'src/generated/graphql'
import { RootState } from 'src/store'

/*
what it does
receive msgs +
update store +
mark as received +
  2 options:
     send N+1 request from frontend
     modify on backend, but we don't know if subscription was successful, so stick to option 1
mark as read should be implemented injected in Conversation view screen
*/
export default function Messaging (): JSX.Element | null {
  const [markAsReceived] = useMarkAsReceivedMutation({
    ignoreResults: true
  })
  const userId = useSelector((state: RootState) => state.auth.currentUserId)
  useNewMessageSubscription({
    skip: userId == null,
    variables: {
      currentUserId: userId as string
    },
    onSubscriptionData: (options) => {
      const client = options.client
      const newMessage = options.subscriptionData.data?.newMessage

      // update messages
      const existingMessages = client.readQuery<MessagesQuery>({
        query: MessagesDocument,
        variables: {
          where: {
            conversationId: {
              equals: newMessage?.conversationId
            }
          },
          orderBy: {
            createdAt: SortOrder.Desc
          }
        }
      })

      const updatedMessages = [...(existingMessages?.messages ?? [])]
      if (newMessage?.message != null) {
        updatedMessages.unshift(newMessage.message)
        // fire and forget
        markAsReceived({
          variables: {
            messageIds: [newMessage.message.id]
          }
        })
      }

      client.writeQuery<MessagesQuery>({
        query: MessagesDocument,
        variables: {
          where: {
            conversationId: {
              equals: newMessage?.conversationId
            }
          },
          orderBy: {
            createdAt: SortOrder.Desc
          }
        },
        data: {
          messages: updatedMessages
        }
      })

      // update conversation last message
      const existingConversations = client.readQuery<MyConversationsQuery>({
        query: MyConversationsDocument
      })

      if (existingConversations?.myConversations != null) {
        const index = existingConversations?.myConversations.findIndex(v => v.id === newMessage?.conversationId)
        if (index > -1) {
          const updatedConversations: MyConversationsQuery = {
            ...existingConversations,
            myConversations: [
              ...existingConversations.myConversations.slice(0, index),
              {
                ...existingConversations.myConversations[index],
                lastMessageAuthor: newMessage?.message.author.name,
                lastMessageContent: newMessage?.message.content,
                lastMessageDate: newMessage?.message.createdAt
              },
              ...existingConversations.myConversations.slice(Number(index) + 1)
            ]
          }
          client.writeQuery<MyConversationsQuery>({
            query: MyConversationsDocument,
            data: updatedConversations
          })
        }
      }
    }
  })
  return null
}
