import {createSwitchNavigator} from 'react-navigation';
import LoginScreen from './Login/Login.screen';
import SignupScreen from './Signup/Signup.screen';

const LoginNavigator = createSwitchNavigator(
    {
      LoginPage: LoginScreen,
      SignupPage: SignupScreen
    }
  );
  
  export default LoginNavigator;