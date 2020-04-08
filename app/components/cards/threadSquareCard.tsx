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
import { LinearGradient } from "expo-linear-gradient";
import {Light, Typography} from "cooper-app/app/styles";

class ThreadSquareCard extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require("cooper-app/assets/images/sentinel3.jpg")}
        style={styles.CardContainer}
        imageStyle={{ borderRadius: 30 }}
      >
        <LinearGradient
          colors={["transparent", "transparent", "rgba(0,0,0,0.54)"]}
          style={styles.Content}
        >
          <Text style={styles.Subtitle}>HOLAA</Text>
          <Text style={styles.Title}>BREAKING NEWS</Text>
        </LinearGradient>
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
    height: 250,
    width: 250,
    shadowColor: "rgba(58,55,55,0.31)",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 3,
    marginHorizontal: 10,
  },
  Content: {
    width: "100%",
    height: "100%",
    padding: 20,
    borderRadius: 30,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  Subtitle: {
    color: "#ebebf599"
  },
  Title: {
    ...Typography.h3,
    color: "#ffffff"
  }
});

export default ThreadSquareCard;
