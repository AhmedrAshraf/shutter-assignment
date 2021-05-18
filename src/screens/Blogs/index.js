import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import React from "react";
import AppBar from "../../AppBar";
const { width } = Dimensions.get("window");
import img10 from "../../../assets/img10.jpg";

function Blogs({ navigation }) {
  return (
    <View style={styles.container}>
      <AppBar navigation={navigation} />
      <ScrollView>
        <View style={styles.head}>
          <Text style={styles.headText}>My Blog</Text>
          <View style={styles.row}>
            <Image source={img10} style={styles.images} />
            <View style={{ width: "100%" }}>
              <Text style={styles.Text}>
                Advanced Photography Tutorial For Pro
              </Text>
              <Text style={styles.text}>Posted By James on</Text>
              <Text style={styles.textRed}>Feb. 24, 2020</Text>
              <Text style={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
                explicabo quasi cum, laudantium neque at veniam itaque atque
                necessitatibus temporibus! Beatae sit soluta magni neque autem,
                suscipit dolorem, quo alias.
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <Image source={img10} style={styles.images} />
            <View style={{ width: "100%" }}>
              <Text style={styles.Text}>
                Advanced Photography Tutorial For Pro
              </Text>
              <Text style={styles.text}>Posted By James on</Text>
              <Text style={styles.textRed}>Feb. 24, 2020</Text>
              <Text style={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
                explicabo quasi cum, laudantium neque at veniam itaque atque
                necessitatibus temporibus! Beatae sit soluta magni neque autem,
                suscipit dolorem, quo alias.
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <Image source={img10} style={styles.images} />
            <View style={{ width: "100%" }}>
              <Text style={styles.Text}>
                Advanced Photography Tutorial For Pro
              </Text>
              <Text style={styles.text}>Posted By James on</Text>
              <Text style={styles.textRed}>Feb. 24, 2020</Text>
              <Text style={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
                explicabo quasi cum, laudantium neque at veniam itaque atque
                necessitatibus temporibus! Beatae sit soluta magni neque autem,
                suscipit dolorem, quo alias.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
export default Blogs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  images: {
    margin: 10,
    width: "45%",
    height: 120,
    borderWidth: 4,
    borderColor: "white",
  },
  head: {
    width: "95%",
    marginBottom: 10,
    marginHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  headText: {
    fontSize: 25,
    color: "white",
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    width: "45%",
    color: "gray",
    marginTop: 10,
  },
  textRed: {
    color: "red",
    width: "45%",
    fontSize: 14,
  },
  Text: {
    width: "45%",
    fontSize: 20,
    color: "white",
  },
  row: {
    width: "95%",
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
