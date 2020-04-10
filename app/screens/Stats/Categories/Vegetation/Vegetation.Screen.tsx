import React from "react";
import StatsCategoryTemplate from "../StatsCategory.template";
import ApiService from "cooper-app/app/services/api.service";

const vegetationDetails = {
    title: 'Vegetation',
    mainColor: '#60C66E',
    headerImage: require('cooper-app/assets/category_headers/vegetation.png')
}

const timeRanges = new ApiService().getDummies(vegetationDetails.mainColor, 'l/m3');


const VegetationScreen: React.FC = () => <StatsCategoryTemplate categoryDetails={vegetationDetails} timeRanges={timeRanges} />;

export default VegetationScreen;