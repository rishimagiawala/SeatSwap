import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image} from 'react-native';
import { useTheme, Button, Appbar, } from 'react-native-paper';
import { Provider as PaperProvider } from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import TitleAppbar from './components/TitleAppbar'
import AirlineDropDown from './components/AirlineDropdown';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SSODelta from './pages/SSODelta';
const Stack = createNativeStackNavigator()
export default function App() {
  const theme = useTheme();
  
  return (
   <NavigationContainer>
    
      <Stack.Navigator>
        <Stack.Screen
          name="SSODelta"
          component={SSODelta}
          options={{title: 'Sign In to Delta'}}
        />
       
        
        
      </Stack.Navigator>
    
    
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
