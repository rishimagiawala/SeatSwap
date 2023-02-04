import * as React from 'react';
import DropDown from "react-native-paper-dropdown";


function AirlineDropDown(props){
    const [showDropDown, setShowDropDown] = React.useState(false);
    const [gender, setGender] = React.useState("");
    // const [showMultiSelectDropDown, setShowMultiSelectDropDown] = useState(false);
    
    const genderList = [
      {
        label: "Male",
        value: "male",
      },
      {
        label: "Female",
        value: "female",
      },
      {
        label: "Others",
        value: "others",
      },
    ];
    const colorList = [
      {
        label: "White",
        value: "white",
      },
      {
        label: "Red",
        value: "red",
      },
      {
        label: "Blue",
        value: "blue",
      },
      {
        label: "Green",
        value: "green",
      },
      {
        label: "Orange",
        value: "orange",
      },
    ];
    
   return (
    
    <DropDown
    label={props.select}
    mode={"outlined"}
    visible={showDropDown}
    showDropDown={() => setShowDropDown(true)}
    onDismiss={() => setShowDropDown(false)}
    value={gender}
    setValue={setGender}
    list={genderList}
  />
  );
   }
  export default AirlineDropDown;
