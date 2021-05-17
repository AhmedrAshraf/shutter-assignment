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
import img2 from "../../../assets/img2.jpg";
const { width, height } = Dimensions.get("window");

function Bio({ navigation }) {
  return (
    <View style={styles.container}>
      <AppBar navigation={navigation} />
      <ScrollView>
        <Image source={img2} style={styles.images} />
        <View style={styles.head}>
          <Text style={styles.headText}>Hey There! I'm Juanbeda</Text>
          <Text style={styles.text} style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
            explicabo quasi cum, laudantium neque at veniam itaque atque
            necessitatibus temporibus! Beatae sit soluta magni neque autem,
            suscipit dolorem, quo alias.
          </Text>
          <Text style={styles.text}>
            Similique deserunt sit accusamus ipsum optio. Quia, sapiente saepe
            culpa ad nemo velit, veritatis numquam impedit voluptate quo
            tempore. Perferendis suscipit dolores, ducimus esse cupiditate
            possimus quae quis iusto rem?
          </Text>
          <Text style={styles.text}>
            Excepturi soluta maxime velit vitae tempore corporis, aliquid quidem
            modi libero! Optio minima esse hic repellendus a dolor perferendis
            dolore impedit quis et! Minus maxime itaque beatae totam eos
            reiciendis.
          </Text>
          <Text style={styles.text}>
            Ad veritatis eos dicta, animi et voluptates iusto, excepturi
            corporis amet, laboriosam, officiis libero. Odio excepturi aliquid
            suscipit nobis odit. Tenetur expedita impedit error consequatur sunt
            voluptatum voluptate voluptatem vitae!
          </Text>
          <Text style={styles.Text}>Thanks!</Text>
          <Text style={styles.Text}>Juanbeda</Text>
        </View>
      </ScrollView>
    </View>
  );
}
export default Bio;

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
    marginBottom: width * 0.1,
    marginHorizontal: width * 0.05,
  },
  headText: {
    fontSize: 25,
    color: "white",
    marginBottom: width * 0.05,
  },
  text: {
    color: "gray",
    fontSize: 16,
    marginBottom: width * 0.05,
  },
  Text: {
    color: "gray",
    fontSize: 16,
  },
});
