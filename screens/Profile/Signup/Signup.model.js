import firebase from "../../../Firebase";
import i18n from "../../../i18n";
import { AsyncStorage } from "react-native";
import LoginModel from '../Login/Login.model';

const loginModel = new LoginModel();

class SignupModel {
  signup(user, state, props) {
    if (user != null) {
      if (state.olderChecked) {
        if (state.termsChecked) {
          firebase
            .auth()
            .createUserWithEmailAndPassword(user.email, user.password)
            .then(
              function() {
                var userf = firebase.auth().currentUser;
                userf.updateProfile({ displayName: user.nickName }).then(
                  function() {
                      loginModel.login(user, props);
                  },
                  function(error) {
                    alert(i18n.t("screens.signup.errorAccount"));
                  }
                );
              },
              function(error) {
                alert(i18n.t("screens.signup.errorAccount"));
              }
            );
        } else {
            alert(i18n.t("screens.signup.notTermsError"));
        }
      } else {
        alert(i18n.t("screens.signup.notOlderError"));
      }
    }
  }
}

export default SignupModel;
