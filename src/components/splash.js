import { useEffect } from 'react';
import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'
import logo from '../../assets/logo2.png'
const splash = (props) => {
    
    useEffect(() => {
        const timer = setTimeout(() => {
          props.navigation.replace('Index');
        }, 3000);
    }, []);
    
  return (
    <View style={styles.container}>
      <Image style={styles.logoSplash} source={logo}/>
    </View>
  )
}

export default splash

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black',
        alignItems:'center',
        justifyContent:'center'
    },
    logoSplash:{
        width:100,
        height:100,
        
        objectFit:'contain'
    }
})