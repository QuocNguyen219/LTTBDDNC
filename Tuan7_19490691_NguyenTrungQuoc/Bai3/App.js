import { StatusBar } from 'expo-status-bar';
import { useRef } from 'react';
import { Animated, Button, Easing, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const sq = useRef(new Animated.Value(0)).current;

  function moveRL(){
    Animated.timing(sq, {
      toValue: 1,
      duration: 3000,
      useNativeDriver:true,
    }).start();
  };
  function stopMove(){
    Animated.timing(sq, {
    }).stop();
  };
  
  function reset(){
    Animated.timing(sq, {
      toValue: 0,
      duration: 0,
      useNativeDriver:true,
    }).start();
  };
  const dichuyen = sq.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 350],
  });

  return (
    <View style={styles.container}>
      <View style={{flex:0.5}}>

        <View style={{flex:0.7}}></View>

        <View style={{flex:0.2,backgroundColor:'green'}}>
          <Animated.View style={[styles.animation_view,
          {
            transform:[
              {
                translateX: dichuyen
              }
            ]
          }
          ]}>
            {/* <Text style={styles.square}>+</Text> */}
          </Animated.View>
        </View>
      </View>


     <View style={{flex:0.2,justifyContent:'space-around',alignItems:'center'}}>
      <Button title='Start' onPress={moveRL}></Button>
      <Button title='Stop' onPress={stopMove}></Button>
      <Button title='Reset' onPress={reset}></Button>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
 
  square:{
    marginTop:20,
    width:50,
    height:50,
    backgroundColor:'cyan'

  },
  animation_view:{
    marginTop:15,
    backgroundColor: 'red',
    width: 50,
   
    height: 50
  }
});
