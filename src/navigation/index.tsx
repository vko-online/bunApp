import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme
} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as React from 'react'
import { ColorSchemeName, Pressable } from 'react-native'
import Colors from 'src/constants/Colors'
import useColorScheme from 'src/hooks/useColorScheme'
import ModalScreen from 'src/screens/ModalScreen'
import FilterModal from 'src/screens/modals/filter'
import SettingsModal from 'src/screens/modals/settings'
import NotFoundScreen from 'src/screens/NotFoundScreen'
import AuthScreen from 'src/screens/auth'
import OnboardingScreen from 'src/screens/onboarding'
import ConversationsScreen from 'src/screens/conversations'
import MessagesScreen from 'src/screens/messages'
import DiscoverScreen from 'src/screens/discover'
import OverviewScreen from 'src/screens/overview'
import ProfileScreen from 'src/screens/profile'
import {
  RootStackParamList,
  DiscoverStackParamList,
  ConversationStackParamList,
  RootStackScreenProps,
  RootTabParamList,
  RootTabScreenProps
} from '../types'
import LinkingConfiguration from './LinkingConfiguration'
import { useMeQuery } from 'src/generated/graphql'
import { ActivityIndicator } from 'react-native-paper'

export default function Navigation ({
  colorScheme
}: {
  colorScheme: ColorSchemeName
}): JSX.Element {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  )
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>()
const DiscoverStack = createNativeStackNavigator<DiscoverStackParamList>()
const ConversationStack = createNativeStackNavigator<ConversationStackParamList>()

const DiscoverNavigator = (): JSX.Element => (
  <DiscoverStack.Navigator initialRouteName='Discover' screenOptions={{ headerShown: false }}>
    <DiscoverStack.Screen name='Discover' component={DiscoverScreen} />
    <DiscoverStack.Screen name='Overview' component={OverviewScreen} />
  </DiscoverStack.Navigator>
)

const ConversationNavigator = (): JSX.Element => {
  return (
    <ConversationStack.Navigator initialRouteName='Conversations'>
      <ConversationStack.Screen name='Conversations' component={ConversationsScreen} />
      <ConversationStack.Screen
        name='Messages' component={MessagesScreen}
      />
    </ConversationStack.Navigator>
  )
}

function RootNavigator (): JSX.Element | null {
  const colorScheme = useColorScheme()
  const { data, loading } = useMeQuery()

  if (loading) return <ActivityIndicator />

  let initialRoute: keyof RootStackParamList = 'Root'

  if (data?.me?.name == null) {
    initialRoute = 'Onboarding'
  }

  if (data?.me == null) {
    initialRoute = 'Auth'
  }

  return (
    <Stack.Navigator initialRouteName={initialRoute}>
      <Stack.Screen
        name='Root'
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Auth'
        component={AuthScreen}
      />
      <Stack.Screen
        name='Onboarding'
        component={OnboardingScreen}
      />
      <Stack.Screen
        name='NotFound'
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name='Modal' component={ModalScreen} />
        <Stack.Screen
          name='SettingsModal'
          component={SettingsModal}
          options={({ navigation }: RootStackScreenProps<'SettingsModal'>) => ({
            title: 'Settings',
            headerRight: () => (
              <Pressable
                onPress={() => navigation.goBack()}
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1
                })}
              >
                <Ionicons
                  name='close-sharp'
                  size={25}
                  color={Colors[colorScheme].text}
                />
              </Pressable>
            )
          })}
        />
        <Stack.Screen
          name='FilterModal'
          component={FilterModal}
          options={({ navigation }: RootStackScreenProps<'FilterModal'>) => ({
            title: 'Filter',
            headerRight: () => (
              <Pressable
                onPress={() => navigation.goBack()}
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1
                })}
              >
                <Ionicons
                  name='close-sharp'
                  size={25}
                  color={Colors[colorScheme].text}
                />
              </Pressable>
            )
          })}
        />
      </Stack.Group>
    </Stack.Navigator>
  )
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>()

function BottomTabNavigator (): JSX.Element {
  const colorScheme = useColorScheme()

  return (
    <BottomTab.Navigator
      initialRouteName='DiscoverTab'
      screenOptions={{
        headerShown: false,
        lazy: true,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: Colors[colorScheme].tabIconDefault,
        tabBarActiveTintColor: Colors[colorScheme].tabIconSelected
      }}
    >
      <BottomTab.Screen
        name='ConversationsTab'
        component={ConversationNavigator}
        options={({ navigation }: RootTabScreenProps<'ConversationsTab'>) => ({
          title: 'Conversations',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'ios-chatbox' : 'ios-chatbox-outline'}
              color={color}
            />
          )
          // headerRight: () => (
          //   <Pressable
          //     onPress={() => navigation.navigate('Modal')}
          //     style={({ pressed }) => ({
          //       opacity: pressed ? 0.5 : 1
          //     })}
          //   >
          //     <FontAwesome
          //       name='info'
          //       size={25}
          //       color={Colors[colorScheme].text}
          //       style={{ marginRight: 15 }}
          //     />
          //   </Pressable>
          // )
        })}
      />
      <BottomTab.Screen
        name='DiscoverTab'
        component={DiscoverNavigator}
        options={({ navigation }: RootTabScreenProps<'DiscoverTab'>) => ({
          title: 'Discover',
          headerShown: true,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'ios-grid' : 'ios-grid-outline'}
              color={color}
            />
          ),
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('FilterModal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1
              })}
            >
              <Ionicons
                name='ios-filter-outline'
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          )
        })}
      />
      <BottomTab.Screen
        name='Profile'
        component={ProfileScreen}
        options={({ navigation }: RootTabScreenProps<'Profile'>) => ({
          title: 'Profile',
          headerShown: true,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'ios-person' : 'ios-person-outline'}
              color={color}
            />
          ),
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('SettingsModal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1
              })}
            >
              <Ionicons
                name='ios-settings-outline'
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          )
        })}
      />
    </BottomTab.Navigator>
  )
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon (props: {
  name: React.ComponentProps<typeof Ionicons>['name']
  color: string
}): JSX.Element {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />
}
