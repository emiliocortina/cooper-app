import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import LoginNavigator from "./LoginNavigator";
import ProfilePageScreen from "./ProfilePage/ProfilePage.screen";

const ProfileNavigator = createAnimatedSwitchNavigator(
  {
    Login: LoginNavigator,
    ProfilePage: ProfilePageScreen
  },
  {
    headerMode: "none",
    mode: "modal",
    defaultNavigationOptions: {
      gestureResponseDistance: { vertical: 1200 }
    }
  }
);

export default ProfileNavigator;
