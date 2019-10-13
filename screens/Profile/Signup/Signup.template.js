import React from "react";
import { ScrollView, Button, View, Text, TouchableOpacity } from "react-native";
import signupStyles from "./Signup.stylesheet";
import i18n from "../../../i18n";
import t from "tcomb-form-native";
import KeyboardShift from "../../../components/keyboardShift";
import { Feather } from "@expo/vector-icons";
import ApiService from "../../../services/api.service";

const Form = t.form.Form;
const IconComponent = Feather;

const SignupObject = t.struct({
  nickName: t.String,
  email: t.String,
  password: t.String,
  passwordRepeat: t.String,
  olderThan13: t.Boolean,
  terms: t.Boolean
});

const options = {
  fields: {
    nickName: {
      label: i18n.t("screens.signup.nickName.label"),
      error: i18n.t("screens.signup.nickName.error")
    },
    email: {
      label: i18n.t("screens.signup.email.label"),
      error: i18n.t("screens.signup.email.error")
    },
    password: {
      label: i18n.t("screens.signup.password.label"),
      password: true,
      secureTextEntry: true,
      error: i18n.t("screens.signup.password.error")
    },
    passwordRepeat: {
      label: i18n.t("screens.signup.passwordRepeat.label"),
      password: true,
      secureTextEntry: true,
      error: i18n.t("screens.signup.passwordRepeat.error")
    },
    olderThan13: {
      label: i18n.t("screens.signup.older.label"),
      error: i18n.t("screens.signup.older.error")
    },
    terms: {
      label: i18n.t("screens.signup.terms.label"),
      error: i18n.t("screens.signup.terms.error")
    }
  }
};

const api = new ApiService();

class SignupTemplate extends React.Component {
  static navigationOptions = {
    title: "SignupPage",
    tabBarVisible: false
  };

  handleSubmit = () => {
    let value = this._form.getValue();
    if (value != null) {
      /*
      HACER COSIS DE SIGNUP
      api.request("auth/signup", "POST", value).then(res => {
        if (res.status === "logged in") {
          this.props.navigation.navigate("Home", { user: res.user.nickName });
        } else {
          alert(i18n.t("screens.login.noUserError"));
        }
      });*/
    }
  }

  render() {
    return (
      <KeyboardShift>
        {() => (
          <ScrollView style={{ width: "100%" }}>
            <View style={signupStyles.Container}>
              <View style={signupStyles.Header}>
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate("Home");
                  }}
                >
                  <IconComponent name={"home"} size={25} color="#3c4560" />
                </TouchableOpacity>
              </View>

              <View style={signupStyles.Content}>
                <Text style={signupStyles.Title}>
                  {i18n.t("screens.signup.title")}
                </Text>
                <View style={signupStyles.Form}>
                  <Form
                    ref={c => (this._form = c)}
                    type={SignupObject}
                    options={options}
                  />
                </View>
                <View style={signupStyles.Footer}>
                  <Button
                    color="#D44963"
                    title={i18n.t("screens.signup.button")}
                    onPress={this.handleSubmit}
                  />
                </View>
              </View>
            </View>
          </ScrollView>
        )}
      </KeyboardShift>
    );
  }
}

export default SignupTemplate;
