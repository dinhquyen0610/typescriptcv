import axios from "axios";
import * as apiUrl from './apiUrl'

function callApi(endpoint: string, method: any, data: any) {

    return axios(
        {
            method: method,
            data: data,
            url: `${apiUrl.API_URL}/${endpoint}`
        }
    )
    .catch(
        err => {
            console.log(err);
        }
    )

}
export default callApi;  