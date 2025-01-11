import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { GLOBALS } from "../../styles/Global";
import Feather from "react-native-vector-icons/Feather";
import Material from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

type PropItemType = "HOME" | "EVENTS" | "USERS" | "ANALYTICS" | "EXPENCES";

interface ItemType {
  item: PropItemType;
  label: string;
  icon: string;
  marterial: boolean;
}

const Navigation: React.FC = () => {
  const [item, setItem] = useState<PropItemType>("HOME");
  const navigation = useNavigation();
  
  const Item: ItemType[] = [
    {
      item: "HOME",
      label: "Home",
      icon: "home",
      marterial: false,
    },
    {
      item: "EVENTS",
      label: "Events",
      marterial: true,
      icon: "event",
    },
    {
      item: "USERS",
      label: "Users",
      icon: "users",
      marterial: false,
    },
    {
      item: "ANALYTICS",
      label: "Analytics",
      icon: "pie-chart",
      marterial: false,
    },
    {
      item: "EVENTS",
      label: "Expences",
      icon: "account-balance-wallet",
      marterial: true,
    },
  ];

  return (
    <View style={styles.navigation}>
      {Item.map((ele, index) => {
        return (
          <Pressable style={[styles.hero]} key={index} onPress={()=>{
            navigation.navigate(ele.label as never);
            setItem(ele.item);
          }}>
            <View style={[styles.ruller, ele.item === item ? {backgroundColor : GLOBALS.highLight} : null]}></View>
            <View style={styles.labelIcon}>
              {ele.marterial ? (
                <Material name={ele.icon} size={35} color={ele.item === item ? GLOBALS.highLight : "white" } />
              ) : (
                <Feather name={ele.icon} size={35} color={ele.item===item ? GLOBALS.highLight : "white"} />
              )}
              <Text style={[styles.lable,ele.item === item ? {color : GLOBALS.highLight} : null]}>{ele.label}</Text>
            </View>
          </Pressable>
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  navigation: {
    width: "100%",
    height: 80,
    position: "absolute",
    zIndex : 12,
    bottom: 0,
    backgroundColor: GLOBALS.primary,
    opacity: 0.8,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingLeft: 20,
    paddingRight: 20,
    borderWidth: 1,
    borderTopColor: "gray",
  },
  hero: {
    height: "100%",
    width: 50,
  },
  ruller: {
    width: "100%",
    height: 5,
    borderRadius: 50,
  },
  labelIcon: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  lable: {
    fontSize: 10,
    fontWeight: "bold",
    color: "white",
  },
});

export default Navigation;
