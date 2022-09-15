import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
export default function App() {
  return (
    <LinearGradient style={styles.container}
    colors={['#C7F4F6' ,'#D1F4F6','#E5F4F5','#00CCF9']}
    start= {{x:0.2,y:0.2}}
    end={{x:0.2,y:0.9}}
    >
      <View style={styles.above}>
       <Text style={styles.txtcode}>CODE</Text>
      </View>

      <View style={styles.center1}>
       <Text style={styles.txtcenter1}>VERIFICATION</Text>
      </View>

      <View style={styles.center2}>
        <Text style={styles.txtcenter2}>Enter ontime password sent on {'\n'}++849092605798</Text>
      </View>

      <View style={styles.center3}>
      
        <Text style={styles.txt_ovuong}></Text>
        <Text style={styles.txt_ovuong}></Text>
        <Text style={styles.txt_ovuong}></Text>
        <Text style={styles.txt_ovuong}></Text>
        <Text style={styles.txt_ovuong}></Text>
        <Text style={styles.txt_ovuong}></Text>
      </View>

      <View style={styles.end}>
        <Text style={styles.txtVERIFY} >VERIFY CODE</Text>
      </View>
     
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
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
    justifyContent: 'space-between',
    fontWeight: 'bold',
    fontSize:20,
    flexDirection:'row',
    flexWrap:'wrap',
    marginLeft :30,
    marginRight:30,
   
  },
  end: {
    flex: 0.4,
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize:20,
    marginBottom:100,
    marginLeft:20,
    marginRight:20,
  },
  txtVERIFY:{
    backgroundColor: '#E3C000',
    fontSize:20,
    padding :10 ,
    textAlign:'center'
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
  txt_ovuong:{
    borderWidth:1,
    padding:25,
  
   
  },
  txtcode:{
    fontSize: 60 ,
    textAlign: 'center',
    fontWeight:'bold',
    paddingTop:50,

  }

});
