import {
  Text,
  View,
  Image,
  Modal,
  FlatList,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import AppBar from "../../AppBar";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
const { width, height } = Dimensions.get("window");
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
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
];

function Photos({ navigation }) {
  const [index, setIndex] = React.useState(0);
  const [modalVisible, setModalVisible] = React.useState(false);

  const renderImages = ({ item, index }) => (
    <TouchableOpacity activeOpacite={0.7} onPress={() => zoomImg(index)}>
      <Image source={item} style={styles.images} />
    </TouchableOpacity>
  );

  const zoomImg = (index) => {
    setIndex(index);
    setModalVisible(true);
  };

  const left = () => {
    if (index > 0) {
      let i = index - 1;
      setIndex(i);
    } else {
      setIndex(18);
    }
  };

  const right = () => {
    if (index < 18) {
      let i = index + 1;
      setIndex(i);
    } else {
      setIndex(0);
    }
  };

  return (
    <View style={styles.container}>
      <AppBar navigation={navigation} />
      <View style={styles.head}>
        <Text style={styles.headText}>'Nature' - 18 Photos</Text>
      </View>
      <FlatList
        data={images}
        renderItem={renderImages}
        contentContainerStyle={styles.wrapper}
      />
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <TouchableOpacity
          style={styles.centeredView}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={left}
            style={styles.leftArrow}
          >
            <FontAwesome5 name="arrow-left" size={20} color="white" />
          </TouchableOpacity>
          <Image source={images[index]} style={styles.image} />
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={right}
            style={styles.rightArrow}
          >
            <FontAwesome5 name="arrow-right" size={20} color="white" />
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}
export default Photos;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  images: {
    width: width * 0.44,
    height: width * 0.44,
    marginTop: width * 0.04,
    marginLeft: width * 0.03,
  },
  wrapper: {
    flexWrap: "wrap",
    flexDirection: "row",
    marginLeft: width * 0.015,
    paddingBottom: width * 0.02,
  },
  head: {
    paddingVertical: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  headText: {
    fontSize: 25,
    color: "white",
  },
  centeredView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00000070",
  },
  image: {
    width: "91%",
    resizeMode: "contain",
  },
  rightArrow: {
    right: 25,
    zIndex: 3,
    paddingVertical: 8,
    position: "absolute",
    paddingHorizontal: 10,
    backgroundColor: "#00000078",
  },
  leftArrow: {
    left: 25,
    zIndex: 3,
    paddingVertical: 8,
    position: "absolute",
    paddingHorizontal: 10,
    backgroundColor: "#00000078",
  },
});
