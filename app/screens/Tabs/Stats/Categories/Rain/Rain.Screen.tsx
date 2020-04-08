import React from "react";
import StatsCategoryTemplate from "../StatsCategory.template";

const rainDetails = {
    title: 'Rain',
    mainColor: '#3A89AB',
    headerImage: require('cooper-app/assets/category_headers/rain.png')
}
const RainScreen: React.FC = () => <StatsCategoryTemplate categoryDetails={rainDetails} />;

export default RainScreen;