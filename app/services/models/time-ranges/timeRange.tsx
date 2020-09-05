import React, { useRef, useState, useEffect, useContext } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import NumericStats from "../stats/numericStats";
import DashboardImageCard from "cooper-app/app/components/cards/stats/image/dashboardImage";
import { CategoryDetails } from "../categories/category-details";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import { LocationService, LocationContext } from "../../location.service";

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
    const [loading, setLoading] = useState(true);

    const [imageURI, setImageURI] = useState(null);
    const [data, setData] = useState(null);
    const locationService = useContext(LocationContext);

    console.log('render');
    useEffect(() => {
        console.log('ha cambiado la location');

        props.fetchData().then((response) => {
            setLoading(false);
            setData(response);
        });

        props.fetchImage().then((value) => {
            value.json().then((json) => {
                console.log(json);
                setImageURI('https://www.criticaspolares.com/wp-content/uploads/2020/08/critica-imploding-the-mirage-the-killers-2020-nuevo-disco.jpg')
            });
        });
    }, [locationService.location]);

    let anim: LottieView;

    return (
        <View style={{ marginTop: 20, marginBottom: 20 }}>
            <Text style={[styles.Title, { color: props.categoryDetails.accentColor }]}>{props.title}</Text>

            {!(data && imageURI) ?
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
                            <TouchableOpacity style={{ flex: 1 }}>
                                <View>
                                    <DashboardImageCard
                                        source={{ uri: imageURI }}

                                        ratio={1} />
                                </View>
                            </TouchableOpacity>
                        }
                        {/* {measurements} */}
                        {data}

                    </View>
                </>
            }

        </View>);

}

export default TimeRange;
