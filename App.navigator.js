import TabNavigator from "./screens/Tabs/Tabs.navigator";
import { createStackNavigator } from "react-navigation-stack";
import DetailsScreen from "./screens/Details/Details.screen";
import ProfileNavigator from './screens/Profile/ProfileNavigator';

const AppNavigator = createStackNavigator(
  {
    Tabs: TabNavigator,
    Details: DetailsScreen,
    Profile: ProfileNavigator
  },
  {
    initialRouteName: "Tabs",
    headerMode: "none",
    mode: "modal",
      defaultNavigationOptions: {
          gestureResponseDistance: {vertical: 1200},
      }
  }
);

export default AppNavigator;
