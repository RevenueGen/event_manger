import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import Material from "react-native-vector-icons/MaterialIcons"
import { GLOBALS } from "../../styles/Global";

interface MenuCardProps {
  name: string, 
  iconName? : string | "add", 
  onPress? : () => void, 
  text?: string, 
  material?:boolean,
  checkIn? : boolean
}

const MenuCard:React.FC<MenuCardProps> = ({ name, iconName, onPress, text, material, checkIn=false }) => {
  console.log({checkIn})
  
  return (
    <Pressable onPress={onPress} style={({pressed})=> [MenuCardStyle.presentCard, checkIn || pressed ? {borderColor : GLOBALS.highLight, backgroundColor : GLOBALS.primary} : null]}>
      <View style={[MenuCardStyle.labelIconView]}>
        <Text style={checkIn ? MenuCardStyle.onClickMainLable : MenuCardStyle.mainLabel}>{name}</Text>
        {iconName && !material ? <Icon name={iconName} size={20} color={checkIn ? GLOBALS.highLight : ("#EEEEEE")}/> :<Material name={iconName as string} size={20} color={"#EEEEEE"}/>}
      </View>
      <Text style={MenuCardStyle.timeLable}>{text}</Text>
    </Pressable>
  );
};

const MenuCardStyle = StyleSheet.create({
  presentCard: {
    width: "45%",
    height: 80,
    backgroundColor: GLOBALS.secondary,
    padding: 15,
    borderStyle : "solid",
    borderRadius: 20,
    borderColor : "#EEEEEE",
    borderWidth : 1,
    display : "flex",
    justifyContent : "space-between"
  },
  labelIconView : {
    width : "100%",
    height : "auto",
    display : "flex",
    flexDirection : "row",
    justifyContent : "space-between",
    alignItems : "center"
  },
  mainLabel: {
    color : "#EEEEEE",
    fontSize: 20,
    fontWeight: "bold",
  },
  timeLable : {
    color : "#EEEEEE",
    fontSize : 15,
    fontWeight : "normal",
    opacity : 0.5
  },
  onClickMainLable: {
    color : GLOBALS.highLight,
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default MenuCard;
