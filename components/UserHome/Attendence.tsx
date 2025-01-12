import React, { useState } from "react";
import { Button, Pressable, StyleSheet, Text, ToastAndroid } from "react-native";
import { View } from "react-native";
import { GLOBALS } from "../../styles/Global";
import MenuCard from "../Card/MenuCard";
import LableDivider from "./LableDivider";

const Attendence = () => {
  
  return (
    <View style={AttendenceStyle.attendenceDiv}>
      <View style={AttendenceStyle.attendenceMenus}>
        <MenuCard name="Users" iconName={"users"} text="User Track" onPress={()=>{}} checkIn={false}/>
        <MenuCard name="Inventory" iconName={"inventory"} material={true}  text="Stocks Track" onPress={()=>{}} checkIn={false} />
      </View> 
      <View style={AttendenceStyle.attendenceMenus}>
        <MenuCard name="Events" iconName={"event"} text="Total Events : 3" onPress={()=>{}} material={true}/>
        <MenuCard name="Expences" iconName={"account-balance-wallet"} material={true} text="Total : $ 200"/>
      </View>
      <LableDivider label="Add More" other="See List"/>
      <View style={AttendenceStyle.attendenceMenus}>
        <MenuCard name="Add User" iconName={"add"} text="Add More User" onPress={()=>{}} material={true}/>
      </View> 
    </View>
  );
};

const AttendenceStyle = StyleSheet.create({
    
  attendenceDiv: {
    position : "absolute",
    top : 70,
    marginTop : 10,
    borderTopLeftRadius : 30,
    borderTopRightRadius : 30,
    width: "100%",
    height : 650,
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
