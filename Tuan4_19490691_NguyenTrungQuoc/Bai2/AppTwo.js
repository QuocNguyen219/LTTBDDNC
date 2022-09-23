import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Image, Text, View } from 'react-native';

function AppTwo( ) {
  return (
    <View style={styles.container}>
      <View style={styles.above}>
        <Image
          style={styles.imageDT}
          source={require("./image/vsmart_live_xanh.png")}
        ></Image>
        <Text style={styles.tenDT}>Điện Thoại Vsmart Joy 3 {"\n"} Hàng chính hãng</Text>
      </View>
      <View style={styles.below}>
        <Text style={styles.chonMau}>Chọn một màu bên dưới:</Text>
        <View style={styles.mauSac}>
          <Text style={[styles.bac,styles.hinhVuong]}></Text>
          <Text style={[styles.do,styles.hinhVuong]}></Text>
          <Text style={[styles.den,styles.hinhVuong]}></Text>
          <Text style={[styles.xanh,styles.hinhVuong]}></Text>
        </View>
        <View style={styles.below_Xong}>
         <Text style={styles.xong}>XONG</Text>
        </View>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  above:{
    flex:0.25,
    flexDirection:'row',
    
  },
  imageDT: {
    flex:1,
    height:140,
    resizeMode: "contain",
  },
  tenDT:{
    flex:1,
    paddingTop:10,
    
  },
  below:{
    flex:0.75,
    backgroundColor:'#C4C4C4',
    padding:10
  },
  chonMau:{
    fontSize:18
  }, 
  mauSac:{
    flex:1,
    alignItems:'center'
  },
  hinhVuong:{
    width: 85,
    height: 80,
    marginTop: 10,
  },
  bac:{
    backgroundColor:'#C5F1FB'
  },
  do:{
    backgroundColor:'#F30D0D'
  },
  den:{
    backgroundColor:'#000000'
  },
  xanh:{
    backgroundColor:'#234896'
  },
  below_Xong:{
    flex:0.1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#1952E294',
    borderWidth:1,
    borderRadius:10,
    borderColor:'#CA1536'
  },
  xong:{
    color:'#F9F2F2'
  }
});

module.exports = AppTwo;
