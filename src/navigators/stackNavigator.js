import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../components/splash';
import Index from '../components';
import Home from '../components/home';
import Mangas from '../components/mangas';
import TabsNavigator from './tabsNavigator';
import DrawerNavigator from './drawerNavigator';
import Register from '../components/register';
import mangaDetail from '../components/mangaDetail';
console.disableYellowBox = true; 
const Stack=createStackNavigator()

const StackNavigator = () => {
  return (
   <Stack.Navigator  screenOptions={{
    headerShown:false
   }} >
    <Stack.Screen name="Splash" component={Splash} />
    <Stack.Screen name="Index" component={Index} />
    <Stack.Screen name="Register" component={Register} />
    <Stack.Screen name="Home" component={DrawerNavigator} />
    </Stack.Navigator>
  );
}

export default StackNavigator;