import React from 'react'
import { Colors } from 'react-native-paper'
import { View, StyleSheet } from 'react-native'

const SIZE = 10
interface Props {
  isOnline: boolean
}
export default function Online ({ isOnline }: Props): JSX.Element {
  return (
    <View
      style={[
        s.dot,
        {
          backgroundColor: isOnline ? Colors.green400 : Colors.grey300
          // borderColor: isOnline ? Colors.green300 : Colors.grey200
        }
      ]}
    />
  )
}

const s = StyleSheet.create({
  dot: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    backgroundColor: Colors.grey300
    // borderWidth: 1,
    // borderColor: Colors.green300
  }
})
