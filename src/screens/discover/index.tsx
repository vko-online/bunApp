import { FlatList, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { useAppSelector } from 'src/store'
import { useDiscoverQuery } from 'src/generated/graphql'
import Helmet from 'src/components/Helmet'
import React from 'react'
import ProfileCard from 'src/components/ProfileCard'

function DiscoverScreen (): JSX.Element {
  const filter = useAppSelector(state => state.filter)
  const { data, loading, error } = useDiscoverQuery({
    variables: {
      input: {
        from: filter.fromAge,
        to: filter.toAge,
        online: filter.online
      }
    }
  })

  return (
    <Helmet loading={loading} error={error}>
      <FlatList
        data={data?.discover ?? []}
        keyExtractor={(item, idx) => `${idx}`}
        renderItem={({ item }) => <ProfileCard data={item} />}
      />
    </Helmet>
  )
}

export default connect()(DiscoverScreen)
