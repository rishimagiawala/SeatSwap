import * as React from 'react';
import DropDown from "react-native-paper-dropdown";


function AirlineDropDown(props){
    const [showDropDown, setShowDropDown] = React.useState(false);
    const [gender, setGender] = React.useState("Delta");
    // const [showMultiSelectDropDown, setShowMultiSelectDropDown] = useState(false);
    
    const genderList = [
      {
        label: "Delta",
        value: "Delta",
      },
      {
        label: "Spirit",
        value: "Spirit",
      },
      {
        label: "American Airlines",
        value: "American Airlines",
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
    setValue={(value)=>{
      props.setAirline(value + " SSO")
      setGender(value)
    }}
    list={genderList}
    
  />
  );
   }
  export default AirlineDropDown;
