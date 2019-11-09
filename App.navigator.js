import AuthLoadingScreen from "./screens/AuthLoading/authLoading.screen";
import TabNavigator from "./screens/Tabs/Tabs.navigator";
import ThreadDetailsScreen from "./screens/ThreadDetails/ThreadDetails.screen";
import ProfileNavigator from './screens/Profile/ProfileNavigator';
import { createSwitchNavigator } from 'react-navigation';
import {createStackNavigator, TransitionPresets} from 'react-navigation-stack';


const AppStack = createStackNavigator(
    {
        Tabs: TabNavigator,
        Thread: ThreadDetailsScreen,
        Profile: ProfileNavigator
    },
    {
        initialRouteName: "Tabs",
        mode: "modal",
        headerMode: "none",
        defaultNavigationOptions: {
            gestureEnabled: true,
            cardOverlayEnabled: true,
            ...TransitionPresets.ModalPresentationIOS,
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
