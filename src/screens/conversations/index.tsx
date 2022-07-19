import { StyleSheet, FlatList } from 'react-native'

import EditScreenInfo from 'src/components/EditScreenInfo'
import { Text, View } from 'src/components/Themed'
import { Caption, List } from 'react-native-paper'
import { useConversationsQuery } from 'src/generated/graphql'
import Helmet from 'src/components/Helmet'
import { formatDistance } from 'date-fns'
import { ConversationStackScreenProps } from 'src/types'

export default function Conversations ({
  navigation
}: ConversationStackScreenProps<'Conversations'>): JSX.Element {
  const { data, loading, error } = useConversationsQuery()

  return (
    <Helmet loading={loading} error={error}>
      <View style={s.container}>
        <FlatList
          data={data?.me?.conversations}
          // contentContainerStyle={{ flex: 1 }}
          renderItem={({ item }) => {
            const user = item.members.filter(v => v.id !== data?.me?.id)[0]

            const left = user.images.length > 0 ? <List.Icon icon={{ uri: user.images[0].path }} /> : null
            return (
              <List.Item
                left={() => left} title={user.name} description={item.lastMessageContent}
                right={() => <Caption>{formatDistance(new Date(item.lastMessageDate), new Date())}</Caption>}
                onPress={() => navigation.navigate('Messages', { conversationId: item.id })}
              />
            )
          }}
        />
      </View>
    </Helmet>
  )
}

const s = StyleSheet.create({
  container: {
    // flex: 1
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
