import ApiRequest from './request'
import { baseURL } from './config'

const apiRequest = new ApiRequest();

apiRequest.axios.interceptors.request.use(
    (config) => {
        return Promise.resolve(config);
    },
    (error) => {
        return Promise.reject(error);
    }
);

apiRequest.axios.interceptors.response.use(
    (data) => {
        return Promise.resolve(data);
    },
    (error) => {
        console.log(error)
        return Promise.reject(error);
    }
);

/** 
 * 登录
*/
const login = (data) => {
    return apiRequest.post(`${baseURL}/AppLogin`, data);
}

export default {
    login
}