import axios from 'axios'

class ApiRequest {
    /**
     * axios 实例
     */
    axios;

    /**
     * 构造函数
     */
    constructor() {
        this.axios = axios.create({
            timeout: 30000,
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
            transformRequest: [
                (data) => {
                    return JSON.stringify(data);
                }
            ],
            transformResponse: [
                (data) => {
                    return JSON.parse(data);
                }
            ]
        });
        this.interceptors();
    }

    /**
     * 默认拦截器
     */
    interceptors() {
        // 请求拦截器
        this.axios.interceptors.request.use(
            (config) => {
                // if (localStorage.getItem('token')) {
                //     config.headers.common['token'] = localStorage.getItem('token');
                // }
                return Promise.resolve(config);
            },
            (error) => {
                return Promise.reject(error);
            }
        );

        // 响应拦截器
        this.axios.interceptors.response.use(
            (response) => {
                const { status, data } = response;
                const { code, result } = data;
                if (status === 200 && code === 0) {
                    return Promise.resolve(result);
                }
                return Promise.reject(data);
            },
            (error) => {
                return Promise.reject(error);
            }
        );
    }

    get(url, params) {
        return this.axios.get(url, { params: { ...params } })
    }

    post(url, data) {
        return this.axios.post(url, data)
    }

    put(url, data) {
        return this.axios.put(url, data)
    }

    patch(url, data) {
        return this.axios.patch(url, data)
    }

    delete(url) {
        return this.axios.delete(url)
    }
}

export default ApiRequest;