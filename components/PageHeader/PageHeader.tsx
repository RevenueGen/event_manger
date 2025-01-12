import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native'
import { View } from 'react-native'
import { GLOBALS } from '../../styles/Global'
import LogoButton from '../LogoButton/LogoButton'
import Feather from 'react-native-vector-icons/Feather'
import { AnimatedHeaderHeightContext } from '@react-navigation/native-stack/lib/typescript/commonjs/src/utils/useAnimatedHeaderHeight'

interface PageHeaderProps {
    title : string,
    addHandler? : () => void,
    searchHandler? : () => void;
    filterHandler? : () => void;
}

const PageHeader:React.FC<PageHeaderProps> = ({
    title,
    addHandler,
    searchHandler,
    filterHandler
}) => {
  return (
    <View style={styles.mainHeader}>
        <Text style={styles.headingText}>{title}</Text>
        <View style={styles.logoButton}>

            {/* Add Button  */}
            <LogoButton onPress={addHandler} children={<Feather name='plus' size={20} color={"#EEEEEE"}/>}/>
            <LogoButton onPress={filterHandler} children={<Feather name='filter' size={20} color={"#EEEEEE"}/>}/>
            <LogoButton onPress={searchHandler} children={<Feather name='search' size={20} color={"#EEEEEE"}/>}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    mainHeader : {
        paddingHorizontal : 30,
        paddingVertical : 10,
        width : "100%",
        height : 100,
        backgroundColor : GLOBALS.primary,
        display : "flex",
        alignItems : "center",
        justifyContent : "space-between",
        flexDirection : "row",
    },
    headingText: {
        color: GLOBALS.highLight,
        fontSize: 20,
        fontWeight: "bold",
    },
    logoButton : {
        height : "100%",
        width : "auto",
        display : "flex",
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "center",
    }
})

export default PageHeader