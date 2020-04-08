import React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const DashboardAreaChart: React.FC = () => {

    return (
    <ImageBackground
        source={require("cooper-app/assets/images/graph.png")}
        style={styles.Graph}
        imageStyle={{ borderRadius: 30 }}
    >
    </ImageBackground>);
}

const styles = StyleSheet.create({
    Graph: {
        backgroundColor: 'white',
        borderRadius: 30,
        width: '100%',
        marginBottom: 20,
        shadowColor: "rgba(58,55,55,0.31)",
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 3,
        aspectRatio: 16/9
    }
});

export default DashboardAreaChart;
