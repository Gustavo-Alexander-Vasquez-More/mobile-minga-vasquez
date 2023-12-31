import React, { useEffect, useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { View, Text, Image, TouchableHighlight, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Home from '../components/home';
import TabsNavigator from './tabsNavigator';
import StackNavigator from './stackNavigator';
import mangaDetail from '../components/mangaDetail';
import one from '../../assets/one.png'
import mangas from '../components/mangas';
console.disableYellowBox = true; 
const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  const [user, setUser] = useState(null);

  const getUserData = async () => {
    try {
      const userString = await AsyncStorage.getItem('user');
      if (userString) {
        const userObj = JSON.parse(userString);
        setUser(userObj);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('token');
      await AsyncStorage.removeItem('user');
      await AsyncStorage.removeItem('photo');
      props.navigation.navigate('Index');
    } catch (error) {
      console.log(error);
    }
  };
  function verfiedUrl(photo){
    if(photo.startsWith('http')){ //si foto empieza con http entonces devuelve la foto 
      return photo
    }else{
    return `https://minga-back-vasquez-production.up.railway.app/${photo}`
    }
    
  }

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.imgContainer}>
        <Image style={styles.imgDrawer} source={one} />
        </View>
      <View style={styles.userContainer}>
        {user?.photo && <Image style={styles.userPhoto} source={{ uri: verfiedUrl(user.photo) }} />}
        {user?.email && <Text style={styles.userEmail}>{user.email}</Text>}
      </View>
      <DrawerItemList {...props} />
      <DrawerItem label="Log Out" onPress={logout} />
    </DrawerContentScrollView>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      unmountOnBlur={true}
    >
      <Drawer.Screen name="Home" component={TabsNavigator} />
      <Drawer.Screen name="Mangas" component={mangas} />
      
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  userPhoto: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userEmail: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  imgDrawer:{
    width:'100%',
    height:20
  },
  imgContainer:{
  width:'100%',
  height:130
  },
  imgDrawer:{
    width:'100%',
    height:130
  }
});

export default DrawerNavigator;
