import React from "react";
import { CategoryDetails } from "../categories/category-details";
import TimeRange from "./timeRange";


interface Props {
    categoryDetails: CategoryDetails
}

const LastYearTR: React.FC<Props> = (props: Props) => {


    return (
        <TimeRange
            categoryDetails={props.categoryDetails}
            title={'Last year'}
            measurements={[]}
            imageURI={'https://eoimages.gsfc.nasa.gov/images/imagerecords/146000/146362/china_trop_2020056.png'}></TimeRange>
    );

}

export default LastYearTR;
