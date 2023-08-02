import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet } from 'react-native';
import Mangas from '../components/mangas';
import Home from '../components/home';
import mangaDetail from '../components/mangaDetail';
import casa from '../../assets/casa.png';
import libro from '../../assets/libro.png';
import React from 'react';

const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => <Image style={styles.imgManga} source={casa} />,
        }}
      />
      <Tab.Screen
        name="Mangas"
        component={Mangas}
        options={{
          tabBarIcon: () => <Image style={styles.imgLibro} source={libro} />,
        }}
      />
      <Tab.Screen
        name="Details"
        component={mangaDetail}
        options={({ route }) => ({
          tabBarButton: () => null, // Oculta completamente la pestaña "Details"
        })}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  imgLibro: {
    width: 20,
    height: 20,
  },
  imgManga: {
    width: 20,
    height: 20,
  },
});

export default TabsNavigator;
