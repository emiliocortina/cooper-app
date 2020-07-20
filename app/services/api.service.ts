
class ApiService {
    urlLit = 'http://192.168.0.12:3000/';
    //urlLit = 'http://cooper-app.herokuapp.com/';

    /**
     * Requests a service  from the  API
     * 
     * @param {*} service url of the service e.g. login?page=1
     * @param {*} httpMethod {POST, GET...}
     * @param {*} petitionBody 
     */
    request(service, httpMethod) {
        let url = this.urlLit + service;

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

    getTemperatures(date, longitude, latitude) {
        const url = `API/image/static?image=AirTemperature&latitude=${latitude}&longitude=${longitude}&date=${date}&colorScale=%23FFFFFF-%23F7E3DC-%23E8CABF-%23F9A78A-%23DE2F2B`;
        this.request(url, 'GET')
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                return responseJson;
            })
            .catch((error) => {
                console.error(error);
            });
    }
}

export default ApiService;