import React from "react";
import StatsCategoryTemplate from "../StatsCategory.template";

const vegetationDetails = {
    title: 'Vegetation',
    mainColor: '#60C66E',
    headerImage: require('cooper-app/assets/category_headers/vegetation.png')
}
const VegetationScreen: React.FC = () => <StatsCategoryTemplate categoryDetails={vegetationDetails} />;

export default VegetationScreen;