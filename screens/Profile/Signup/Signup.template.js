import React from "react";
import { ScrollView, Button, View, Text, TouchableOpacity } from "react-native";
import {CheckBox} from 'react-native-elements';
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

const api = new ApiService();

class SignupTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      olderChecked: false,
      termsChecked: false
    }
  }

  static navigationOptions = {
    title: "SignupPage",
    tabBarVisible: false
  };

  handleSubmit = () => {
    let user = this._form.getValue();

    if (this.state) {
      alert(this.state.olderChecked + "  " +  this.state.termsChecked);

    }

    /*
    if (user != null) {
      firebase
    .auth()
    .createUserWithEmailAndPassword(user.email, user.password)
    .then(
      function() {
        console.log(
          'created user successfully. User email:' +
            user.email +
            ' name:' +
            user.nickName
        );
        var userf = firebase.auth().currentUser;
        userf.updateProfile({ displayName: user.nickName }).then(
          function() {
            console.log('Updated displayName successfully. name:' + user.nickName);
            alert(
              'User ' + user.nickName + ' was created successfully. Please login.'
            );
          },
          function(error) {
            console.warn('Error update displayName - ' + error);
          }
        );
      },
      function(error) {
        console.error('got error:' + typeof error + ' string:' + error.message);
        alert('Create account failed. Error: ' + error.message);
      }
    );
    }
    */
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
                    title={i18n.t("screens.signup.olderCkbx")}
                    checked={this.state.olderChecked}
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                  />
                  <CheckBox
                    title={i18n.t("screens.signup.termsCkbx")}
                    checked={this.state.termsChecked}
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
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
