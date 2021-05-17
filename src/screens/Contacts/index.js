import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  TextInput,
} from "react-native";
import React from "react";
import AppBar from "../../AppBar";
const { width, height } = Dimensions.get("window");

function Contacts({ navigation }) {
  return (
    <View style={styles.container}>
      <AppBar navigation={navigation} />
      <ScrollView>
        <View style={styles.head}>
          <Text style={styles.headText}>Contact Me</Text>
          <Text style={styles.text} style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
            explicabo quasi cum, laudantium neque at veniam itaque atque
            necessitatibus temporibus! Beatae sit soluta magni neque autem,
            suscipit dolorem, quo alias.
          </Text>
          <Text style={styles.lable}>First Name</Text>
          <TextInput style={styles.input} />
          <Text style={styles.lable}>Last Name</Text>
          <TextInput style={styles.input} />
          <Text style={styles.lable}>Email</Text>
          <TextInput style={styles.input} />
          <Text style={styles.lable}>Subject</Text>
          <TextInput style={styles.input} />
          <Text style={styles.lable}>Message</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor="gray"
            placeholder="Write your notes or questions here..."
          />
          <View style={styles.button}>
            <Text style={styles.buttonTxt}>Send Message</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
export default Contacts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  images: {
    width: width * 0.9,
    height: height * 0.7,
    margin: width * 0.05,
  },
  wrapper: {
    flexWrap: "wrap",
    flexDirection: "row",
    marginLeft: width * 0.015,
    paddingBottom: width * 0.02,
  },
  head: {
    marginHorizontal: width * 0.04,
    marginVertical: width * 0.1,
  },
  headText: {
    fontSize: 28,
    color: "white",
    marginBottom: width * 0.05,
  },
  text: {
    color: "gray",
    fontSize: 15,
  },
  lable: {
    fontSize: 16,
    marginTop: 30,
    color: "white",
  },
  input: {
    fontSize: 15,
    color: "white",
    paddingTop: 10,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "white",
  },
  button: {
    width: 180,
    marginTop: 30,
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "tomato",
  },
  buttonTxt: {
    color: "white",
  },
});
