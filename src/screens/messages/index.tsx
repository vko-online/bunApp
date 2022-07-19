import { RouteProp } from '@react-navigation/native'
import { StyleSheet } from 'react-native'

import { View } from 'src/components/Themed'
import { SortOrder, useMessagesQuery, useMeIdQuery } from 'src/generated/graphql'
import { ConversationStackParamList } from 'src/types'
import { GiftedChat } from 'react-native-gifted-chat'
import { ActivityIndicator } from 'react-native-paper'

interface Props {
  route: RouteProp<ConversationStackParamList, 'Messages'>
}
export default function Messages ({
  route
}: Props): JSX.Element {
  const { data: meData } = useMeIdQuery()
  const { loading, data } = useMessagesQuery({
    variables: {
      where: {
        conversationId: {
          equals: route.params.conversationId
        }
      },
      orderBy: {
        createdAt: SortOrder.Asc
      }
    }
  })

  const messages = (data?.messages ?? []).map(msg => ({
    _id: msg.id,
    text: msg.content,
    createdAt: msg.createdAt,
    user: {
      _id: msg.author.id,
      name: msg.author.name ?? msg.author.id,
      avatar: msg.author.images[0]?.path
    }
  }))

  if (loading) {
    return (
      <View style={s.container}>
        <ActivityIndicator />
      </View>
    )
  }

  return (
    <GiftedChat
      messages={messages}
      // onSend={messages => onSend(messages)}
      user={{
        _id: meData?.me?.id as string
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
