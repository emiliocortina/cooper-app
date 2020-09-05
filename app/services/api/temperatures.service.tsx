import React, { ReactNode } from "react";
import { LocationService } from "../location.service";
import { formatDate, request } from "./api.service";
import { View, StyleSheet } from "react-native";
import NumericStats from "../models/stats/numericStats";
import { TemperatureDetails } from "../models/categories/category-details";

const styles = StyleSheet.create({
    Columns: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "center",
        flexDirection: "row"
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
});

export const getLastMonthTemperatures = async (latitude: number, longitude: number, startDateFormatted: string, endDateFormatted: string): Promise<ReactNode> => {
    const url = `API/data/surface-temperature?latitude=${latitude}&longitude=${longitude}&startDate=${startDateFormatted}&finishDate=${endDateFormatted}`;
    let data = await request(url, 'GET');
    data = await data.json();

    const categoryDetails = new TemperatureDetails();

    return (<View style={styles.Columns}>
        <View style={[styles.ColumnLeft]}>
            <NumericStats
                title={'Latest recorded'}
                unit={'ºC'}
                color={categoryDetails.accentColor}
                value={23}></NumericStats>
            <NumericStats
                title={'Minimum recorded'}
                unit={'ºC'}
                color={categoryDetails.accentColor}
                value={23}
                aspectRatio={5 / 8}></NumericStats>
        </View>
        <View style={[styles.ColumnRight]}>
            <NumericStats
                title={'Maximum recorded'}
                unit={'ºC'}
                color={categoryDetails.accentColor}
                value={23}
                aspectRatio={5 / 8}></NumericStats>
            <NumericStats
                title={'Average'}
                unit={'ºC'}
                color={categoryDetails.accentColor}
                value={23}></NumericStats>
        </View>
    </View>);
}
