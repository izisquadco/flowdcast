import 'react-native-gesture-handler'

import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { NavigationContainer } from '@react-navigation/native'
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack'

import Home from '../pages/Home'
import Podcast from '../pages/Podcast'

import theme from '../theme'

const Stack = createStackNavigator()

const options = {
  screenOptions: {
    headerStyle: {
      backgroundColor: theme.colors.background,
      elevation: 0,
    },
    headerTintColor: theme.colors.white,
    headerPressColorAndroid: theme.colors.ripple,
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  },

  pages: {
    home: {
      title: '',
      headerLeft: () => (
        <MaterialIcons
          name='play-circle-fill'
          size={24}
          color={theme.colors.white}
          style={{ marginLeft: theme.spacing.default.v }}
        />
      ),
    },

    podcast: {
      title: '',
    },
  },
}

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={options.screenOptions}>
        <Stack.Screen
          name='Home'
          component={Home}
          options={options.pages.home}
        />

        <Stack.Screen
          name='Podcast'
          component={Podcast}
          options={options.pages.podcast}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
