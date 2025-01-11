import React, { useState } from "react";
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  ToastAndroid,
  Touchable,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/SimpleLineIcons";
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
    backgroundColor: GLOBALS.primary,
    borderColor: "#EEEEEE",
    borderWidth: 1,
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
  notification: {
    position: "relative",
    width: 50,
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // borderWidth : 1,
    borderStyle: "solid",
    borderColor: "#EEEEEE",
    borderRadius: 50,
  },
  notificationPressed: {
    backgroundColor: "gray",
  },
  settingMenu: {
    width: "auto",
    display: "flex",
    flexDirection: "row",
  },
  bellTingTong: {
    position: "absolute",
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: "red",
    top: 15,
    right: 15,
    borderWidth: 1,
    borderColor: "white",
    borderStyle: "solid",
    zIndex: 1,
  },
});

function UserProfile({}) {
  const [showNotification, setShowNotifcation] = useState<boolean>(false);

  return (
    <View style={HomeStyle.mainDiv}>
      <View style={HomeStyle.profileDiv}>
        {/* <View style={HomeStyle.profilePic}>
          <Icon name="user" size={29} color={"#EEEEEE"} />
        </View> */}
        <View style={HomeStyle.labels}>
          <Text style={HomeStyle.headingText}>Shop Name</Text>

          <Text style={HomeStyle.normalText}>
            <Icon name="location-pin" color={GLOBALS.text} />
            808 Metha Gali
          </Text>
        </View>
        <View style={HomeStyle.settingMenu}>
          <Pressable
            onPress={() => {}}
            style={({ pressed }) => [
              HomeStyle.notification,
              pressed ? HomeStyle.notificationPressed : null,
            ]}
          >
            <View
              style={[
                HomeStyle.bellTingTong,
                showNotification ? null : { display: "none" },
              ]}
            ></View>
            <Icon name="bell" size={20} color={"#EEEEEE"} />
          </Pressable>
          <Pressable
            onPress={() => {}}
            style={({ pressed }) => [
              HomeStyle.notification,
              pressed ? HomeStyle.notificationPressed : null,
            ]}
          >
            <Icon name="settings" size={20} color={"#EEEEEE"} />
          </Pressable>
        </View>
      </View>
    </View>
  );
}
export default UserProfile;
