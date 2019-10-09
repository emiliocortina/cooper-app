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
import signupStyles from "./Signup.stylesheet";
import i18n from "../../i18n";
import t from "tcomb-form-native";
import KeyboardShift from "../../components/keyboardShift";
import { Feather } from "@expo/vector-icons";
import ApiService from '../../services/api.service';

const Form = t.form.Form;
const IconComponent = Feather;

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

const api = new ApiService();

class SignupTemplate extends React.Component {
  static navigationOptions = {
    title: "Signup",
    tabBarVisible: false
  };

  handleSubmit = () => {
    const value = this._form.getValue();
    if (value != null){
      api.request('auth/login', 'POST', value)
      .then((res) => {
        if(res.status === 'logged in') {
          this.props.navigation.navigate('Home', {user: res.user.nickName});
        } else  {
          alert(i18n.t("screens.login.noUserError"));
        }
      });
    }  
  };

  render() {
    return (
      <KeyboardShift>
        {() => (
          <View style={signupStyles.Container}>
            <Text>Signup</Text>
          </View>
        )}
      </KeyboardShift>
    );
  }
}

export default SignupTemplate;
