import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";

const axios = require("axios").default;

const dataLoai = [
  { loai: "All coffee" },
  { loai: "Hot coffee" },
  { loai: "Hot teas" },
  { loai: "Coffee" },
  { loai: "Tea" },
];

const dataSanPham = [
  {
    hinh: require("../image/coffee1.png"),
    ten: "Starbucks Hot Coffee",
    gia: "$65",
  },
  {
    hinh: require("../image/coffee2.png"),
    ten: "Cherry Coffe shake",
    gia: "$35",
  },
  {
    hinh: require("../image/coffee1.png"),
    ten: "Starbucks Hot Coffee",
    gia: "$65",
  },
  {
    hinh: require("../image/coffee2.png"),
    ten: "Cherry Coffe shake",
    gia: "$35",
  },
  {
    hinh: require("../image/coffee1.png"),
    ten: "Starbucks Hot Coffee",
    gia: "$65",
  },
  {
    hinh: require("../image/coffee2.png"),
    ten: "Cherry Coffe shake",
    gia: "$35",
  },
];

export default function DanhSach() {
  const [data, setData] = useState([]);

  const navigation = useNavigation();
   function handleAdd(item) {
    axios
      .get("https://6370b3f80399d1995d822e55.mockapi.io/api/demo/productBuys")
      .then(async (todo) => {
        let data = todo.data;
        let check = true;
        data.forEach((e) => {
          if (e.idProducts == item.id) {
            check = false;
          }
        });
        if (check) {
           axios.post(
            "https://6370b3f80399d1995d822e55.mockapi.io/api/demo/productBuys",
            {
              soLuong: 1,
              idProducts: item.id,
              ten: item.ten,
              hinh: item.hinh,
              gia: item.gia,
            }
          ).then(()=>{
            navigation.navigate("ChiTiet");
          });
        }
        else{
          navigation.navigate("ChiTiet");
        }
      });
  }
  useEffect(() => {
    axios
      .get("https://6370b3f80399d1995d822e55.mockapi.io/api/demo/products")
      .then((todo) => setData(todo.data));
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.phiaTren}>
        <Image
          style={styles.imagetop}
          source={require("../image/bagach.png")}
        ></Image>
        <Image
          style={styles.imagetop}
          source={require("../image/vitri.png")}
        ></Image>
        <Text>Sukrabad,Dhaka {"\n"} Bangladesh</Text>
        <Image
          style={styles.imagetop}
          source={require("../image/tinnhan.png")}
        ></Image>
        <Image
          style={styles.imagetop}
          source={require("../image/chuong.png")}
        ></Image>
      </View>
      <View style={styles.phiaduoi}>
        <View
          style={{ flex: 0.5, justifyContent: "center", alignItems: "center" }}
        >
          <Image
            style={{ resizeMode: "center" }}
            source={require("../image/banner.png")}
          ></Image>
        </View>

        <View style={{ flex: 0.1 }}>
          <FlatList
            data={dataLoai}
            // style={{ backgroundColor: "red" }}
            horizontal={true}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  style={{
                    borderWidth: 1,
                    borderColor: "rgb(220,174,117)",
                    marginLeft: 20,
                    borderRadius: 10,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      borderColor: "red",
                      paddingLeft: 10,
                      paddingRight: 10,
                      fontWeight: "bold",
                    }}
                  >
                    {item.loai}
                  </Text>
                </TouchableOpacity>
              );
            }}
          ></FlatList>
        </View>
        <View style={{ flex: 1, marginTop: 5 }}>
          <FlatList
            data={data}
            numColumns={2}
            renderItem={({ item, index }) => {
              return (
                <View
                  style={{
                    flex: 0.5,
                    marginLeft: 5,
                    marginRight: 5,
                    marginBottom: 5,
                    backgroundColor: "rgb(20,20,22)",
                  }}
                >
                  <Image
                    style={{ height: 170, width: 170 }}
                    // style={{ resizeMode:"center" }}
                    source={{ uri: item.hinh }}
                  ></Image>

                  <View
                    style={{
                      flexDirection: "row",
                      flexWrap: "wrap",
                      justifyContent: "center",
                    }}
                  >
                    <Text style={{ width: 100, color: "white" }}>
                      {item.ten}
                    </Text>
                    <Text style={{ color: "rgb(220,174,117)" }}>$
                      {item.gia}
                    </Text>
                  </View>
                  <View
                    style={{ flexDirection: "row", justifyContent: "center" }}
                  >
                    <Image
                      style={{ height: 20, width: 20 }}
                      source={require("../image/ngoisao.png")}
                    ></Image>
                    <Text style={{ color: "white" }}>5.0</Text>
                    <Text style={{ color: "white" }}>
                      ( <Text style={{ color: "rgb(220,174,117)" }}>25</Text>{" "}
                      reviews)
                    </Text>
                    <TouchableOpacity
                      onPress={ () => {
                         handleAdd(item);
                       
                      }}
                    >
                      <Image
                        style={{
                          height: 40,
                          width: 41,
                          borderTopLeftRadius: 10,
                        }}
                        source={require("../image/muasam.png")}
                      ></Image>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            }}
          ></FlatList>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  phiaTren: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "rgb(248,231,215)",
  },
  imagetop: {
    resizeMode: "center",
  },
  phiaduoi: {
    flex: 0.9,
    backgroundColor: "rgb(235,219,204)",
  },
});
