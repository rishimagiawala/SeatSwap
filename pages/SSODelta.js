import * as React from 'react';
import { StyleSheet, Text, View , Image} from 'react-native';
import { useTheme, Button, Appbar, TextInput} from 'react-native-paper';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
const SSODelta = (props) =>{ 
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("")
    const theme = useTheme();
    return (
    <PaperProvider theme = {theme}>
    <SafeAreaProvider>
    <TextInput 
     label="Email"
     value={email}
     onChangeText={email => setEmail(email)}
    />
    <TextInput
      label="Password"
      value={password}
      onChangeText={password => setPassword(password)}
    />
     <Button icon="camera" mode="contained" onPress={function(){
        console.log("Email: " + email + "| Password: " + password)
     }}>
    Press me
  </Button>
    
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