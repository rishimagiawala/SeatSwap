import * as React from 'react';
import { Appbar } from 'react-native-paper';

const TitleAppbar = (props) => (
  <Appbar.Header>
    <Appbar.BackAction onPress={() => {}} />
    <Appbar.Content title={props.yogith} />
    <Appbar.Action icon="calendar" onPress={() => {}} />
    <Appbar.Action icon="magnify" onPress={() => {}} />
  </Appbar.Header>
);

export default TitleAppbar;