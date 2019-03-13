import axios from "axios";
import qs from "qs";
export const Request = {};
//请求超时时长
const TIMEOUT = 100000;
//http请求授权header属性
var request = options => {
    //开放cookie 本地操作 并且操作后的cookie 携带过去
    // axios.defaults.withCredentials = true;
    options.headers = {
        "Content-Type": "application/x-www-form-urlencoded"
    };
    //处理查询参数，过滤空值参数
    //filterParams(options.params || options.body);

    options.headers = { ...(options.headers || {}) };

    options.body = options.body || {};

    let _xtoken = localStorage.getItem("Xtoken");

    if (_xtoken) {
        options.body.Xtoken = _xtoken;
    }

    //参数格式化
    if (Object.prototype.toString.call(options.body) === "[object Object]") {
        options.body = qs.stringify(options.body);
    }

    return axios
        .request({
            headers: options.headers,
            //url: _baseUrl + options.action,
            url: options.action,
            method: options.method,
            data: options.body,
            params: options.params,
            timeout: TIMEOUT,
            emulateJSON: true
            // })
        })
        .then(response => {
            //请求结束
            var result = response;
            return result;
        })
        .catch(e => {
            // alert('前端请求错误:' + JSON.stringify(e))
            //抛出异常
            throw e;
        });
};
//http请求方式
const http = {};
["get", "post", "put", "delete"].forEach(method => {
    http[method] = (
        action,
        params,
        typs = 1,
        extra = { headers: {}, loadig: false, includeToken: false }
    ) => {
        method = method.toUpperCase();
        if (process.env.NODE_ENV == "development") {
            // 测试服务器接口
            if (typs == 1) action = "http://172.16.21.122:8889" + action;
        } else {
            // 正式服务器接口
            if (typs == 1) action = `http://ggt.miit-eidc.org.cn/notice` + action;
        }
        if (method === "GET") {
            return request({
                action,
                params,
                method,
                headers: extra.headers,
                loading: extra.loading,
                includeToken: extra.includeToken
            });
        }
        return request({
            action,
            body: params,
            method,
            headers: extra.headers,
            loading: extra.loading,
            includeToken: extra.includeToken
        });
    };
});
Request.http = http;