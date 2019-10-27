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
import i18n from "../../../i18n";
import SafeAreaView from "react-native-safe-area-view";
import { AntDesign } from "@expo/vector-icons";
import HomeModel from "./Home.model";
import NavigationService from "../../../services/navigation.service";

const IconComponent = AntDesign;
const model = new HomeModel();
const nav = new NavigationService();

class HomeTemplate extends React.Component {
  static navigationOptions = {
    title: "Home"
  };

  logout = () => {
    model.logout(this.props);
  };

  goToProfile = () => {
    nav.goToProfile(this.props);
  }

  render() {
    let logoutButton = <View></View>;
    let userName = <View></View>;

    let user = this.props.navigation.getParam('currentUser');
    
    if(user != null) {
      logoutButton = (
        <View style={homeStyles.UpRightButton}>
          <TouchableOpacity onPress={this.logout}>
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
    } else {
      logoutButton = <View></View>;
      userName = <View></View>;
    }      


    return (
      <SafeAreaView style={homeStyles.Content} forceInset={{ bottom: "never" }}>
        <StatusBar barStyle="dark-content" />
        <ScrollView style={{ width: "100%" }}>
          <View style={homeStyles.TitleBar}>
            <TouchableOpacity
              onPress={this.goToProfile}
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
