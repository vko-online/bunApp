import { Decision, useInteractMutation, useProfileQuery } from 'src/generated/graphql'
import { RootStackParamList } from 'src/types'
import { RouteProp } from '@react-navigation/native'
import React from 'react'
import ProfileCard from 'src/components/ProfileCard'
import Helmet from 'src/components/Helmet'
import { View } from 'src/components/Themed'

interface Props {
  route: RouteProp<RootStackParamList, 'Overview'>
}
export default function OverviewScreen ({
  route
}: Props): JSX.Element {
  const [like] = useInteractMutation()
  const { loading, error, data } = useProfileQuery({
    variables: {
      id: route.params.id
    }
  })

  async function handleLike (id?: string | null): Promise<void> {
    if (id != null) {
      await like({
        variables: {
          input: {
            targetId: id,
            decision: Decision.Like
          }
        }
      })
    }
  }

  if (data?.findFirstUser == null) {
    return <View />
  }

  return (
    <Helmet loading={loading} error={error}>
      <ProfileCard shouldOffsetTop onLike={async () => await handleLike(data?.findFirstUser?.id)} data={data?.findFirstUser} />
    </Helmet>
  )
}
