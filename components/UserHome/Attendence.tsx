import React from "react";
import { Button, Pressable, StyleSheet, Text, ToastAndroid } from "react-native";
import { View } from "react-native";
import { GLOBALS } from "../../styles/Global";
import MenuCard from "./MenuCard";
import LableDivider from "./LableDivider";

const Attendence = () => {
    const showPresendToast = () => {
        ToastAndroid.show("Present", 1000);
    }
    
  return (
    <View style={AttendenceStyle.attendenceDiv}>
      <View style={AttendenceStyle.attendenceMenus}>
        <MenuCard name="8:45" iconName={"arrow-down-left"} text="Check In" onPress={showPresendToast}/>
        <MenuCard name="2:55" iconName={"arrow-up-right"} text="Check Out"/>
      </View> 
      <View style={AttendenceStyle.attendenceMenus}>
        <MenuCard name="90%" iconName={"check-square"} text="On Time" onPress={showPresendToast}/>
        <MenuCard name="28 Days" iconName={"file-text"} text="Total Present"/>
      </View> 
      <LableDivider label="Add More" other="See List"/>
      <View style={AttendenceStyle.attendenceMenus}>
        <MenuCard name="Add User" iconName={"add"} text="Add More User" onPress={showPresendToast} material={true}/>
      </View> 
    </View>
  );
};

const AttendenceStyle = StyleSheet.create({
    
  attendenceDiv: {
    marginTop : 10,
    borderTopLeftRadius : 30,
    borderTopRightRadius : 30,
    width: "100%",
    display: "flex",
    gap : 20,
    padding : 20,
    backgroundColor: GLOBALS.primary,
  },
  attendenceMenus: {
    width: "100%",
    display : "flex",
    flexDirection : "row",
    justifyContent : "space-between"
  }
});

export default Attendence;
