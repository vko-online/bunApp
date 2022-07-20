import * as Device from 'expo-device'
import { Platform } from 'react-native'
import * as Notifications from 'expo-notifications'
import * as ImagePicker from 'expo-image-picker'
import * as Location from 'expo-location'

export async function registerForPushNotificationAccess (): Promise<string | null> {
  let token: string | null = null
  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync()
    let finalStatus = existingStatus
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync()
      finalStatus = status
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!')
      return null
    }
    token = (await Notifications.getExpoPushTokenAsync()).data
  } else {
    // throw new Error('Must use physical device for Push Notifications')
    return null
  }

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C'
    })
  }

  return token
}

export async function registerForCameraAndGalleryAccess (): Promise<ImagePicker.PermissionStatus> {
  const response = await ImagePicker.requestMediaLibraryPermissionsAsync()
  return response.status
}

export async function registerForLocationAccess (): Promise<Location.PermissionStatus> {
  const response = await Location.requestForegroundPermissionsAsync()
  return response.status
}
