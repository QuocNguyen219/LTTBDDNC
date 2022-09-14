import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [kq, setKQ] = useState("");
  function sum() {
       setKQ(Number.parseInt(a) + Number.parseInt(b)+ "");
  }
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text>Nhập a: </Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={(a) => setA(a)}>
        </TextInput>
      </View>
      <View style={styles.row}>
        <Text>Nhập b: </Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={(b) => setB(b)}
        ></TextInput>
      </View>
      <View style={[styles.row, { marginBottom: 10 }]}>
        <Text>Kết quả: </Text>
        <TextInput
          editable={false}
          value={kq}
          style={{
            width: 100,
            borderWidth: 2,
            backgroundColor: "white",
            color: "black",
            paddingLeft: 10,
          }}
        ></TextInput>
      </View>
      <Button title="Tổng" onPress={sum}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: 100,
    borderWidth: 2,
    marginBottom: 10,
    paddingLeft: 10,
  },
  row: {
    flexDirection: "row",
  },
});
