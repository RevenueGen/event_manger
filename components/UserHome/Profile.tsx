import React from "react";
import { Button, Pressable, StyleSheet, Text, ToastAndroid, Touchable, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { GLOBALS } from "../../styles/Global";

const HomeStyle = StyleSheet.create({
  mainDiv: {
    backgroundColor: GLOBALS.secondary,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  profileDiv: {
    width: "100%",
    height: 80,
    backgroundColor: GLOBALS.secondary,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    gap: 20,
    padding: 15,
  },
  profilePic: {
    width: 50,
    height: 50,
    padding: 0,
    borderRadius: 50,
    backgroundColor: "yellow",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  labels: {
    display: "flex",
  },
  headingText: {
    color: "#EEEEEE",
    fontSize: 20,
    fontWeight: "bold",
  },
  normalText: {
    color: "#EEEEEE",
    fontSize: 15,
    opacity: 0.5,
  },
  notification : {
    width : 50, 
    height : 50,
    display : "flex",
    alignItems : "center",
    justifyContent : "center",
    borderWidth : 1,
    borderStyle : "solid",
    borderColor : "#EEEEEE",
    borderRadius : 50,
  },
  notificationPressed : { 
    backgroundColor : "gray"
  }
});

function UserProfile() {

    const showNotification = () => {
        ToastAndroid.show("Notifcations", 2000);
    }
    
  return (
    <View style={HomeStyle.mainDiv}>
      <View style={HomeStyle.profileDiv}>
        <View style={HomeStyle.profilePic}>
          <Icon name="user" size={29} color={"black"} />
        </View>
        <View style={HomeStyle.labels}>
          <Text style={HomeStyle.headingText}>Ashutosh Paliwal</Text>
          <Text style={HomeStyle.normalText}>Software Enginneer</Text>
        </View>
        <Pressable onPress={showNotification} style={({pressed})=> [
            HomeStyle.notification,
            pressed ? HomeStyle.notificationPressed : null,
            ]}>
            <Icon name="bell" size={25} color={"#EEEEEE"}/>
        </Pressable>
      </View>
    </View>
  );
}
export default UserProfile;
