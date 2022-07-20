import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider as PaperProvider, ActivityIndicator } from 'react-native-paper'
import { ApolloProvider } from '@apollo/client'
// import OnlinePresence from 'src/components/OnlinePresence'
import { Provider } from 'react-redux'
import { LogBox } from 'react-native'
import { PersistGate } from 'redux-persist/integration/react'

import useCachedResources from 'src/hooks/useCachedResources'
import useColorScheme from 'src/hooks/useColorScheme'
import Navigation from 'src/navigation'
import React from 'react'
import { store, persistor } from 'src/store'
import { client } from 'src/services/client'

LogBox.ignoreLogs(['ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from \'deprecated-react-native-prop-types\'.'])

export default function App (): JSX.Element | null {
  const isLoadingCompleted = useCachedResources()
  const colorScheme = useColorScheme()

  if (!isLoadingCompleted) {
    return null
  } else {
    return (
      <SafeAreaProvider>
        <PaperProvider>
          <ApolloProvider client={client}>
            <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
              <Provider store={store}>
                <Navigation colorScheme={colorScheme} />
                <StatusBar />
              </Provider>
            </PersistGate>
          </ApolloProvider>
        </PaperProvider>
      </SafeAreaProvider>
    )
  }
}
