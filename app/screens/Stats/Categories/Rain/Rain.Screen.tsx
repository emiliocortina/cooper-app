import React from "react";
import StatsCategoryTemplate from "../StatsCategory.template";
import ApiService from "cooper-app/app/services/api.service";

const rainDetails = {
    title: 'Rain',
    mainColor: '#3A89AB',
    headerImage: require('cooper-app/assets/category_headers/rain.png')
}

const timeRanges = new ApiService().getDummies(rainDetails.mainColor, 'l/m3');

const RainScreen: React.FC = () => <StatsCategoryTemplate categoryDetails={rainDetails} timeRanges={timeRanges} />;

export default RainScreen;