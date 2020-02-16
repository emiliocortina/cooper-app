import React from "react";
import {View, ScrollView} from "react-native";
import statsDetailsStyles from "./StatsDetails.stylesheet";
import useColorsSheet from "../../../../services/useColorsSheet.service";
import DashboardImageCard from "../../../../components/cards/stats/image/dashboardImage";
import DashboardAreaChart from "cooper-app/components/cards/stats/chart/area-chart/dashboardAreaChart";


const StatsDetailsTemplate: React.FC = () => {
    let Colors = useColorsSheet();

    return (
        <ScrollView style={Colors.systemBackground}>
            <View style={statsDetailsStyles.Content}>

                <View style={statsDetailsStyles.Columns}><DashboardAreaChart/></View>

                <View style={statsDetailsStyles.Columns}>
                    <View style={[statsDetailsStyles.ColumnLeft]}>
                        <View style={[statsDetailsStyles.Card, {aspectRatio: 1}]}></View>
                        <View style={[statsDetailsStyles.Card, {aspectRatio: 5/8}]}></View>
                    </View>
                    <View style={[statsDetailsStyles.ColumnRight]}>
                        <DashboardImageCard source={require('cooper-app/assets/images/sat1.jpg')}/>
                        <View style={[statsDetailsStyles.Card, {aspectRatio: 1}]}></View>
                    </View>
                </View>

                <DashboardAreaChart/>

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
