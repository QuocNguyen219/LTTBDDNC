import { StatusBar } from "expo-status-bar";
import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

const silver = require("./image/vs_silver.png");
const red = require("./image/vs_red.png");
const black = require("./image/vs_black.png");
const blue = require("./image/vs_blue.png");

export default function AppTwo() {
  const [color, setColor] = useState(blue);
  const [txtMau, setTxtMau] = useState("Màu xanh");

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.above}>
        <Image style={styles.imageDT} source={color}></Image>
        <View style={styles.aboveLeft}>
          <Text style={styles.tenDT}>
            Điện Thoại Vsmart Joy 3 {"\n"} Hàng chính hãng
          </Text>
          <Text >{txtMau}</Text>
          <Text>Cung cấp bởi Tiki Tradding</Text>
          <Text>1.790.000 đ</Text>
        </View>
      </View>
      <View style={styles.below}>
        <Text style={styles.chonMau}>Chọn một màu bên dưới:</Text>
        <View style={styles.mauSac}>
          <TouchableOpacity
            style={[styles.bac, styles.hinhVuong]}
            onPress={() => {setColor(silver) , setTxtMau("Màu bạc")}}
          ></TouchableOpacity>
          <TouchableOpacity
            style={[styles.do, styles.hinhVuong]}
            onPress={() => {setColor(red) , setTxtMau("Màu đỏ")}}
          ></TouchableOpacity>
          <TouchableOpacity
            style={[styles.den, styles.hinhVuong]}
            onPress={() => {setColor(black) , setTxtMau("Màu đen")}}
          ></TouchableOpacity>
          <TouchableOpacity
            style={[styles.xanh, styles.hinhVuong]}
            onPress={() => {setColor(blue), setTxtMau("Màu xanh")}}
          ></TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.below_Xong}
          onPress={() =>
            navigation.navigate("AppOne", { colorSelected: color })
          }
        >
          <Text style={styles.xong}>XONG</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  above: {
    paddingTop: 20,
    flex: 0.25,
    flexDirection: "row",
  },
  imageDT: {
    flex: 1,
    height: 140,
    resizeMode: "contain",
  },
  tenDT: {
    // flex: 1,
    paddingTop: 10,
  },
  below: {
    flex: 0.75,
    backgroundColor: "#C4C4C4",
    padding: 10,
  },
  chonMau: {
    fontSize: 18,
  },
  mauSac: {
    flex: 1,
    alignItems: "center",
  },
  hinhVuong: {
    width: 85,
    height: 80,
    marginTop: 10,
  },
  bac: {
    backgroundColor: "#C5F1FB",
  },
  do: {
    backgroundColor: "#F30D0D",
  },
  den: {
    backgroundColor: "#000000",
  },
  xanh: {
    backgroundColor: "#234896",
  },
  below_Xong: {
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1952E294",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#CA1536",
  },
  xong: {
    color: "#F9F2F2",
  },
  aboveLeft:{
    flex :1,
   
  },
});

