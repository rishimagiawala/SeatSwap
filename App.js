import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image} from 'react-native';
import { useTheme, Button, Appbar, } from 'react-native-paper';
import { Provider as PaperProvider } from 'react-native-paper';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import TitleAppbar from './components/TitleAppbar'
import AirlineDropDown from './components/AirlineDropdown';

export default function App() {
  const theme = useTheme();
  
  return (
    <PaperProvider>
    <SafeAreaProvider>
      
    <View style={{backgroundColor: theme.colors.primary}}>
      <TitleAppbar title = "Welcome to My App" yogith="Hello" />
      <AirlineDropDown select= "Select a Gender" />
    </View>
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
