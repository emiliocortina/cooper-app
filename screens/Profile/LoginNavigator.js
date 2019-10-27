import { createStackNavigator } from "react-navigation-stack";
import LoginScreen from "./Login/Login.screen";
import SignupScreen from "./Signup/Signup.screen";

const LoginNavigator = createStackNavigator(
  {
    LoginPage: LoginScreen,
    SignupPage: SignupScreen
  },
  {
    headerMode: "none",
    mode: "modal",
    defaultNavigationOptions: {
      gestureResponseDistance: { vertical: 1200 }
    }
  }
);

export default LoginNavigator;
