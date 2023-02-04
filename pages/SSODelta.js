import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useTheme, Button, Appbar, TextInput } from 'react-native-paper';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
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



const SSODelta = (props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("")
  const theme = useTheme();

  return (
    <PaperProvider theme={theme}>
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
        <Button icon="camera" mode="contained" onPress={function () {
          // console.log("Email: " + email + "| Password: " + password)
          signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              console.log("cyring");
              const user = userCredential.user;
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log("CRYING");
            });

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