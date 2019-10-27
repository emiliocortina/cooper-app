import AuthLoadingScreen from "./screens/AuthLoading/authLoading.screen";
import TabNavigator from "./screens/Tabs/Tabs.navigator";
import DetailsScreen from "./screens/Details/Details.screen";
import ProfileNavigator from './screens/Profile/ProfileNavigator';
import { createSwitchNavigator } from 'react-navigation';

const MainAppNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    Tabs: TabNavigator,
    Details: DetailsScreen,
    Profile: ProfileNavigator
  },
  {
    initialRouteName: "AuthLoading",
    headerMode: "none",
    mode: "modal",
      defaultNavigationOptions: {
          gestureResponseDistance: {vertical: 1200},
      }
  }
);

export default MainAppNavigator;