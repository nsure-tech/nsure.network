const DOMAIN_CONFIG = {
    // 开发
    dev: {
        common: 'http://120.79.189.25:9502',
    },
    // 测试
    test: {
        common: 'https://test.goomtu.com',
    },
    // 正式
    prod: {
        common: 'https://test.goomtu.com',
    }
};

let domain = DOMAIN_CONFIG.dev;

if (process.env.VUE_APP_CURRENTMODE === 'test') {
    domain = DOMAIN_CONFIG.test;
}

if (process.env.VUE_APP_CURRENTMODE === 'prod') {
    domain = DOMAIN_CONFIG.prod;
}

export const baseURL = domain.common;