import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";
import { Button, Image } from "react-native";
import cat from "./assets/cat.png";
import mouse from "./assets/mouse.png";
import { Dimensions } from "react-native";
export default function FollowMouse() {
  const [location, setLocation] = useState({
    x: null,
    y: null,
    marginLeft: new Animated.Value(10),
    marginTop: new Animated.Value(10),
  });

  let chieuCao1 = Math.floor(Math.random() * 280) + 1;
  let chieuRong1 = Math.floor(Math.random() * 280) + 1;
  let chieuCao2 = Math.floor(Math.random() * 280) + 1;
  let chieuRong2 = Math.floor(Math.random() * 280) + 1;
  let chieuCao3 = Math.floor(Math.random() * 280) + 1;
  let chieuRong3 = Math.floor(Math.random() * 280) + 1;
  // console.log(chieuCao1 +" "+ chieuRong1);
  // console.log(chieuCao2 +" "+ chieuRong2);
  // console.log(chieuCao3 +" "+ chieuRong3);

  // const windowWidth = Dimensions.get("window").width;
  // const windowHeight = Dimensions.get("window").height;
  // console.log(windowHeight);
  // console.log(windowWidth);

  function onPress(evt) {
    // console.log("====================================");
    var x = evt.nativeEvent.locationX;
    // console.log("====================================");
    // console.log(x);
    // console.log("====================================");
    var y = evt.nativeEvent.locationY;
    // console.log("====================================");
    // console.log(y);
    setLocation({
      x: x,
      y: y,
      marginLeft: x - 30,
      marginTop: y - 40,
    });
  }
  function onMove(evt) {
    var x = evt.nativeEvent.locationX;

    var y = evt.nativeEvent.locationY;
    setLocation({ marginLeft: x - 30, marginTop: y - 40 });
  }
  function onRelease() {
    console.log("Realse!");
  }
  const { marginTop, marginLeft } = location;
  return (
    <View style={styles.container}>
      {/* <Text>Show something!</Text> */}

      {/* <Animated.Image
        source={cat}
        style={{ marginLeft: marginLeft, marginTop: marginTop }}
      ></Animated.Image> */}
     
      
        <Animated.Image
          source={mouse}
          style={{ marginLeft: chieuRong1, marginTop: chieuCao1}}
          onStartShouldSetResponder={() => true}
          onMoveShouldSetResponder={() => true}
          onResponderGrant={onPress}
          onResponderMove={onMove}
          onResponderRelease={onRelease}
        ></Animated.Image>
    
     
        <Animated.Image
          source={mouse}
          style={{ marginLeft: chieuRong2, marginTop: chieuCao2 }}
          onStartShouldSetResponder={() => true}
          onMoveShouldSetResponder={() => true}
          onResponderGrant={onPress}
          onResponderMove={onMove}
          onResponderRelease={onRelease}
        ></Animated.Image>
    

      
      
      
        <Animated.Image
          source={mouse}
          style={{ marginLeft: chieuRong3, marginTop: chieuCao3 }}
          onStartShouldSetResponder={() => true}
          onMoveShouldSetResponder={() => true}
          onResponderGrant={onPress}
          onResponderMove={onMove}
          onResponderRelease={onRelease}
        ></Animated.Image>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
