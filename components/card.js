import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ImageBackground
} from "react-native";

class Card extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require("cooper/assets/images/sentinel3.jpg")}
        style={styles.CardContainer}
        imageStyle={{ borderRadius: 21 }}
      >
        <View style={styles.Content}>
          <Text>HOLAA</Text>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  CardContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    borderRadius: 40,
    height: 220,
    width: 250,
    shadowColor: "rgba(58,55,55,0.1)",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 15,
    elevation: 3
  },
  Content: {
    backgroundColor: "white",
    width: "100%",
    padding: 20,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
  }
});

export default Card;
