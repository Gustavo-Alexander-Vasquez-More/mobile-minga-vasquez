import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native'
import React from 'react'
import menu from '../../assets/Menu.png';
import logo from '../../assets/logo.png';
const mangas = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <TouchableHighlight activeOpacity={0.9} underlayColor={'rgba(191, 184, 184, 0.5)'} onPress={()=>props.navigation.toggleDrawer()}>
          <Image style={styles.menu} source={menu} />
        </TouchableHighlight>
        <Text style={styles.title}>Mangas</Text>
          <Image style={styles.logo} source={logo} />
      </View>
      </View>
  )
}

export default mangas

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'black',
    flex:1
},
navbar: {
  width: '100%',
  height: '8%',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingHorizontal: 15,
  
},
logo: {
  width: 40,
  height: 55,
  resizeMode: 'contain', // Para ajustar el contenido de la imagen dentro del contenedor
},
menu: {
  height: 30,
  width: 50,
},
title:{
  color:'white',
  fontSize:20
}
})