import { FlatList } from 'react-native'
import { useInteractorsQuery } from 'src/generated/graphql'
import { Avatar, Caption, List } from 'react-native-paper'
import Helmet from 'src/components/Helmet'
import { useSelector } from 'react-redux'
import { RootState } from 'src/store'
import { formatDistance } from 'date-fns'
import React from 'react'
import { RootStackScreenProps } from 'src/types'

export default function Interactors ({
  navigation
}: RootStackScreenProps<'Interactors'>): JSX.Element {
  const userId = useSelector((state: RootState) => state.auth.currentUserId)
  const { loading, data, error } = useInteractorsQuery({
    skip: userId == null,
    variables: {
      userId: userId as string
    }
  })

  return (
    <Helmet loading={loading} error={error}>
      <FlatList
        data={data?.interactions}
            // contentContainerStyle={{ flex: 1 }}
        renderItem={({ item }) => {
          return (
            <List.Item
              left={() => <Avatar.Text label={item.author.name?.slice(0, 1) ?? ''} />} title={item.author.name}
              right={() => <Caption>{formatDistance(new Date(item.createdAt), new Date())}</Caption>}
              onPress={() => navigation.navigate('Overview', { id: item.author.id })}
            />
          )
        }}
      />
    </Helmet>
  )
}
