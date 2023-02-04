import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image} from 'react-native';
import { useTheme } from 'react-native-paper';



export default function App() {
  const theme = useTheme();
  
  return (
    <View style={{backgroundColor: theme.colors.primary}}>
      
      <StatusBar style="auto" />
    </View>
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
