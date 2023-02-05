import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image} from 'react-native';
import { useTheme, Button, Appbar, FAB, } from 'react-native-paper';
import { Provider as PaperProvider } from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
// import { SelectList } from 'react-native-dropdown-select-list'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AirlineDropDown from '../components/AirlineDropdown';
import {createNativeStackNavigator} from '@react-navigation/native-stack';




const Home = ({navigation}) => {
  const [airline, setAirline] = React.useState("Delta SSO");
theme= useTheme();
    return (
      <PaperProvider theme = {theme}>
        <SafeAreaProvider>
        <View style = {styles.container}>
         <Image style = {styles.backLogo} source = {require('../assets/SeatSwap.png')}/> 

        <Text style = {styles.text}>Welcome to Seat Swap! Please select your airline.</Text>        
         <AirlineDropDown setAirline={setAirline} style = {styles.dropDown}/>  

         <Button buttonColor= "#003268" textColor = "#FFFFFF" style={styles.loginButton} onPress = {() => navigation.navigate('SSODelta')}>
            Sign in with {airline}
          </Button>
         </View>
      </SafeAreaProvider>
      </PaperProvider>
      
    );
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      padding: 20,
      backgroundColor: '#fff',     
      justifyContent: 'center',
      
    },
    backLogo: {
      position: 'absolute', 
      bottom: 375,
      left: -57,

    },
    frontLogo: {
      height: 250,
      width: 250,
      position: 'absolute',
      bottom: 500,
      left: 75,
      opacity: .5, 
      backgroundColor: '#000000'
    },  
    text: {
      borderRightWidth: 10,
      borderLeftWidth: 10,
    },  
    dropDown: {
      position: 'flex',
      bottom: -100,
      padding: "-10px -10px"
    },
    loginButton:{
      marginTop: 30
    }
  });
  
 
  
  export default Home;