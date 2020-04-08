import React, { useEffect, useState } from "react";
import {
    View,
    Text, StatusBar, TouchableOpacity, Image, ScrollView
} from "react-native";
import profileStyles from './ProfilePage.stylesheet';
import SafeAreaView from "react-native-safe-area-view";
import useColorsSheet from "../../../services/useColorsSheet.service";
import firebase from "../../../Firebase";
import homeStyles from "../../Tabs/Home/Home.stylesheet";
import ThreadProfileCard from "../../../components/cards/threadProfileCard";
import i18n from "cooper-app/app/i18n";

const ProfilePageTemplate = function ({route, navigation}) {
    let Colors = useColorsSheet();

    const [currentUser, setCurrentUser] = useState(null);

    const goToHome= () => {
        navigation.navigate('Home');
    };

    useEffect(() => {
        firebase.auth.onAuthStateChanged(async (user) => {
            setCurrentUser(user);
        });
    });
    return (

        <SafeAreaView style={[profileStyles.Container, Colors.systemBackground]}>
            <StatusBar/>
            <ScrollView style={{width: "100%"}}>
                <View style={profileStyles.TitleBar}>
                    <Image
                      source={require("../../../../assets/images/sentinel2.jpg")}
                      style={profileStyles.Avatar}
                    />
                    <Text
                      style={[profileStyles.Title, Colors.label]}>{currentUser ? currentUser.displayName : ""}</Text>
                </View>

                <Text style={profileStyles.Subtitle}>{i18n.t("screens.profilePage.ownThreads")}</Text>

                <ScrollView style={profileStyles.CardsContainer} contentContainerStyle={profileStyles.CardsContentContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate("Thread")}>
                        <ThreadProfileCard/>
                    </TouchableOpacity>
                    <ThreadProfileCard/>
                    <ThreadProfileCard/>
                    <ThreadProfileCard/>
                    <ThreadProfileCard/>
                    <ThreadProfileCard/>
                    <ThreadProfileCard/>
                    <ThreadProfileCard/>
                </ScrollView>
            </ScrollView>
        </SafeAreaView>
    );

}

export default ProfilePageTemplate;
