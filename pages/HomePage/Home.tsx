import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  PanResponder,
  Pressable,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
} from "react-native";
import UserProfile from "../../components/UserHome/Profile";
import Attendence from "../../components/UserHome/Attendence";
import { GLOBALS } from "../../styles/Global";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import Loading from "../../components/Loader/Loader";
import Navigation from "../../components/Navigation/Navigation";

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">;

const Home: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  const onPressIcon = (rootVal : string) => {
    console.log(rootVal);
  };

  return (
    <>
      <View style={styles.buttonParent}>
        <UserProfile />
        <Attendence />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  pressAblePressed: {
    backgroundColor: "gray",
  },
  viewStyle: {
    width: "100%",
  },
  buttonParent: {
    position: "relative",
    width: "100%",
    height: "100%",
    backgroundColor: GLOBALS.secondary,
    display: "flex",
    justifyContent: "space-between",
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
