import React from 'react'
import { Pressable, Text } from 'react-native'
import { StyleSheet } from 'react-native'
import { View } from 'react-native'
import Material from 'react-native-vector-icons/MaterialIcons'
import { GLOBALS } from '../../styles/Global'

interface DropDownActions {
    editHandeler? : () => void,
    deleteHandeler? : () => void,
}

const EventDropDown:React.FC<DropDownActions>= ({ editHandeler, deleteHandeler}) => {
  return (
    <View style={styles.mainDropDown}>
        <Pressable onPress={editHandeler} style={({pressed}) => [styles.dropMenus, 
            pressed ? styles.menuPress : null
        ]}>
            <Material name='edit' color={"white"} size={20}/>
            <Text style={styles.menuText}>Edit</Text>
        </Pressable>
        <View style={styles.divider}></View>
        <Pressable onPress={deleteHandeler} style={({pressed}) => [styles.dropMenus, 
            pressed ? styles.menuPress : null
        ]}>
            <Material name='delete-outline' color={"red"} size={20}/>
            <Text style={styles.menuText}>Delete</Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    mainDropDown : {
        backgroundColor : GLOBALS.secondary,
        width : 110,
        height : "auto",
        padding : 5,
        position : "absolute",
        top : 30,
        right : 0,
        borderRadius : 20,
        borderColor : "gray",
        borderWidth : 1,
        display : "flex",
        alignItems : "center",
        justifyContent : "center"
    },
    dropMenus : {
        width : "100%",
        height : "auto",
        display : "flex",
        alignItems : 'center',
        justifyContent : "flex-start",
        gap : 10,
        padding : 10,
        flexDirection : "row",
        borderStyle : "solid",
        borderRadius : 20,
    },
    divider : {
        width : 80,
        height : 1,
        backgroundColor : "gray",
    },
    menuPress : {
        backgroundColor : "gray",
    },
    menuText : {
        fontSize : 15, 
        color : GLOBALS.text,
        fontWeight : "500"
    }
})

export default EventDropDown