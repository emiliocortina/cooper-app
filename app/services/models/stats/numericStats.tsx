import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Modal } from 'react-native';
import ThreadDetailsTemplate from 'cooper-app/app/screens/ThreadDetails/ThreadDetails.template';
import useColorsSheet from '../../useColorsSheet.service';



interface Props {
    title: string,
    value: string | number,
    unit: string,
    color: string,
    aspectRatio?: number
}

const NumericStats: React.FC<Props> = (props: Props) => {

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
            color: props.color
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
                <ThreadDetailsTemplate></ThreadDetailsTemplate>
            </Modal>

            <View style={[Colors.tertiarySystemBackground, styles.Card]} >
                <TouchableOpacity style={{ justifyContent: 'space-between', flexDirection: 'column', height: '100%' }} onPress={() => setModalVisible(true)}>
                    <Text style={[styles.Text, styles.Title]}>{props.title}</Text>
                    <Text style={[styles.Text, styles.Value]}>{props.value}</Text>
                    <Text style={[styles.Text, styles.Unit]}>{props.unit}</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}

export default NumericStats;

