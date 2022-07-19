import { StyleSheet } from 'react-native'

import { TextInput, Button } from 'react-native-paper'
import { useSignInMutation } from 'src/generated/graphql'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Formik } from 'formik'
import * as yup from 'yup'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AUTH_STORAGE_KEY } from 'src/constants/Auth'
import { RootStackScreenProps } from 'src/types'
import { Spacer } from 'src/components/Separator'

const schema = yup.object().shape({
  password: yup.string().required(),
  phone: yup.string().required()
})

export default function Auth ({
  navigation
}: RootStackScreenProps<'Auth'>): JSX.Element {
  const [handleSignIn, { loading }] = useSignInMutation()
  return (
    <Formik
      initialValues={{
        password: '',
        phone: ''
      }}
      validateOnMount
      onSubmit={async (values, actions) => {
        console.log('values', values)
        const { data } = await handleSignIn({
          variables: {
            input: values
          }
        })
        if (data != null) {
          await AsyncStorage.setItem(
            AUTH_STORAGE_KEY,
            data.signIn.token
          )
          navigation.navigate('Root')
        }
      }}
      validationSchema={schema}
    >
      {({ values, handleChange, handleSubmit, errors, isValid }) => (
        <SafeAreaView style={s.container}>
          <TextInput
            value={values.phone}
            onChangeText={handleChange('phone')}
            label='Phone'
            mode='outlined'
          />
          <Spacer />
          <TextInput
            value={values.password}
            onChangeText={handleChange('password')}
            label='Password'
            mode='outlined'
          />
          <Spacer />
          <Button
            loading={loading}
            mode='contained'
            disabled={!isValid || loading}
            onPress={handleSubmit}
          >
            Sign In
          </Button>
        </SafeAreaView>
      )}
    </Formik>
  )
}

const s = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 20
  }
})
