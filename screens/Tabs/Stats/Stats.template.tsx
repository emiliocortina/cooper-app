import React from "react";
import {View, Text, ImageBackground} from "react-native";
import i18n from 'cooper-app/i18n';
import statsStyles from './Stats.stylesheet';
import SafeAreaView from "react-native-safe-area-view";
import useColorsSheet from "../../../services/useColorsSheet.service";

const StatsTemplate = () => {
    let Colors = useColorsSheet();

    return (
        <SafeAreaView
            style={[statsStyles.Content, Colors.systemBackground]}
        >
            <Text>{i18n.t('tabs.stats.name')}</Text>
        </SafeAreaView>
    );
}

export default StatsTemplate;
