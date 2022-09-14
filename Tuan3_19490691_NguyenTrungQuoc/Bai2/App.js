import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image,Text, View, TextInput } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'
export default function App() {
  return (
    <LinearGradient style={styles.container}
    colors={['rgba(189, 246, 198, 0)' ,'rgba(189, 246, 198, 1)']}
    start= {{x:0,y:0}}
    end={{x:0,y:0.5}}
    >
      <View style={styles.above}>
        <Image source={require("./image/lock.png")}></Image>
      </View>

      <View style={styles.center1}>
       <Text style={styles.txtcenter1}>FORGET{"\n"}PASSWORD</Text>
      </View>

      <View style={styles.center2}>
        <Text style={styles.txtcenter2}>Provide your account’s email for which you want to reset your password</Text>
      </View>

      <View style={styles.center3}>
        <Image source={require("./image/mail.png")}></Image>
        <Text style={styles.txtEmail}>Email</Text>
      </View>

      <View style={styles.end}>
        <Text style={styles.txtNEXT} >NEXT</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },
  above: {
    flex: 0.7,
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
    flex: 0.15,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize:20,
    flexDirection:'row',
    backgroundColor :'#C4C4C4'
    
  },
  end: {
    flex: 0.4,
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize:20,
    marginBottom:100
  },
  txtNEXT:{
    backgroundColor: '#E3C000',
    fontSize:20,
    padding :10 ,
    paddingLeft :115,
    paddingRight :115,
  },
  txtcenter1:{
    fontSize: 20 ,
    textAlign: 'center',
    fontWeight:'bold',
  },
  txtcenter2:{
    padding:20,
    fontSize: 15 ,
    textAlign: 'center',
    fontWeight:'bold'
  },
  txtEmail:{
    paddingRight:200
  }
});
