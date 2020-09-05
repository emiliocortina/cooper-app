import React, { useState, ReactNode, useContext } from "react";
import { View, ScrollView, ImageBackground, Button, Text, ImageSourcePropType, TouchableOpacity } from "react-native";
import statsCategoryStyles from "./StatsCategory.stylesheet";
import useColorsSheet from "../../../services/useColorsSheet.service";
import { SimpleLineIcons } from "@expo/vector-icons";
import LastMonthTR from "cooper-app/app/services/models/time-ranges/lastMonthTR";
import { CategoryDetails } from "cooper-app/app/services/models/categories/category-details";
import LastYearTR from "cooper-app/app/services/models/time-ranges/lastYearTR";
import { LocationService, LocationContext } from "cooper-app/app/services/location.service";

interface Props {
    categoryDetails: CategoryDetails;
}

const StatsCategoryHeader: React.FC<Props> = (props: Props) => {

    const locationService = useContext(LocationContext);

    return (<ImageBackground
        source={props.categoryDetails.headerImage}
        style={{ width: '100%', height: undefined, aspectRatio: 1242 / 707, justifyContent: 'flex-end' }}
    >
        <View style={{
            paddingHorizontal: 25,
            flexDirection: "row",
            justifyContent: "space-between",
            alignContent: "center",
            alignItems: "center"
        }}>
            <View>
                <Text style={{
                    fontFamily: 'Circular', fontSize: 36, color: props.categoryDetails.accentColor
                }}>{props.categoryDetails.title}</Text>
                <Text style={{
                    fontFamily: 'Circular', fontSize: 20, color: props.categoryDetails.accentColor, paddingLeft: 5
                }}>in {locationService.location.name}</Text>
            </View>
            <TouchableOpacity style={{ paddingTop: 5 }} onPress={async () => {
                console.log('keloke');
                const current = await LocationService.getCurrentLocation();
                current.latitude = 54;
                locationService.changeLocation(current);
            }}>
                <SimpleLineIcons name={"globe-alt"} size={46} color={props.categoryDetails.accentColor} />
            </TouchableOpacity>
        </View>

    </ImageBackground>);
}

const StatsCategoryTemplate: React.FC<Props> = (props: Props) => {
    let Colors = useColorsSheet();

    console.log('generic - ', props.categoryDetails.title);

    return (
        <ScrollView style={{ backgroundColor: props.categoryDetails.accentColor }} >
            <View style={Colors.systemBackground}>
                <StatsCategoryHeader categoryDetails={props.categoryDetails}></StatsCategoryHeader>

                <View style={statsCategoryStyles.Content}>
                    {/* Un timerange */}
                    <LastMonthTR categoryDetails={props.categoryDetails}></LastMonthTR>
                    {/* <LastYearTR categoryDetails={props.categoryDetails}></LastYearTR> */}
                    {/* END OF Un timerange */}
                </View>

            </View>
        </ScrollView>

    );
}

export default StatsCategoryTemplate;
