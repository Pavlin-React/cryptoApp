import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CoinDetailScreen from '../screens/CoinDetailScreen';
import HomeScreen from '../screens/HomeScreen';

let Stack = createNativeStackNavigator()

const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Home' >
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='CoinDetailScreen' component={CoinDetailScreen} />
    </Stack.Navigator>
  )
}

export default Navigation
