import React, { useState } from "react";
import { Pressable, Switch, Text, TextInput, ToastAndroid } from "react-native";
import { StyleSheet, View } from "react-native";
import { GLOBALS } from "../../styles/Global";
import { RootStackParamList } from "../../App";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { apiHitter } from "../../api/api";
import * as SecureStore from "expo-secure-store";
import { ActivityIndicator } from "react-native-paper";

interface FormDataType {
  name: string;
  phoneNo: string;
  password: string;
}

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Signup">;

const Signup: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [isEnabled, setIsEnable] = useState(true);
  const [name, setName] = useState<string>("");
  const [phoneNo, setPhoneNo] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handelSignUp = async () => {
    try {
        setLoading(true);
      const userData = {
        name: name,
        phoneNo: phoneNo,
        password: password,
      };
      setName("");
      setPassword("");
      setPhoneNo("");
      const responce = await apiHitter.post("/api/signup", userData);
      if (!responce.data.success) {
        ToastAndroid.show(responce.data.message as string, ToastAndroid.SHORT);
        setLoading(false);
        return;
      }
      SecureStore.setItem("token", responce.data.token);
      SecureStore.setItem("user", responce.data.data);
      ToastAndroid.show(responce.data.message as string, ToastAndroid.SHORT);
      navigation.navigate("Home");
      setLoading(false);
    } catch (err) {
      ToastAndroid.show((err as Error).message as string, ToastAndroid.SHORT);
    }
  };

  const toggleSwitch = () => setIsEnable(!isEnabled);

  return (
    <View style={styles.mainForm}>
      <View style={styles.topView}>
        <Text style={styles.heading}>Event Manager</Text>
        <Text style={styles.heading2}>Sign UP</Text>
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
          <Text style={styles.btnLable}>PHONE NO</Text>
          <TextInput
            style={styles.inputStyle}
            value={phoneNo}
            placeholderTextColor={"gray"}
            placeholder="Phone No"
            keyboardType="numeric"
            onChangeText={setPhoneNo}
          />
          <Text style={styles.btnLable}>PASSWORD</Text>
          <TextInput
            style={styles.inputStyle}
            value={password}
            placeholderTextColor={"gray"}
            placeholder="Password"
            keyboardType="ascii-capable"
            secureTextEntry={isEnabled}
            onChangeText={setPassword}
          />
          <View style={styles.showPassword}>
            <Text style={styles.lable}>Show Password</Text>
            <Switch
              trackColor={{ false: "#767577", true: GLOBALS.secondary }}
              thumbColor={isEnabled ? GLOBALS.highLight : "#f4f3f4"}
              ios_backgroundColor={GLOBALS.secondary}
              onValueChange={toggleSwitch}
              value={isEnabled}
              aria-label="Show Password"
              style={{
                width: 50,
              }}
            />
          </View>
          <Pressable
            style={({ pressed }: any) => [
              styles.btn,
              pressed ? styles.btnPress : null,
            ]}
            onPress={handelSignUp}
          >
            {loading ? (
              // <ActivityIndicator size={"small"} color={"white"} />
              <ActivityIndicator
                animating={true}
                size={"small"}
                color="white"
              />
            ) : (
              <Text style={styles.btnLable}>Log IN</Text>
            )}
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
            onPress={() => navigation.navigate("Login")}
          >
            <Text
              style={{
                color: GLOBALS.highLight,
                fontSize: 15,
                fontWeight: "bold",
              }}
            >
              Log In
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
  showPassword: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default Signup;
