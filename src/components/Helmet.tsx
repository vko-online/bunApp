import { View } from 'src/components/Themed'
import { StyleSheet } from 'react-native'
import { ActivityIndicator, Caption } from 'react-native-paper'
import { ApolloError } from '@apollo/client'
import { ReactNode } from 'react'

interface Props {
  loading: boolean
  error?: ApolloError
  children: ReactNode
}
export default function Helmet ({
  children,
  loading,
  error
}: Props): JSX.Element {
  if (loading) {
    return (
      <View style={s.loading}>
        <ActivityIndicator size='large' />
      </View>
    )
  }
  if (error != null) {
    return (
      <View style={s.loading}>
        <Caption>{error.message}</Caption>
      </View>
    )
  }
  return <View>{children}</View>
}

const s = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
