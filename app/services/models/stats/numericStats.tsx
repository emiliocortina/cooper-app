import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Modal } from 'react-native';
import ThreadDetailsTemplate from 'cooper-app/app/screens/ThreadDetails/ThreadDetails.template';
import useColorsSheet from '../../useColorsSheet.service';
import { CategoryDetails } from '../categories/category-details';
import i18n from "cooper-app/app/i18n";


export interface NumericStatsProps {
    categoryDetails: CategoryDetails,
    timeRange: string,
    measurementType: string,
    displayValue: string | number,
    measurements: any,
    aspectRatio?: number
}

const NumericStats: React.FC<NumericStatsProps> = (props: NumericStatsProps) => {

    const [modalVisible, setModalVisible] = useState(false);
    let Colors = useColorsSheet();

    const styles = StyleSheet.create({
        Card: {
            borderRadius: 30,
            padding: 20,
            width: '100%',
            marginBottom: 20,
            shadowColor: "rgba(58,55,55,0.31)",
            shadowOffset: { width: 0, height: 8 },
            shadowOpacity: 1,
            shadowRadius: 10,
            elevation: 3,
            justifyContent: 'space-between',
            aspectRatio: props.aspectRatio ? props.aspectRatio : 1
        },
        Text: {
            fontFamily: 'Circular',
            fontSize: 20,
            color: props.categoryDetails.accentColor
        },
        Title: {

        },
        Value: {
            fontSize: 46,
            alignSelf: 'center'
        },
        Unit: {
            alignSelf: 'flex-end'
        }
    });


    return (
        <>
            <Modal animationType="slide" presentationStyle="fullScreen" visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
                <TouchableOpacity style={{ padding: 40 }} onPress={() => setModalVisible(false)}>
                    <Text style={[styles.Text, styles.Title]}>close</Text>
                </TouchableOpacity>
                <ThreadDetailsTemplate
                    categoryDetails={props.categoryDetails}
                    timeRange={props.timeRange}
                    measurementType={props.measurementType}
                    measurements={props.measurements}
                    displayValue={null}
                ></ThreadDetailsTemplate>
            </Modal>

            <View style={[Colors.tertiarySystemBackground, styles.Card]} >
                <TouchableOpacity style={{ justifyContent: 'space-between', flexDirection: 'column', height: '100%' }} onPress={() => setModalVisible(true)}>
                    <Text style={[styles.Text, styles.Title]}>{i18n.t("numericStats." + props.measurementType)}</Text>
                    <Text style={[styles.Text, styles.Value]}>{props.displayValue}</Text>
                    <Text style={[styles.Text, styles.Unit]}>{props.categoryDetails.unit}</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}

export default NumericStats;

