// name, dob

import { reverseGeocodeAsync } from 'expo-location'
import { FormikProps } from 'formik'
import React, { useEffect } from 'react'
import { Button, Checkbox, HelperText, Title } from 'react-native-paper'
import { Spacer } from 'src/components/Separator'
import * as Device from 'expo-device'
import {
  registerForCameraAndGalleryAccess,
  registerForLocationAccess,
  registerForPushNotificationAccess
} from 'src/services/permissions'
import * as Location from 'expo-location'
import * as yup from 'yup'
import Row from 'src/components/Row'
import { Text, View } from 'src/components/Themed'
import isEmpty from 'lodash/isEmpty'

interface LocationValue {
  latitude: number
  longitude: number
}
interface PermissionsValues {
  location: LocationValue
  city: string
  country: string
  pushId: string
  imageAccess: boolean
}
const mustUseDevice = 'Must use physical device for Push Notifications'
export const permissionsSchema = yup.object().shape({
  location: yup
    .object()
    .shape({
      latitude: yup.number(),
      longitude: yup.number()
    })
    .nullable()
    .required('Permission denied'),
  city: yup.string().required(),
  country: yup.string().required(),
  pushId: yup.string().required(Device.isDevice ? 'Permission denied' : mustUseDevice),
  imageAccess: yup.bool().required().isTrue('Permission denied')
})
type Props = FormikProps<PermissionsValues>
export default function PermissionsStep ({
  errors,
  touched,
  values,
  handleChange,
  setFieldValue,
  setFieldError
}: Props): JSX.Element {
  const requestLocationAccess = async (): Promise<void> => {
    const status = await registerForLocationAccess()
    if (status !== 'granted') {
      setFieldError('location', 'Permission to access location was denied')
      return
    }

    const location = await Location.getCurrentPositionAsync({})
    setFieldValue('location', {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude
    })
    const geoResponse = await reverseGeocodeAsync({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude
    })

    for (const geo of geoResponse) {
      if (geo.city != null && geo.country != null) {
        setFieldValue('city', geo.city)
        setFieldValue('country', geo.country)
      }
    }
  }

  const requestCameraAccess = async (): Promise<void> => {
    const status = await registerForCameraAndGalleryAccess()
    if (status === 'granted') {
      setFieldValue('imageAccess', true)
    } else {
      setFieldError('imageAccess', 'Permission to access images was denied')
    }
  }

  const requestPushAccess = async (): Promise<void> => {
    const pushIdToken = await registerForPushNotificationAccess()
    if (isEmpty(pushIdToken)) {
      if (Device.isDevice) {
        setFieldError(
          'pushId',
          'Permission to access push notifications was denied'
        )
      } else {
        setFieldError(
          'pushId',
          mustUseDevice
        )
      }
    } else {
      setFieldValue('pushId', pushIdToken)
    }
  }

  useEffect(() => {
    requestCameraAccess().catch(console.warn)
    requestPushAccess().catch(console.warn)
    requestLocationAccess().catch(console.warn)
  }, [])

  console.log('values', values)
  console.log('errors', errors)
  return (
    <View>
      <Title>
        You deliver best experience we need access to your location, camera and
        push notifications
      </Title>
      <Spacer />
      <Row>
        <Text>Location</Text>
        <Checkbox
          status={isEmpty(values.location) ? 'unchecked' : 'checked'}
          disabled
        />
      </Row>
      {isEmpty(errors.location)
        ? null
        : (
          <Row>
            <HelperText type='error'>{errors.location}</HelperText>
            <Button
              onPress={requestLocationAccess}
              mode='text'
              compact
              uppercase={false}
            >
              Try again
            </Button>
          </Row>
          )}
      <Spacer />
      <Row>
        <Text>Camera / Image Gallery</Text>
        <Checkbox
          status={values.imageAccess ? 'checked' : 'unchecked'}
          disabled
        />
      </Row>
      {isEmpty(errors.imageAccess)
        ? null
        : (
          <Row>
            <HelperText type='error'>{errors.imageAccess}</HelperText>
            <Button
              onPress={requestCameraAccess}
              mode='text'
              compact
              uppercase={false}
            >
              Try again
            </Button>
          </Row>
          )}
      <Spacer />
      <Row>
        <Text>Push Notifications</Text>
        <Checkbox
          status={isEmpty(values.pushId) ? 'unchecked' : 'checked'}
          disabled
          color='red'
          uncheckedColor='#fff'
        />
      </Row>
      {isEmpty(errors.pushId)
        ? null
        : (
          <Row>
            <HelperText style={{ flex: 0.75 }} type='error'>{errors.pushId}</HelperText>
            <Button
              onPress={requestPushAccess}
              mode='text'
              compact
              uppercase={false}
            >
              Try again
            </Button>
          </Row>
          )}
    </View>
  )
}
