import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import Material from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";
import { GLOBALS } from "../../styles/Global";
import LogoButton from "../LogoButton/LogoButton";
import EventDropDown from "../DropDown.tsx/EventDropDown";

interface EventCardProps {
  title?: string;
  location?: string;
  date?: string;
  eventHolderName?: string;
  phoneNo?: string;
  onPress?: () => void;
  editHandeler?: () => void;
  deleteHandler?: () => void;
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  location,
  date,
  eventHolderName,
  phoneNo,
  editHandeler,
  deleteHandler,
}) => {
  const [openDropDown, setOpenDropDown] = useState<boolean>(false);

  const handleEventMenu = () => {
    setOpenDropDown(!openDropDown);
  };

  return (
    <Pressable style={styles.mainCard}>
      <View style={styles.cardHeading}>
        <Text style={styles.headingText}>{title}</Text>
        <LogoButton
          children={
            <>
              {!openDropDown ? (
                <Entypo name="dots-three-vertical" size={15} color={"gray"} />
              ) : (
                <Material name="close" size={15} color={"gray"} />
              )}
            </>
          }
          dropDown={true}
          closeDropDown={openDropDown}
          dropDownComponent={<EventDropDown editHandeler={editHandeler} deleteHandeler={deleteHandler}/>}
          onPress={handleEventMenu}
        />
      </View>
      <View style={styles.subTopic}>
        <View style={styles.subTopicMain}>
          <Material name="location-on" size={16} color={GLOBALS.text} />
          <Text style={styles.subTopicText}>{location}</Text>
        </View>
        <View style={styles.subTopicMain}>
          <Feather name="calendar" size={16} color={GLOBALS.text} />
          <Text style={styles.subTopicText}>{date}</Text>
        </View>
        <View style={styles.subTopicMain}>
          <Feather name="user" size={16} color={GLOBALS.text} />
          <Text style={styles.subTopicText}>{eventHolderName}</Text>
        </View>
        <View style={styles.subTopicMain}>
          <Material name="phone-in-talk" size={16} color={GLOBALS.text} />
          <Text style={styles.subTopicText}>{phoneNo}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  mainCard: {
    borderWidth: 1,
    borderColor: GLOBALS.text,
    margin: 10,
    padding: 20,
    borderRadius: 10,
    width: "100%",
    height: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: GLOBALS.secondary,
    gap: 20,
  },
  cardHeading: {
    width: "100%",
    height: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  headingText: {
    fontSize: 16,
    fontWeight: "bold",
    color: GLOBALS.highLight,
  },
  subTopic: {
    width: "100%",
    height: "auto",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 5,
  },
  subTopicText: {
    fontSize: 16,
    fontWeight: "normal",
    color: GLOBALS.text,
    opacity: 0.8,
  },
  subTopicMain: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 5,
  },
});

export default EventCard;
