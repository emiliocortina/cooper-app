import React from "react";
import StatsCategoryTemplate from "../StatsCategory.template";
import ApiService from "cooper-app/app/services/api.service";

const temperatureDetails = {
    title: 'Temperatures',
    mainColor: '#E26A61',
    headerImage: require('cooper-app/assets/category_headers/temperatures.png')
}

const timeRanges = new ApiService().getDummies(temperatureDetails.mainColor, 'ºC');

const TemperaturesScreen: React.FC = () => <StatsCategoryTemplate categoryDetails={temperatureDetails} timeRanges={timeRanges} />;

export default TemperaturesScreen;