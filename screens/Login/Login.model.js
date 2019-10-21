import ApiService from "../../services/api.service";
import i18n from "../../i18n";

const api = new ApiService();

class LoginModel {
    handleSubmit(value, props) {
        if (value != null) {
            api.request("auth/login", "POST", value).then(res => {
                if (res.status === "logged in") {
                    props.navigation.navigate("Home", { user: res.user.nickName });
                } else {
                    alert(i18n.t("screens.login.noUserError"));
                }
            });
        }
    }
}

export default LoginModel;
