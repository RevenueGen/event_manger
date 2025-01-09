import { SafeAreaView, StatusBar } from "react-native";
import HomeScreen from "./pages/HomePage/Home";
import { GLOBALS } from "./styles/Global";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ReportScreen from "./pages/Report/Report";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";

export type RootStackParamList = {
  Home: undefined;
  Report: { itemId: number; otherParam?: string };
  Login : undefined;
  Signup : undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <SafeAreaView style={{
      width : "100%",
      height : "100%"
    }}>
      <StatusBar animated={true} backgroundColor={GLOBALS.secondary} />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown : false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Report" component={ReportScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
      </NavigationContainer> 
    </SafeAreaView>
  );
}
