// name, dob

import { FormikProps } from 'formik'
import React from 'react'
import { Title } from 'react-native-paper'
import Dropdown from 'src/components/Dropdown'
import { Spacer } from 'src/components/Separator'
import { Identity } from 'src/generated/graphql'
import * as yup from 'yup'

interface PreferencesValues {
  identity: Identity
  looking: Identity
}
const common = Object.values(Identity)
type Props = FormikProps<PreferencesValues>
export const preferencesSchema = yup.object().shape({
  identity: yup.string().oneOf([Identity.Female, Identity.Male, Identity.Other]).nullable().required(),
  looking: yup.string().oneOf([Identity.Female, Identity.Male, Identity.Other]).nullable().required()
})
export default function PreferencesStep ({ values, handleChange, setFieldValue }: Props): JSX.Element {
  return (
    <>
      <Title>Tell us a little bit about yourself</Title>
      <Spacer />
      <Dropdown
        value={values.identity}
        onChange={val => setFieldValue('identity', val)}
        data={common.map(v => ({ label: v, value: v }))}
        label='You identity yourself as'
      />
      <Spacer />
      <Dropdown
        value={values.looking}
        onChange={val => setFieldValue('looking', val)}
        data={common.map(v => ({ label: v, value: v }))}
        label='You looking for'
      />
    </>
  )
}
