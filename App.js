import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image} from 'react-native';
import { useTheme, Button, Appbar, } from 'react-native-paper';
import { Provider as PaperProvider, MD3LightTheme as DefaultTheme, } from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import TitleAppbar from './components/TitleAppbar'
import AirlineDropDown from './components/AirlineDropdown';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SSODelta from './pages/SSODelta';
import Home from './pages/Home';
import SeatMap from './pages/SeatMap';
import FlightSelect from './pages/FlightSelect';
import Inbox from './pages/Inbox';
const Stack = createNativeStackNavigator()

export default function App() {
 

  
  return (
    
   <NavigationContainer>
    
      <Stack.Navigator>
      <Stack.Screen
          name="Inbox"
          component={Inbox}
          options={{title: 'Request Messages'}}
        />
      
      <Stack.Screen
          name="SSODelta"
          component={SSODelta}
          options={{title: 'Sign In to Delta SSO'}}
        />
        <Stack.Screen
          name="FlightSelect"
          component={FlightSelect}
          options={{title: 'Please Select Your Flights'}}
        />
         <Stack.Screen
          name="SeatMap"
          component={SeatMap}
          options={{title: 'Request to Seat Swap'}}
        />
        {/* <Stack.Screen
          name="Inbox"
          component={Inbox}
          options={{title: 'Request Messages'}}
        /> */}

        
       
        
        
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


