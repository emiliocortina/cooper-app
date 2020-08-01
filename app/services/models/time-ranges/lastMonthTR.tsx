import React from "react";
import { StyleSheet } from "react-native";
import { CategoryDetails } from "../categories/category-details";
import TimeRange from "./timeRange";
import { useLastMonthData, useLastMonthImage } from "../../api/api.service";


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

    const fetchData = () => {
        return useLastMonthData(props.categoryDetails);
    }

    const fetchImage = () => {
        return useLastMonthImage(props.categoryDetails);
    }

    return (
        <TimeRange
            categoryDetails={props.categoryDetails}
            title={'Last month'}
            fetchData={fetchData}
            fetchImage={fetchImage}></TimeRange>
    );

}

export default LastMonthTR;
