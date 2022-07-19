import { ReactNode } from 'react'
import { StyleSheet } from 'react-native'
import { View } from './Themed'

interface Props {
  children: ReactNode
}
export default function Row ({ children }: Props): JSX.Element {
  return <View style={s.row}>{children}</View>
}

const s = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})
