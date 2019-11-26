import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from "./Login/Login.screen";
import SignupScreen from "./Signup/Signup.screen";
import ProfilePageScreen from "./ProfilePage/ProfilePage.screen";
import {getCurrentUser, isAuthenticated} from "../../services/auth.service";


const Stack = createStackNavigator();

const ProfileNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Login" headerMode="none">

            {isAuthenticated() ? (
                <Stack.Screen name="ProfilePage" component={ProfilePageScreen}/>
            ) : (
                <>
                    <Stack.Screen name="Login" component={LoginScreen}/>
                    <Stack.Screen name="Signup" component={SignupScreen} headerShown="true"/>
                </>
            )}


        </Stack.Navigator>);
};


export default ProfileNavigator;
