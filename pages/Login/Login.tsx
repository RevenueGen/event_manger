import React, { useState } from "react";
import { Pressable, Text, TextInput, ToastAndroid } from "react-native";
import { StyleSheet, View } from "react-native";
import { GLOBALS } from "../../styles/Global";
import { RootStackParamList } from "../../App";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { apiHitter } from "../../api/api";
import * as SecureStore from 'expo-secure-store'

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Login">;

const Login: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async () => {
    try {
      const userData = {
        name: name,
        password: password,
      };
      setName("");
      setPassword("");
      const responce = await apiHitter.post("/api/login", userData)
      console.log({message : responce.data.message});
      if (!responce.data.success) {
        ToastAndroid.show(responce.data.message as string, ToastAndroid.SHORT);
      }
      SecureStore.setItem("token", JSON.stringify(responce.data.token));
      SecureStore.setItem("user", JSON.stringify(responce.data.data));
      navigation.navigate("Home");
      ToastAndroid.show(responce.data.message as string, ToastAndroid.SHORT);
    } catch (err) {
        console.log((err as Error).message)
      ToastAndroid.show((err as Error).message as string, ToastAndroid.SHORT);
    }
  };

  return (
    <View style={styles.mainForm}>
      <View style={styles.topView}>
        <Text style={styles.heading}>Event Manager</Text>
        <Text style={styles.heading2}>Log IN</Text>
      </View>
      <View style={styles.form}>
        <View style={styles.card}>
          <Text style={styles.btnLable}>NAME</Text>
          <TextInput
            style={styles.inputStyle}
            placeholderTextColor={"gray"}
            value={name}
            placeholder="Name"
            keyboardType="ascii-capable"
            onChangeText={setName}
          />
          <Text style={styles.btnLable}>PASSWORD</Text>
          <TextInput
            style={styles.inputStyle}
            value={password}
            placeholderTextColor={"gray"}
            placeholder="Password"
            keyboardType="ascii-capable"
            secureTextEntry
            onChangeText={setPassword}
          />
          <Pressable
            style={({ pressed }: any) => [
              styles.btn,
              pressed ? styles.btnPress : null,
            ]}
            onPress={handleSubmit}
          >
            <Text style={styles.btnLable}>Log IN</Text>
          </Pressable>
          <View style={styles.ruller}></View>
          <Text style={[styles.question, styles.lable]}>
            Already Have an Account?
          </Text>
          <Pressable
            style={({ pressed }: any) => [
              styles.question,
              pressed ? styles.btnPress : null,
            ]}
            onPress={() => navigation.navigate("Signup")}
          >
            <Text
              style={{
                color: GLOBALS.highLight,
                fontSize: 15,
                fontWeight: "bold",
              }}
            >
              Sign Up
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainForm: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: GLOBALS.secondary,
  },
  topView: {
    width: "100%",
    height: "20%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  heading2: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#EEEEEE",
  },
  lable: {
    fontSize: 15,
    fontWeight: "normal",
    color: "#EEEEEE",
    paddingBottom: 10,
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    color: GLOBALS.highLight,
  },
  form: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
    paddingTop: 50,
    gap: 20,
  },
  card: {
    backgroundColor: GLOBALS.primary,
    padding: 20,
    width: "100%",
    height: "auto",
    display: "flex",
    borderRadius: 20,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  inputStyle: {
    marginBottom: 20,
    marginTop: 3,
    backgroundColor: GLOBALS.secondary,
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    borderStyle: "solid",
    borderColor: "white",
    padding: 10,
    color: "#EEEEEE",
  },
  btn: {
    width: "100%",
    height: 50,
    backgroundColor: GLOBALS.highLight,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderStyle: "solid",
    borderColor: "white",
    borderWidth: 1,
    marginTop: 10,
  },
  btnPress: {
    backgroundColor: "gray",
  },
  btnLable: {
    padding: 0,
    fontSize: 15,
    fontWeight: "bold",
    color: "#EEEEEE",
  },
  ruller: {
    width: "50%",
    height: 1,
    backgroundColor: "gray",
    marginTop: 30,
    marginBottom: 30,
    marginLeft: "25%",
    marginRight: "-25%",
  },
  question: {
    marginLeft: "auto",
    marginRight: "auto",
  },
});

export default Login;
