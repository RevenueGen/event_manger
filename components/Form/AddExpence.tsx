import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { GLOBALS } from "../../styles/Global";

interface ExpenceDataType {
    id : string | number,
    expenceType : string,
    date : string,
    pcs : string ,
    eventYaUser : string,
    time : string,
  }

const defaultData:ExpenceDataType = {
    id : Date.now(),
    expenceType : "",
    date : "",
    pcs : "0",
    eventYaUser : "",
    time : ""
}

interface AddExpenceProps {
  handleCancel?: () => void;
  handleSave: (data: ExpenceDataType) => void;
  saveBtnText?: string;
  cancelBtnText?: string;
  title : string
}
const AddExpence: React.FC<AddExpenceProps> = ({
  handleCancel,
  handleSave,
  saveBtnText,
  cancelBtnText,
  title,
}) => {
  const [formData, setFormData] = useState<ExpenceDataType>(defaultData);
  
  return (
    <View style={styles.mainForm}>
      <View style={styles.fomrCard}>
        <View style={styles.formCardTitle}>
          {formData.expenceType === "" ? (
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
            label={"Expence Type"}
            mode="outlined"
            placeholder="Chair | Tent | Labour"
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
            value={formData.expenceType}
            onChangeText={(text) => {
              setFormData((prev) => ({ ...prev, expenceType: text }));
            }}
          />
          <TextInput
            label={"Reason, To"}
            mode="outlined"
            placeholder="Labour Etc"
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
            value={formData.eventYaUser}
            onChangeText={(text) => {
              setFormData((prev) => ({ ...prev, eventYaUser: text }));
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
            label={"Time"}
            mode="outlined"
            placeholder={"8:45 AM"}
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
            value={formData.time}
            onChangeText={(text) => {
              setFormData((prev) => ({ ...prev, time: text }));
            }}
          />
          <TextInput
            label={"Price"}
            mode="outlined"
            placeholder={`1000`}
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
            value={formData.pcs}
            keyboardType="number-pad"
            onChangeText={(text) => {
              setFormData((prev) => ({ ...prev, pcs: text }));
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

export default AddExpence;
