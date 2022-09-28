import { StatusBar } from "expo-status-bar";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
const flatListData = require("./flatList");
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.above}>
        <Image source={require("./image/Vector.png")}></Image>
        <Text style={styles.chat}>Chat</Text>
        <Image source={require("./image/GioHang.png")}></Image>
      </View>
      <View style={styles.center_top}>
        <Text>
          Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại {"\n"}chat với shop!
        </Text>
      </View>
      <View style={styles.center}>
        <FlatList
          data={flatListData}
          renderItem={({ item, index }) => {
            //console.log(`item ${JSON.stringify(item)} index ${index}`)
            return (
              <View style={styles.item}>
                <View style={styles.item_left}>
                  <Image
                    style={styles.image_product}
                    source={{ uri: item.photo }}
                  ></Image>
                </View>
                <View style={styles.item_center}>
                  <Text>{item.name}</Text>
                  <View style={styles.shop_center}>
                    <Text style={{color:'#7D5B5B'}}>Shop </Text>
                    <Text style={{fontWeight:'bold'}}>{item.shop}</Text>
                  </View>
                </View>
                <View style={styles.item_right}>
                  <Text style={styles.txtChat}>Chat</Text>
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
    backgroundColor: "#1BA9FF",
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
  },
  center: {
    flex: 0.9,
  },
  center_top: {
    flex: 0.1,
    backgroundColor: "#E5E5E5",
    justifyContent: "center",
    alignItems: "center",
  },
  chat: {
    color: "white",
    fontSize: 20,
    paddingRight: 70,
    paddingLeft: 70,
  },
  item_left: {
    flex: 0.3,
    alignItems: "center",
  },
  image_product: {
    height: 80,
    width: 80,
  },
  item_center: {
    flex: 0.5,
  },
  item_right: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    flex: 1,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-around",
    borderTopWidth: 1,
    borderColor: "#C4C4C4",
  },
  txtChat: {
    backgroundColor: "#F31111",
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 25,
    paddingRight: 25,
    textAlign: "center",
    color: "white",
    fontSize: 20,
  },
  below: {
    flex: 0.1,
    backgroundColor: "#1BA9FF",
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
  },
  shop_center:{
    flex:1,
    flexDirection:'row'
  }
});
