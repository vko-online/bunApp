import { ReactNode } from 'react'
import { StyleProp, StyleSheet, ViewStyle } from 'react-native'
import { View } from './Themed'

interface Props {
  children: ReactNode
  style?: StyleProp<ViewStyle>
}
export default function Row ({ children, style }: Props): JSX.Element {
  return <View style={[s.row, style]}>{children}</View>
}

const s = StyleSheet.create({
  row: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})
