import firebase from 'cooper-app/Firebase';
import {login} from '../../../services/auth.service'
import i18n from "cooper-app/i18n";

class LoginModel {

    login(value, navigation) {
        if (value != null && value.email && value.password) {
            login(value.email, value.password, () => navigation.navigate('Home'));
        }
    }
}

export default LoginModel;
