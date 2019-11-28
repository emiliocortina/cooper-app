import React from "react";
import {View, Text, StatusBar, ScrollView} from "react-native";
import i18n from "cooper-app/i18n";
import searchStyles from "./Search.stylesheet";
import SafeAreaView from "react-native-safe-area-view";
import useColorsSheet from "../../../services/useColorsSheet.service";

const SearchTemplate = () => {
    let Colors = useColorsSheet();

    return (
        <SafeAreaView style={[searchStyles.Content, Colors.systemBackground]} forceInset={{bottom: "never"}}>
            <StatusBar/>
            <ScrollView style={{width: "100%"}}>
                <View style={searchStyles.Row}>
                    <View style={[searchStyles.MiniCard, searchStyles.Left]}></View>
                    <View style={[searchStyles.MiniCard, searchStyles.Left, searchStyles.Right]}></View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );

}

export default SearchTemplate;
