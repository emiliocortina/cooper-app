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
        .catch((error) =>{
            console.error(error);
        });
    }
}

export default ApiService;