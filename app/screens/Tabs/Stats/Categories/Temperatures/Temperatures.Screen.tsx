import React from "react";
import StatsCategoryTemplate from "../StatsCategory.template";

const temperatureDetails = {
    title: 'Temperatures',
    mainColor: '#E26A61',
    headerImage: require('cooper-app/assets/category_headers/temperatures.png')
}
const TemperaturesScreen: React.FC = () => <StatsCategoryTemplate categoryDetails={temperatureDetails} />;

export default TemperaturesScreen;