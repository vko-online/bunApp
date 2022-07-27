import React from 'react'
import { StyleSheet, View, TouchableOpacity, ImageBackground } from 'react-native'
import { Surface, Title, Caption } from 'react-native-paper'
import { useHeaderHeight } from '@react-navigation/elements'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import Layout from 'src/constants/Layout'
import { BlurView } from 'expo-blur'
import { ProfilePartsFragment } from 'src/generated/graphql'
import { formatDistanceToNowStrict } from 'date-fns'

const PADDING = 20

interface Props {
  data: ProfilePartsFragment
  onPress?: () => void
}
export default function ProfileCard ({ data, onPress }: Props): JSX.Element {
  const headerHeight = useHeaderHeight()
  const bottomHeight = useBottomTabBarHeight()
  // const { data: images } = useImagesQuery(data.id)

  const height = Layout.window.height - headerHeight - bottomHeight
  const width = Layout.window.width
  return (
    <TouchableOpacity onPress={onPress} disabled activeOpacity={0.8}>
      <Surface style={[s.container, { width, height }]}>
        <ImageBackground style={s.image} source={{ uri: 'https://picsum.photos/id/237/200/300' }}>
          <View style={s.bottomBar}>
            <BlurView intensity={25} style={s.row}>
              <Title style={s.title}>{data.name}</Title>
              <Caption style={s.age}>{formatDistanceToNowStrict(new Date(data.dob), { unit: 'year' })}</Caption>
            </BlurView>
          </View>
        </ImageBackground>
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
