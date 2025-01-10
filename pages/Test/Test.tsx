import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { StyleSheet } from 'react-native'
import { Button, View } from 'react-native'
import { RootStackParamList } from '../../App'
import React from 'react';

type TestProps = NativeStackScreenProps<RootStackParamList, "Test">;

const Test:React.FC<TestProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Button title='Login' onPress={()=>navigation.navigate("Login")}/>
        <Button title='Signup'onPress={()=>navigation.navigate("Signup")}/>
        <Button title='Home' onPress={()=>navigation.navigate("Home")}/>
        <Button title='Report' onPress={()=>navigation.navigate("Report", {itemId : 1})}/>
        <Button title='Loading' onPress={()=>navigation.navigate("Loading")}/>
        <Button title='Example' onPress={()=>navigation.navigate("Example")}/>
        
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        width : "100%",
        height : "100%",
        display : "flex",
        alignItems : "center",
        justifyContent : "center",
        gap : 20,
    }
})

export default Test