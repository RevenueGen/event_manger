import React from "react";
import { Pressable, StyleSheet, Text, ToastAndroid, View } from "react-native";
import UserProfile from "../../components/UserHome/Profile";
import Attendence from "../../components/UserHome/Attendence";
import { GLOBALS } from "../../styles/Global";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">;

const Home : React.FC<HomeScreenProps>= ({navigation}) => {
  return (
    <>
      <View style={styles.buttonParent}>
        <View>
          <UserProfile />
          <Attendence />
        </View>
        <View style={styles.viewStyle}>
          <Pressable
            onPress={() => {
              navigation.navigate("Report", {itemId : 42 })
            }}
            style={({ pressed }: any) => [
              styles.reportBtn,
              pressed ? styles.pressAblePressed : null,
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
  pressAblePressed : {
    backgroundColor : "gray"
  },
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
