import React from "react";
import StatsCategoryTemplate from "../StatsCategory.template";
import ApiService from "cooper-app/app/services/api.service";
import { useCurrentLocation } from "cooper-app/app/services/location.service";
import { TemperatureDetails } from "cooper-app/app/services/models/categories/category-details";

const temperatureDetails = new TemperatureDetails()


const TemperaturesScreen: React.FC = () => {
    useCurrentLocation().then(parrr => {
        if (parrr && parrr.coordinates) {
            const currentDate = new Date();
            const formattedDate = currentDate.getFullYear() + '-' + currentDate.getMonth() + '-' + currentDate.getDay();
            console.log(formattedDate);
            // new ApiService().getTemperatures(formattedDate, parrr.coordinates.longitude, parrr.coordinates.latitude);
        }
    });

    const apiService = new ApiService();
    return <StatsCategoryTemplate categoryDetails={temperatureDetails}></StatsCategoryTemplate>;
}
export default TemperaturesScreen;