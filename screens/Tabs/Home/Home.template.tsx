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
import i18n from "cooper-app/i18n";
import SafeAreaView from "react-native-safe-area-view";
import {AntDesign} from "@expo/vector-icons";
import useColorsSheet from "../../../services/useColorsSheet.service";
import firebase from "cooper-app/Firebase";
import AuthService from "cooper-app/services/auth.service";

const IconComponent = AntDesign;

interface Props {
    route: any,
    navigation: any
}

const HomeTemplate: React.FC<Props> = function ({route, navigation}) {

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
                            <TouchableOpacity onPress={AuthService.logout}>
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

export default HomeTemplate;
