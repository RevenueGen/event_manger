import React from "react";
import { Pressable, StyleSheet, Text, ToastAndroid, View } from "react-native";
import UserProfile from "../../components/UserHome/Profile";
import Attendence from "../../components/UserHome/Attendence";
import { GLOBALS } from "../../styles/Global";

const Home = () => {
  return (
    <>
      <View style={styles.buttonParent}>
        <View>
          <UserProfile />
          <Attendence />
        </View>
        <View style={styles.viewStyle}>
          <Pressable
            onPress={() => ToastAndroid.show("Report Downloading....", 1000)}
            style={({ press }: any) => [
              styles.reportBtn,
              press ? { backgroundColor: "gray" } : null,
            ]}
          >
            <Text style={styles.reportLable}>Report</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    width: "100%",
  },
  buttonParent : {
    width : "100%",
    height : "100%",
    backgroundColor : GLOBALS.primary,
    display : "flex",
    justifyContent : "space-between"
  },
  reportBtn: {
    width: "100%",
    height: 50,
    backgroundColor: GLOBALS.highLight,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  reportLable: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#EEEEEE",
  },
});

export default Home;
