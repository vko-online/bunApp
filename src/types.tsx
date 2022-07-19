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
  SettingsModal: undefined
  FilterModal: undefined
  NotFound: undefined
}

// eslint-disable-next-line
export type ConversationStackParamList = {
  Conversations: undefined
  Messages: {
    conversationId: string
  }
}

// eslint-disable-next-line
export type DiscoverStackParamList = {
  Discover: undefined
  Overview: undefined
}

export type RootStackScreenProps<Screen extends keyof RootStackParamList>
  = NativeStackScreenProps<RootStackParamList, Screen>

export type ConversationStackScreenProps<Screen extends keyof ConversationStackParamList>
  = NativeStackScreenProps<ConversationStackParamList, Screen>

// eslint-disable-next-line
export type RootTabParamList = {
  ConversationsTab: NativeStackScreenProps<ConversationStackParamList, keyof ConversationStackParamList>
  DiscoverTab: NativeStackScreenProps<DiscoverStackParamList, keyof DiscoverStackParamList>
  Profile: undefined
}

export type RootTabScreenProps<Screen extends keyof RootTabParamList>
  = CompositeScreenProps<BottomTabScreenProps<RootTabParamList, Screen>, NativeStackScreenProps<RootStackParamList>>
