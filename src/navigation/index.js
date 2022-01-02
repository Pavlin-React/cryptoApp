import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CoinDetailScreen from "../screens/CoinDetailScreen";
import HomeScreen from '../screens/HomeScreen/index'
import BottomTabNavigator from '../navigation/BottomTabNavigator'

let Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Root"
    >
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen name="CoinDetailScreen" component={CoinDetailScreen} />
    </Stack.Navigator>
  );
};

export default Navigation;
