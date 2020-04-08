import React from "react";
import { View, ScrollView, ImageBackground, Image, Text } from "react-native";
import statsDetailsStyles from "./StatsDetails.stylesheet";
import useColorsSheet from "../../../../services/useColorsSheet.service";
import DashboardImageCard from "../../../../components/cards/stats/image/dashboardImage";
import DashboardAreaChart from "cooper-app/app/components/cards/stats/chart/area-chart/dashboardAreaChart";


const StatsDetailsTemplate: React.FC = () => {
    let Colors = useColorsSheet();

    return (
        <ScrollView style={Colors.systemBackground}>

            <ImageBackground
                source={require('cooper-app/assets/category_headers/temperatures.png')}
                style={{ width: '100%', height: undefined, aspectRatio: 16 / 9, justifyContent: 'flex-end' }}
            >
                <Text> HOLI</Text>
                <Text> HOLI</Text>
                <Text> HOLI</Text>
                <Text> HOLI</Text>
            </ImageBackground>

            <View style={statsDetailsStyles.Content}>

                {/* Un timerange */}
                <View style={statsDetailsStyles.Columns}><DashboardAreaChart /></View>

                <View style={statsDetailsStyles.Columns}>
                    <View style={[statsDetailsStyles.ColumnLeft]}>
                        <View style={[statsDetailsStyles.Card, { aspectRatio: 1 }]}></View>
                        <View style={[statsDetailsStyles.Card, { aspectRatio: 5 / 8 }]}></View>
                    </View>
                    <View style={[statsDetailsStyles.ColumnRight]}>
                        <DashboardImageCard source={require('cooper-app/assets/images/sat1.jpg')} />
                        <View style={[statsDetailsStyles.Card, { aspectRatio: 1 }]}></View>
                    </View>
                </View>
                {/* END OF Un timerange */}

                <DashboardAreaChart />

                <View style={statsDetailsStyles.Columns}>
                    <View style={[statsDetailsStyles.ColumnLeft]}>
                        <View style={[statsDetailsStyles.Card, { aspectRatio: 1 }]}></View>
                    </View>
                    <View style={[statsDetailsStyles.ColumnRight]}>
                        <View style={[statsDetailsStyles.Card, { aspectRatio: 1 }]}></View>
                    </View>
                </View>
            </View>

        </ScrollView>
    );
}

export default StatsDetailsTemplate;
