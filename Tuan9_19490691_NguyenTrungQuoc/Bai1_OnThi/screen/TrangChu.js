import { StatusBar } from "expo-status-bar";
import { StyleSheet, TouchableOpacity, Image, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";

export default function TrangChu() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.backgroundCafe}>
        <Image
          style={{ flex: 1, resizeMode: "stretch" }}
          source={require("../image/backgroundCafe.jpg")}
        ></Image>
      </View>

      <Text
        style={{
          position: "absolute",
          color: "white",
          fontSize: 25,
          marginTop: 300,
        }}
      >
        Discover {"\n"}premium coffee {"\n"}around you
      </Text>

      <View style={styles.phiaDuoi}>
        <TouchableOpacity
          style={styles.viewsignin}
          onPress={() => navigation.navigate("DanhSach")}
        >
          <Image
            style={{ width: 50, height: 50, marginRight: 15 }}
            source={require("../image/fb.png")}
          ></Image>
          <Text style={styles.signin}>SIGN IN WITH FACEBOOK</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.viewsignin, { marginTop: 15 }]}  onPress={() => navigation.navigate("DanhSach")}> 
          <Image
            style={{ width: 35, height: 35, marginRight: 15 }}
            source={require("../image/gg.png")}
          ></Image>
          <Text style={styles.signin}>SIGN IN WITH GOOGLE</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.register}>
        <Text style={{ color: "gray" }}>Don't have an account ? </Text>

        <TouchableOpacity>
          <Text style={{ color: "yellow", textDecorationLine: "underline" }}>
            REGISTER
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundCafe: {
    flex: 0.7,
  },
  phiaDuoi: {
    flex: 0.25,
    backgroundColor: "rgb(20,20,22)",
  },
  signin: {
    marginTop: 10,
    marginBottom: 10,
    color: "white",
    fontSize: 20,
  },
  viewsignin: {
    flexDirection: "row",
    borderColor: "rgb(60,52,23)",
    borderWidth: 2,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  register: {
    flex: 0.07,
    backgroundColor: "rgb(20,20,22)",
    justifyContent: "center",
    alignItems: "center",
  },
});
