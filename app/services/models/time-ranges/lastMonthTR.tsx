import React, { useState, useEffect } from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import { CategoryDetails } from "../categories/category-details";
import TimeRange from "./timeRange";
import LottieView from "lottie-react-native";


const styles = StyleSheet.create({
    Container: {
        flex: 1,
        width: '100%',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    Title: {
        fontFamily: 'Circular',
        fontSize: 26,
        paddingLeft: 10,
        paddingBottom: 20,
        alignSelf: 'flex-start'
    }
});

interface Props {
    categoryDetails: CategoryDetails
}

const LastMonthTR: React.FC<Props> = (props: Props) => {

    const [lastMonthData, setLastMonthData] = useState(null);

    let anim: LottieView;
    useEffect(() => {
        // Actualiza el título del documento usando la API del navegador
        if (anim) {
            anim.render();
            anim.play();
        };

        setTimeout(() => setLastMonthData({ hola: true }), 10000);
    });

    return (<>
        {!lastMonthData ?
            <View style={styles.Container}>
                <Text style={[styles.Title, { color: props.categoryDetails.accentColor }]}>Last month</Text>
                <LottieView
                    ref={animation => {
                        anim = animation;
                    }}
                    style={{
                        width: 300,
                        height: 200
                    }}
                    source={props.categoryDetails.spinner}
                />
                <Text style={[{ color: props.categoryDetails.accentColor }]}>Loading...</Text>
            </View>

            // <>
            //     <View style={styles.container}>
            //         <Image style={{ height: 300, width: 300, backgroundColor: 'white' }}
            //             resizeMode="contain"
            //             source={require("cooper-app/assets/loading.gif")} />
            //         <Text>Hola</Text>
            //         <View />
            //     </View>
            // </>
            :
            <TimeRange
                categoryDetails={props.categoryDetails}
                title={'Last month'}
                measurements={[]}
                imageURI={'https://media-exp1.licdn.com/dms/image/C4D22AQHJDoe-Fa_V3g/feedshare-shrink_2048_1536/0?e=1597881600&v=beta&t=C_evNdZVUVEi8DllqlwZaaA2iGqF29_K8tRXo2K2Bbc'}></TimeRange>
        }
    </>);

}

export default LastMonthTR;
