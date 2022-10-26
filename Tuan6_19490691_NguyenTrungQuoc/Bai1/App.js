import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const [textAdd, setTextAdd] = useState("");

  const [dataList, setDataList] = useState([]);
  return (
    <View style={styles.container}>
      <View style={styles.above}>
        <TextInput
          style={styles.inputAdd}
          onChangeText={(textAdd) => setTextAdd(textAdd)}
        ></TextInput>z
        <TouchableOpacity
          style={styles.btnAdd}
          onPress={() => setDataList([...dataList, textAdd])}
        >
          <Text style={styles.txtAdd}>Add</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={dataList} 
        keyExtractor={(item,index) =>index}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.row}>
              <Text style={styles.stt}>{index + 1}</Text>
              <Text style={styles.txtvalue}>{item}</Text>
              <TouchableOpacity
                style={styles.delete}
                onPress={() => {
                  const listTemp = [...dataList];
                  listTemp.splice(index, 1);
                  setDataList(listTemp);
                }}
              >
                <Text style={styles.txtDelete}>Delete</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 10,
  },
  above: {
    marginTop: 50,

    borderBottomWidth: 2,
  },
  inputAdd: {
    borderWidth: 1,
    height: 50,
    borderRadius: 10,
    paddingLeft: 10,
  },

  btnAdd: {
    backgroundColor: "blue",
    marginTop: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  txtAdd: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    paddingLeft: 20,
    paddingRight: 20,
    lineHeight: 40,
    textAlign: "center",
  },

  row: {
    flexDirection: "row",
    borderWidth: 1,
    justifyContent: "space-between",
    height: 50,
    alignItems: "center",
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  delete: {
    backgroundColor: "red",
    borderRadius: 5,
  },
  txtDelete: {
    color: "white",
    fontSize: 20,
    paddingLeft: 5,
    paddingRight: 5,
  },
  stt: {
    backgroundColor: "blue",
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
  },
});
