import * as React from 'react';
import { StyleSheet, Text, View , Image} from 'react-native';
import { useTheme, Button, Appbar, } from 'react-native-paper';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
const SSODelta = (props) =>{ 
    const theme = useTheme();
    return (
    <PaperProvider theme = {theme}>
    <SafeAreaProvider>
    <Appbar.Header>
    <Appbar.BackAction onPress={() => {}} />
    <Appbar.Content title="Title" />
    <Appbar.Action icon="calendar" onPress={() => {}} />
    <Appbar.Action icon="magnify" onPress={() => {}} />
  </Appbar.Header>
    
    </SafeAreaProvider>
</PaperProvider>
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

export default SSODelta;