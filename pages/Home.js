import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SelectList} from 'react-native-dropdown-select-list'

const App = () => {
    const [selected, setSelected] = React.useState("");
    const data = [
        {key:'1', value:'Delta ', disabled:true},
        {key:'2', value:'Appliances'},
        {key:'3', value:'Cameras'},
        
    ]
}

const HomeScreen = ({navigation}) => {
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigation.navigate('Profile', {name: 'Jane'})
        }
      />
    );
  };
  const ProfileScreen = ({navigation, route}) => {
    return <Text>This is {route.params.name}'s profile</Text>;
  };