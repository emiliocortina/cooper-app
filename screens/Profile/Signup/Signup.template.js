import React from "react";
import { ScrollView, Button, View, Text, TouchableOpacity } from "react-native";
import {CheckBox} from 'react-native-elements';
import signupStyles from "./Signup.stylesheet";
import i18n from "../../../i18n";
import t from "tcomb-form-native";
import KeyboardShift from "../../../components/keyboardShift";
import { Feather } from "@expo/vector-icons";
import ApiService from "../../../services/api.service";
import SignupModel from './Signup.model';

const Form = t.form.Form;
const IconComponent = Feather;
const model = new SignupModel();

const SignupObject = t.struct({
  nickName: t.String,
  email: t.String,
  password: t.String,
  passwordRepeat: t.String
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
    }
  }
};

class SignupTemplate extends React.Component {
  static navigationOptions = {
    title: "SignupPage",
    tabBarVisible: false
  };

  state = {
    olderChecked: false,
    termsChecked: false
  }

  handleSubmit = () => {
    let user = this._form.getValue();
    model.signup(user, this.state, this.props);
  };

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
                <View>
                  <CheckBox 
                    checkedColor='#e06075'
                    title={i18n.t("screens.signup.olderCkbx")}
                    checked={this.state.olderChecked}
                    onPress={() => this.setState({ olderChecked: !this.state.olderChecked })}
                  />
                  <CheckBox 
                    checkedColor='#e06075'
                    title={i18n.t("screens.signup.termsCkbx")}
                    checked={this.state.termsChecked}
                    onPress={() => this.setState({ termsChecked: !this.state.termsChecked })}
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
