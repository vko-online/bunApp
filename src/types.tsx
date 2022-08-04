/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

declare global {
  // eslint-disable-next-line
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

// eslint-disable-next-line
export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined
  Modal: undefined
  Auth: undefined
  Onboarding: undefined
  Messages: {
    conversationId: string
    title?: string | null
  }
  SettingsModal: undefined
  FilterModal: undefined
  NotFound: undefined
  Interactors: undefined
  Edit: undefined
  Overview: {
    id: string
  }
}

export type RootStackScreenProps<Screen extends keyof RootStackParamList>
  = NativeStackScreenProps<RootStackParamList, Screen>

// eslint-disable-next-line
export type RootTabParamList = {
  Conversations: undefined
  DiscoverTab: undefined
  Profile: undefined
}

export type RootTabScreenProps<Screen extends keyof RootTabParamList>
  = CompositeScreenProps<BottomTabScreenProps<RootTabParamList, Screen>, NativeStackScreenProps<RootStackParamList>>
