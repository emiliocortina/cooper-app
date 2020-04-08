import React from "react";
import StatsCategoryTemplate from "../StatsCategory.template";

const pollutionDetails = {
    title: 'Pollution',
    mainColor: '#7F5F8F',
    headerImage: require('cooper-app/assets/category_headers/pollution.png')
}
const PollutionScreen: React.FC = () => <StatsCategoryTemplate categoryDetails={pollutionDetails} />;

export default PollutionScreen;