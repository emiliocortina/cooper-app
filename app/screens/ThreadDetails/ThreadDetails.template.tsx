import React from 'react';
import { View, Image, ScrollView, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';
import { Feather } from "@expo/vector-icons";
import ReactNativeParallaxHeader from 'react-native-parallax-header';
import useColorsSheet from "../../services/useColorsSheet.service";
import DashboardAreaChart from 'cooper-app/app/components/cards/stats/chart/area-chart/dashboardAreaChart';

const HEADER_HEIGHT = 64;


const ThreadDetailsTemplate: React.FC<any> = ({ navigation, route }) => {

    let Colors = useColorsSheet();
    const styles = StyleSheet.create({
        container: {
            ...Colors.systemBackground,
            flex: 1,
            padding: 36,
            paddingBottom: 200
        },
        contentContainer: {
            flexGrow: 1,
        },
        navBar: {
            height: '100%',
            justifyContent: 'space-between',
            marginHorizontal: 20,
            alignItems: 'center',
            flexDirection: 'row',
            backgroundColor: 'transparent',
        },
        Title: {
            fontFamily: 'Circular',
            fontSize: 28,
            fontWeight: 'bold',
            marginBottom: 20
        },
        Subtitle: {
            color: '#999999',
            marginBottom: 40,
            fontSize: 16,
            fontFamily: 'Circular'
        },
        Paragraph: {
            color: '#555555',
            fontSize: 16
        },
        Chart: {
            width: '100%',
            height: 200,
            marginBottom: 40,
        },
        Card: {
            borderRadius: 30,
            width: '100%',
            padding: 20,
            marginTop: 40,
            marginBottom: 120,
            shadowColor: "rgba(58,55,55,0.31)",
            shadowOffset: { width: 0, height: 8 },
            shadowOpacity: 1,
            shadowRadius: 10,
            elevation: 3,
            justifyContent: 'flex-start',
            backgroundColor: 'white',
            flexDirection: 'row',
            alignContent: 'center',
            alignItems: 'center'
        },
        CardDescription: {
            marginLeft: 16,
            flex: 1
        },
        CardTitle: {
            fontFamily: 'Circular',
            fontSize: 22,
            fontWeight: 'bold',
            marginBottom: 6
        },
        CardSubtitle: {
            color: '#999999',
            fontSize: 14,
        }
    });


    return (
        <ScrollView style={styles.container}>
            <Text style={[styles.Title, { color: '#E26A61' }]}>Historical temperature data in detail</Text>
            <Text style={[styles.Subtitle]}>Monthly average aggregates</Text>
            <Image style={styles.Chart} resizeMode={'contain'} source={require('cooper-app/assets/images/temp_chart.png')}></Image>
            <Text style={styles.Paragraph}>Reanalyses provide a numerical description of the recent climate by combining models with observations. They have been invaluable to numerous users in Member States and around the world and have always been closely associated with the excellence of the Centre’s forecast products.</Text>
            <View style={styles.Card}>
                <Image style={{ width: 90, height: 100 }} resizeMode={'contain'} source={require('cooper-app/assets/images/sentinel.png')}></Image>
                <View style={styles.CardDescription}>
                    <Text style={styles.CardTitle}>Sentinel 5P</Text>
                    <Text style={styles.CardSubtitle}>Performs atmospheric measurements to be used for air quality, ozone & UV radiation, and climate monitoring & forecasting.</Text>
                </View>

            </View>

        </ScrollView>
    );

}


const images = {
    background: require('cooper-app/assets/images/sidebyside.jpg'), // Put your own image here
};

export default ThreadDetailsTemplate;
