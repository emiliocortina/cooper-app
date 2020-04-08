import React from "react";
import { View, ScrollView, ImageBackground, Image, Text, ImageSourcePropType } from "react-native";
import statsCategoryStyles from "./StatsCategory.stylesheet";
import useColorsSheet from "../../../../services/useColorsSheet.service";
import DashboardAreaChart from "cooper-app/app/components/cards/stats/chart/area-chart/dashboardAreaChart";

interface Props {
    categoryDetails: {
        title: string,
        mainColor: string,
        headerImage: ImageSourcePropType
    }
}

const StatsCategoryTemplate: React.FC<Props> = (props: Props) => {
    let Colors = useColorsSheet();
    const categoryDetails = props.categoryDetails;

    return (
        <ScrollView style={{ backgroundColor: categoryDetails.mainColor }} >

            <View style={Colors.systemBackground}>
                <ImageBackground
                    source={categoryDetails.headerImage}
                    style={{ width: '100%', height: undefined, aspectRatio: 1242 / 707, justifyContent: 'flex-end' }}
                >
                    <View style={{
                        paddingLeft: 25,
                    }}>
                        <Text style={{
                            fontFamily: 'Circular', fontSize: 36, color: categoryDetails.mainColor
                        }}>{categoryDetails.title}</Text>
                        <Text style={{
                            fontFamily: 'Circular', fontSize: 20, color: categoryDetails.mainColor, paddingLeft: 5
                        }}>in Frascati</Text>
                    </View>


                </ImageBackground>

                <View style={statsCategoryStyles.Content}>

                    {/* Un timerange */}

                    <View style={statsCategoryStyles.Columns}>
                        <View style={[statsCategoryStyles.ColumnLeft]}>
                            <View style={[Colors.tertiarySystemBackground, statsCategoryStyles.Card, { aspectRatio: 1 }]}></View>
                            <View style={[Colors.tertiarySystemBackground, statsCategoryStyles.Card, { aspectRatio: 5 / 8 }]}></View>
                        </View>
                        <View style={[statsCategoryStyles.ColumnRight]}>
                            <View style={[Colors.tertiarySystemBackground, statsCategoryStyles.Card, { aspectRatio: 5 / 8 }]}></View>
                            <View style={[Colors.tertiarySystemBackground, statsCategoryStyles.Card, { aspectRatio: 1 }]}></View>
                        </View>
                    </View>
                    {/* END OF Un timerange */}

                    {/* Un timerange */}

                    <View style={statsCategoryStyles.Columns}>
                        <View style={[statsCategoryStyles.ColumnLeft]}>
                            <View style={[Colors.tertiarySystemBackground, statsCategoryStyles.Card, { aspectRatio: 1 }]}></View>
                            <View style={[Colors.tertiarySystemBackground, statsCategoryStyles.Card, { aspectRatio: 5 / 8 }]}></View>
                        </View>
                        <View style={[statsCategoryStyles.ColumnRight]}>
                            <View style={[Colors.tertiarySystemBackground, statsCategoryStyles.Card, { aspectRatio: 5 / 8 }]}></View>
                            <View style={[Colors.tertiarySystemBackground, statsCategoryStyles.Card, { aspectRatio: 1 }]}></View>
                        </View>
                    </View>
                    {/* END OF Un timerange */}

                </View>
            </View>



        </ScrollView>

    );
}

export default StatsCategoryTemplate;
