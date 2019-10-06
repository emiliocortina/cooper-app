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
import i18n  from "../../../i18n";

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
              <Text style={homeStyles.Welcome}>{i18n.t('tabs.home.welcome')}</Text>
              <Text style={homeStyles.Name}>Emilio Cortina</Text>
            </View>
          </View>

          <ScrollView vertical style={homeStyles.CardsContainer}>
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
