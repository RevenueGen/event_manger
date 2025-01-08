import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import Material from "react-native-vector-icons/MaterialIcons"
import { GLOBALS } from "../../styles/Global";

const MenuCard = ({ name, iconName, onPress, text, material }: { name: string, iconName? : string | "add", onPress? : () => void, text?: string, material?:boolean}) => {
  return (
    <Pressable onPress={onPress} style={({pressed})=> [MenuCardStyle.presentCard, pressed ? MenuCardStyle.onPressCard : null]}>
      <View style={MenuCardStyle.labelIconView}>
        <Text style={MenuCardStyle.mainLabel}>{name}</Text>
        {iconName && !material ? <Icon name={iconName} size={20} color={"#EEEEEE"}/> :<Material name={iconName as string} size={20} color={"#EEEEEE"}/>}
      </View>
      <Text style={MenuCardStyle.timeLable}>{text}</Text>
    </Pressable>
  );
};

const MenuCardStyle = StyleSheet.create({
  presentCard: {
    width: "45%",
    height: 100,
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
  onPressCard : {
    backgroundColor : "#677080"
  }
});

export default MenuCard;
