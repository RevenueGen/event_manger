import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { View } from "react-native";
import { GLOBALS } from "../../styles/Global";
import Calender from "../../components/Calender/Calender";
import MenuCard from "../../components/UserHome/MenuCard";
import LableDivider from "../../components/UserHome/LableDivider";
import Stats from "../../components/UserHome/Stats";

const data = [
  {
    key: "Your Price",
    value: "20%",
  },
  {
    key: "Your Price",
    value: "20%",
  },
  {
    key: "Your Price",
    value: "20%",
  },
];

const Report = () => {
  return (
    <>
      <ScrollView style={
        {
          width : "100%",
          height : "100%",
          backgroundColor : GLOBALS.primary
        }
      }>
        <View style={styles.mainReportView}>
          <Calender />
          <View style={styles.repoCards}>
            <MenuCard
              name="90%"
              iconName={"check-square"}
              text="On Time"
              onPress={() => {}}
            />
            <MenuCard
              name="28 Days"
              iconName={"file-text"}
              text="Total Present"
            />
          </View>
          <LableDivider label="Statistics" other="See Full" />
          <Stats
            amount="200$"
            text="Total Amount"
            todayAmout={"10$"}
            todayText="Today's Total"
            otherDetais={data}
          />
        </View>
        
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  mainReportView: {
    width: "100%",
    height: "100%",
    display: "flex",
    gap: 10,
    paddingTop: 10,
    alignItems: "center",
    backgroundColor: GLOBALS.primary,
  },
  repoCards: {
    width: "100%",
    height: "auto",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
});

export default Report;
