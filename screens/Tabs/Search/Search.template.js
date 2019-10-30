import React from "react";
import { View, Text, StatusBar, ScrollView } from "react-native";
import i18n from "../../../i18n";
import searchStyles from "./Search.stylesheet";
import SafeAreaView from "react-native-safe-area-view";

class SearchTemplate extends React.Component {
    render() {
        return (
            <SafeAreaView style={searchStyles.Content} forceInset={{ bottom: "never" }}>
                <StatusBar barStyle="dark-content" />
                <ScrollView style={{ width: "100%" }}>
                    <View style={searchStyles.Row}>
                        <View style={[searchStyles.MiniCard, searchStyles.Left]}></View>
                        <View style={searchStyles.MiniCard, searchStyles.Left, searchStyles.Right}></View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

export default SearchTemplate;
