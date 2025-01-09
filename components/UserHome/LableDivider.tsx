import React from "react";
import { Pressable, StyleSheet, Text, ToastAndroid, View } from "react-native";
import { GLOBALS } from "../../styles/Global";

const LableDivider = ({ label, other }: { label?: string; other?: string }) => {
  return (
    <View style={styles.lableDiv}>
      <Text style={styles.textone}>{label}</Text>
      <Pressable style={({pressed}:any)=>[
        pressed ? styles.pressable : null
      ]} onPress={()=> ToastAndroid.show("See More User List", 100)}>
        <Text style={styles.textTwo}>{other}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({  
  pressable : {
    backgroundColor : "gray"
  },
  lableDiv: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight : 20,
    alignItems: "center",
  },
  textone: {
    fontSize: 15,
    color: "#EEEEEE",
    fontWeight: "bold",
  },
  textTwo: {
    fontSize: 15,
    color: GLOBALS.highLight,
    fontWeight: "bold",
  },
});

export default LableDivider;
