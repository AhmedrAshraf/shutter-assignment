import React from "react";
import { Drawer } from "react-native-paper";
import { View, StyleSheet, Linking } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

function CustomDrawer(props) {
  const { navigation } = props;

  const fb = async () => {
    await Linking.openURL("https://www.facebook.com");
  };

  const insta = async () => {
    await Linking.openURL("https://www.instagram.com");
  };

  const twitter = async () => {
    await Linking.openURL("https://twitter.com");
  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <Drawer.Section>
            <DrawerItem
              label="Home"
              labelStyle={styles.label}
              onPress={() => navigation.navigate("Home")}
            />
            <DrawerItem
              label="Photos"
              labelStyle={styles.label}
              onPress={() => navigation.navigate("Photos")}
            />
            <DrawerItem
              label="Bio"
              labelStyle={styles.label}
              onPress={() => navigation.navigate("Bio")}
            />
            <DrawerItem
              label="Blog"
              labelStyle={styles.label}
              onPress={() => navigation.navigate("Blog")}
            />
            <DrawerItem
              label="Contact"
              labelStyle={styles.label}
              onPress={() => navigation.navigate("Contact")}
            />
          </Drawer.Section>
          <View style={styles.row}>
            <FontAwesome5 onPress={fb} style={styles.icon} name="facebook-f" />
            <FontAwesome5 onPress={insta} style={styles.icon} name="twitter" />
            <FontAwesome5
              onPress={twitter}
              style={styles.icon}
              name="instagram"
            />
          </View>
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

export default CustomDrawer;

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    margin: 15,
  },
  label: {
    fontSize: 18,
    fontWeight: "900",
  },
  row: {
    margin: 15,
    alignItems: "center",
    flexDirection: "row",
  },
  icon: {
    fontSize: 20,
    marginRight: 30,
  },
});
