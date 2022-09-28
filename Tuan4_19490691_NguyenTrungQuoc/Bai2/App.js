import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AppTwo  from './AppTwo'; 
import AppOne from './AppOne';

// const AppOne = require('./AppOne')
// const AppTwo = require('./AppTwo')

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="AppOne"
    screenOptions={{headerShown:false}}>
      <Stack.Screen name="AppOne" component={AppOne} />
      <Stack.Screen name="AppTwo" component={AppTwo} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default App;