import { StyleSheet } from 'react-native'
import { View } from 'src/components/Themed'

export default function DiscoverScreen (): JSX.Element {
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
