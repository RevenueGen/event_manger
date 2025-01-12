import React, { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
} from "react-native";
import { View } from "react-native";
import { GLOBALS } from "../../styles/Global";
import Loading from "../../components/Loader/Loader";
import PageHeader from "../../components/PageHeader/PageHeader";
import ExpenceCard from "../../components/Card/ExpenceCard";
import AddExpence from "../../components/Form/AddExpence";

interface InterfaceExpenceData {
  id : string | number,
  expenceType : string,
  date : string,
  pcs : string,
  eventYaUser : string,
  time : string,
}

const Expences: React.FC = () => {
  const [addExpence, setAddExpence] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [expenceData, setExpenceData] = useState<InterfaceExpenceData[]>([{
    id : Date.now(),
    expenceType : "Char",
    date : "15 Jan 2025",
    pcs : "- 20",
    eventYaUser : "Ashutosh",
    time : "8:55 AM"
  }]);
  const [edit, setEdit] = useState<boolean>(false);
  const [editData, setEditData] = useState<InterfaceExpenceData | null>(null);
  

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <Loading />;
  }

  const showEditForm = () => {
    setEdit(!edit);
  }

  const deleteHandler = (idx: number) => {
    const events = expenceData.filter((event, i) => i !== idx);
    setExpenceData(events);
  };

  const cancelHandler = () => {
    setAddExpence(!addExpence);
  };

  const addHandleSave = (data: any) => {
    setExpenceData((prev) => [...prev, data]);
    setAddExpence(!addExpence);
  };



  return (
    <>
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <View style={styles.mainEvents}>
          {addExpence && (
            <AddExpence handleCancel={cancelHandler} handleSave={addHandleSave} saveBtnText="Add" cancelBtnText="Cancel" title="New Expence"/>
          )}
          {/* {edit && (
            <AddExpence handleCancel={showEditForm} handleSave={addHandleSave} saveBtnText="Save" cancelBtnText="Cancel" title="Edit Event"/>
          )} */}
          <PageHeader title="Expences" addHandler={cancelHandler} />
          <ScrollView
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <View style={styles.centerView}>
            {
              expenceData.map((expence)=>{
                return <ExpenceCard key={expence.id} title={expence.expenceType} date={expence.date} pics={expence.pcs}/>
              })
            }
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  mainEvents: {
    width: "100%",
    height: "100%",
    display: "flex",
    backgroundColor: GLOBALS.primary,
    alignItems: "center",
    justifyContent: "flex-start",
    position: "relative",
  },
  centerView: {
    paddingHorizontal: 20,
    width: "100%",
    height: "auto",
    alignItems: "center",
    justifyContent: "center",
  },
  eventCards: {
    width: "100%",
    height: "auto",
  },
});

export default Expences;
