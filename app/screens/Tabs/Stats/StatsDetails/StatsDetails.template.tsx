import React from "react";
import { View, ScrollView, ImageBackground, Image, Text } from "react-native";
import statsDetailsStyles from "./StatsDetails.stylesheet";
import useColorsSheet from "../../../../services/useColorsSheet.service";
import DashboardAreaChart from "cooper-app/app/components/cards/stats/chart/area-chart/dashboardAreaChart";


const StatsDetailsTemplate: React.FC = () => {
    let Colors = useColorsSheet();

    return (
        <View style={{ backgroundColor: 'red' }}>
            <ScrollView style={Colors.systemBackground} >

                <ImageBackground
                    source={require('cooper-app/assets/category_headers/vegetation.png')}
                    style={{ width: '100%', height: undefined, aspectRatio: 1242 / 707, justifyContent: 'flex-end' }}
                >
                    <Text style={{
                        fontFamily: 'Circular', fontSize: 36, color: '#e26a61', paddingLeft: 10,
                        paddingBottom: 30
                    }}> Temperaturesa</Text>
                </ImageBackground>

                <View style={statsDetailsStyles.Content}>

                    {/* Un timerange */}
                    <View style={statsDetailsStyles.Columns}><DashboardAreaChart /></View>

                    <View style={statsDetailsStyles.Columns}>
                        <View style={[statsDetailsStyles.ColumnLeft]}>
                            <View style={[Colors.tertiarySystemBackground, statsDetailsStyles.Card, { aspectRatio: 1 }]}></View>
                            <View style={[Colors.tertiarySystemBackground, statsDetailsStyles.Card, { aspectRatio: 5 / 8 }]}></View>
                        </View>
                        <View style={[statsDetailsStyles.ColumnRight]}>
                            <View style={[Colors.tertiarySystemBackground, statsDetailsStyles.Card, { aspectRatio: 5 / 8 }]}></View>
                            <View style={[Colors.tertiarySystemBackground, statsDetailsStyles.Card, { aspectRatio: 1 }]}></View>
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
        </View>

    );
}

export default StatsDetailsTemplate;
