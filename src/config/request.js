import axios from 'axios';
import { requestErrorHandler } from 'utils/helpers';

const base_url = 'https://snappfood.ir/mobile/v3';
axios.defaults.baseURL = base_url;
axios.defaults.headers.post['Content-Type'] = 'application/json';

function request(method = 'get', url, params = {}) {

    switch (method) {
        case 'get':
            return axios
                .get(url, { params })
                .then(response => {
                    return {
                        ...response,
                        status_name: 'success'
                    };
                })
                .catch(err => {
                    return requestErrorHandler(err?.response);
                });

        default:
            return {};
    }
}

export default request;
