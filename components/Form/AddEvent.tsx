import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { GLOBALS } from "../../styles/Global";

interface EventData {
  title: string;
  location: string;
  date: string;
  eventHolderName: string;
  phoneNo: string;
}

const defaultData = {
  title: "",
  date: "",
  eventHolderName: "",
  location: "",
  phoneNo: "",
}

interface AddEventProps {
  handleCancel?: () => void;
  handleSave: (data: EventData) => void;
  saveBtnText?: string;
  cancelBtnText?: string;
  title : string
}
const AddEvent: React.FC<AddEventProps> = ({
  handleCancel,
  handleSave,
  saveBtnText,
  cancelBtnText,
  title,
}) => {
  const [formData, setFormData] = useState<EventData>(defaultData);
  
  return (
    <View style={styles.mainForm}>
      <View style={styles.fomrCard}>
        <View style={styles.formCardTitle}>
          {formData.title === "" ? (
            <Button
              textColor={GLOBALS.highLight}
              onPressIn={handleCancel}
            >
              {saveBtnText}
            </Button>
          ) : (
            <Button
              textColor={GLOBALS.highLight}
              onPressIn={() => handleSave(formData)}
            >
              {saveBtnText}
            </Button>
          )}
          <Text style={styles.formCardTitleLabel}>{title}</Text>
          <Button textColor={GLOBALS.highLight} onPress={handleCancel}>
            {cancelBtnText}
          </Button>
        </View>
        <View style={styles.formInputs}>
          <TextInput
            label={"Title"}
            mode="outlined"
            placeholder="Wedding"
            outlineColor="gray"
            textColor="white"
            placeholderTextColor={"gray"}
            activeOutlineColor="gray"
            style={{
              backgroundColor: GLOBALS.primary,
              height: 50,
              width: "100%",
            }}
            dataDetectorTypes={"all"}
            value={formData.title}
            onChangeText={(text) => {
              setFormData((prev) => ({ ...prev, title: text }));
            }}
          />
          <TextInput
            label={"Location"}
            mode="outlined"
            placeholder="Udaipur"
            outlineColor="gray"
            textColor="white"
            placeholderTextColor={"gray"}
            activeOutlineColor="gray"
            style={{
              backgroundColor: GLOBALS.primary,
              height: 50,
              width: "100%",
            }}
            dataDetectorTypes={"all"}
            value={formData.location}
            onChangeText={(text) => {
              setFormData((prev) => ({ ...prev, location: text }));
            }}
          />
          <TextInput
            label={"Date"}
            mode="outlined"
            placeholder={"15 Jan 2025"}
            outlineColor="gray"
            textColor="white"
            placeholderTextColor={"gray"}
            activeOutlineColor="gray"
            style={{
              backgroundColor: GLOBALS.primary,
              height: 50,
              width: "100%",
            }}
            dataDetectorTypes={"all"}
            value={formData.date}
            onChangeText={(text) => {
              setFormData((prev) => ({ ...prev, date: text }));
            }}
          />
          <TextInput
            label={"Provider"}
            mode="outlined"
            placeholder={"John Doe"}
            outlineColor="gray"
            textColor="white"
            placeholderTextColor={"gray"}
            activeOutlineColor="gray"
            style={{
              backgroundColor: GLOBALS.primary,
              height: 50,
              width: "100%",
            }}
            dataDetectorTypes={"all"}
            value={formData.eventHolderName}
            onChangeText={(text) => {
              setFormData((prev) => ({ ...prev, eventHolderName: text }));
            }}
          />
          <TextInput
            label={"Phone No"}
            mode="outlined"
            placeholder={`+91 ${1234567890}`}
            outlineColor="gray"
            textColor="white"
            placeholderTextColor={"gray"}
            activeOutlineColor="gray"
            style={{
              backgroundColor: GLOBALS.primary,
              height: 50,
              width: "100%",
            }}
            dataDetectorTypes={"calendarEvent"}
            value={formData.phoneNo}
            onChangeText={(text) => {
              setFormData((prev) => ({ ...prev, phoneNo: text }));
            }}
          />
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
    justifyContent: "center",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 50,
    backgroundColor: "rgba(0, 0, 0, 0.71)",
  },
  fomrCard: {
    backgroundColor: GLOBALS.secondary,
    width: "80%",
    height: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    borderRadius: 20,
    padding: 16,
    gap: 10,
  },
  formCardTitle: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  formCardTitleLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: GLOBALS.text,
  },
  formInputs: {
    width: "100%",
    height: "auto",
    display: "flex",
    gap: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default AddEvent;
