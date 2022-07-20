// name, dob

import { FormikProps } from 'formik'
import React from 'react'
import { Button, Caption, Title } from 'react-native-paper'
import { Spacer } from 'src/components/Separator'
import { ImageInfo } from 'expo-image-picker'
import * as yup from 'yup'

export interface UploadImagesValues {
  files: ImageInfo[]
}
export const uploadImagesSchema = yup.object().shape({
  files: yup.array().of(yup.mixed())
})
type Props = FormikProps<UploadImagesValues>
export default function UploadImagesStep ({ values, handleChange, setFieldValue }: Props): JSX.Element {
  return (
    <>
      <Title>Upload your images</Title>
      <Caption>Up to 5 real photos</Caption>
      <Spacer />
      <Button>Select</Button>
      <Spacer />
    </>
  )
}
