import React, { useState } from "react";
import { View, ScrollView, ImageBackground, Button, Text, ImageSourcePropType, TouchableOpacity } from "react-native";
import statsCategoryStyles from "./StatsCategory.stylesheet";
import useColorsSheet from "../../../services/useColorsSheet.service";
import TimeRange from "cooper-app/app/services/models/stats/timeRange";
import { SimpleLineIcons } from "@expo/vector-icons";
import { shareToInstagramStories, shareGeneric } from "cooper-app/app/services/social-sharing.service";
import { useCurrentLocation } from "cooper-app/app/services/location.service";

interface Props {
    categoryDetails: {
        title: string,
        mainColor: string,
        headerImage: ImageSourcePropType
    },
    timeRanges: TimeRange[]
}

const StatsCategoryTemplate: React.FC<Props> = (props: Props) => {
    let Colors = useColorsSheet();
    const categoryDetails = props.categoryDetails;
    let [locationName, setLocationName] = useState('');
    useCurrentLocation().then(parrr => {
        if (parrr && parrr.name) {
            setLocationName(parrr.name)
        }
    });

    return (
        <ScrollView style={{ backgroundColor: categoryDetails.mainColor }} >
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
                                fontFamily: 'Circular', fontSize: 36, color: categoryDetails.mainColor
                            }}>{categoryDetails.title}</Text>
                            <Text style={{
                                fontFamily: 'Circular', fontSize: 20, color: categoryDetails.mainColor, paddingLeft: 5
                            }}>in {locationName}</Text>
                        </View>
                        <TouchableOpacity style={{ paddingTop: 5 }}>
                            <SimpleLineIcons name={"globe-alt"} size={46} color={categoryDetails.mainColor} />

                        </TouchableOpacity>

                    </View>


                </ImageBackground>
                <View style={statsCategoryStyles.Content}>

                    {/* Un timerange */}

                    {props.timeRanges.map((timeRange, i) => {
                        const TimeRangeComponent = timeRange.getComponent();
                        return <TimeRangeComponent key={i} />
                    })}

                    {/* END OF Un timerange */}


                </View>
            </View>



        </ScrollView>

    );
}

export default StatsCategoryTemplate;
