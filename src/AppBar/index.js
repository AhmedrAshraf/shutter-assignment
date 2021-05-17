import React from "react";
import { View, Text } from "react-native";
import { Appbar } from "react-native-paper";

function Bio({ navigation }) {
  return (
    <Appbar.Header>
      <Appbar.Content title="SHUTTER"/>
      <Appbar.Action icon="menu" onPress={() => navigation.toggleDrawer()} />
    </Appbar.Header>
  );
}
export default Bio;
