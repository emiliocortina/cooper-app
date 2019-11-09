import React from "react";
import {
    View,
    Text,
} from "react-native";
import profileStyles from './ProfilePage.stylesheet';
import KeyboardShift from "../../../components/keyboardShift";
import useColorsSheet from "../../../services/useColorsSheet.service";

const ProfilePageTemplate = () => {
    let Colors = useColorsSheet();

    return (
        <KeyboardShift>
            {() => (
                <View style={[profileStyles.Container, Colors.systemBackground]}>
                    <Text>Profile page screen</Text>
                </View>
            )}
        </KeyboardShift>
    );

}

ProfilePageTemplate.navigationOptions = {
    title: "ProfilePage",
    tabBarVisible: false
};

export default ProfilePageTemplate;
