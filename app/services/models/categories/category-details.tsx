import React from "react";
import SensorDetails from "../sensors/sensor-details";
import { ImageSourcePropType } from "react-native";

export abstract class CategoryDetails {

    title: string;
    accentColor: string;
    unit: string;
    sensorDetails?: SensorDetails;

    getSensorDetailsComponent: () => React.FC
    headerImage: ImageSourcePropType;
}


export class TemperatureDetails extends CategoryDetails {
    title = 'Temperatures';
    accentColor = '#E26A61';
    unit = 'ºC';
    headerImage = require('cooper-app/assets/category_headers/temperatures.png');
}


export class PollutionDetails extends CategoryDetails {
    title = 'Pollution';
    accentColor = '#7F5F8F';
    unit = 'ppm';
    headerImage = require('cooper-app/assets/category_headers/pollution.png');
}

export class RainDetails extends CategoryDetails {
    title = 'Rain';
    accentColor = '#3A89AB';
    unit = 'm3';
    headerImage = require('cooper-app/assets/category_headers/rain.png');
}

export class VegetationDetails extends CategoryDetails {
    title = 'Vegetation';
    accentColor = '#60C66E';
    unit = ':)';
    headerImage = require('cooper-app/assets/category_headers/vegetation.png');
}