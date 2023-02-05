import * as React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { useTheme, Button, Appbar, TextInput, Card, Surface } from 'react-native-paper';
import { Provider as PaperProvider, MD3LightTheme as DefaultTheme, FAB, Portal, Dialog} from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {delta} from '../assets/deltaLogo.png'
import SeatRow from '../components/SeatRow';
import { Foundation } from '@expo/vector-icons'; 
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


import { initializeApp } from 'firebase/app';
// import { getAuth } from "firebase/auth";

// Optionally import the services that you want to use
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, onValue, set, get, child, update } from "firebase/database";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA50FO3bt1bCSvDHZ3wvU6_0F9bn_PfBq4",
  authDomain: "seatswapuga.firebaseapp.com",
  databaseURL: "https://seatswapuga-default-rtdb.firebaseio.com",
  projectId: "seatswapuga",
  storageBucket: "seatswapuga.appspot.com",
  messagingSenderId: "433869449365",
  appId: "1:433869449365:web:7f6db6fb179eae6f09939c",
  measurementId: "G-VJ47NVMM4C"
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

// Initialize Firebase Authentication and get a reference to the service
// const auth = getAuth(app);
const auth = getAuth(app);
const userDB = getDatabase(app);


const SeatMap = (props) => {
    const [visible, setVisible] = React.useState(false);

    const showDialog = () => setVisible(true);
    const [chosenSeat, setChosenSeat] = React.useState();
    const [currentSeat, setCurrentSeat] = React.useState();
    const [seats, setSeats] = React.useState(props.route.params.seats);
    const hideDialog = () => setVisible(false);
    const sendRequest = (requestedSeat) => {
        setChosenSeat(requestedSeat);
        
        showDialog();
    }
    // React.useEffect(()=>{
    //     const db = getDatabase(app);
    //     get(child(db, `seats`))
    //             .then((snapshot) => {
                    
                   
    //              console.log(snapshot.val())
    //             })
    //             .catch((error) => {
    //               console.error(error);
    //             });
    // }, [])
    

  const theme = {
    ...DefaultTheme,
    colors: {
        "primary": "rgb(0, 104, 116)",
"onPrimary": "rgb(255, 255, 255)",
"primaryContainer": "rgb(151, 240, 255)",
"onPrimaryContainer": "rgb(0, 31, 36)",
"secondary": "rgb(74, 98, 103)",
"onSecondary": "rgb(255, 255, 255)",
"secondaryContainer": "rgb(205, 231, 236)",
"onSecondaryContainer": "rgb(5, 31, 35)",
"tertiary": "rgb(82, 94, 125)",
"onTertiary": "rgb(255, 255, 255)",
"tertiaryContainer": "rgb(218, 226, 255)",
"onTertiaryContainer": "rgb(14, 27, 55)",
"error": "rgb(186, 26, 26)",
"onError": "rgb(255, 255, 255)",
"errorContainer": "rgb(255, 218, 214)",
"onErrorContainer": "rgb(65, 0, 2)",
"background": "rgb(250, 253, 253)",
"onBackground": "rgb(25, 28, 29)",
"surface": "rgb(250, 253, 253)",
"onSurface": "rgb(25, 28, 29)",
"surfaceVariant": "rgb(219, 228, 230)",
"onSurfaceVariant": "rgb(63, 72, 74)",
"outline": "rgb(111, 121, 122)",
"outlineVariant": "rgb(191, 200, 202)",
"shadow": "rgb(0, 0, 0)",
"scrim": "rgb(0, 0, 0)",
"inverseSurface": "rgb(46, 49, 50)",
"inverseOnSurface": "rgb(239, 241, 241)",
"inversePrimary": "rgb(79, 216, 235)",
"elevation": {
  "level0": "transparent",
  "level1": "rgb(238, 246, 246)",
  "level2": "rgb(230, 241, 242)",
  "level3": "rgb(223, 237, 238)",
  "level4": "rgb(220, 235, 237)",
  "level5": "rgb(215, 232, 234)"
},
"surfaceDisabled": "rgba(25, 28, 29, 0.12)",
"onSurfaceDisabled": "rgba(25, 28, 29, 0.38)",
"backdrop": "rgba(41, 50, 52, 0.4)"
      }
    }

  return (
    <PaperProvider theme={theme}>
      <SafeAreaProvider>
      
      <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>Are You Sure You Want to Change Your Seat?</Dialog.Title>
            <Dialog.Content>
              <Text variant="bodyMedium">Requested Seat Is: {chosenSeat}</Text>
              <Text variant="bodyMedium">Current Seat Is: {currentSeat}</Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={()=>{
                 const db = getDatabase(app);
                 set(ref(db, 'seats/' + chosenSeat), props.route.params.seats[currentSeat])
                set(ref(db, 'seats/' + currentSeat), props.route.params.seats[chosenSeat])
               hideDialog();
                
              
              
                 
              }
                
                }>Yes</Button>
              <Button onPress={hideDialog}>No</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
     <SeatRow setCurrentSeat={setCurrentSeat} sendRequest={sendRequest} userEmail= {props.route.params.userEmail} a={props.route.params.seats[0]} b= {props.route.params.seats[1]} c= {props.route.params.seats[2]} d = {props.route.params.seats[3]} rowNumber = '1'/>
     <SeatRow setCurrentSeat={setCurrentSeat} sendRequest={sendRequest} userEmail= {props.route.params.userEmail} a={props.route.params.seats[4]} b= {props.route.params.seats[5]} c= {props.route.params.seats[6]} d = {props.route.params.seats[7]} rowNumber = '2'/>
     <SeatRow setCurrentSeat={setCurrentSeat} sendRequest={sendRequest} userEmail= {props.route.params.userEmail} a={props.route.params.seats[8]} b= {props.route.params.seats[9]} c= {props.route.params.seats[10]} d = {props.route.params.seats[11]} rowNumber = '3'/>
     <SeatRow setCurrentSeat={setCurrentSeat} sendRequest={sendRequest} userEmail= {props.route.params.userEmail} a={props.route.params.seats[12]} b= {props.route.params.seats[13]} c= {props.route.params.seats[14]} d = {props.route.params.seats[15]} rowNumber = '4'/>
     <View style={{flexDirection: 'row', gap: 4, justifyContent: 'space-around',}}>
     <Surface style={styles.surface} elevation={4}>
     <Foundation name="male-female" size={40} color="black" />
  </Surface>
  <Surface style={styles.surface} elevation={4}>
  <Foundation name="male-female" size={40} color="black" />

  </Surface>
  <FAB
    icon="email-alert-outline"
    
    style={styles.fab}
    onPress={() => {props.navigation.navigate('Inbox', {
        seats: props.route.params.seats,
        userEmail: props.route.params.email
       })
      }}
  />

     </View>
      </SafeAreaProvider>
    </PaperProvider>
  );

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
    
  },
  inputField: {
    marginBottom: 10,
    marginHorizontal: 10,

    
  },
  loginButton: {
    marginTop: 10,
    width: 200,
    alignSelf: 'center'
  },
  tinyLogo: {
    justifyContent: 'flex-end',
    alignSelf: 'center',
    width: 200,
    height: 200,
  },
  flightCard: {
    marginVertical: 10,
    marginHorizontal: 3
  },
  cabinColumn: {
    
  },
  surface: {
    padding: 8,
    height: 80,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 70,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor:'white',
    
  },
  
  

});

export default SeatMap;