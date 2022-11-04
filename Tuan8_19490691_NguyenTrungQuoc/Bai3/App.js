import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";
import { Button, Image } from "react-native";
import cat from "./assets/cat.png";
import mouse from "./assets/mouse.png";

let soRandom = Math.floor(Math.random() * 7) + 1;
let soLanBatChuot = 0;
export default function FollowMouse() {
  const [location, setLocation] = useState({
    marginLeft: new Animated.Value(10),
    marginTop: new Animated.Value(10),
  });

  let chieuCao1 = Math.floor(Math.random() * 700) + 1;
  let chieuRong1 = Math.floor(Math.random() * 300) + 1;
  let chieuCao2 = Math.floor(Math.random() * 700) + 1;
  let chieuRong2 = Math.floor(Math.random() * 300) + 1;
  let chieuCao3 = Math.floor(Math.random() * 700) + 1;
  let chieuRong3 = Math.floor(Math.random() * 300) + 1;

  const [locationMouse1, setLocationMouse1] = useState({
    marginLeft1: new Animated.Value(chieuRong1),
    marginTop1: new Animated.Value(chieuCao1),
  });
  const [locationMouse2, setLocationMouse2] = useState({
    marginLeft2: new Animated.Value(chieuRong2),
    marginTop2: new Animated.Value(chieuCao2),
  });
  const [locationMouse3, setLocationMouse3] = useState({
    marginLeft3: new Animated.Value(chieuRong3),
    marginTop3: new Animated.Value(chieuCao3),
  });

  function onPressCat(evt) {
    var x = evt.nativeEvent.locationX;
    var y = evt.nativeEvent.locationY;
    setLocation({
      marginLeft: x - 30,
      marginTop: y - 40,
    });
  }
   function onPressMouse(evt) {
    soLanBatChuot++;
    if(soLanBatChuot==soRandom){
       alert("Đã bắt được chuột")
       soRandom = Math.floor(Math.random() * 7) + 1
      soLanBatChuot=0;
      return;
    }
   
   
    setLocationMouse1({
      marginLeft1: new Animated.Value(Math.floor(Math.random() * 300) + 1),
      marginTop1: new Animated.Value(Math.floor(Math.random() * 700) + 1),
    });
    setLocationMouse2({
      marginLeft2: new Animated.Value(Math.floor(Math.random() * 300) + 1),
      marginTop2: new Animated.Value(Math.floor(Math.random() * 700) + 1),
    });
    setLocationMouse3({
      marginLeft3: new Animated.Value(Math.floor(Math.random() * 300) + 1),
      marginTop3: new Animated.Value(Math.floor(Math.random() * 700) + 1),
    });
  }

  let { marginTop, marginLeft } = location;
  let { marginTop1, marginLeft1 } = locationMouse1;
  let { marginTop2, marginLeft2 } = locationMouse2;
  let { marginTop3, marginLeft3 } = locationMouse3;

  return (
    <View
      style={styles.container}
      onStartShouldSetResponder={() => true}
      onMoveShouldSetResponder={() => true}
      // onResponderGrant={onPressCat}
      // onResponderMove={onMove}
      onResponderRelease={onPressCat}
    >
      <Text style={{ fontSize: 25, textAlign: "center", marginTop: 30 }}>
        Số random {soRandom}
      </Text>
      <Text style={{ fontSize: 25, textAlign: "center", marginTop: 30 }}>
        Số lần đã bắt chuột {soLanBatChuot}
      </Text>

      <Animated.Image
        source={cat}
        style={[
          { marginLeft: marginLeft, marginTop: marginTop },
          styles.postion,
        ]}
        onStartShouldSetResponder={() => true}
        onMoveShouldSetResponder={() => true}
        // onResponderGrant={onPressCat}
        // onResponderMove={onMove}
        // onResponderRelease={onPressCat}
      ></Animated.Image>

      <Animated.Image
        source={mouse}
        style={[
          { marginLeft: marginLeft1, marginTop: marginTop1 },
          styles.postion,
        ]}
        onStartShouldSetResponder={() => true}
        onMoveShouldSetResponder={() => true}
        onResponderGrant={onPressMouse}
        // onResponderMove={onMove}
        onResponderRelease={onPressCat}
      ></Animated.Image>

      <Animated.Image
        source={mouse}
        style={[
          { marginLeft: marginLeft2, marginTop: marginTop2 },
          styles.postion,
        ]}
        onStartShouldSetResponder={() => true}
        onMoveShouldSetResponder={() => true}
        onResponderGrant={onPressMouse}
        // onResponderMove={onMove}
        onResponderRelease={onPressCat}
      ></Animated.Image>

      <Animated.Image
        source={mouse}
        style={[
          { marginLeft: marginLeft3, marginTop: marginTop3 },
          styles.postion,
        ]}
        onStartShouldSetResponder={() => true}
        onMoveShouldSetResponder={() => true}
        onResponderGrant={onPressMouse}
        // onResponderMove={onMove}
        onResponderRelease={onPressCat}
      ></Animated.Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // position: "absolute",
    // left: 0,
    // top: 0,
    // backgroundColor:"red"
  },
  postion: {
    position: "absolute",
    // left:0,
    // right:0,
    backgroundColor: "red",
  },
});
