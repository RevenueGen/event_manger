import { StyleSheet } from "react-native";
import { View } from "react-native";
import { GLOBALS } from "../../styles/Global";
import { ActivityIndicator } from "react-native-paper";

const Loading = () => {
  return <View style={styles.container}>
    <ActivityIndicator animating={true} size={50} color={GLOBALS.highLight} />
  </View>;
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor : GLOBALS.primary
  },
});

export default Loading;
