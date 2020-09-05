import React from "react";
import SensorDetails from "../sensors/sensor-details";
import { ImageSourcePropType } from "react-native";

export abstract class CategoryDetails {

    id: string;
    title: string;
    accentColor: string;
    unit: string;
    sensorDetails?: SensorDetails;

    getSensorDetailsComponent: () => React.FC
    headerImage: ImageSourcePropType;
    spinner: any;
    colorScale: string;
}


export class TemperatureDetails extends CategoryDetails {
    id = 'temperatures';
    title = 'Temperatures';
    accentColor = '#E26A61';
    unit = 'ºC';
    headerImage = require('cooper-app/assets/category_headers/temperatures.png');
    spinner = require('cooper-app/assets/spinners/Temperatures.json');
    colorScale = '%23FFFFFF-%23F7E3DC-%23E8CABF-%23F9A78A-%23DE2F2B';
}


export class PollutionDetails extends CategoryDetails {
    id = 'pollution';
    title = 'Pollution';
    accentColor = '#7F5F8F';
    unit = 'ppm';
    headerImage = require('cooper-app/assets/category_headers/pollution.png');
    spinner = require('cooper-app/assets/spinners/Pollution.json');
    colorScale = '%23FFFFFF-%23d9cfdd-%23bfafc7-%23a58fb1-%237f5f8f';
}

export class RainDetails extends CategoryDetails {
    id = 'rain';
    title = 'Rain';
    accentColor = '#3A89AB';
    unit = 'm3';
    headerImage = require('cooper-app/assets/category_headers/rain.png');
    spinner = require('cooper-app/assets/spinners/Rain.json');
    colorScale = '%23FFFFFF-%23c4dce6-%2389b8cd-%2361a1bc-%233a89ab';
}

export class VegetationDetails extends CategoryDetails {
    id = 'vegetation';
    title = 'Vegetation';
    accentColor = '#60C66E';
    unit = ':)';
    headerImage = require('cooper-app/assets/category_headers/vegetation.png');
    spinner = require('cooper-app/assets/spinners/Vegetation.json');
    colorScale = '%23FFFFFF-%23cfeed4-%23b0e3b7-%2390d79a-%2360c66e';
}