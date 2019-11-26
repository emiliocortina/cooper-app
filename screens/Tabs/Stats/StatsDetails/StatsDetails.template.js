import React from "react";
import {View, Text, ImageBackground} from "react-native";
import statsStyles from './StatsDetails.stylesheet';
import SafeAreaView from "react-native-safe-area-view";
import useColorsSheet from "cooper/services/useColorsSheet.service";

const StatsDetailsTemplate = (props) => {
    let Colors = useColorsSheet();

    return (
        <SafeAreaView>
            <Text style={Colors.labels}>Detallitoss {props.category}</Text>
        </SafeAreaView>
    );
}

export default StatsDetailsTemplate;
