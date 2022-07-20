// name, dob

import { FormikProps } from 'formik'
import React from 'react'
import { TextInput, Title, HelperText } from 'react-native-paper'
import DropdownDate from 'src/components/DropdownDate'
import { Spacer } from 'src/components/Separator'
import * as yup from 'yup'
import isEmpty from 'lodash/isEmpty'

interface BasicInfoValues {
  name: string
  dob: Date
}
type Props = FormikProps<BasicInfoValues>
export const basicInfoSchema = yup.object().shape({
  name: yup.string().required(),
  dob: yup.date().required().nullable()
})
export default function BasicInfoStep ({ touched, errors, values, handleChange, setFieldValue }: Props): JSX.Element {
  return (
    <>
      <Title>Tell us a little bit about yourself</Title>
      <Spacer />
      <TextInput
        mode='outlined'
        label='Name'
        value={values.name}
        onChangeText={handleChange('name')}
        placeholder='Enter your real name'
        error={touched.name === true && !isEmpty(errors.name)}
      />
      {
        touched.name === true && !isEmpty(errors.name)
          ? <HelperText type='error'>{errors.name}</HelperText>
          : null
      }
      <Spacer />
      <DropdownDate
        value={values.dob}
        onChange={val => setFieldValue('dob', val)}
        label='Date of Birth'
        placeholder='Enter your date of birth'
        error={touched.dob === true && !isEmpty(errors.dob)}
      />
      {
        touched.dob === true && !isEmpty(errors.dob)
          ? <HelperText type='error'>{errors.dob}</HelperText>
          : null
      }
    </>
  )
}
