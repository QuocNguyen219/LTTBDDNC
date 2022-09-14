import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient style={styles.container}
    colors={['#C4C4C4' ,'#28F7AC']}
    start= {{x:0,y:0}}
    end={{x:0,y:0.5}}
    >
    
      <View style={styles.above}>
      <Image source={require("./image/circle.png")}></Image>

      </View>
      <View style={styles.center1}>
       <Text style={styles.txtcenter1}>GROW {"\n"}YOUR BUSINESS</Text>

      </View>
      <View style={styles.center2}>
      <Text style={styles.txtcenter2}>We will help you to grow your business using online server</Text>

      </View>
      <View style={styles.center3}>
       
        <Text style={styles.txt} >LOGIN</Text>

        <Text  style={styles.txt}>SIGN UP</Text>

      </View>
      <View style={styles.below}>
      <Text style={styles.txtbelow}>HOW WE WORK?</Text>

      </View>
      
    </LinearGradient>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  above: {
   
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  center1: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  center2: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  center3: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection :'row',
  },
  below: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'flex-start',
    fontWeight: 'bold',
    fontSize:20,
  },
  txt:{
    backgroundColor: '#E3C000',
    fontSize:20,
    padding :10 ,
    paddingLeft :20,
    paddingRight :20,
  },
  txtcenter1:{
    fontSize: 20 ,
    textAlign: 'center',
    fontWeight:'bold'
  },
  txtcenter2:{
    padding:20,
    fontSize: 15 ,
    textAlign: 'center',
    fontWeight:'bold'
  },
  txtbelow:{
    fontSize: 20 ,
    fontWeight:'bold'
  } 
 

});
