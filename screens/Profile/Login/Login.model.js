import firebase from '../../../Firebase';
import i18n from "../../../i18n";
import { AsyncStorage } from 'react-native';

class LoginModel {
  login(value, props) {
    if (value != null) {
        firebase.auth().signInWithEmailAndPassword(value.email, value.password).catch((error) => {
            alert(i18n.t("screens.login.noUserError"));
        }).then(() => {
            firebase.auth().onAuthStateChanged(user => {
              AsyncStorage.setItem('user', user.uid).then(() => {
                props.navigation.navigate("Home");
              });
            });
        });   
    }
  }
}

export default LoginModel;
