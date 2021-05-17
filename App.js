import React from "react";
import Bio from "./src/screens/Bio";
import Home from "./src/screens/Home";
import Blog from "./src/screens/Blogs";
import Draws from "./src/screens/Drawer";
import Photos from "./src/screens/Photos";
import Contact from "./src/screens/Contacts";
import { Provider, DefaultTheme } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
console.disableYellowBox = true;

const Drawer = createDrawerNavigator();

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: { ...DefaultTheme.colors, primary: "black" },
};

export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Drawer.Navigator
          drawerPosition="right"
          initialRouteName="Home"
          drawerContent={(props) => <Draws {...props} />}
        >
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Photos" component={Photos} />
          <Drawer.Screen name="Bio" component={Bio} />
          <Drawer.Screen name="Blog" component={Blog} />
          <Drawer.Screen name="Contact" component={Contact} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
