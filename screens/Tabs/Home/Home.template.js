import React, {useEffect, useState} from "react";
import {
    Button,
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    StatusBar
} from "react-native";
import homeStyles from "./Home.stylesheet";
import ThreadSquareCard from "../../../components/cards/threadSquareCard";
import i18n from "../../../i18n";
import SafeAreaView from "react-native-safe-area-view";
import {AntDesign} from "@expo/vector-icons";
import HomeModel from "./Home.model";
import useColorsSheet from "../../../services/useColorsSheet.service";
import {logout} from "../../../services/auth.service";
import firebase from "../../../Firebase";

const IconComponent = AntDesign;

const HomeTemplate = function ({route, navigation}) {

    const goToProfile = () => {
        navigation.navigate('Profile');
    };

    let Colors = useColorsSheet();

    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        firebase.auth.onAuthStateChanged(async (user) => {
            setCurrentUser(user);
        });
    });

    return (
        <SafeAreaView style={[homeStyles.Content, Colors.systemBackground]} forceInset={{bottom: "never"}}>
            <StatusBar/>
            <ScrollView style={{width: "100%"}}>
                <View style={homeStyles.TitleBar}>
                    <TouchableOpacity
                        style={{flexDirection: "row"}}
                        onPress={goToProfile}
                    >
                        <Image
                            source={require("../../../assets/images/sentinel2.jpg")}
                            style={homeStyles.Avatar}
                        />

                        <View>
                            <Text style={[homeStyles.Welcome, Colors.secondaryLabel]}>
                                {currentUser ? i18n.t("tabs.home.welcomeBack") : i18n.t("tabs.home.welcome")}
                            </Text>
                            <Text
                                style={[homeStyles.Name, Colors.label]}>{currentUser ? currentUser.displayName : i18n.t("tabs.home.join")}</Text>
                        </View>
                    </TouchableOpacity>

                    {currentUser && (
                        <View style={homeStyles.LogoutButton}>
                            <TouchableOpacity onPress={logout}>
                                <IconComponent name={"logout"} size={25} color={Colors.secondaryLabel.color}/>
                            </TouchableOpacity>
                        </View>)
                    }
                </View>

                <ScrollView horizontal style={homeStyles.CardsContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate("Thread")}>
                        <ThreadSquareCard/>
                    </TouchableOpacity>
                    <ThreadSquareCard/>
                    <ThreadSquareCard/>
                    <ThreadSquareCard/>
                    <ThreadSquareCard/>
                    <ThreadSquareCard/>
                    <ThreadSquareCard/>
                    <ThreadSquareCard/>
                </ScrollView>
                <ScrollView horizontal style={homeStyles.CardsContainer}>
                    <ThreadSquareCard/>
                    <ThreadSquareCard/>
                    <ThreadSquareCard/>
                    <ThreadSquareCard/>
                    <ThreadSquareCard/>
                    <ThreadSquareCard/>
                    <ThreadSquareCard/>
                    <ThreadSquareCard/>
                </ScrollView>
                <ScrollView horizontal style={homeStyles.CardsContainer}>
                    <ThreadSquareCard/>
                    <ThreadSquareCard/>
                    <ThreadSquareCard/>
                    <ThreadSquareCard/>
                    <ThreadSquareCard/>
                    <ThreadSquareCard/>
                    <ThreadSquareCard/>
                    <ThreadSquareCard/>
                </ScrollView>
                <ScrollView horizontal style={homeStyles.CardsContainer}>
                    <ThreadSquareCard/>
                    <ThreadSquareCard/>
                    <ThreadSquareCard/>
                    <ThreadSquareCard/>
                    <ThreadSquareCard/>
                    <ThreadSquareCard/>
                    <ThreadSquareCard/>
                    <ThreadSquareCard/>
                </ScrollView>
            </ScrollView>
        </SafeAreaView>
    );
};

HomeTemplate.navigationOptions = {
    title: "Home"
};

export default HomeTemplate;
