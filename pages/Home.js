import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image} from 'react-native';
import { useTheme, Button, Appbar, } from 'react-native-paper';
import { Provider as PaperProvider } from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Dropdown = () => {
    const [selected, setSelected] = React.useState("");
    const data = [
        {key:'1', value:'Delta ', disabled:true},
        {key:'2', value:'Appliances'},
        {key:'3', value:'Cameras'},
        
    ]
}

const Home = ({navigation}) => {
theme= useTheme();
    return (
      <PaperProvider theme = {theme}>
        <SafeAreaProvider>
        <Appbar.Header>
    <Appbar.BackAction onPress={() => {}} />
    <Appbar.Content title="TitlFFe" />
    <Appbar.Action icon="calendar" onPress={() => {}} />
    <Appbar.Action icon="magnify" onPress={() => {}} />
  </Appbar.Header>
      </SafeAreaProvider>
      </PaperProvider>
    );
  };
  export default Home;