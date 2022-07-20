import { StatusBar } from 'expo-status-bar'
import { Platform, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'

import { persistor } from 'src/store'
import { Text, View } from 'src/components/Themed'
import { CommonActions, useNavigation } from '@react-navigation/native'

export default function ModalScreen (): JSX.Element {
  const navigation = useNavigation()
  async function handleLogout (): Promise<void> {
    await persistor.purge()
    // const resetAction = StackActions.popToTop()
    // most likely this is not correct approach to redirect
    navigation.dispatch(CommonActions.navigate('Auth'))
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <View style={styles.separator} lightColor='#eee' darkColor='rgba(255,255,255,0.1)' />
      <Button onPress={handleLogout}>Log out</Button>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%'
  }
})
