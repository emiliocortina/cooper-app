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

const StatsCategoryTemplate: React.FC<Props> = (props: Props) => {
    let Colors = useColorsSheet();

    const categoryDetails = props.categoryDetails;

    const locationService = useContext(LocationContext);
    // const locationName = locationService.getLoadedLocation().name;
    // const ln = useContext(LocationContext);
    //let [locationService, setLocationService] = useState(LocationService.service);


    console.log('generic - ', categoryDetails.title);

    return (
        <ScrollView style={{ backgroundColor: categoryDetails.accentColor }} >
            <View style={Colors.systemBackground}>


                <ImageBackground
                    source={categoryDetails.headerImage}
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
                                fontFamily: 'Circular', fontSize: 36, color: categoryDetails.accentColor
                            }}>{categoryDetails.title}</Text>
                            <Text style={{
                                fontFamily: 'Circular', fontSize: 20, color: categoryDetails.accentColor, paddingLeft: 5
                            }}>in {locationService.location.name}</Text>
                        </View>
                        <TouchableOpacity style={{ paddingTop: 5 }} onPress={async () => {
                            const current = await LocationService.getCurrentLocation();
                            locationService.changeLocation(current);
                        }}>
                            <SimpleLineIcons name={"globe-alt"} size={46} color={categoryDetails.accentColor} />
                        </TouchableOpacity>
                    </View>

                </ImageBackground>
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
