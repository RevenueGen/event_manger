import React, { useEffect, useState } from "react";
import {
  FlatList,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
} from "react-native";
import { View } from "react-native";
import { GLOBALS } from "../../styles/Global";
import Loading from "../../components/Loader/Loader";
import PageHeader from "../../components/PageHeader/PageHeader";
import EventCard from "../../components/Card/EventCard";
import { endEvent } from "react-native/Libraries/Performance/Systrace";
import AddEvent from "../../components/Form/AddEvent";
import { KeyboardAvoidingViewComponent } from "react-native";

interface InterfaceEventData {
  title: string;
  location: string;
  date: string;
  eventHolderName: string;
  phoneNo: string;
}

const Events: React.FC = () => {
  const [addEvent, setAddEvent] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [eventData, setEventData] = useState<InterfaceEventData[]>([{
    title : "Birthday",
    date : "15 Jan 2025",
    eventHolderName : "Ashutsoh Paliwal",
    location : "Nikumbh",
    phoneNo : "+91 6367180418"
  }]);
  const [edit, setEdit] = useState<boolean>(false);
  const [editData, setEditData] = useState<InterfaceEventData | null>(null);
  

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <Loading />;
  }

  const editHandeler = (idx: number) => {
    setEdit(!edit);
    const data = eventData.filter((event, i)=> i===idx);
    setEditData(data as any);
  };

  const showEditForm = () => {
    setEdit(!edit);
  }

  const deleteHandler = (idx: number) => {
    const events = eventData.filter((event, i) => i !== idx);
    setEventData(events);
  };

  const cancelHandler = () => {
    setAddEvent(!addEvent);
  };

  const addHandleSave = (data: any) => {
    setEventData((prev) => [...prev, data]);
    setAddEvent(!addEvent);
  };



  return (
    <>
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <View style={styles.mainEvents}>
          {addEvent && (
            <AddEvent handleCancel={cancelHandler} handleSave={addHandleSave} saveBtnText="Add" cancelBtnText="Cancel" title="New Event"/>
          )}
          {edit && (
            <AddEvent handleCancel={showEditForm} handleSave={addHandleSave} saveBtnText="Save" cancelBtnText="Cancel" title="Edit Event"/>
          )}
          <PageHeader title="Events" addHandler={cancelHandler} />
          <ScrollView
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <View style={styles.centerView}>
              {eventData.map((event, index) => {
                return (
                  <EventCard
                    key={index}
                    editHandeler={()=> editHandeler(index)}
                    deleteHandler={() => deleteHandler(index)}
                    title={event.title}
                    location={event.location}
                    date={event.date}
                    eventHolderName={event.eventHolderName}
                    phoneNo={event.phoneNo}
                  />
                );
              })}
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

export default Events;
