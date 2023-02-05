import * as React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { useTheme, Button, Appbar, TextInput, Card, Surface, Modal } from 'react-native-paper';
import { Provider as PaperProvider, MD3LightTheme as DefaultTheme, FAB, Portal, Dialog, IconButton, MD3Colors } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { delta } from '../assets/deltaLogo.png'
import SeatRow from '../components/SeatRow';
import { Foundation } from '@expo/vector-icons';
import { List } from 'react-native-paper';
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


import { initializeApp } from 'firebase/app';
// import { getAuth } from "firebase/auth";

// Optionally import the services that you want to use
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
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



const Inbox = (props) => {



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

        <View>
          <List.Section style={styles.surface}>
            <List.Subheader>Inbox</List.Subheader>

            <List.AccordionGroup style={styles.surface}>
              <List.Accordion title="Message 1"  description = "Hey you want to swap seats?" id="1" left={() => <List.Icon color={"#003268"} icon="email" />}>
                <List.Item title="Name: Janaki Pandya" />
                <List.Item title="Seat Number: 1C" />
                <List.Item title="Email: janaki.pandya@gmail.com" />
                <List.Item title="Phone Number: 707-808-9009" />
              </List.Accordion>

              <List.Accordion title="Message 2" description = "I'm in 3B would you like to swap seats with me?" id="2"left={() => <List.Icon color={"#003268"} icon="email" />}>
              <List.Item title="Name: John Krasinski" />
                <List.Item title="Seat Number: 3B" />
                <List.Item title="Email: john.krasinski@gmail.com" />
                <List.Item title="Phone Number: 404-505-6006" />
              </List.Accordion>

              <List.Accordion title="Message 3" description = "I want an aisle seat, do you want to swap?" id="3"left={() => <List.Icon color={"#003268"} icon="email" />}>
              <List.Item title="Name: Manav Patel" />
                <List.Item title="Seat Number: 4D" />
                <List.Item title="Email: manavinatl@gmail.com" />
                <List.Item title="Phone Number: 403-123-4311" />
              </List.Accordion>

              <List.Accordion title="Message 4" description = "Hey I'm in seat b2 looking to swap seats!" id="4"left={() => <List.Icon color={"#003268"} icon="email" />}>
              <List.Item title="Name: Suchir Sastry" />
                <List.Item title="Seat Number: 2C" />
                <List.Item title="Email: suchirrs@gmail.com " />
                <List.Item title="Phone Number: 102-203-3004 " />
              </List.Accordion>


            </List.AccordionGroup>


          </List.Section>
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
    flexDirection: 'column',
    padding: 20,



    marginBottom: 5,
  },
  surfaceButton: {
    marginLeft: 10
  }





});

export default Inbox;