import { LocationService } from "../location.service";
import { CategoryDetails } from "../models/categories/category-details";


const urlLit = 'http://192.168.0.32:3000/';
//urlLit = 'http://cooper-app.herokuapp.com/';

/**
 * Requests a service  from the  API
 * 
 * @param {*} service url of the service e.g. login?page=1
 * @param {*} httpMethod {POST, GET...}
 * @param {*} petitionBody 
 */
export const request = (service, httpMethod) => {
    let url = urlLit + service;

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



export const useLastMonthData = async (category: CategoryDetails) => {
    const location = LocationService.service.getLoadedLocation();
    const { latitude, longitude } = location;

    const startDate = new Date();
    startDate.setMonth(startDate.getMonth() - 1)
    const endDate = new Date();

    const startDateFormatted = formatDate(startDate);
    const endDateFormatted = formatDate(endDate);

    let url = `API/data/`;
    switch (category.id) {
        default:
            url += `surface-temperature`;
            break;
    }

    url += `?latitude=${latitude}&longitude=${longitude}&startDate=${startDateFormatted}&finishDate=${endDateFormatted}`;
    //console.log('aki');
    return request(url, 'GET');

    console.log('o no');
    return new Promise<Response>(() => { });
}


export const useLastMonthImage = async (category: CategoryDetails) => {
    const currentDate = new Date();
    const currentDateFormatted = formatDate(currentDate);

    let url = `API/image/static?image=`;
    switch (category.id) {
        default:
            url += `AirTemperature`;
            break;
    }

    const location = LocationService.service.getLoadedLocation();
    const { latitude, longitude } = location;
    url += `&latitude=${latitude}&longitude=${longitude}&date=${currentDateFormatted}&colorScale=${category.colorScale}`;
    return request(url, 'GET');

    // console.log('o no imagen no');
    return new Promise<Response>(() => { });
}


export const formatDate = (date: Date): String => {
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