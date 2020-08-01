import React, { useRef, useState, useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import NumericStats from "../stats/numericStats";
import DashboardImageCard from "cooper-app/app/components/cards/stats/image/dashboardImage";
import { shareToInstagramStories } from "../../social-sharing.service";
import { CategoryDetails } from "../categories/category-details";
import LottieView from "lottie-react-native";
import { useCurrentLocation } from "../../location.service";
import { useNavigation } from "@react-navigation/native";

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
    fetchData: () => Promise<Response>,
    fetchImage: () => Promise<Response>,
    categoryDetails: CategoryDetails
}

const TimeRange: React.FC<Props> = (props: Props) => {
    // const imageRef = useRef();

    const [loading, setLoading] = useState(false);
    const [imageURI, setImageURI] = useState('https://earthengine.googleapis.com/v1alpha/projects/earthengine-legacy/thumbnails/a565e91303301dabbb9100961c8447aa-5fffc62493378322ad33eb7b300edebb:getPixels');
    const navigation = useNavigation();
    //const [measurements, setMeasurements] = useState(null);

    const processMeasurements = (measurements: [any]) => {
        console.log(measurements);
        const processed = {};
        const latest = measurements[0];
        console.log('Latest ', latest);
        const sorted = measurements.sort((a, b) => a.value - b.value);
        const minimum = sorted[0];
        console.log('Minimum  ', minimum);
        const maximum = sorted[sorted.length - 1];
        console.log('Maximum ', maximum);

        return processed;
    }

    let anim: LottieView;

    //console.log(props.categoryDetails.title + ' - ' + props.title);

    // props.fetchData().then((response) => {
    //     // console.log('Fetched data from ' + props.categoryDetails.title);
    //     response.json().then((json) => {
    //         //const processedData = processMeasurements(json);
    //     }
    //     );
    //     // const json = response.json();
    //     // const processedMeasurements = processMeasurements(json['measurements']);
    //     setMeasurements(<Text style={[{ color: props.categoryDetails.accentColor, alignSelf: 'center' }]}>Measurements...</Text>);
    //     setLoading(false);
    // }).catch((error) => console.log('baiiia'));

    // props.fetchImage().then((response) => {
    //     // console.log('Fetched image from ' + props.categoryDetails.title);
    //     response.json().then((json) => {
    //         if (json['url']) {
    //             setImageURI(json['url']);
    //         }
    //     });
    //     setLoading(false);
    // }).catch((err) => console.log('errorrrrr'));


    // const minimumMeasurement = new NumericStats('Lowest recorded', 12, props.categoryDetails.unit, props.categoryDetails.accentColor);
    // const maximumMeasurement = new NumericStats('Highest recorded', 32, props.categoryDetails.unit, props.categoryDetails.accentColor);
    // const averageMeasurement = new NumericStats('Average', 23, props.categoryDetails.unit, props.categoryDetails.accentColor);
    // const lastMeasurement = new NumericStats('Latest', 26, props.categoryDetails.unit, props.categoryDetails.accentColor);



    return (
        <View style={{ marginTop: 20, marginBottom: 20 }}>
            <Text style={[styles.Title, { color: props.categoryDetails.accentColor }]}>{props.title}</Text>

            {loading ?
                // Loading screen
                <>
                    <LottieView
                        ref={animation => {
                            anim = animation;
                        }}
                        style={{
                            width: 300,
                            height: 200,
                            alignSelf: 'center'
                        }}
                        source={props.categoryDetails.spinner}
                    />
                    <Text style={[{ color: props.categoryDetails.accentColor, alignSelf: 'center' }]}>Loading...</Text>
                </>
                :
                // Loaded content
                <>
                    <View>

                        {imageURI &&
                            <TouchableOpacity style={{ flex: 1 }} onPress={() => { navigation.navigate('Details') }}>
                                <View>
                                    <DashboardImageCard
                                        source={{ uri: imageURI }}

                                        ratio={1} />
                                </View>
                            </TouchableOpacity>
                        }
                        {/* {measurements} */}
                        <View style={styles.Columns}>
                            <View style={[styles.ColumnLeft]}>
                                <NumericStats
                                    title={'Latest recorded'}
                                    unit={'º'}
                                    color={props.categoryDetails.accentColor}
                                    value={23}></NumericStats>
                                <NumericStats
                                    title={'Latest recorded'}
                                    unit={'º'}
                                    color={props.categoryDetails.accentColor}
                                    value={23}></NumericStats>
                                <NumericStats
                                    title={'Minimum recorded'}
                                    unit={'º'}
                                    color={props.categoryDetails.accentColor}
                                    value={23}></NumericStats>
                            </View>
                            <View style={[styles.ColumnRight]}>
                                <NumericStats
                                    title={'Maximum recorded'}
                                    unit={'º'}
                                    color={props.categoryDetails.accentColor}
                                    value={23}></NumericStats>
                                <NumericStats
                                    title={'Average'}
                                    unit={'º'}
                                    color={props.categoryDetails.accentColor}
                                    value={23}></NumericStats>
                            </View>
                        </View>
                    </View>
                </>
            }

        </View>);

}

export default TimeRange;
