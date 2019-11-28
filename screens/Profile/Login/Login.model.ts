import AuthService from '../../../services/auth.service';

class LoginModel {

    login(value, navigation) {
        if (value != null && value.email && value.password) {
            AuthService.login(value.email, value.password, () => navigation.navigate('Home'));
        }
    }
}

export default LoginModel;
