import React from 'react'
import { StyleSheet, Image, View, FlatList } from 'react-native'
import { IconButton, Avatar, Button } from 'react-native-paper'
import Layout from 'src/constants/Layout'
import { Text } from 'src/components/Themed'
import { Ionicons } from '@expo/vector-icons'
import { ProfilePartsFragment } from 'src/generated/graphql'
import { Video, ResizeMode } from 'expo-av'

interface Props {
  shouldOffsetTop?: boolean
  data?: ProfilePartsFragment | null
  onMessage?: () => void
  onLike?: () => void
  onEdit?: () => void
}
export default function ProfileCard ({
  shouldOffsetTop = false,
  data,
  onMessage,
  onLike,
  onEdit
}: Props): JSX.Element {
  const height = Layout.window.height
  const width = Layout.window.width
  return (
    <View style={s.container}>
      <FlatList
        data={[
          { type: 'video', url: 'https://picsum.photos/700' },
          { type: 'photo', url: 'https://picsum.photos/600' }
        ]}
        renderItem={({ item }) => {
          if (item.type === 'video') {
            return (
              <Video
                shouldPlay
                isMuted
                style={{ width, height }}
                source={require('src/assets/videos/watermarked_preview.mp4')}
                useNativeControls={false}
                resizeMode={ResizeMode.COVER}
                isLooping
              />
            )
          }
          return <Image style={{ width, height }} source={{ uri: item.url }} />
        }}
        horizontal
        overScrollMode='never'
        fadingEdgeLength={10}
        scrollToOverflowEnabled={false}
        // contentContainerStyle={{ flex: 1 }}
        // style={{ flex: 1 }}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      />
      <View
        style={[
          s.topBar,
          { paddingTop: shouldOffsetTop ? Layout.padding * 5 : Layout.padding * 3 }
        ]}
      >
        <Avatar.Image size={40} source={{ uri: 'https://picsum.photos/100' }} />
        <View style={s.info}>
          <Text style={s.title}>{data?.name}</Text>
          <Text style={s.distance}>{data?.bio?.slice(0, 20)}</Text>
        </View>
      </View>
      <View style={s.actions}>
        <View style={s.location}>
          <Text style={s.locationText}>
            <Ionicons name='location' /> Almaty 2km
          </Text>
        </View>
        <View>
          {onMessage == null
            ? null
            : (
              <IconButton
                onPress={onMessage}
                size={24}
                style={s.icon}
                color='#fff'
                icon='message-reply-text'
              />
              )}
          {onLike == null
            ? null
            : (
              <IconButton
                onPress={onLike}
                size={24}
                style={s.icon}
                color='#fff'
                icon='heart'
              />
              )}
          {onEdit == null
            ? null
            : (
              <Button
                onPress={onEdit}
                mode='contained'
                color='#fff'
              >Edit profile
              </Button>
              )}
        </View>
      </View>
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    backgroundColor: '#000'
  },
  icon: {
    backgroundColor: 'rgba(255, 255, 255, 0.25)'
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: Layout.padding,
    paddingBottom: Layout.padding * 5
  },
  topBar: {
    paddingTop: Layout.padding * 3,
    paddingHorizontal: Layout.padding,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: '#fff'
  },
  location: {
    alignSelf: 'flex-end'
  },
  locationText: {
    color: '#eee'
  },
  info: {
    marginLeft: 10
  },
  age: {
    color: '#eee',
    fontWeight: 'bold'
  },
  distance: {
    color: '#eee'
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center'
  }
})
