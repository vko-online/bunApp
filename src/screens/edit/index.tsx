import { StyleSheet } from 'react-native'
import { View } from 'src/components/Themed'
import Layout from 'src/constants/Layout'
import { RootStackScreenProps } from 'src/types'
import { Button, HelperText, TextInput } from 'react-native-paper'
import ImageSelector from 'src/components/ImageSelector'
import * as yup from 'yup'
import { useFormik } from 'formik'
import { Identity, MeDocument, MeQuery, useMeQuery, useUpdateProfileMutation } from 'src/generated/graphql'
import { useAppSelector } from 'src/store'
import Helmet from 'src/components/Helmet'
import Separator, { Spacer } from 'src/components/Separator'
import React from 'react'
import isEmpty from 'lodash/isEmpty'
import DropdownDate from 'src/components/DropdownDate'
import Dropdown from 'src/components/Dropdown'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const common = Object.values(Identity)
const schema = yup.object().shape({
  name: yup.string().required(),
  dob: yup.date().required(),
  looking: yup.string().oneOf([Identity.Female, Identity.Male, Identity.Other]).required()
})

export default function EditScreen ({ navigation }: RootStackScreenProps<'Edit'>): JSX.Element {
  const userId = useAppSelector(state => state.auth.currentUserId)
  const [update, { loading: submitLoading }] = useUpdateProfileMutation()
  const { data, loading } = useMeQuery({
    skip: userId == null
  })

  const { handleChange, touched, values, errors, handleSubmit, setFieldValue, isValid } = useFormik({
    validationSchema: schema,
    initialValues: {
      name: data?.me?.name ?? '',
      dob: data?.me?.dob != null ? new Date(data?.me?.dob) : null,
      looking: data?.me?.looking
    },
    enableReinitialize: true,
    onSubmit: async (values) => {
      await update({
        variables: {
          where: {
            id: userId as string
          },
          data: {
            name: {
              set: values.name
            },
            dob: {
              set: values.dob
            },
            looking: {
              set: values.looking
            }
          }
        },
        update: (cache, result) => {
          const oldMe = cache.readQuery<MeQuery>({
            query: MeDocument
          })

          if (oldMe?.me != null && result.data?.updateOneUser != null) {
            cache.writeQuery<MeQuery>({
              query: MeDocument,
              data: {
                ...oldMe,
                me: {
                  ...oldMe.me,
                  name: result.data?.updateOneUser?.name,
                  dob: result.data?.updateOneUser?.dob,
                  looking: result.data?.updateOneUser?.looking
                }
              }
            })
          }
        }
      })
    }
  })
  console.log('data', data?.me)

  return (
    <Helmet loading={loading}>
      <KeyboardAwareScrollView>
        <View style={s.container}>
          <View style={s.images}>
            <ImageSelector file={data?.me?.images[0]} large />
            <View>
              <ImageSelector file={data?.me?.images[1]} />
              <ImageSelector file={data?.me?.images[2]} />
            </View>
            <ImageSelector file={data?.me?.images[3]} />
            <ImageSelector file={data?.me?.images[4]} />
            <ImageSelector file={data?.me?.images[5]} />
          </View>
          <Separator />
          <TextInput
            mode='outlined'
            label='Name'
            value={values.name}
            onChangeText={handleChange('name')}
            placeholder='Your real name'
            error={touched.name === true && !isEmpty(errors.name)}
          />
          {
          touched.name === true && !isEmpty(errors.name)
            ? <HelperText type='error'>{errors.name}</HelperText>
            : null
        }
          <Spacer />
          <DropdownDate
            value={values.dob ?? null}
            onChange={async (val) => await setFieldValue('dob', val)}
            label='Date of Birth'
            placeholder='Enter your date of birth'
            error={touched.dob === true && !isEmpty(errors.dob)}
          />
          {
          touched.dob === true && !isEmpty(errors.dob)
            ? <HelperText type='error'>{errors.dob}</HelperText>
            : null
        }
          <Spacer />
          <Dropdown
            value={values.looking}
            onChange={async val => await setFieldValue('looking', val)}
            data={common.map(v => ({ label: v, value: v }))}
            label='You looking for'
          />
          <Spacer />
          <Button loading={submitLoading} disabled={!isValid} mode='contained' onPress={handleSubmit}>Save</Button>
        </View>
      </KeyboardAwareScrollView>
    </Helmet>
  )
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: Layout.padding
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  link: {
    marginTop: 15,
    paddingVertical: 15
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7'
  },
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
  images: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  }
})
