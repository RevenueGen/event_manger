import React, { useEffect, useState } from "react";
import { Alert, Pressable, StyleSheet, View } from "react-native";
import { GLOBALS } from "../../styles/Global";
import Feather from "react-native-vector-icons/Feather";
import { Text } from "react-native";

interface ExpenceCardProps {
  title: string;
  date: string;
  pics: string;
}

const ExpenceCard: React.FC<ExpenceCardProps> = ({ title, date, pics }) => {
  const [press, setPress] = useState<boolean>(false);

  return (
    <Pressable
      onLongPress={() => {
        Alert.alert("Hello");
      }}
      delayLongPress={1000}
      onPressIn={() => setPress(true)}
      onPressOut={()=> setPress(false)}
      style={({ pressed }) => [{ width: "100%", height: 80 }]}
    >
      <View
        style={[
          styles.main,
          press ? { backgroundColor: "rgba(1, 4, 24, 0.48)" } : null,
        ]}
      >
        <View style={styles.icon}>
          <Feather name="box" size={30} color={"white"} />
        </View>
        <View style={styles.centerDiv}>
          <Text style={styles.label1}>{title}</Text>
          <Text style={styles.label2}>{date}</Text>
        </View>
        <View style={styles.pics}>
          <Text style={styles.picsLabel}>{pics}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: 70,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    borderRadius: 20,
    flexDirection: "row",
    gap: 10,
    backgroundColor: GLOBALS.secondary,
  },
  icon: {
    width: 40,
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    backgroundColor: GLOBALS.primary,
  },
  pics: {
    width: 50,
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  picsLabel: {
    fontSize: 16,
    fontWeight: "normal",
    color: "red",
  },
  centerDiv: {
    width: "60%",
    height: "100%",
    display: "flex",
    alignContent: "flex-start",
    justifyContent: "center",
  },
  label1: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  label2: {
    fontSize: 12,
    fontWeight: "normal",
    color: "rgba(255, 255, 255, 0.5)",
  },
});

export default ExpenceCard;
