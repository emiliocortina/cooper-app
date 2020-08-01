import React from "react";
import { View, StyleSheet, Text } from "react-native";
import useColorsSheet from "cooper-app/app/services/useColorsSheet.service";

interface Props {
    aspecRatio?: number,
    title: string,
    value: number | string,
    unit: string,
    accentColor: string
}
const DashboardNumeric: React.FC<Props> = (props: Props) => {
    let Colors = useColorsSheet();
    const styles = StyleSheet.create({
        Card: {
            borderRadius: 30,
            width: '100%',
            padding: 20,
            marginBottom: 20,
            shadowColor: "rgba(58,55,55,0.31)",
            shadowOffset: { width: 0, height: 8 },
            shadowOpacity: 1,
            shadowRadius: 10,
            elevation: 3,
            justifyContent: 'space-between'
        },
        Text: {
            fontFamily: 'Circular',
            fontSize: 20,
            color: props.accentColor
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
    return (<View style={[Colors.tertiarySystemBackground, styles.Card, { aspectRatio: props.aspecRatio }]}>
        <Text style={[styles.Text, styles.Title]}>{props.title}</Text>
        <Text style={[styles.Text, styles.Value]}>{props.value}</Text>
        <Text style={[styles.Text, styles.Unit]}>{props.unit}</Text>
    </View>);
}

export default DashboardNumeric;

