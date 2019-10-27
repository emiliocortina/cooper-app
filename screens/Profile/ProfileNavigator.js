import { createSwitchNavigator } from "react-navigation";
import LoginNavigator from "./LoginNavigator";
import ProfilePageScreen from "./ProfilePage/ProfilePage.screen";

const ProfileNavigator = createSwitchNavigator(
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
