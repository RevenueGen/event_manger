import { SafeAreaView, StatusBar, View } from "react-native";
import HomeScreen from "./pages/HomePage/Home";
import { GLOBALS } from "./styles/Global";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ReportScreen from "./pages/Report/Report";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Test from "./pages/Test/Test";
import Loading from "./components/Loader/Loader";
import Example from "./pages/Example/Example";
import Analytics from "./pages/Analytics/Analytics";
import { useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import Users from "./pages/Users/Users";
import Expences from "./pages/Expences/Expences";
import Events from "./pages/Events/Events";

export type RootStackParamList = {
  Home: undefined;
  Report: { itemId: number; otherParam?: string };
  Login : undefined;
  Signup : undefined;
  Test : undefined;
  Loading : undefined;
  Example : undefined;
  Analytics : undefined;
  Events : undefined;
  Users : undefined;
  Expences : undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [auth, setAuth] = useState<boolean>(true);
  return (
    <SafeAreaView style={{
      width : "100%",
      height : "100%",
    }}>
      <StatusBar animated={true} backgroundColor={GLOBALS.secondary} />
      <NavigationContainer>
        <Stack.Navigator initialRouteName={auth ? "Home":"Login"} screenOptions={{headerShown : false}}>     
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Report" component={ReportScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Test" component={Test} />
        <Stack.Screen name="Loading" component={Loading} />
        <Stack.Screen name="Example" component={Example} />
        <Stack.Screen name="Analytics" component={Analytics}/>
        <Stack.Screen name="Users" component={Users}/>
        <Stack.Screen name="Expences" component={Expences}/>
        <Stack.Screen name="Events" component={Events}/>
        </Stack.Navigator>
        {auth ? <Navigation/> : null}
      </NavigationContainer> 
    </SafeAreaView>
  );
}
