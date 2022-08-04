import { ImageBackground, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { View } from 'src/components/Themed'
import { ReactNativeFile } from 'apollo-upload-client'
import { useUploadImageMutation, useDeleteImageMutation, File } from 'src/generated/graphql'
import Layout from 'src/constants/Layout'
import { TouchableRipple, IconButton } from 'react-native-paper'
import * as ImagePicker from 'expo-image-picker'
import { useState } from 'react'

type WeakFile = Pick<File, 'id' | 'path' | 'type'>
interface Props {
  file?: WeakFile
  onChange?: () => void
  onDelete?: () => void
  large?: boolean
}
export default function ImageSelector ({ file, onChange, onDelete, large = false }: Props): JSX.Element {
  const [image, setImage] = useState<string | undefined | null>(file?.path)
  const [deleteImage] = useDeleteImageMutation()
  const [uploadImage] = useUploadImageMutation()

  const handlePick = async (): Promise<void> => {
    // No permissions request is necessary for launching the image library
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      presentationStyle: ImagePicker.UIImagePickerPresentationStyle.FORM_SHEET,
      videoMaxDuration: 10000,
      quality: 1
    })

    if (!result.cancelled) {
      setImage(result.uri)
      const file = new ReactNativeFile({
        uri: result.uri,
        // name: new Date().getTime().toString(),
        type: result.type === 'image' ? 'image/jpeg' : 'video/mp4'
      })
      console.log('file', file)
      try {
        await uploadImage({
          variables: {
            input: [file]
          }
        })
      } catch (e) {
        console.log('e', e)
      }
    }
  }

  const handleDelete = async (): Promise<void> => {
    if (file != null) {
      await deleteImage({
        variables: {
          id: file.id
        }
      })
    }
    setImage(null)
  }

  if (image != null) {
    return (
      <ImageBackground style={[s.image, large ? s.imageL : null]} source={{ uri: image }}>
        <View style={s.remove}>
          <IconButton icon='close' size={24} color='#fff' onPress={handleDelete} />
        </View>
      </ImageBackground>
    )
  }
  return (
    <TouchableRipple style={[s.box, large ? s.boxL : null]} onPress={handlePick}>
      <Ionicons name='add-circle-outline' size={30} />
    </TouchableRipple>
  )
}

const s = StyleSheet.create({
  box: {
    margin: 2,
    width: (Layout.window.width - Layout.padding * 2) / 3 - 4,
    height: (Layout.window.width - Layout.padding * 2) / 3 - 4,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center'
  },
  boxL: {
    width: 2 * (Layout.window.width - Layout.padding * 2) / 3 - 4,
    height: 2 * (Layout.window.width - Layout.padding * 2) / 3 - 4
  },
  image: {
    margin: 2,
    width: (Layout.window.width - Layout.padding * 2) / 3 - 4,
    height: (Layout.window.width - Layout.padding * 2) / 3 - 4,
    justifyContent: 'flex-start',
    alignItems: 'flex-end'
  },
  imageL: {
    width: 2 * (Layout.window.width - Layout.padding * 2) / 3 - 4,
    height: 2 * (Layout.window.width - Layout.padding * 2) / 3 - 4
  },
  remove: {
    backgroundColor: '#444'
  }
})
