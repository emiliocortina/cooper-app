import React from "react";
import {
  Button,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView
} from "react-native";
import homeStyles from "./Home.stylesheet";
import Card from "../../../components/card";

class HomeTemplate extends React.Component {
  static navigationOptions = {
    title: "Home",
  };

  render() {
    return (
      <SafeAreaView style={homeStyles.Content}>
        <ScrollView style={{ width: "100%" }}>
          <View style={homeStyles.TitleBar}>
            <TouchableOpacity
            >
              <Image
                source={require("../../../assets/images/sentinel2.jpg")}
                style={homeStyles.Avatar}
              />
            </TouchableOpacity>
            <View>
              <Text style={homeStyles.Welcome}>Welcome back,</Text>
              <Text style={homeStyles.Name}>Emilio Cortina</Text>
            </View>
          </View>

          <ScrollView horizontal style={homeStyles.CardsContainer}>
            <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
          </ScrollView>

        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default HomeTemplate;
