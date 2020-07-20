import React from "react";
import { CategoryDetails } from "../categories/category-details";
import TimeRange from "./timeRange";


interface Props {
    categoryDetails: CategoryDetails
}

const LastMonthTR: React.FC<Props> = (props: Props) => {


    return (
        <TimeRange
            categoryDetails={props.categoryDetails}
            title={'Last month'}
            measurements={[]}
            imageURI={'https://media-exp1.licdn.com/dms/image/C4D22AQHJDoe-Fa_V3g/feedshare-shrink_2048_1536/0?e=1597881600&v=beta&t=C_evNdZVUVEi8DllqlwZaaA2iGqF29_K8tRXo2K2Bbc'}></TimeRange>
    );

}

export default LastMonthTR;
