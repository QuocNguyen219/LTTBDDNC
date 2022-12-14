import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";
import { Button, Image } from "react-native";
import icon from "./assets/cat.png";

export default function FollowMouse() {
  const [location, setLocation] = useState({
    marginLeft: new Animated.Value(10),
    marginTop: new Animated.Value(10),
  });
  function onPress(evt) {
    var x = evt.nativeEvent.locationX;
    var y = evt.nativeEvent.locationY;
    setLocation({
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
    <View
      onStartShouldSetResponder={() => true}
      onMoveShouldSetResponder={() => true}
      onResponderGrant={onPress}
      onResponderMove={onMove}
      onResponderRelease={onRelease}
      style={styles.container}
    >
      {/* <Text>Show something!</Text> */}

      <Animated.Image
        source={icon}
        style={{ marginLeft: marginLeft, marginTop: marginTop }}
      ></Animated.Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
