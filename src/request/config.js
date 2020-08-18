const DOMAIN_CONFIG = {
    // 开发
    dev: {
        common: 'http://58.84.7.20:8081',
    },
    // 测试
    test: {
        common: 'http://58.84.7.20:8081',
    },
    // 正式
    prod: {
        common: 'http://58.84.7.20:8081',
    }
};

let domain = DOMAIN_CONFIG.dev;

if (process.env.VUE_APP_CURRENTMODE === 'test') {
    domain = DOMAIN_CONFIG.test;
}

if (process.env.VUE_APP_CURRENTMODE === 'prod') {
    domain = DOMAIN_CONFIG.prod;
}

export const baseURL = `${domain.common}/api`;