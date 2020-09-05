import React, { ReactNode } from "react";
import { LocationService } from "../location.service";
import { CategoryDetails } from "../models/categories/category-details";
import { getLastMonthTemperatures } from "./temperatures.service";
import { getLastMonthRain } from "./rain.service";
import { getLastMonthPollution } from "./pollution.service";


const urlLit = 'https://satellite-cms.herokuapp.com/';

/**
 * Requests a service  from the  API
 * 
 * @param {*} service url of the service e.g. login?page=1
 * @param {*} httpMethod {POST, GET...}
 * @param {*} petitionBody 
 */
export const request = (service, httpMethod) => {
    let url = urlLit + service;

    console.log(url);
    return fetch(url, {
        method: httpMethod,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, DELETE, PUT, OPTIONS',
            'Content-Type': 'application/json',
            'Accept-Language': 'es'
        }
    })

}



export const getLastMonthData = async (category: CategoryDetails): Promise<ReactNode> => {
    const { latitude, longitude } = LocationService.lastLoadedLocation;

    const startDate = new Date();
    startDate.setMonth(startDate.getMonth() - 1)
    const endDate = new Date();

    const startDateFormatted = formatDate(startDate);
    const endDateFormatted = formatDate(endDate);

    let node: ReactNode = <></>;
    switch (category.id) {
        case 'temperatures':
            node = await getLastMonthTemperatures(latitude, longitude, startDateFormatted, endDateFormatted);
            break;
        case 'rain':
            node = await getLastMonthRain(latitude, longitude, startDateFormatted, endDateFormatted);
            break;
        case 'pollution':
            node = await getLastMonthPollution(latitude, longitude, startDateFormatted, endDateFormatted);
            break;
        default:
            node = await getLastMonthTemperatures(latitude, longitude, startDateFormatted, endDateFormatted);
            break;
    }

    return (node);
}


export const getLastMonthImage = async (category: CategoryDetails) => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - 31);
    const currentDateFormatted = formatDate(currentDate);

    let url = `API/image/static?image=`;
    switch (category.id) {
        default:
            url += `AirTemperature`;
            break;
    }
    const { latitude, longitude } = LocationService.lastLoadedLocation;
    url += `&latitude=${latitude}&longitude=${longitude}&date=${currentDateFormatted}&colorScale=${category.colorScale}`;
    //console.log(url);
    return request(url, 'GET');
}


export const formatDate = (date: Date): string => {
    let day: any = date.getDate();
    let month: any = date.getMonth() + 1;
    const year = date.getFullYear();

    if (day < 10) {
        day = '0' + day;
    }
    if (month < 10) {
        month = '0' + month;
    }
    return year + '-' + month + '-' + day;
}