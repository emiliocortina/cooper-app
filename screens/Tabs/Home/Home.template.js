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
import { Dark, Light } from "cooper/styles";
import ThreadSquareCard from "../../../components/cards/threadSquareCard";
import i18n from "../../../i18n";
import SafeAreaView from "react-native-safe-area-view";
import { AntDesign } from "@expo/vector-icons";
import HomeModel from "./Home.model";
import NavigationService from "../../../services/navigation.service";
import { useColorScheme } from "react-native-appearance";
import { useTheme } from "react-navigation";

const IconComponent = AntDesign;
const model = new HomeModel();
const nav = new NavigationService();

const HomeTemplate = function(props) {
  const logout = () => {
    model.logout(props);
  };

  const goToProfile = () => {
    nav.goToProfile(props);
  };

  let colorScheme = useColorScheme();
  let Colors = Light;
  if (colorScheme === "dark") {
    Colors = Dark;// render some dark thing
  }

  // Header
  let logoutButton = <View></View>;
  let userName = <View></View>;

  let user = props.navigation.getParam("currentUser");

  if (user != null) {
    logoutButton = (
      <View style={homeStyles.UpRightButton}>
        <TouchableOpacity onPress={logout}>
          <IconComponent name={"logout"} size={25} color={Colors.secondaryLabel.color} />
        </TouchableOpacity>
      </View>
    );
    userName = (
      <View>
        <Text style={[homeStyles.Welcome, Colors.secondaryLabel]}>
          {i18n.t("tabs.home.welcomeBack")}
        </Text>
        <Text style={[homeStyles.Name, Colors.label]}>{user.displayName}</Text>
      </View>
    );
  } else {
    logoutButton = <View></View>;
    userName = (
      <View>
        <Text style={homeStyles.Welcome}>{i18n.t("tabs.home.welcome")}</Text>
        <Text style={homeStyles.Name}>{i18n.t("tabs.home.join")} </Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={homeStyles.Content} forceInset={{ bottom: "never" }}>
      <StatusBar />
      <ScrollView style={{ width: "100%" }}>
        <View style={homeStyles.TitleBar}>
          <TouchableOpacity
            style={{ flexDirection: "row" }}
            onPress={goToProfile}
          >
            <Image
              source={require("../../../assets/images/sentinel2.jpg")}
              style={homeStyles.Avatar}
            />

            {userName}
          </TouchableOpacity>

          {logoutButton}
        </View>

        <ScrollView horizontal style={homeStyles.CardsContainer}>
          <ThreadSquareCard />
          <ThreadSquareCard />
          <ThreadSquareCard />
          <ThreadSquareCard />
          <ThreadSquareCard />
          <ThreadSquareCard />
          <ThreadSquareCard />
          <ThreadSquareCard />
        </ScrollView>
        <ScrollView horizontal style={homeStyles.CardsContainer}>
          <ThreadSquareCard />
          <ThreadSquareCard />
          <ThreadSquareCard />
          <ThreadSquareCard />
          <ThreadSquareCard />
          <ThreadSquareCard />
          <ThreadSquareCard />
          <ThreadSquareCard />
        </ScrollView>
        <ScrollView horizontal style={homeStyles.CardsContainer}>
          <ThreadSquareCard />
          <ThreadSquareCard />
          <ThreadSquareCard />
          <ThreadSquareCard />
          <ThreadSquareCard />
          <ThreadSquareCard />
          <ThreadSquareCard />
          <ThreadSquareCard />
        </ScrollView>
        <ScrollView horizontal style={homeStyles.CardsContainer}>
          <ThreadSquareCard />
          <ThreadSquareCard />
          <ThreadSquareCard />
          <ThreadSquareCard />
          <ThreadSquareCard />
          <ThreadSquareCard />
          <ThreadSquareCard />
          <ThreadSquareCard />
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

HomeTemplate.navigationOptions = {
  title: "Home"
};

export default HomeTemplate;
