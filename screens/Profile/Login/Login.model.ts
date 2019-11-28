import firebase from '../../../Firebase';
import {login} from '../../../services/auth.service'
import i18n from "../../../i18n";

class LoginModel {

    login(value, navigation) {
        if (value != null && value.email && value.password) {
            login(value.email, value.password, () => navigation.navigate('Home'));
        }
    }
}

export default LoginModel;
