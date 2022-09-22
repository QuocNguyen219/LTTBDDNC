import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Image, Text, View } from 'react-native';
import { Rating } from 'react-native-ratings';
import App from './App';

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Home')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
  above:{
    flex:0.7,
    justifyContent:'center',
    alignItems:'center',
    marginTop:20
  },
  imageDT:{
    flex: 1,
    resizeMode: 'contain' 
  },
  center:{
    flex:0.35,
    marginLeft:25
  },
  center_danhGia:{
    flex:1,
    flexDirection:'row',
    alignItems:'center'
  },
  center_danhGia_danhGia:{
    marginLeft:20
  },
  center_gia:{
    flex:1,
    flexDirection:'row',
    
  },
  giaChinh:{
    fontWeight:'bold',
    fontSize:25,
  },
  giaPhu:{
    paddingTop:10,
    marginLeft:30,
    color:'gray',
    fontWeight:'bold',
    textDecorationLine:'line-through'
  },
  center_hoanTien:{
    flex:1,
    flexDirection:'row',
  },
  hoanTien:{
    color:'red',
    fontWeight:'bold'
  },
  chamHoi:{
    borderWidth:1,
    marginLeft:20,
    
    paddingLeft:6,
    width: 20,
    height: 20,
    borderRadius: 60 / 2,

   },
  center2:{
    flex:0.1,
    flexDirection:'row',
    marginLeft: 25,
    marginBottom:25,
    marginRight:25,
    borderWidth:1,
    borderRadius:30,
    justifyContent:'flex-end',
    alignItems:'center',
  
  },
  chonMau:{
   
    fontSize:15
  },
  muiTen:{
    fontSize:25,
    marginLeft:90,
    marginRight:10
  },
  below:{
    flex:0.1,
    backgroundColor:'#EE0A0A',
    margin:25,
    borderWidth:1,
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'#CA1536'
  },
  chonMua:{
    color:'white',
    fontWeight:'bold',
    fontSize:20
  }
});

export default DetailsScreen;
