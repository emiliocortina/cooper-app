import React from "react";
import {StyleSheet} from "react-native"
import {BlurView} from 'expo-blur';

class StatsCard extends React.Component {
    render() {
        return (
            <BlurView style={styles.CardContainer}>

            </BlurView>
        );
    }
}

const styles = StyleSheet.create({
    CardContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
        borderRadius: 40,
        height: 220,
        width: 250,
        shadowColor: "rgba(58,55,55,0.1)",
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 1,
        shadowRadius: 15,
        elevation: 3,
        marginHorizontal: 10,
    },
    Content: {
        backgroundColor: "white",
        width: "100%",
        padding: 20,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
    },
    Subtitle: {
        color: "#3c3c4399"
    },
});

export default StatsCard;
