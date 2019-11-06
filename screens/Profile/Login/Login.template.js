import React from "react";
import {
  Button,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StatusBar
} from "react-native";
import loginStyles from "./Login.stylesheet";
import i18n from "../../../i18n";
import t from "tcomb-form-native";
import KeyboardShift from "../../../components/keyboardShift";
import { Feather } from "@expo/vector-icons";
import LoginModel from "./Login.model";
import NavigationService from "../../../services/navigation.service";
import { BlurView } from "expo-blur";

const Form = t.form.Form;
const IconComponent = Feather;
const model = new LoginModel();
const nav = new NavigationService();

const LoginObject = t.struct({
  email: t.String,
  password: t.String
});

const options = {
  fields: {
    email: {
      label: i18n.t("screens.login.email.label"),
      error: i18n.t("screens.login.email.error")
    },
    password: {
      label: i18n.t("screens.login.password.label"),
      password: true,
      secureTextEntry: true,
      error: i18n.t("screens.login.password.error")
    }
  }
};

class LoginTemplate extends React.Component {
  static navigationOptions = {
    title: "LoginPage",
    tabBarVisible: false
  };

  handleSubmit = () => {
    let value = this._form.getValue();
    model.login(value, this.props);
  };

  goHome = () => {
    nav.goHome(this.props);
  };

  render() {
    return (
      <KeyboardShift>
        {() => (
          <ImageBackground
            source={require("cooper/assets/images/login.jpg")}
            style={loginStyles.Container}
          >
            <View style={loginStyles.Header}>
              <TouchableOpacity onPress={this.goHome}>
                <BlurView intensity={90} style={loginStyles.Close}>
                  <IconComponent
                    name={"chevron-down"}
                    size={30}
                    color="white"
                  />
                </BlurView>
              </TouchableOpacity>
            </View>

            <View style={loginStyles.Content}>
              <BlurView intensity={100} style={loginStyles.BlurPanel}>
                <Text style={loginStyles.Title}>
                  {i18n.t("screens.login.title")}
                </Text>
                <View style={loginStyles.Form}>
                  <Form
                    ref={c => (this._form = c)}
                    type={LoginObject}
                    options={options}
                  />
                </View>
                <Button
                  color="#D44963"
                  title={i18n.t("screens.login.button")}
                  onPress={this.handleSubmit}
                />
                <Text
                  style={loginStyles.Link}
                  onPress={() => {
                    this.props.navigation.navigate("SignupPage");
                  }}
                >
                  {i18n.t("screens.login.messageSignup")}
                </Text>
              </BlurView>
            </View>
          </ImageBackground>
        )}
      </KeyboardShift>
    );
  }
}

export default LoginTemplate;
