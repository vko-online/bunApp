/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native'
import * as Linking from 'expo-linking'

import { RootStackParamList } from 'src/types'

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Conversations: {
            screens: {
              ConversationsScreen: 'Conversations'
            }
          },
          Discover: {
            screens: {
              DiscoverScreen: 'Discover'
            }
          },
          Profile: {
            screens: {
              ProfileScreen: 'Profile'
            }
          }
        }
      },
      Modal: 'modal',
      FilterModal: 'filter',
      SettingsModal: 'settings',
      NotFound: '*'
    }
  }
}

export default linking
