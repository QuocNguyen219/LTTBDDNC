import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Image, Text, View, TextInput } from 'react-native';

import { useState } from "react";
export default function App() {
  const [soLuong, setSoLuong] = useState("1 ");
  const [tamTinh, setTamTinh] = useState("141.800 đ");
  const [thanhTien, setThanhTien] = useState("141.800 đ");
  function soLuongTang() {
    setSoLuong(Number.parseInt(soLuong)+1+"")
    setTamTinh(((Number.parseInt(soLuong)+1)*141.800).toFixed(3)+" đ")
    setThanhTien(((Number.parseInt(soLuong)+1)*141.800).toFixed(3)+" đ")
  }
  function soLuongGiam() {
    if(soLuong!=0){
    setSoLuong(Number.parseInt(soLuong)-1+"")
    setTamTinh(((Number.parseInt(soLuong)-1)*141.800).toFixed(3)+" đ")
    setThanhTien(((Number.parseInt(soLuong)-1)*141.800).toFixed(3)+" đ")
    }else{
      setTamTinh(0+".000 đ")
      setThanhTien(0+".000 đ")
    }
    
  }
  return (
    <View style={styles.container}>
      <View style={styles.above}>
        <View style={styles.above_above}>
          <Image style={styles.imagesize} source={require("./image/book.png")}></Image>
          <View style={styles.above_right}>
            <Text style={styles.textName}>Nguyên hàm tích phân và ứng dụng</Text>
            <Text style={styles.textName}>Cung cấp bởi Tiki Trading</Text>
            <Text style={styles.giaChinhThuc}>141.800 đ</Text>
            <Text style={styles.giaGachNgang}>141.800 đ</Text>
            <View style={styles.above_text}>
              <Text style={styles.congTru} onPress={soLuongGiam}>-</Text>
              <TextInput style={styles.soLuongMua} editable={false} value={soLuong} ></TextInput>
              <Text style={styles.congTru} onPress={soLuongTang}>+</Text>
            <Text style={styles.muaSau}>Mua sau</Text>
            </View>
           
          </View>
        </View>
        <View style={styles.above_center}>
          <Text style={styles.textgiamGia}>Mã giảm giá đã lưu</Text>
          <Text style={styles.xemTaiDay}>Xem tại đây</Text>
        </View>
        <View style={styles.above_below}>
            <View style={styles.above_below_maGiamGia}>
              <View style={styles.textVang}></View>
              <Text style={styles.maGiamGia}>Mã giảm giá</Text>
           </View>
            <Text style={styles.apDung}>Áp dụng</Text>
        </View>

      </View>
      <View style={styles.whiteBackgroud}></View>
      <View style={styles.backGroundCenter}></View>
      <View style={styles.center}>
        <Text style={styles.phieuTang}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
        <Text style={styles.nhapTaiDay}>Nhập tại đây?</Text>
      </View>

      <View style={styles.backGroundCenter}></View>

      <View style={styles.centerTamTinh}>
        <Text style={styles.tamTinh}>Tạm tính</Text>
        <TextInput editable={false} style={styles.giaTamTinh} value={tamTinh}></TextInput>
      </View>
      <View style={styles.backGroundCenter2}></View>

      <View style={styles.centerThanhTien}>
        <Text style={styles.thanhTien}>Thành tiền</Text>
        <TextInput editable={false} style={styles.giaThanhTien} value={thanhTien}></TextInput>
      </View>
      <View style={styles.below}>
        <Text style={styles.datHang}>TIẾN HÀNH ĐẶT HÀNG</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  above:{
    marginLeft:20,
    flex:0.5,
    justifyContent:'center',
   
  
  },
  above_above:{
    flex:0.7,
    flexDirection:'row',
   // alignItems:'center',
  //  justifyContent:'center',
    marginTop:50
  },
  above_right:{
    marginLeft:10
  },
  above_text:{
    flexDirection:'row'
  },
  above_center:{
    flex:0.1,
    flexDirection:'row',
    

  },
  above_below:{
    flex:0.2,
    flexDirection:'row',
    justifyContent:'space-between',
    
    
  },
  textName:{
    fontWeight:'bold',
    fontSize:15,
    lineHeight:25
    
  },
  giaChinhThuc:{
    
    color:'red',
    fontSize:20
  },
  giaGachNgang:{
    marginTop:10,
    marginBottom:10,
    color:'gray',
    textDecorationLine:'line-through'
  },
  congTru:{
  
    paddingLeft:10,
    paddingRight:10,
    backgroundColor:'#C4C4C4',
    fontSize:20
  },
  muaSau:{
    marginLeft:100,
    color: '#134FEC',
    textAlign:'right',
    fontWeight:'bold',
    lineHeight:25
  },
  soLuongMua:{
    fontSize:20,
    marginLeft:10,
    marginRight:10,
    color: 'black'

  },
  textgiamGia:{
    fontWeight:'bold'
  },
  xemTaiDay:{
    fontWeight:'bold',
    color:'#134FEC',
    marginLeft:20
  },
  imagesize:{
    height:150
  },
  above_below_maGiamGia:{
    flex:0.5,
    flexDirection:'row',
    borderWidth :2,
    paddingTop:15,
    paddingLeft:15,
   
    
 
    
  },
  textVang:{
    backgroundColor:'#F2DD1B',
    paddingRight:20,
    paddingLeft:20,
    width:40,
    height:20,
    marginRight:10
    //width:20

  }, 
  maGiamGia:{
    fontWeight:'bold',
    fontSize:18,
    lineHeight:20

  },

  apDung:{
    flex:0.3,
    padding:15,
    color:'white',
    fontWeight:'bold',
    backgroundColor:'#0A5EB7',
    fontSize:20,
    marginRight:20,
    paddingLeft:25,
    lineHeight:20,
    
    
  },
  backGroundCenter:{
    flex:0.03,
    backgroundColor:'#C4C4C4'

  },
  whiteBackgroud:{
    flex:0.02
  },
  nhapTaiDay:{
    color:'#134FEC',
    paddingLeft:10,
    fontWeight:'bold'
  },
  center:{
    flex:0.05,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-start',
    paddingLeft:20
  },
  centerTamTinh:{
    flex:0.04,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding:20
    
  },
  tamTinh:{
    fontWeight:'bold',
    fontSize:20,
  },
  giaTamTinh:{
    fontWeight:'bold',
    fontSize:20,
    color: 'red'

  },
  backGroundCenter2:{
    flex:0.2,
    backgroundColor:'#C4C4C4'
  },
  centerThanhTien:{
    flex:0.04,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding:20,
   
    
  },
  thanhTien:{
    fontWeight:'bold',
    fontSize:20,
    color:'gray'
  },
  giaThanhTien:{
    fontWeight:'bold',
    fontSize:20,
    color: 'red',
    

  },
  below:{
    flex:0.07,
    backgroundColor:'red',
    justifyContent:'center',
    alignItems:'center',
    margin:10
  },
  datHang:{
    color:'white',
    fontWeight:'bold',
    fontSize:25
  },
  phieuTang:{
    fontWeight:'bold'
  }


});
