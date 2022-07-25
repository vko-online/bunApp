import { View } from 'src/components/Themed'
import { Button } from 'react-native-paper'
import Separator, { Spacer } from 'src/components/Separator'
import { StyleSheet } from 'react-native'
import { RootStackScreenProps } from 'src/types'
import { useFormikWizard } from 'formik-wizard-form'
import BasicInfo, { basicInfoSchema } from './steps/BasicInfo'
import Permissions, { permissionsSchema } from './steps/Permissions'
import Preferences, { preferencesSchema } from './steps/Preferences'
import UploadImages, { uploadImagesSchema } from './steps/UploadImages'
import Row from 'src/components/Row'
import { persistor } from 'src/store'
import { client } from 'src/services/client'

// todo: overall onboarding should be redesigned
// as for now it's hard to do any reasonable changes in UI
// should wait for guidliness and design assets

export default function Onboarding ({ navigation }: RootStackScreenProps<'Onboarding'>): JSX.Element {
  const {
    renderComponent,
    handlePrev,
    handleNext,
    isNextDisabled,
    isPrevDisabled,
    isLastStep
  } = useFormikWizard({
    initialValues: {
      name: '',
      dob: null,
      city: '',
      country: '',
      location: null,
      pushId: '',
      imageAccess: false,
      identity: null,
      looking: null,
      files: []
    },
    onSubmit: values => console.log(values),
    validateOnNext: true,
    activeStepIndex: 0,
    steps: [
      {
        component: BasicInfo,
        validationSchema: basicInfoSchema
      },
      {
        component: Preferences,
        validationSchema: preferencesSchema
      },
      {
        component: UploadImages,
        validationSchema: uploadImagesSchema
      },
      {
        component: Permissions,
        validationSchema: permissionsSchema
      }
    ]
  })

  async function handleLogout (): Promise<void> {
    await persistor.purge()
    await client.resetStore()
    navigation.replace('Auth')
  }

  return (
    <View style={s.container}>
      {renderComponent()}
      <Separator />
      <Row>
        <Button onPress={handlePrev} mode='outlined' disabled={isPrevDisabled}>
          Previous
        </Button>
        <Button onPress={handleNext} mode='contained' disabled={isNextDisabled}>
          {isLastStep ? 'Finish' : 'Next'}
        </Button>
      </Row>
      <Spacer />
      <Button mode='text' onPress={handleLogout}>Sign out</Button>
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  }
})
