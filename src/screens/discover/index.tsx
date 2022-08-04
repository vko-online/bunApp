import { FlatList } from 'react-native'
import { useAppSelector } from 'src/store'
import { Decision, useDiscoverQuery, useInteractMutation } from 'src/generated/graphql'
import Helmet from 'src/components/Helmet'
import React, { useRef } from 'react'
import ProfileCard from 'src/components/ProfileCard'

export default function DiscoverScreen (): JSX.Element {
  const filter = useAppSelector((state) => state.filter)
  const [like] = useInteractMutation()
  const listRef = useRef<FlatList>(null)
  const { data, loading, error } = useDiscoverQuery({
    variables: {
      input: {
        from: filter.fromAge,
        to: filter.toAge,
        online: filter.online
      }
    }
  })

  async function handleLike (id: string, index: number): Promise<void> {
    await like({
      variables: {
        input: {
          targetId: id,
          decision: Decision.Like
        }
      }
    })
    listRef?.current?.scrollToIndex({ index: index + 1, animated: true })
  }

  return (
    <Helmet loading={loading} error={error}>
      <FlatList
        data={data?.discover ?? []}
        pagingEnabled
        ref={listRef}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, idx) => `${idx}`}
        renderItem={({ item, index }) => <ProfileCard onLike={async () => await handleLike(item.id, index)} data={item} />}
      />
    </Helmet>
  )
}
