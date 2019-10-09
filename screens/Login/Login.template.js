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
import loginStyles from "./Login.stylesheet";
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

class LoginTemplate extends React.Component {
  static navigationOptions = {
    title: "Login",
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
          <View style={loginStyles.Container}>
            <View style={loginStyles.Header}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("Home");
                }}
              >
                <IconComponent name={"home"} size={25} color="#3c4560" />
              </TouchableOpacity>
            </View>
            
            <View style={loginStyles.Content}>
            <Text style={loginStyles.Title}>
              {i18n.t("screens.login.title")}
            </Text>
            <View style={loginStyles.Form}>
              <Form 
                ref={c => this._form = c}
                type={LoginObject}
                options={options}
              ></Form>
            </View>
            <Button
              color="#D44963"
              title={i18n.t("screens.login.button")}
              onPress={this.handleSubmit}
            ></Button>
            <Text
              style={loginStyles.Link}
              onPress={() => {
                this.props.navigation.navigate("Signup");
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
