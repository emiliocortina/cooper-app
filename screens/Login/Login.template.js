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

const Form = t.form.Form;
const IconComponent = Feather;

const LoginObject = t.struct({
  email: t.String,
  password: t.String
});

const options = {
  fields: {
    password: {
      label: i18n.t("screens.login.passwordLbl"),
      password: true,
      secureTextEntry: true
    }
  }
};

class LoginTemplate extends React.Component {
  static navigationOptions = {
    title: "Login",
    tabBarVisible: false
  };

  handleSubmit = () => {};

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
              <Form type={LoginObject} options={options}></Form>
            </View>
            <Button
              color="#D44963"
              title={i18n.t("screens.login.button")}
              onPress={this.handleSubmit}
            ></Button>
            </View>
          </View>
        )}
      </KeyboardShift>
    );
  }
}

export default LoginTemplate;
