import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import LoginScreen from "./Login/Login.screen";
import SignupScreen from "./Signup/Signup.screen";

const LoginNavigator = createAnimatedSwitchNavigator(
  {
    LoginPage: LoginScreen,
    SignupPage: SignupScreen
  },
  {
      headerMode: "float"
  }
);

export default LoginNavigator;
