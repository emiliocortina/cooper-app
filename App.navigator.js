import AuthLoadingScreen from "./screens/AuthLoading/authLoading.screen";
import TabNavigator from "./screens/Tabs/Tabs.navigator";
import DetailsScreen from "./screens/Details/Details.screen";
import ProfileNavigator from './screens/Profile/ProfileNavigator';
import { createSwitchNavigator } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';


const AppStack = createStackNavigator(
    {
        Tabs: TabNavigator,
        Details: DetailsScreen,
        Profile: ProfileNavigator
    },
    {
        initialRouteName: "Tabs",
        mode: "modal",
        headerMode: "none",
        defaultNavigationOptions: {
            gestureEnabled: true,
            cardOverlayEnabled: true,
        }
    }
);

const MainAppNavigator = createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        AppStack: AppStack
    },
    {
        initialRouteName: "AuthLoading",
        headerMode: "none"
    }
);

export default MainAppNavigator;
