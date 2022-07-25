import { RouteProp } from '@react-navigation/native'
import { StyleSheet } from 'react-native'

import { View } from 'src/components/Themed'
import { SortOrder, useMessagesQuery, useMarkAsReadMutation, useSendMessageMutation, MessagesQuery, MessagesDocument } from 'src/generated/graphql'
import { RootStackParamList } from 'src/types'
import { GiftedChat, IMessage } from 'react-native-gifted-chat'
import { ActivityIndicator } from 'react-native-paper'
import { useSelector } from 'react-redux'
import { RootState } from 'src/store'

interface Props {
  route: RouteProp<RootStackParamList, 'Messages'>
}
export default function Messages ({
  route
}: Props): JSX.Element {
  const userId = useSelector((state: RootState) => state.auth.currentUserId)
  // const authorName = useSelector((state: RootState) => state.auth.name)
  const [sendMessage] = useSendMessageMutation()
  const [markAsRead] = useMarkAsReadMutation({
    ignoreResults: true
  })
  const { loading, data } = useMessagesQuery({
    variables: {
      where: {
        conversationId: {
          equals: route.params.conversationId
        }
      },
      orderBy: {
        createdAt: SortOrder.Desc
      }
    },
    onCompleted (data) {
      // should check before update to avoid duplicate requests
      const ids = data.messages.filter(v => v.readByIds.includes(userId as string) === false).map(v => v.id)
      if (ids.length > 0) {
        markAsRead({
          variables: {
            messageIds: ids
          }
        })
      }
    }
  })

  const messages: IMessage[] = (data?.messages ?? []).map(msg => ({
    _id: msg.id,
    text: msg.content,
    createdAt: msg.createdAt,
    sent: msg.readByIds.filter(v => v === userId).length > 0,
    received: msg.receivedByIds.filter(v => v !== userId).length > 0,
    user: {
      _id: msg.author.id,
      name: msg.author.name ?? msg.author.id
    }
  }))

  if (loading) {
    return (
      <View style={s.container}>
        <ActivityIndicator />
      </View>
    )
  }

  async function handleSendMessage (msgs: IMessage[]): Promise<void> {
    for (const msg of msgs) {
      await sendMessage({
        variables: {
          input: {
            conversationId: route.params.conversationId,
            content: msg.text
          }
        },
        // optimisticResponse: (vars) => ({
        //   __typename: 'Mutation',
        //   sendMessage: {
        //     receivedByIds: [userId as string],
        //     content: vars.input.content,
        //     createdAt: new Date(),
        //     __typename: 'Message',
        //     readByIds: [userId as string],
        //     id: String(new Date().getTime()),
        //     author: {
        //       __typename: 'User',
        //       id: userId as string,
        //       name: authorName
        //     }
        //   }
        // }),
        update: (cache, result) => {
          console.log('result', result)
          if (result.data?.sendMessage != null) {
            const existingMessages = cache.readQuery<MessagesQuery>({
              query: MessagesDocument,
              variables: {
                where: {
                  conversationId: {
                    equals: route.params.conversationId
                  }
                },
                orderBy: {
                  createdAt: SortOrder.Desc
                }
              }
            })
            const updatedMessages = [
              result.data?.sendMessage,
              ...(existingMessages?.messages ?? [])
            ]
            cache.writeQuery<MessagesQuery>({
              query: MessagesDocument,
              variables: {
                where: {
                  conversationId: {
                    equals: route.params.conversationId
                  }
                },
                orderBy: {
                  createdAt: SortOrder.Desc
                }
              },
              data: {
                messages: updatedMessages,
                __typename: 'Query'
              }
            })
          }
        }
      })
    }
  }

  return (
    <GiftedChat
      messages={messages}
      onSend={handleSendMessage}
      user={{
        _id: userId as string
      }}
    />
  )
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%'
  }
})
