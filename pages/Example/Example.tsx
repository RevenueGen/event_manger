import {
  Animated,
  PanResponder,
  StyleSheet,
} from "react-native";
import { View } from "react-native";
import React, { useRef } from "react";
import { GLOBALS } from "../../styles/Global";
import { Text } from "react-native";


const Example: React.FC = () => {
  

  return (
    <>
      <View style={styles.container}>
        <Text>Example</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: GLOBALS.primary,
    gap: 20,
    position : "relative"
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: GLOBALS.highLight,
  },
});

export default Example;
