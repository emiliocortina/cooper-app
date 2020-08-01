import React from "react";
import StatsCategoryTemplate from "../StatsCategory.template";
import { TemperatureDetails } from "cooper-app/app/services/models/categories/category-details";

const temperatureDetails = new TemperatureDetails()


const TemperaturesScreen: React.FC = () => {

    return <StatsCategoryTemplate categoryDetails={temperatureDetails}></StatsCategoryTemplate>;
}
export default TemperaturesScreen;