import firebase from '../../../Firebase';
import i18n from "../../../i18n";
import NavigationService from '../../../services/navigation.service';

class LoginModel {
  nav = new NavigationService();

  login(value, props) {
    if (value != null) {
        firebase.auth().signInWithEmailAndPassword(value.email, value.password).catch((error) => {
            alert(i18n.t("screens.login.noUserError"));
        }).then(() => {
            this.nav.goHome(props);
        });   
    }
  }
}

export default LoginModel;
