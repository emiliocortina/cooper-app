import React from "react";
import SensorDetails from "../sensors/sensor-details";

export default abstract class CategoryDetails {

    title: string;
    accentColor: string;
    unit: string;
    sensorDetails?: SensorDetails;

    getSensorDetailsComponent: () => React.FC

}