import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet, Animated, Text } from "react-native";

export default function App() {
  const splashscreen = useRef(new Animated.Value(0)).current;
  const [isVisible, setisVisible] = useState(true);

  useEffect(() => {
    Animated.sequence([
      Animated.timing(splashscreen, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(splashscreen, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  useEffect(() => {
    let myTimeout = setTimeout(() => {
      setisVisible(false);
    }, 3000);
    return () => clearTimeout(myTimeout);
  }, []);

  function flashScreen() {
    return (
      <Animated.View
        style={[
          { flex: 1 },
          {
            opacity: splashscreen,
          },
        ]}
      >
        <View style={{ flex: 0.3 }}></View>
        <Animated.Image
          style={[{ flex: 1 }]}
          source={require("./img/logo.png")}
        ></Animated.Image>
        <Animated.View
          style={[{ flex: 1, justifyContent: "center", alignItems: "center" }]}
        >
          <Text style={styles.welcome}>Welcome to Animation React Native</Text>
        </Animated.View>
      </Animated.View>
    );
  }

  return (
    <View style={styles.container}>
      <>
        {isVisible == true ? (
          flashScreen()
        ) : (
          <View style={styles.container2}>
            <Text style={{ fontSize: 30 }}>Demo splash screen</Text>
          </View>
        )}
      </>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    justifyContent: "space-between",
    alignItems: "center",
  },
  container2: {
    flex: 1,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
  },
  welcome: {
    fontSize: 23,
  },
});
