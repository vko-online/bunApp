import React from 'react'
import { StyleSheet } from 'react-native'
import { View } from './Themed'

export default function Separator (): JSX.Element {
  return <View style={styles.separator} lightColor='#eee' darkColor='rgba(255,255,255,0.1)' />
}

interface Props {
  size?: number
}
export function Spacer ({ size = 10 }: Props): JSX.Element {
  return <View style={[styles.spacer, { marginVertical: size }]} />
}

const styles = StyleSheet.create({
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%'
  },
  spacer: {
    height: 1,
    width: '100%'
  }
})
