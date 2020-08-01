import { ImageBackground } from "react-native";
import React from "react";

interface Props {
    source: { uri: string },
    ratio?: number,
}

const DashboardImageCard: React.FC<Props> = (props: Props) => {

    let source = require('cooper-app/assets/images/sentinel3.jpg');

    if (props.source) {
        source = props.source;
    }

    const styles = {
        Card: {
            backgroundColor: 'white',
            borderRadius: 30,
            width: '100%',
            marginBottom: 20,
            shadowColor: "rgba(58,55,55,0.31)",
            shadowOffset: { width: 0, height: 8 },
            shadowOpacity: 1,
            shadowRadius: 10,
            elevation: 3,
            aspectRatio: props.ratio ? props.ratio : 5 / 8,
        }
    }

    return (
        <ImageBackground
            source={source}
            style={styles.Card}
            imageStyle={{ borderRadius: 30 }}
        />);
}

export default DashboardImageCard;
