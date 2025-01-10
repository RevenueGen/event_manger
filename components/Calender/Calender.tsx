import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { Text } from "react-native";
import { GLOBALS } from "../../styles/Global";
import Icon from "react-native-vector-icons/Feather";

const Calender = () => {
  const arrr1 = [1, 2, 3, 4, 5, 6, 7];
  const arrr2 = [8, 9, 10, 11, 12, 13, 14];
  const arrr3 = [15, 16, 17, 18, 19, 20, 21];
  const arrr4 = [22, 23, 24, 25, 26, 27, 28];
  const arrr5 = [29, 30, 31];

  return (
    <View style={styles.calender}>
      <View style={styles.mainCalender}>
        <View>
          <Text style={styles.lable}>Daily</Text>
          <Text style={styles.lable}>Activity</Text>
        </View>
        <View style={styles.calMenu}>
          <Pressable
            style={({ pressed }: any) => [
              styles.btn,
              pressed ? styles.click : null,
            ]}
          >
            <Icon name="calendar" size={20} color={"#EEEEEE"} />
          </Pressable>
          <Pressable
            style={({ pressed }: any) => [
              styles.monthBtn,
              pressed ? styles.click : null,
            ]}
          >
            <Text style={styles.otherLable}>January</Text>
          </Pressable>
          <Pressable
            style={({ pressed }: any) => [
              styles.yearBtn,
              pressed ? styles.click : null,
            ]}
          >
            <Text style={styles.otherLable}>2025</Text>
          </Pressable>
        </View>
      </View>
      {/* Days Box */}
      <View
        style={{
          display: "flex",
          gap: 10,
        }}
      >
        <View style={styles.dayView}>
          <Pressable
            style={[styles.dayBtn, { borderColor: GLOBALS.highLight }]}
          >
            <Text style={[styles.dayLable, {color : GLOBALS.highLight}]}>S</Text>
          </Pressable>
          <Pressable style={styles.dayBtn}>
            <Text style={styles.dayLable}>M</Text>
          </Pressable>
          <Pressable style={styles.dayBtn}>
            <Text style={styles.dayLable}>T</Text>
          </Pressable>
          <Pressable style={styles.dayBtn}>
            <Text style={styles.dayLable}>W</Text>
          </Pressable>
          <Pressable style={styles.dayBtn}>
            <Text style={styles.dayLable}>T</Text>
          </Pressable>
          <Pressable style={styles.dayBtn}>
            <Text style={styles.dayLable}>F</Text>
          </Pressable>
          <Pressable style={styles.dayBtn}>
            <Text style={styles.dayLable}>S</Text>
          </Pressable>
        </View>
        <View style={styles.dayViewMain}>
          <View style={styles.dayView}>
            {arrr1.map((ele, index) => {
              if (index === 0) {
                return (
                  <Pressable
                    style={[styles.dayBtn, { borderColor: GLOBALS.highLight }]}
                  >
                    <Text style={styles.dayLable}>{ele}</Text>
                  </Pressable>
                );
              } else {
                return (
                  <Pressable style={[styles.dayBtn]}>
                    <Text style={styles.dayLable}>{ele}</Text>
                  </Pressable>
                );
              }
            })}
          </View>
          <View style={styles.dayView}>
            {arrr2.map((ele, index) => {
              if (index === 0) {
                return (
                  <Pressable
                    style={[styles.dayBtn, { borderColor: GLOBALS.highLight }]}
                  >
                    <Text style={styles.dayLable}>{ele}</Text>
                  </Pressable>
                );
              } else {
                return (
                  <Pressable style={[styles.dayBtn]}>
                    <Text style={styles.dayLable}>{ele}</Text>
                  </Pressable>
                );
              }
            })}
          </View>
          <View style={styles.dayView}>
            {arrr3.map((ele, index) => {
              if (index === 0) {
                return (
                  <Pressable
                    style={[styles.dayBtn, { borderColor: GLOBALS.highLight }]}
                  >
                    <Text style={styles.dayLable}>{ele}</Text>
                  </Pressable>
                );
              } else {
                return (
                  <Pressable style={[styles.dayBtn, {backgroundColor : GLOBALS.highLight}]}>
                    <Text style={styles.dayLable}>{ele}</Text>
                  </Pressable>
                );
              }
            })}
          </View>
          <View style={styles.dayView}>
            {arrr4.map((ele, index) => {
              if (index === 0) {
                return (
                  <Pressable
                    style={[styles.dayBtn, { borderColor: GLOBALS.highLight }]}
                  >
                    <Text style={styles.dayLable}>{ele}</Text>
                  </Pressable>
                );
              } else {
                return (
                  <Pressable style={[styles.dayBtn, {backgroundColor : GLOBALS.highLight}]}>
                    <Text style={styles.dayLable}>{ele}</Text>
                  </Pressable>
                );
              }
            })}
          </View>
          <View style={styles.dayView}>
            {arrr5.map((ele, index) => {
              if (index === 0) {
                return (
                  <Pressable
                    style={[styles.dayBtn, { borderColor: GLOBALS.highLight }]}
                  >
                    <Text style={styles.dayLable}>{ele}</Text>
                  </Pressable>
                );
              } else {
                return (
                  <Pressable style={[styles.dayBtn]}>
                    <Text style={styles.dayLable}>{ele}</Text>
                  </Pressable>
                );
              }
            })}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  click: {
    backgroundColor: "gray",
  },
  calMenu: {
    display: "flex",
    flexDirection: "row",
  },
  calender: {
    width: "95%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 10,
    borderRadius: 20,
    borderColor: GLOBALS.highLight,
    borderWidth: 1,
  },
  btn: {
    width: 35,
    height: 35,
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderColor: GLOBALS.highLight,
  },
  mainCalender: {
    width: "100%",
    height: "auto",
    padding: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  lable: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },
  otherLable: {
    fontSize: 15,
    fontWeight: "normal",
    color: "white",
  },
  dayLable: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
  monthBtn: {
    height: 35,
    marginLeft: 10,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "white",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    width: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
  yearBtn: {
    height: 35,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "white",
    width: "auto",
    borderTopRightRadius: 10,
    borderBottomEndRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
  dayBtn: {
    width: 35,
    height: 35,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  dayView: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "row",
    gap: 10,
    justifyContent: "flex-start",
  },
  
  dayViewMain : {
    width : "100%",
    height : "auto",
    display : "flex",
    flexDirection : "column",
    gap: 10,
    justifyContent: "center",
  }
});

export default Calender;
