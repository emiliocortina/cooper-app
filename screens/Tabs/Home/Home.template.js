import React from "react";
import {
  Button,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
  AsyncStorage
} from "react-native";
import homeStyles from "./Home.stylesheet";
import Card from "../../../components/card";
import i18n from "../../../i18n";
import SafeAreaView from "react-native-safe-area-view";
import { NavigationEvents } from "react-navigation";
import { AntDesign } from "@expo/vector-icons";
import HomeModel from "./Home.model";
import firebase from "../../../Firebase";

const IconComponent = AntDesign;
const model = new HomeModel();

class HomeTemplate extends React.Component {
  static navigationOptions = {
    title: "Home"
  };

  state = {
    userName : null
  }

  render() {
    let logoutButton = <View></View>;
    let userName = <View></View>;

    firebase.auth().onAuthStateChanged(async user => {
      if (user) {
        logoutButton = (
          <View style={homeStyles.UpRightButton}>
            <TouchableOpacity onPress={model.logout}>
              <IconComponent name={"logout"} size={25} color="#3c4560" />
            </TouchableOpacity>
          </View>
        );
        userName = (
          <View>
            <Text style={homeStyles.Welcome}>
              {i18n.t("tabs.home.welcome")}
            </Text>
            <Text style={homeStyles.Name}>{user.displayName}</Text>
          </View>
        );
      }
    });

    return (
      <SafeAreaView style={homeStyles.Content} forceInset={{ bottom: "never" }}>
        <StatusBar barStyle="dark-content" />
        <ScrollView style={{ width: "100%" }}>
          <View style={homeStyles.TitleBar}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("Profile");
              }}
            >
              <Image
                source={require("../../../assets/images/sentinel2.jpg")}
                style={homeStyles.Avatar}
              />
            </TouchableOpacity>
            {userName}
            {logoutButton}
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
