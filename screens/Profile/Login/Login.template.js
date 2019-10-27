import React from "react";
import {
  Button,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import loginStyles from "./Login.stylesheet";
import i18n from "../../../i18n";
import t from "tcomb-form-native";
import KeyboardShift from "../../../components/keyboardShift";
import { Feather } from "@expo/vector-icons";
import LoginModel from "./Login.model";
import NavigationService from '../../../services/navigation.service';

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
          <View style={loginStyles.Container}>
            <View style={loginStyles.Header}>
              <TouchableOpacity onPress={this.goHome}>
                <IconComponent name={"home"} size={25} color="#3c4560" />
              </TouchableOpacity>
            </View>

            <View style={loginStyles.Content}>
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
            </View>
          </View>
        )}
      </KeyboardShift>
    );
  }
}

export default LoginTemplate;
