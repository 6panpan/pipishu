/* eslint valid-jsdoc: "off" */

"use strict";

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
    /**
     * built-in config
     * @type {Egg.EggAppConfig}
     **/
    const config = (exports = {});

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + "_1598852809527_1750";

    config.multipart = {
        mode: "file",
    };
    //加上后post请求才能成功,文件上传才能成功 1
    config.security = {
        csrf: {
            enable: false,
            ignoreJSON: true,
        },
    };
    // add your middleware config here
    config.middleware = [];

    // add your user config here
    const userConfig = {
        // myAppName: 'egg',
    };

    //数据库配置
    config.mysql = {
        client: {
            host: "49.234.124.126",
            port: "3306",
            user: "root",
            password: "Pp123!@#",
            database: "pipishu",
        },
    };

    return {
        ...config,
        ...userConfig,
    };
};
