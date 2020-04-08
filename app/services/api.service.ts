import TimeRange from "./models/stats/timeRange";

class ApiService {
    //urlLit = 'http://localhost:3000/'; 
    urlLit = 'http://cooper-app.herokuapp.com/';

    /**
     * Requests a service  from the  API
     * 
     * @param {*} service url of the service e.g. login?page=1
     * @param {*} httpMethod {POST, GET...}
     * @param {*} petitionBody 
     */
    request(service, httpMethod, petitionBody) {
        let url = this.urlLit + service;

        return fetch(url, {
            method: httpMethod,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, DELETE, PUT, OPTIONS',
                'Content-Type': 'application/json',
                'Accept-Language': 'es'
            },
            body: JSON.stringify(petitionBody)
        })
            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson;
            })
            .catch((error) => {
                console.error(error);
            });
    }

    getDummies(color: string, unit: string): TimeRange[] {
        const minimumMeasurement = { value: -4 };
        const maximumMeasurement = { value: 37 };
        const averageMeasurement = { value: 14 };
        const lastMeasurement = { value: 23 };
        const ranges =
            [new TimeRange('Over the years', null, unit, color, minimumMeasurement, maximumMeasurement, averageMeasurement, lastMeasurement),
            new TimeRange('Last year', null, unit, color, minimumMeasurement, maximumMeasurement, averageMeasurement, lastMeasurement),
            new TimeRange('Last month', null, unit, color, minimumMeasurement, maximumMeasurement, averageMeasurement, lastMeasurement)];
        return ranges;
    }
}

export default ApiService;