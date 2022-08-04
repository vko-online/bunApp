import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs'
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
import EditScreen from 'src/screens/edit'
import NotFoundScreen from 'src/screens/NotFoundScreen'
import AuthScreen from 'src/screens/auth'
import OnboardingScreen from 'src/screens/onboarding'
import InteractorsScreen from 'src/screens/interactors'
import ConversationsScreen from 'src/screens/conversations'
import MessagesScreen from 'src/screens/messages'
import DiscoverScreen from 'src/screens/discover/index'
import OverviewScreen from 'src/screens/overview'
import ProfileScreen from 'src/screens/profile'
import {
  RootStackParamList,
  RootStackScreenProps,
  RootTabParamList,
  RootTabScreenProps
} from '../types'
import LinkingConfiguration from './LinkingConfiguration'
import { RootState } from 'src/store'
import { useSelector } from 'react-redux'
import isEmpty from 'lodash/isEmpty'
import { BlurView } from 'expo-blur'

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

const Stack = createNativeStackNavigator<RootStackParamList>()

function RootNavigator (): JSX.Element | null {
  const colorScheme = useColorScheme()
  const auth = useSelector((state: RootState) => state.auth)

  let initialRoute: keyof RootStackParamList = 'Root'

  if (isEmpty(auth.name)) {
    initialRoute = 'Onboarding'
  }

  if (auth.token == null) {
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
        name='Messages'
        component={MessagesScreen}
        options={(navigation) => ({
          title: navigation.route.params.title as string
        })}
      />
      <Stack.Screen
        name='Onboarding'
        component={OnboardingScreen}
      />
      <Stack.Screen
        name='Interactors'
        component={InteractorsScreen}
      />
      <Stack.Screen
        name='Edit'
        component={EditScreen}
      />
      <Stack.Screen
        name='Overview'
        options={({ navigation }) => ({
          headerBackVisible: true,
          headerShown: true,
          headerTransparent: true,
          title: '',
          headerStyle: {
            backgroundColor: 'transparent'
          }
        })}
        component={OverviewScreen}
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
      tabBar={(props) => (
        <BlurView
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0
          }}
          tint='dark'
          intensity={50}
        >
          <BottomTabBar {...props} />
        </BlurView>
      )}
      screenOptions={{
        tabBarStyle: {
          borderTopColor: '#666666',
          backgroundColor: 'transparent'
        },
        headerShown: false,
        lazy: true,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: Colors[colorScheme].tabIconDefault,
        tabBarActiveTintColor: Colors[colorScheme].tabIconSelected
      }}
    >
      <BottomTab.Screen
        name='Conversations'
        component={ConversationsScreen}
        options={({ navigation }: RootTabScreenProps<'Conversations'>) => ({
          title: 'Conversations',
          headerShown: true,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'ios-chatbox' : 'ios-chatbox-outline'}
              color={color}
            />
          ),
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Interactors')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
                flexDirection: 'row',
                alignItems: 'flex-start'
              })}
            >
              <Ionicons
                name='ios-heart-outline'
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          )
        })}
      />
      <BottomTab.Screen
        name='DiscoverTab'
        component={DiscoverScreen}
        options={({ navigation }: RootTabScreenProps<'DiscoverTab'>) => ({
          title: 'Discover',
          headerShown: false,
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
          headerTransparent: true,
          title: '',
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
