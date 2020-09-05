import React from "react";
import { StyleSheet } from "react-native";
import { CategoryDetails } from "../categories/category-details";
import TimeRange from "./timeRange";
import { getLastMonthData, getLastMonthImage } from "../../api/api.service";

interface Props {
    categoryDetails: CategoryDetails
}

const LastMonthTR: React.FC<Props> = (props: Props) => {

    const fetchData = () => {
        return getLastMonthData(props.categoryDetails);
    }

    const fetchImage = () => {
        return getLastMonthImage(props.categoryDetails);
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
