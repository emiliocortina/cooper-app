import React, { useRef } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import NumericStats from "../stats/numericStats";
import DashboardImageCard from "cooper-app/app/components/cards/stats/image/dashboardImage";
import { shareToInstagramStories } from "../../social-sharing.service";
import { CategoryDetails } from "../categories/category-details";

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
    Card: {
        borderRadius: 30,
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

interface Props {
    title: string,
    measurements: { value: number | string }[],
    imageURI: string,
    categoryDetails: CategoryDetails
}

const TimeRange: React.FC<Props> = (props: Props) => {
    const imageRef = useRef();

    let minimumMeasurement, maximumMeasurement, averageMeasurement, lastMeasurement;

    if (props.measurements && props.measurements[0]) {
        minimumMeasurement = new NumericStats('Lowest recorded', props.measurements[0].value, props.categoryDetails.unit, props.categoryDetails.accentColor);
        maximumMeasurement = new NumericStats('Highest recorded', props.measurements[0].value, props.categoryDetails.unit, props.categoryDetails.accentColor);
        averageMeasurement = new NumericStats('Average', props.measurements[0].value, props.categoryDetails.unit, props.categoryDetails.accentColor);
        lastMeasurement = new NumericStats('Latest', props.measurements[0].value, props.categoryDetails.unit, props.categoryDetails.accentColor);
    }

    return (
        <View style={{ marginTop: 20, marginBottom: 20 }}>
            <Text style={[styles.Title, { color: props.categoryDetails.accentColor }]}>{props.title}</Text>
            <View >
                <TouchableOpacity style={{ flex: 1 }} onPress={() => shareToInstagramStories(imageRef)}>
                    <View ref={imageRef}>
                        <DashboardImageCard
                            source={{ uri: props.imageURI }}

                            ratio={1} />
                    </View>
                </TouchableOpacity>

                {props.measurements && props.measurements[0] &&
                    <View style={styles.Columns}>
                        <View style={[styles.ColumnLeft]}>
                            {lastMeasurement.getDashboardComponent(1)(null)}
                            {minimumMeasurement.getDashboardComponent(5 / 8)(null)}
                        </View>
                        <View style={[styles.ColumnRight]}>
                            {maximumMeasurement.getDashboardComponent(5 / 8)(null)}
                            {averageMeasurement.getDashboardComponent(1)(null)}
                        </View>
                    </View>
                }

            </View>

        </View>);

}

export default TimeRange;
