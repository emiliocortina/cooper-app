import React from "react";
import {
  Button,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar
} from "react-native";
import homeStyles from "./Home.stylesheet";
import Card from "../../../components/card";
import i18n  from "../../../i18n";
import SafeAreaView from 'react-native-safe-area-view';
import { NavigationEvents } from "react-navigation";

class HomeTemplate extends React.Component {
  static navigationOptions = {
    title: "Home",
  };

  render() {
    const {navigation}= this.props;
    return (
      <SafeAreaView style={homeStyles.Content}  forceInset={{ bottom: 'never' }}>
        <StatusBar barStyle="dark-content" />
        <ScrollView style={{ width: "100%" }}>
          <View style={homeStyles.TitleBar}>
            <TouchableOpacity onPress={() => {
              this.props.navigation.navigate('Login');
            }}
            >
              <Image
                source={require("../../../assets/images/sentinel2.jpg")}
                style={homeStyles.Avatar}
              />
            </TouchableOpacity>
            <View>
              <Text style={homeStyles.Welcome}>{i18n.t('tabs.home.welcome')}</Text>
              <Text style={homeStyles.Name}>
              {navigation.getParam('user',"No user")}
              </Text>
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
