import * as Location from 'expo-location'
import { useCallback, useEffect, useRef, useState } from 'react'
import { View, AppState } from 'react-native'
import { Snackbar } from 'react-native-paper'
import firestore from '@react-native-firebase/firestore'
import { LocationObject } from 'expo-location'
import { FirebaseAuthTypes } from '@react-native-firebase/auth'
import * as geofire from 'geofire-common'

const usersCollection = firestore().collection('Users')

interface Props {
  user: FirebaseAuthTypes.User | null
}
export default function OnlinePresence ({ user }: Props): JSX.Element {
  const [location, setLocation] = useState<LocationObject>()
  const [errorMsg, setErrorMsg] = useState<string>('')
  const [visible, setVisible] = useState(false)
  const appState = useRef(AppState.currentState)

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied')
        return
      }

      const location = await Location.getCurrentPositionAsync({})
      setLocation(location)
    })().catch(console.warn)
  }, [])

  useEffect(() => {
    const subscription = AppState.addEventListener('change', handleAppStateChange)
    return () => {
      subscription.remove()
    }
  }, [user, location])

  const handleAppStateChange = useCallback((nextAppState): void => {
    const isActive = (appState.current.match(/inactive|background/) != null) && nextAppState === 'active'
    if (user !== null && location != null) {
      const hash = geofire.geohashForLocation([location.coords.latitude, location.coords.longitude])
      usersCollection.doc(user?.uid).update({
        online: isActive,
        geohash: hash,
        location: new firestore.GeoPoint(location.coords.latitude, location.coords.longitude)
      }).catch(console.warn)
    }

    appState.current = nextAppState
  }, [location, user])

  const onShowSnackBar = (): void => setVisible(true)
  const onDismissSnackBar = (): void => {
    setVisible(false)
    setErrorMsg('')
  }

  useEffect(() => {
    if (errorMsg.length > 0) {
      onShowSnackBar()
    }
  }, [errorMsg])

  return (
    <View>
      <Snackbar
        visible={visible}
        duration={Infinity}
        onDismiss={onDismissSnackBar}
      >
        {errorMsg}
      </Snackbar>
    </View>
  )
}
