import React from 'react';

import { SafeAreaView, StyleSheet, Text, View, Image, ImageBackground, Button, TouchableHighlight} from 'react-native';
import menu from '../../assets/Menu.png';
import logo from '../../assets/logo2.png';
import kaneki from '../../assets/kaneki.png'
console.disableYellowBox = true; 
const home = (props) => {
    return (
    <ImageBackground
      source={kaneki} // Reemplaza la ruta con la ubicación de tu imagen de fondo
      style={styles.container}
    >
      <View style={styles.navbar}>
        <TouchableHighlight activeOpacity={0.9} underlayColor={'rgba(191, 184, 184, 0.5)'} onPress={()=>props.navigation.toggleDrawer()}>
          <Image style={styles.menu} source={menu} />
        </TouchableHighlight>
          <Image style={styles.logo} source={logo} />
      </View>
      <View style={styles.Hero}>
        <Text style={styles.titleHome} >Your favourite manga reader 😏</Text>
        <Text style={styles.descriptApp} >is an exceptional app for all manga lovers. With a wide range of titles available, from classics to the latest releases, this app is perfect for those who want to read manga anytime, anywhere.</Text>
        <TouchableHighlight onPress={()=>props.navigation.navigate('Mangas')} style={styles.buttonRead}>
        <Text style={styles.buttontextColor}>Start reading the manga</Text>
        </TouchableHighlight>
            
      </View>
      </ImageBackground>
  );
}

export default home;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
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
    Hero:{
      flex:1,
      width:'100%',
      height:20,
      justifyContent:'space-between',
      paddingVertical:160,
      paddingHorizontal:30
    },
    titleHome:{
      color:'white',
      fontSize:50,
      flex: 0,
      textAlign:'center',
    },
    descriptApp:{
      color:'white',
      fontSize:18,
      textAlign:'center'
    },
    buttonRead:{
        width:'100%',
        padding:10,
        backgroundColor:'green',
        borderRadius:10,
        alignItems:'center',
    },
    buttontextColor:{
        color:'white',
        fontSize:17,
        
    }
  });
  