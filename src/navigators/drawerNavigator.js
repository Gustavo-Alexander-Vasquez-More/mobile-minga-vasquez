import { DrawerContent, createDrawerNavigator } from '@react-navigation/drawer';
import { getHeaderTitle } from '@react-navigation/elements';
import Home from '../components/home';
import TabsNavigator from './tabsNavigator';
import Mangas from '../components/mangas';
import menu from '../../assets/Menu.png'
const Drawer=createDrawerNavigator()

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
    screenOptions={{
        headerShown:false
}}
>
    <Drawer.Screen name="Home" component={Home} />
    <Drawer.Screen name="Mangas" component={TabsNavigator} />
   </Drawer.Navigator>
  );
}

export default DrawerNavigator;
