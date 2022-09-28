import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Image, Text, View } from "react-native";
import { Rating } from "react-native-ratings";

const gridData = require("./gridData");

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.above}>
        <Image source={require("./image/muiten.png")}></Image>
        <View style={styles.above_timkiem}>
          <Image source={require("./image/timkiem.png")}></Image>
          <Text style={{ color: "#7D5B5B", paddingLeft: 10, paddingTop: 3 }}>
            Dây cáp usb
          </Text>
        </View>
        <Image source={require("./image/giohang.png")}></Image>

        <Image source={require("./image/bacham.png")}></Image>
      </View>
      <View style={styles.center}>
        <FlatList
          data={gridData}
          numColumns={2}
          keyExtractor={(item, index) => item.id}
          renderItem={({ item, index }) => {
            return (
              <View style={styles.item}>
                <Image
                  style={styles.img_product}
                  source={{ uri: item.photo }}
                ></Image>
                 <Text>Cáp chuyển từ Cổng{"\n"}USB sang PS2...</Text>
                <View style={styles.center_danhgia}>
                  <Rating imageSize={15} ratingCount={5} startingValue={4}  />
                  <Text>(15)</Text>
                </View>
                <View style={styles.center_gia}>
                  <Text style={{fontWeight:'bold'}}>69.900 đ</Text>
                  <Text style={{color:'#969DAA',paddingLeft:10}}>-39%</Text>
                </View>
              </View>
            );
          }}
        ></FlatList>
      </View>
      <View style={styles.below}>
        <Image source={require("./image/BaGach.png")}></Image>
        <Image source={require("./image/home.png")}></Image>
        <Image source={require("./image/QuayLai.png")}></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  above: {
    flex: 0.1,
    paddingTop: 10,
    justifyContent: "space-around",
    flexDirection: "row",
    backgroundColor: "#1BA9FF",
    alignItems: "center",
  },
  above_timkiem: {
    flex: 0.5,
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    padding: 5,
  },
  center: {
    flex: 0.9,
    justifyContent:'center',
    alignItems:'center',
  },
  img_product: {
    flex: 0.45,
    width: 150,
    height: 90,
    resizeMode: "contain",
  },
  center_danhgia:{
    flex:1,
    flexDirection:'row'
  },
  center_gia:{
    flex:1,
    flexDirection:'row'
  },
  item:{
    padding:10,
  },
  below: {
    flex: 0.1,
    backgroundColor: "#1BA9FF",
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
  },
});
