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
      <SafeAreaView
        style={homeStyles.Content}
      >
        <ScrollView style={{ width: "100%" }} contentContainerStyle={homeStyles.Content}>
          <View style={homeStyles.TitleBar}>
            <TouchableOpacity
              style={{ position: "absolute", top: 0, left: 20 }}
            >
              <Image
                source={require("../../../assets/images/sentinel2.jpg")}
                style={homeStyles.Avatar}
              />
            </TouchableOpacity>
            <Text style={homeStyles.Welcome}>Welcome back,</Text>
            <Text style={homeStyles.Name}>Emilio Cortina</Text>
          </View>
          <View style={[homeStyles.CardsContainer]}><Card /></View>

        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default HomeTemplate;
