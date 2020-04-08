import firebase from "cooper-app/app/Firebase";
import i18n from "cooper-app/app/i18n";
import LoginModel from '../Login/Login.model';

const loginModel = new LoginModel();

class SignupModel {
    signup(user, props) {
        if (user != null) {
            if (user.older) {
                if (user.terms) {
                    firebase
                        .auth
                        .createUserWithEmailAndPassword(user.email, user.password)
                        .then(
                            function () {
                                console.log('hey');
                                console.log(user.nickName);
                                let userf = firebase.auth.currentUser;
                                userf.updateProfile({displayName: user.nickName}).then(
                                    function () {
                                        loginModel.login(user, props);
                                    },
                                    function (error) {
                                        alert(i18n.t("screens.signup.errorAccount"));
                                    }
                                );
                            },
                            function (error) {
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
