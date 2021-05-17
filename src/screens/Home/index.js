import {
  Text,
  View,
  Image,
  FlatList,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import AppBar from "../../AppBar";
const { width } = Dimensions.get("window");
import img1 from "../../../assets/img1.jpg";
import img2 from "../../../assets/img2.jpg";
import img3 from "../../../assets/img3.jpg";
import img4 from "../../../assets/img4.jpg";
import img5 from "../../../assets/img5.jpg";
import img6 from "../../../assets/img6.jpg";
import img7 from "../../../assets/img7.jpg";
import img8 from "../../../assets/img8.jpg";
import img9 from "../../../assets/img9.jpg";

const images = [
  img3,
  img5,
  img4,
  img1,
  img2,
  img6,
  img7,
  img8,
  img9,
  img1,
  img2,
  img3,
  img4,
  img8,
  img6,
  img5,
  img9,
  img7,
];

function Home({ navigation }) {
  const renderImages = ({ item }) => (
    <TouchableOpacity
      activeOpacite={0.7}
      onPress={() => navigation.navigate("Photos")}
    >
      <Image source={item} style={styles.images} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <AppBar navigation={navigation} />
      <FlatList
        data={images}
        renderItem={renderImages}
        contentContainerStyle={styles.wrapper}
      />
    </View>
  );
}
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  images: {
    width: width * 0.44,
    height: width * 0.44,
    marginTop: width * 0.04,
    marginLeft: width * 0.04,
  },
  wrapper: {
    flexWrap: "wrap",
    flexDirection: "row",
    marginLeft: width * 0.015,
    paddingBottom: width * 0.02,
  },
});
