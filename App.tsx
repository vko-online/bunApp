import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider as PaperProvider } from 'react-native-paper'
import { ApolloProvider } from '@apollo/client'
// import OnlinePresence from 'src/components/OnlinePresence'
import { Provider } from 'react-redux'
import { LogBox } from 'react-native'

import useCachedResources from 'src/hooks/useCachedResources'
import useColorScheme from 'src/hooks/useColorScheme'
import Navigation from 'src/navigation'
import React from 'react'
import { store } from 'src/store'
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
            <Provider store={store}>
              <Navigation colorScheme={colorScheme} />
              <StatusBar />
            </Provider>
          </ApolloProvider>
        </PaperProvider>
      </SafeAreaProvider>
    )
  }
}
