import React from "react";
import {
  Button,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView
} from "react-native";
import profileStyles from './ProfilePage.stylesheet';
import i18n from "../../../i18n";
import KeyboardShift from "../../../components/keyboardShift";

class ProfilePageTemplate extends React.Component {
    static navigationOptions = {
      title: "ProfilePage",
      tabBarVisible: false
    };
  
    render() {
      return (
        <KeyboardShift>
          {() => (
            <View style={profileStyles.Container}>
              <Text>Profile page screen</Text>
            </View>
          )}
        </KeyboardShift>
      );
    }
  }
  
  export default ProfilePageTemplate;