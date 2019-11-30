import React from "react";
import {View, Text, ImageBackground, ScrollView} from "react-native";
import statsDetailsStyles from "./StatsDetails.stylesheet";
import useColorsSheet from "../../../../services/useColorsSheet.service";
import {LinearGradient} from "expo-linear-gradient";
import DashboardImageCard from "../../../../components/cards/stats/image/dashboardImage";


const StatsDetailsTemplate: React.FC = () => {
    let Colors = useColorsSheet();

    return (
        <ScrollView style={Colors.systemBackground}>
            <View style={statsDetailsStyles.Content}>
                <ImageBackground
                    source={require("cooper-app/assets/images/graph.png")}
                    style={statsDetailsStyles.Graph}
                    imageStyle={{ borderRadius: 30 }}
                >
                </ImageBackground>

                <View style={statsDetailsStyles.Columns}>
                    <View style={[statsDetailsStyles.ColumnLeft]}>
                        <View style={[statsDetailsStyles.Card, {aspectRatio: 1}]}></View>
                        <DashboardImageCard source={require('cooper-app/assets/images/no2.jpg')}/>
                    </View>
                    <View style={[statsDetailsStyles.ColumnRight]}>
                        <DashboardImageCard source={require('cooper-app/assets/images/sat1.jpg')}/>
                        <View style={[statsDetailsStyles.Card, {aspectRatio: 1}]}></View>
                    </View>
                </View>

                <ImageBackground
                    source={require("cooper-app/assets/images/login.jpg")}
                    style={[statsDetailsStyles.Graph, {aspectRatio: 1}]}
                    imageStyle={{ borderRadius: 30 }}
                >
                </ImageBackground>

                <View style={statsDetailsStyles.Columns}>
                    <View style={[statsDetailsStyles.ColumnLeft]}>
                        <View style={[statsDetailsStyles.Card, {aspectRatio: 1}]}></View>
                    </View>
                    <View style={[statsDetailsStyles.ColumnRight]}>
                        <View style={[statsDetailsStyles.Card, {aspectRatio: 1}]}></View>
                    </View>
                </View>
            </View>

        </ScrollView>
    );
}

export default StatsDetailsTemplate;
