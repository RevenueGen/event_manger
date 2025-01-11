import React, { useEffect, useState } from 'react'
import { StyleSheet, Text } from 'react-native'
import { View } from 'react-native'
import { GLOBALS } from '../../styles/Global'
import Loading from '../../components/Loader/Loader'

const Analytics:React.FC = () => {
    const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if(loading){
    return(
        <Loading/>
    )
  }

  return (
    <View style={styles.mainAnalytcs}>
        <Text>Analytics</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    mainAnalytcs : {
        width : "100%",
        height : "100%",
        display : "flex",
        backgroundColor : GLOBALS.primary,
        alignItems : "center",
        justifyContent : "center",
        position : "relative"
    }
})

export default Analytics