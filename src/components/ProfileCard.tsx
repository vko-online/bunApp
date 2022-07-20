import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { Surface, Title, Caption } from 'react-native-paper'
import { useHeaderHeight } from '@react-navigation/elements'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import Layout from 'src/constants/Layout'
import { BlurView } from 'expo-blur'
import Online from 'src/components/Online'

const PADDING = 20

interface Props {
  // data: Profile
  onPress?: () => void
}
export default function ProfileCard ({onPress }: Props): JSX.Element {
  const headerHeight = useHeaderHeight()
  const bottomHeight = useBottomTabBarHeight()
  // const { data: images } = useImagesQuery(data.id)

  const height = Layout.window.height - headerHeight - bottomHeight - PADDING * 2
  const width = Layout.window.width - PADDING * 2
  return (
    <TouchableOpacity onPress={onPress} disabled activeOpacity={0.8}>
      <Surface style={[s.container, { width, height }]}>
        <View style={s.bottomBar}>
          <BlurView intensity={25} style={s.row}>
            <Online isOnline={data.online} />
            <Title style={s.title}>{data.name}</Title>
            <Caption style={s.age}>{data.age}</Caption>
          </BlurView>
        </View>
      </Surface>
    </TouchableOpacity>
  )
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 1,
    overflow: 'hidden'
  },
  image: {
    backgroundColor: 'red',
    width: '100%',
    height: '100%'
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0
  },
  title: {
    marginLeft: 10,
    marginRight: 10
  },
  age: {
    fontWeight: 'bold'
  },
  row: {
    width: '100%',
    padding: PADDING,
    flexDirection: 'row',
    alignItems: 'center'
  }
})
