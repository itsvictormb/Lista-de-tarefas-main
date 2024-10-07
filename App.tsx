import { StatusBar } from 'expo-status-bar';
import {  View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Details from './src/screens/Details';
import ProdutoProvider from "./src/context/TaskContext";



export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <ProdutoProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}} >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    </ProdutoProvider>
  );
}