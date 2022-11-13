import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TrangChu from "./screen/TrangChu";
import DanhSach from "./screen/DanhSach";
import ChiTiet from "./screen/ChiTiet";


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="TrangChu"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="TrangChu" component={TrangChu} />
        <Stack.Screen name="DanhSach" component={DanhSach} />
        <Stack.Screen name="ChiTiet" component={ChiTiet} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
