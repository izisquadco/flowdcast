import 'react-native-gesture-handler'

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../pages/Home'

import theme from '../theme'

const Stack = createStackNavigator()

const options = {
  screenOptions: {
    headerStyle: {
      backgroundColor: theme.colors.background,
      elevation: 0,
    },
    headerTintColor: theme.colors.white,
  },
}

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={options.screenOptions}>
        <Stack.Screen name='Home' component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
