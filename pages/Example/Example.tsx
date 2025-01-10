import {
  Animated,
  PanResponder,
  StyleSheet,
} from "react-native";
import { View } from "react-native";
import React, { useRef } from "react";
import { GLOBALS } from "../../styles/Global";


const Example: React.FC = () => {
  const panx = useRef(new Animated.Value(0)).current;
  const pany = useRef(new Animated.Value(0)).current;


  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, { dx: pany, dy: pany}]),
      onPanResponderRelease: () => {
        panx.extractOffset();
        pany.extractOffset();
      },
    })
  ).current;

  return (
    <>
      <View style={styles.container}>
        <Animated.View
          style={{
              position: "absolute",
              top : 0,
            transform: [{ translateX: panx }, { translateY: pany }],
          }}
          {...panResponder.panHandlers}
        >
          <View style={[styles.box ,{
            transform : [{translateX : panx}, {translateY : pany}]
          }]} />
        </Animated.View>
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
