import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../components/splash';
import Index from '../components';
import Home from '../components/home';
import Mangas from '../components/mangas';


const Stack=createStackNavigator()

const StackNavigator = () => {
  return (
   <Stack.Navigator  screenOptions={{
    headerShown:false
   }} >
    <Stack.Screen name="Splash" component={Splash} />
    <Stack.Screen name="Index" component={Index} />
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Mangas" component={Mangas} />
    </Stack.Navigator>
  );
}

export default StackNavigator;