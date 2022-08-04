import { useMeQuery } from 'src/generated/graphql'
import Helmet from 'src/components/Helmet'
import React from 'react'
import ProfileCard from 'src/components/ProfileCard'
import { RootTabScreenProps } from 'src/types'

export default function Profile ({
  navigation
}: RootTabScreenProps<'Profile'>): JSX.Element {
  const { loading, data, error } = useMeQuery()

  return (
    <Helmet loading={loading} error={error}>
      <ProfileCard data={data?.me} onEdit={() => navigation.navigate('Edit')} />
    </Helmet>
  )
}
