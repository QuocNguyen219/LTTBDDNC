import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View,
  FlatList,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";

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
const axios = require("axios").default;
export default function ChiTiet() {
  const [itemTotal, setItemTotal] = useState("");
  const [vat, setVAT] = useState("");
  const [delivary, setDelivary] = useState("");
  const [grandTotal, setGrandTotal] = useState("");
  const [data, setData] = useState([]);
  const [render, serRender] = useState(false);
  const navigation = useNavigation();

  function handleAdd(item) {
    var sl = parseInt(item.soLuong) + 1 + "";

    axios
      .put(
        "https://6370b3f80399d1995d822e55.mockapi.io/api/demo/productBuys/" +
          item.id,
        {
          soLuong: sl,
          idProducts: item.idProducts,
          ten: item.ten,
          hinh: item.hinh,
          gia: item.gia,
        }
      )
      .then(serRender(!render));
  }

  function handleSub(item) {
    var sl = parseInt(item.soLuong) - 1 + "";
    if (sl == 0) {
      axios
        .delete(
          "https://6370b3f80399d1995d822e55.mockapi.io/api/demo/productBuys/" +
            item.id
        )
        .then(serRender(!render));
    } else {
      axios
        .put(
          "https://6370b3f80399d1995d822e55.mockapi.io/api/demo/productBuys/" +
            item.id,
          {
            soLuong: sl,
            idProducts: item.idProducts,
            ten: item.ten,
            hinh: item.hinh,
            gia: item.gia,
          }
        )
        .then(serRender(!render));
    }
  }
  useEffect(() => {
    axios
      .get("https://6370b3f80399d1995d822e55.mockapi.io/api/demo/productBuys")
      .then((todo) => {
        setData(todo.data);
        if (todo.data) {
          let itemtotal = 0;
          todo.data.forEach((e) => {
            itemtotal += parseInt(e.soLuong) * parseFloat(e.gia);
          });
          if (itemtotal == 0) {
            setItemTotal("0.00");
            setVAT("0.00");
            setDelivary("0.00");
            setGrandTotal("0.00");
          } else {
            setItemTotal(itemtotal.toFixed(2));
            setVAT((itemtotal * 0.1).toFixed(2));
            setDelivary("10.00");
            setGrandTotal((itemtotal * 1.1 + 10).toFixed(2));
          }
        }
      });
  }, [render]);
  return (
    <View style={styles.container}>
      <View style={styles.phiaTren}>
        <TouchableOpacity onPress={() => navigation.navigate("DanhSach")}>
          <Image
            style={{ height: 40, width: 40 }}
            source={require("../image/muiten.png")}
          ></Image>
        </TouchableOpacity>

        <Text style={{ fontSize: 20 }}>Checkout</Text>
        <Image
          style={{ height: 40, width: 40 }}
          source={require("../image/tinnhan.png")}
        ></Image>
      </View>

      <View style={{ flex: 0.45 }}>
        <FlatList
          data={data}
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  flexDirection: "row",
                  marginBottom: 10,
                  borderRadius: 20,
                  backgroundColor: "rgb(248,231,215)",
                }}
              >
                <Image
                  style={{
                    height: 100,
                    width: 100,
                    borderTopLeftRadius: 20,
                    borderBottomLeftRadius: 20,
                  }}
                  source={{ uri: item.hinh }}
                ></Image>

                <View
                  style={{
                    flex: 0.8,
                    justifyContent: "center",
                    paddingLeft: 20,
                  }}
                >
                  <Text style={{ fontWeight: "bold", fontSize: 17 }}>
                    {item.ten}
                  </Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text>5.0</Text>
                    <Image
                      style={{ height: 20, width: 20 }}
                      source={require("../image/ngoisaonenvang.png")}
                    ></Image>
                    <Text>
                      ( <Text style={{ color: "rgb(220,174,117)" }}>25</Text>{" "}
                      reviews)
                    </Text>
                  </View>
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 17,
                      color: "rgb(220,174,117)",
                    }}
                  >
                    ${item.gia}
                  </Text>
                </View>
                <View
                  style={{
                    flex: 0.2,
                    alignItems: "center",
                    backgroundColor: "rgb(222,184,126)",
                    borderRadius: 10,
                    justifyContent: "center",
                  }}
                >
                  <TouchableOpacity
                    onPress={() => handleAdd(item)}
                    style={{
                      borderWidth: 1,
                      borderColor: "white",
                      borderRadius: 15,
                      backgroundColor: "white",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 20,
                        color: "rgb(220,174,117)",
                        paddingLeft: 5,
                        paddingRight: 5,
                        lineHeight: 20,
                        fontWeight: "bold",
                      }}
                    >
                      +
                    </Text>
                  </TouchableOpacity>
                  <View>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                      {item.soLuong}
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => handleSub(item)}
                    style={{
                      borderWidth: 1,
                      borderColor: "white",
                      borderRadius: 10,
                      backgroundColor: "white",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 20,
                        color: "rgb(220,174,117)",
                        paddingLeft: 5,
                        paddingRight: 5,
                        lineHeight: 20,
                        fontWeight: "bold",
                      }}
                    >
                      -
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        ></FlatList>
      </View>

      <View style={{ flex: 0.2 }}>
        <Text style={{ fontWeight: "bold" }}>Special Request to us</Text>
        <View
          style={{
            flex: 1,
            borderColor: "rgb(220,174,117)",
            borderWidth: 1,
            margin: 5,
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              color: "rgb(220,174,117)",
              paddingTop: 5,
              paddingLeft: 10,
            }}
          >
            Add your note here ...
          </Text>
        </View>
      </View>

      <View
        style={{
          flex: 0.15,
          flexDirection: "row",
          borderBottomColor: "white",
          borderBottomWidth: 2,
          borderTopColor: "white",
          borderTopWidth: 1,
        }}
      >
        <View style={{ flex: 0.5, justifyContent: "center" }}>
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>
            Apply Promo Code
          </Text>
          <Text style={{ fontSize: 12 }}>Use promo code for discounts</Text>
        </View>
        <View
          style={{
            flex: 0.5,
            borderColor: "rgb(220,174,117)",
            borderWidth: 1,
            margin: 5,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "rgb(220,174,117)" }}>
            Enter promo code here
          </Text>
        </View>
      </View>
      <View style={{ flex: 0.2 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontWeight: "bold" }}>Item total</Text>
          <Text style={{ color: "rgb(212,160,85)" }}>${itemTotal}</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontWeight: "bold" }}>Delivary charge</Text>
          <Text style={{ color: "rgb(212,160,85)" }}>${delivary}</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontWeight: "bold" }}>VAT(10%)</Text>
          <Text style={{ color: "rgb(212,160,85)" }}>${vat}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            borderTopWidth: 2,
          }}
        >
          <Text style={{ fontWeight: "bold" }}>Grand total</Text>
          <Text style={{ color: "rgb(212,160,85)" }}>${grandTotal}</Text>
        </View>
      </View>
      <View style={{ flex: 0.1 }}>
        <TouchableOpacity
          style={{ backgroundColor: "rgb(212,160,85)", borderRadius: 10 }}
        >
          <Text style={{ color: "white", lineHeight: 50, textAlign: "center" }}>
            PROCEED TO PAYMENT
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(235,219,204)",
    padding: 5,
  },
  phiaTren: {
    flex: 0.1,
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "rgb(248,231,215)",
  },
  imagetop: {
    resizeMode: "center",
  },
});
