import ApiRequest from './request'
import { baseURL } from './config'

const apiVersion = '/v1'
const baseURL_V1 = baseURL + apiVersion;

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
 * 获取保险产品分页列表
 * @param {keywords}  
 * @param {page}  
*/
const getProductList = (params) => {
    return apiRequest.get(`${baseURL_V1}/product/list`, params);
}

/** 
 * 获取投保用户地址分页列表
 * @param {keywords}  
 * @param {page}  
*/
const getProviderList = (params) => {
    return apiRequest.get(`${baseURL_V1}/provider/list`, params);
}

/** 
 * 获取投保用户地址分页列表
 * @param {keywords}  
 * @param {page}  
*/
const getOrderList = (params) => {
    return apiRequest.get(`${baseURL_V1}/order/list`, params);
}

/** 
 * 获取交易记录分页列表
 * @param {address}  查询地址
 * @param {tran_type}  交易类型（默认 0：所有/ 1 流动充提 / 2 奖励分红）
 * @param {record_type}  记录类型（默认 0：所有/ 1 增加 / 2 减少）
 * @param {page}  分页索引
*/
const getRecords = (params) => {
    return apiRequest.get(`${baseURL_V1}/provider/records`, params);
}

export default {
    getProductList,
    getProviderList,
    getOrderList,
    getRecords
}