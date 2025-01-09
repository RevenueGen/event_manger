import React from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { GLOBALS } from "../../styles/Global";

type DataForStats = {
  key: string,
  value: string
};

interface StatsProps {
  amount: string;
  text: string;
  todayAmout?: string;
  todayText?: string;
  otherDetais?: DataForStats[];
}
const Stats: React.FC<StatsProps> = ({
  amount,
  text,
  todayAmout,
  todayText,
  otherDetais,
}) => {
  return (
    <View style={styles.mainDiv}>
      <View style={styles.statsDiv}>
        <View>
          <Text style={styles.amount}>{amount}</Text>
          <Text style={styles.text}>{text}</Text>
        </View>
        <View>
          <Text style={styles.todysAmoutText}>{todayAmout}</Text>
          <Text style={styles.text}>{todayText}</Text>
        </View>
      </View>
      <View style={styles.statsMainDiv}>
        {otherDetais?.map((ele, i)=> {
            let a = 0;
          return (
            <>
            <View style={styles.realStatusDiv} key={i}>
              <Text style={styles.key}>{ele.key}</Text>
              <Text style={styles.valueStatus}>{ele.value}</Text>
            </View>
            </>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainDiv: {
    width: "100%",
    height: "50%",
    display: "flex",
    flexDirection : "column",
    padding: 10,
  },
  statsDiv: {
    width: "98%",
    height: "auto",
    display: "flex",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 20,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  amount: {
    fontSize: 20,
    fontWeight: "bold",
    color: GLOBALS.highLight,
  },
  text: {
    fontSize: 15,
    fontWeight: "normal",
    color: "white",
  },
  todysAmoutText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
  realStatusDiv: {
    marginTop:10,
    width: "100%",
    height: "auto",
    marginLeft: 30,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 40,
  },
  key: {
    fontSize: 15,
    fontWeight: "bold",
    color: GLOBALS.highLight,
  },
  valueStatus: {
    fontSize: 15,
    fontWeight: "normal",
    color: "white",
  },
  statsMainDiv : {
    width : "100%",
    gap : 2,
    display : "flex",
    justifyContent : "flex-start"
  }
});

export default Stats;
