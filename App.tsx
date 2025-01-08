import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import Home from "./pages/HomePage/Home";
import { GLOBALS } from "./styles/Global";
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height:  "100%",
    flex: 1,
    backgroundColor: GLOBALS.secondary,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
export default function App() {
  return (
    <SafeAreaView style={{
      width : "100%",
      height : "100%"
    }}>
      <StatusBar animated={true} backgroundColor={GLOBALS.secondary} />
      <View style={styles.container}>
        <Home />
      </View>
    </SafeAreaView>
  );
}
