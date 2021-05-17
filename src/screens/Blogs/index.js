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
            <View>
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
            <View>
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
            <View>
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
    borderWidth: 4,
    width: width * 0.45,
    height: width * 0.27,
    borderColor: "white",
    margin: width * 0.01,
  },
  wrapper: {
    flexWrap: "wrap",
    flexDirection: "row",
    marginLeft: width * 0.015,
    paddingBottom: width * 0.02,
  },
  head: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: width * 0.1,
    marginHorizontal: width * 0.05,
  },
  headText: {
    fontSize: 25,
    color: "white",
    marginBottom: width * 0.05,
  },
  text: {
    fontSize: 14,
    marginTop: 10,
    color: "gray",
    width: width * 0.45,
  },
  textRed: {
    color: "red",
    fontSize: 14,
    width: width * 0.45,
  },
  Text: {
    fontSize: 20,
    color: "white",
    width: width * 0.45,
  },
  row: {
    width: width * 0.95,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
