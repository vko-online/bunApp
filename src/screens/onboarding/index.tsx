import { View, Text } from 'src/components/Themed'
import { TextInput, Button, Caption, IconButton } from 'react-native-paper'
import Separator from 'src/components/Separator'
import { StyleSheet } from 'react-native'
import Dropdown from 'src/components/Dropdown'
import { common } from 'src/constants/Descriptors'
import * as yup from 'yup'
import { Formik } from 'formik'
import { RootStackScreenProps } from 'src/types'
import { LocationObject } from 'expo-location'
import { useEffect, useState } from 'react'
import * as Location from 'expo-location'

const schema = yup.object().shape({
  name: yup.string().required(),
  age: yup.number().required(),
  bio: yup.string().optional(),
  identity: yup.string().required(),
  looking: yup.string().required(),
  confirm: yup.bool().required().isTrue()
})

export default function TabTwoScreen ({ navigation }: RootStackScreenProps<'Onboarding'>): JSX.Element {
  const [location, setLocation] = useState<LocationObject>()
  const [errorMsg, setErrorMsg] = useState<string>('')

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

  // useEffect(() => {
  //   if (location != null && user?.uid != null) {
  //     usersCollection.doc(user.uid).update({
  //       location: new firestore.GeoPoint(location.coords.latitude, location.coords.longitude)
  //     }).catch(console.warn)
  //   }
  // }, [location, user?.uid])

  return (
    <Formik
      initialValues={{
        name: '',
        age: '',
        identity: '',
        bio: '',
        looking: '',
        confirm: false
      }}
      validateOnMount
      validationSchema={schema}
      onSubmit={async (values) => {
        // try {
        //   const data = {
        //     name: values.name,
        //     age: values.age,
        //     identity: values.identity,
        //     looking: values.looking,
        //     location: new firestore.GeoPoint(location?.coords.latitude as number, location?.coords.longitude as number),
        //     online: true
        //   }
        //   if (location != null) {
        //     data.location = new firestore.GeoPoint(location.coords.latitude, location.coords.longitude)
        //   }
        //   await usersCollection
        //     .doc(user?.uid)
        //     .set(data)
        //   await user?.updateProfile({
        //     displayName: values.name
        //   })
        //   navigation.navigate('Root')
        // } catch (e) {
        //   console.warn(e)
        // }
      }}
    >
      {({ values, handleChange, setFieldValue, handleSubmit, isValid }) => (
        <View style={s.container}>
          <TextInput
            mode='outlined'
            label='Name'
            value={values.name}
            onChangeText={handleChange('name')}
            placeholder='Enter your real name'
          />
          <View style={s.spacer} />
          <TextInput
            mode='outlined'
            label='Age'
            value={values.age}
            onChangeText={handleChange('age')}
            keyboardType='numeric'
            placeholder='Enter your real age'
          />
          <View style={s.spacer} />
          <Dropdown
            value={values.identity}
            onChange={val => setFieldValue('identity', val)}
            data={common.map(v => ({ label: v, value: v }))}
            label='You identity yourself as'
          />
          <View style={s.spacer} />
          <Dropdown
            value={values.looking}
            onChange={val => setFieldValue('looking', val)}
            data={common.map(v => ({ label: v, value: v }))}
            label='You looking for'
          />
          <View style={s.spacer} />
          <TextInput
            mode='outlined'
            label='Bio'
            numberOfLines={3}
            multiline
            value={values.bio}
            onChangeText={handleChange('bio')}
            placeholder='Tell about yourself'
          />
          <View style={s.spacer} />
          <Button>Select images</Button>
          <View style={s.spacer} />
          <View style={s.row}>
            <IconButton
              onPress={() => {
                setFieldValue('confirm', !values.confirm)
              }}
              size={30}
              icon={values.confirm ? 'checkbox-marked' : 'checkbox-blank-outline'}
            />
            <Caption>Accept terms and services</Caption>
          </View>
          <View style={s.spacer} />
          <Text>{errorMsg}</Text>
          <View style={s.spacerFlex} />
          <Separator />
          <Button onPress={handleSubmit} mode='contained' disabled={!isValid}>Continue</Button>
          <View style={s.spacer} />

        </View>
      )}
    </Formik>
  )
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  spacer: {
    height: 20
  },
  spacerFlex: {
    flex: 1
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})
