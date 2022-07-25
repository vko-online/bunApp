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
          DiscoverTab: 'DiscoverTab',
          Profile: {
            screens: {
              ProfileScreen: 'Profile'
            }
          }
        }
      },
      Messages: 'Messages',
      Modal: 'modal',
      FilterModal: 'filter',
      SettingsModal: 'settings',
      NotFound: '*'
    }
  }
}

export default linking
