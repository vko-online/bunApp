import { StyleSheet, FlatList } from 'react-native'

import { View } from 'src/components/Themed'
import { Caption, List, Avatar } from 'react-native-paper'
import { useMyConversationsQuery } from 'src/generated/graphql'
import Helmet from 'src/components/Helmet'
import { formatDistanceToNow } from 'date-fns'
import { RootTabScreenProps } from 'src/types'
import { useSelector } from 'react-redux'
import { RootState } from 'src/store'

export default function Conversations ({
  navigation
}: RootTabScreenProps<'Conversations'>): JSX.Element {
  const userId = useSelector((state: RootState) => state.auth.currentUserId)
  const { data, loading, error } = useMyConversationsQuery()

  return (
    <Helmet loading={loading} error={error}>
      <View style={s.container}>
        <FlatList
          data={data?.myConversations}
          // contentContainerStyle={{ flex: 1 }}
          renderItem={({ item }) => {
            const other = item.members.filter(v => v.id !== userId)[0]

            return (
              <List.Item
                left={() => <Avatar.Text label={other.name?.slice(0, 1) ?? other.id.slice(0, 1)} />} title={other.name} description={item.lastMessageContent}
                right={() => <Caption>{formatDistanceToNow(new Date(item.lastMessageDate))}</Caption>}
                onPress={() => navigation.navigate('Messages', { conversationId: item.id, title: other.name })}
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
