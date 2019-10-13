import { createSwitchNavigator } from 'react-navigation';
import LoginNavigator from './LoginNavigator';
import ProfilePageScreen from './ProfilePage/ProfilePage.screen';
import AuthLoadingScreen from './AuthLoadingScreen';

const ProfileNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    Login: LoginNavigator,
    ProfilePage: ProfilePageScreen
  }
);

export default ProfileNavigator;