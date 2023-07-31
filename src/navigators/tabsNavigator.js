import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image ,StyleSheet } from 'react-native';
import Mangas from '../components/mangas';
import Chapters from '../components/chapters'
import capitulo from '../../assets/capitulo.png'
import libro from '../../assets/libro.png'
const Tab=createBottomTabNavigator()

const TabsNavigator = () => {
  return (
   <Tab.Navigator  screenOptions={{
    headerShown:false
    }} >
    <Tab.Screen name="Mangas" component={Mangas} options={{
      tabBarIcon:()=> <Image style={styles.imgLibro} source={libro}/>
    }} />
    <Tab.Screen name="Chapters" component={Chapters} options={{
      tabBarIcon:()=> <Image style={styles.imgManga} source={capitulo}/>
    }} />
   </Tab.Navigator>
  );
}
export default TabsNavigator;
const styles = StyleSheet.create({
  imgLibro:{
    width: 20,
    height:20
  },
  imgManga:{
      width: 20,
      height:20
  }
})