import 'react-native-gesture-handler'
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigators/stackNavigator';
import DrawerNavigator from './src/navigators/drawerNavigator';
export default function App() {
  console.disableYellowBox = true; 
  
  return (
    <NavigationContainer> 
      <StatusBar />
      <StackNavigator/>  
      {/* <DrawerNavigator/> */}
  </NavigationContainer>
  );
}

