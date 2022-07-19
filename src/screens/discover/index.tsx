import { FlatList, StyleSheet } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'
import { View } from 'src/components/Themed'
import ProfileCard from 'src/components/ProfileCard'
import { useState, useEffect } from 'react'
import { useLazySearchQuery, useProfileQuery } from 'src/store/api'

export default function TabTwoScreen (): JSX.Element {
  return (
    <View style={s.container}>
      {/* <FlatList
        data={response?.data ?? []}
        style={s.list}
        keyExtractor={(item, idx) => `${idx}`}
        renderItem={({ item }) => <ProfileCard data={item} />}
      /> */}
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  list: {
    paddingTop: 20,
    paddingBottom: 20
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%'
  }
})
