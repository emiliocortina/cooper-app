import React from "react";
import StatsCategoryTemplate from "../StatsCategory.template";
import ApiService from "cooper-app/app/services/api.service";

const pollutionDetails = {
    title: 'Pollution',
    mainColor: '#7F5F8F',
    headerImage: require('cooper-app/assets/category_headers/pollution.png')
}

const timeRanges = new ApiService().getDummies(pollutionDetails.mainColor, 'ppm');

const PollutionScreen: React.FC = () => <StatsCategoryTemplate categoryDetails={pollutionDetails} timeRanges={timeRanges} />;

export default PollutionScreen;