import React from 'react';
import { View, Image, ScrollView, StyleSheet, Text, StatusBar, TouchableOpacity, Dimensions } from 'react-native';
import { Feather } from "@expo/vector-icons";
import ReactNativeParallaxHeader from 'react-native-parallax-header';
import useColorsSheet from "../../services/useColorsSheet.service";
import DashboardAreaChart from 'cooper-app/app/components/cards/stats/chart/area-chart/dashboardAreaChart';
import i18n from "cooper-app/app/i18n";
import { NumericStatsProps } from 'cooper-app/app/services/models/stats/numericStats';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";


const ThreadDetailsTemplate: React.FC<NumericStatsProps> = (props: NumericStatsProps) => {

    let Colors = useColorsSheet();
    const styles = StyleSheet.create({
        container: {
            ...Colors.systemBackground,
            flex: 1,
            padding: 36,
            paddingBottom: 200,
            flexGrow: 1
        },
        Title: {
            fontFamily: 'Circular',
            fontSize: 28,
            fontWeight: 'bold',
            marginBottom: 20
        },
        Subtitle: {
            color: '#999999',
            marginBottom: 40,
            fontSize: 16,
            fontFamily: 'Circular'
        },
        Paragraph: {
            color: '#555555',
            fontSize: 16
        },
        Chart: {
            width: '100%',
            height: 200,
            marginBottom: 40,
        },
        Card: {
            borderRadius: 30,
            width: '100%',
            padding: 20,
            marginTop: 40,
            marginBottom: 120,
            shadowColor: "rgba(58,55,55,0.31)",
            shadowOffset: { width: 0, height: 8 },
            shadowOpacity: 1,
            shadowRadius: 10,
            elevation: 3,
            justifyContent: 'flex-start',
            backgroundColor: 'white',
            flexDirection: 'row',
            alignContent: 'center',
            alignItems: 'center'
        },
        CardDescription: {
            marginLeft: 16,
            flex: 1
        },
        CardTitle: {
            fontFamily: 'Circular',
            fontSize: 22,
            fontWeight: 'bold',
            marginBottom: 6
        },
        CardSubtitle: {
            color: '#999999',
            fontSize: 14,
        }
    });


    return (
        <ScrollView style={styles.container}>
            <Text style={[styles.Title, { color: '#E26A61' }]}>
                {i18n.t(`statsDetails.${props.measurementType}.${props.timeRange}.${props.categoryDetails.id}.title`)}</Text>
            <Text style={[styles.Subtitle]}>{i18n.t(`statsDetails.${props.measurementType}.${props.timeRange}.${props.categoryDetails.id}.subtitle`)}</Text>

            <LineChart
                data={{
                    labels: ["J", "F", "M", "A", "M", "J"],
                    datasets: [
                        {
                            data: [
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100
                            ]
                        }
                    ]
                }}
                width={Dimensions.get("window").width - 72} // from react-native
                height={220} // optional, defaults to 1
                withInnerLines={false}
                withOuterLines={false}
                yAxisInterval={3}
                chartConfig={{
                    backgroundColor: "#E26A61",
                    backgroundGradientFrom: "#E26A61",
                    backgroundGradientTo: "#F9A78A",
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 0) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16
                    },
                    propsForDots: {
                        r: "4",
                        strokeWidth: "2",
                        stroke: "#ffffff"
                    },

                }}
                bezier
                style={{
                    alignSelf: 'center',
                    marginVertical: 8,
                    borderRadius: 16
                }}
            />

            <Text style={styles.Paragraph}> {i18n.t(`statsDetails.${props.measurementType}.${props.timeRange}.${props.categoryDetails.id}.description`)}</Text>
            <View style={styles.Card}>
                <Image style={{ width: 90, height: 100 }} resizeMode={'contain'} source={require('cooper-app/assets/images/sentinel.png')}></Image>
                <View style={styles.CardDescription}>
                    <Text style={styles.CardTitle}>Sentinel 5P</Text>
                    <Text style={styles.CardSubtitle}>Performs atmospheric measurements to be used for air quality, ozone & UV radiation, and climate monitoring & forecasting.</Text>
                </View>

            </View>

        </ScrollView>
    );

}


const images = {
    background: require('cooper-app/assets/images/sidebyside.jpg'), // Put your own image here
};

export default ThreadDetailsTemplate;
