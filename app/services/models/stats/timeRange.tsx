import React from "react";
import DashboardAreaChart from "cooper-app/app/components/cards/stats/chart/area-chart/dashboardAreaChart";
import { View, StyleSheet, Text } from "react-native";
import useColorsSheet from "../../useColorsSheet.service";
import NumericStats from "./numericStats";
import DashboardImageCard from "cooper-app/app/components/cards/stats/image/dashboardImage";

const styles = StyleSheet.create({
    Columns: {
        width: '100%',
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "center",
        flexDirection: "row",
    },
    ColumnLeft: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "column",
        paddingRight: 5,
    },
    ColumnCenter: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "column",
        paddingHorizontal: 5,
    },
    ColumnRight: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "column",
        paddingLeft: 5,
    },
    Card: {
        borderRadius: 30,
        width: '100%',
        marginBottom: 20,
        shadowColor: "rgba(58,55,55,0.31)",
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 3,
    },
    Title: {
        fontFamily: 'Circular',
        fontSize: 26,
        paddingLeft: 10,
        paddingBottom: 20
    }
});

export default class TimeRange {
    title: string;
    measurements: { value: number | string };
    minimumMeasurement: NumericStats;
    maximumMeasurement: NumericStats;
    averageMeasurement: NumericStats;
    lastMeasurement: NumericStats;
    unit: string;
    color: string;

    constructor(title: string,
        measurements: { value: number | string },
        unit: string,
        color: string,
        minimumMeasurement: { value: number | string },
        maximumMeasurement: { value: number | string },
        averageMeasurement: { value: number | string },
        lastMeasurement: { value: number | string }) {
        this.title = title;
        this.measurements = measurements;
        this.unit = unit;
        this.color = color;
        this.minimumMeasurement = new NumericStats('Lowest recorded', minimumMeasurement.value, this.unit, this.color);
        this.maximumMeasurement = new NumericStats('Highest recorded', maximumMeasurement.value, this.unit, this.color);
        this.averageMeasurement = new NumericStats('Average', averageMeasurement.value, this.unit, this.color);
        this.lastMeasurement = new NumericStats('Latest', lastMeasurement.value, this.unit, this.color);
    }

    getComponent(): React.FC {
        let Colors = useColorsSheet();

        return () =>
            <View style={{ marginTop: 20, marginBottom: 20 }}>
                <Text style={[styles.Title, { color: this.color }]}>{this.title}</Text>
                <DashboardImageCard source={require('cooper-app/assets/images/sidebyside.jpg')} ratio={16 / 9} />
                <View style={styles.Columns}>
                    <View style={[styles.ColumnLeft]}>
                        {this.lastMeasurement.getDashboardComponent(1)(null)}
                        {this.minimumMeasurement.getDashboardComponent(5 / 8)(null)}
                    </View>
                    <View style={[styles.ColumnRight]}>
                        {this.maximumMeasurement.getDashboardComponent(5 / 8)(null)}
                        {this.averageMeasurement.getDashboardComponent(1)(null)}
                    </View>
                </View>
                <DashboardAreaChart backgroundColor={this.color} />
            </View>;
    }
}