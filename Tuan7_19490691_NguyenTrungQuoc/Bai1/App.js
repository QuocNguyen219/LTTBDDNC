import { StatusBar } from 'expo-status-bar';
import {React, useEffect, useRef } from 'react';

import { Animated, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(()=>{
    
    Animated.timing(fadeAnim,{
      toValue :1,
      duration:3000,
      useNativeDriver: true
    }).start();

  },[])

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            opacity: fadeAnim,
          },
        ]}>
        <Text style={styles.textWelcome}>Welcome to Animation React Native</Text>
      </Animated.View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fadingContainer: {
    padding: 20,
    backgroundColor: 'blue',
  },
  textWelcome:{
    fontSize:20,
    color:'white'
  }
});
