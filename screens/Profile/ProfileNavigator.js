import { createSwitchNavigator } from 'react-navigation';
import LoginNavigator from './LoginNavigator';
import ProfilePageScreen from './ProfilePage/ProfilePage.screen';

const ProfileNavigator = createSwitchNavigator(
  {
    Login: LoginNavigator,
    ProfilePage: ProfilePageScreen
  }
);

export default ProfileNavigator;