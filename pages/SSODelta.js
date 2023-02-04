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
    <Text>PLease Me</Text>
    
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