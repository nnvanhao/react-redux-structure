import axios from 'axios';
import * as METHODS_TYPES from '~/constants/methodsTypes';
import config from '~/configs';
import * as cookieUtils from '~/utils/cookieUtils';
import * as securityUtils from '~/utils/securityUtils';
import * as dateTimeUtils from '~/utils/dateTimeUtils';
import * as internetUtils from '~/utils/internetUtils';
import { API_CONFIG } from '../constants/common';
import * as COOKIE_KEYS from '~/constants/cookieKeys';
// import RetryService from '../services/observable.service';
import { toast } from 'react-toastify';
import HttpStatus from 'http-status-codes';

// Create bugsnag instance
// let bugsnagHTTP = new Client(config.BUGSNAG_ID);

// Create new instance
function HttpRequest() { }

// no connection message
const message = 'No internet connection!';

// Get API url
function getUrl(url, type = API_CONFIG.API_URL) {
    return config[type] + url;
}

function getHeaders(method, url, body = {}, auth = {}) {
    let headers, token, secret;

    if (body.data && body.data.username && body.data.password) {
        token = body.data.username;
        secret = body.data.password;

    } else {
        token = auth ? auth.token : null;
        secret = auth ? auth.secret : null;
    }

    headers = getSecurityHeaders(method, url, body, token, secret);

    headers['Accept'] = 'application/json';
    headers['Cache-Control'] = 'no-cache';
    headers['Content-Type'] = 'application/json';
    headers['Accept-Language'] = 'da, en-gb;1=0.8, en;q=0.7';
    headers['Authorization'] = 'Bearer ' + token;
    headers['TimeZone'] = dateTimeUtils.getTimeZone();

    return headers;
}

function sortObject(obj) {
    let keys = Object.keys(obj).sort(),
        sortedObj = {};

    for (let i in keys) {
        if (keys.hasOwnProperty(i)) {
            if (obj[keys[i]] === null) {
                sortedObj[keys[i]] = obj[keys[i]];
            }
            else {
                if (Object.prototype.toString.call(obj[keys[i]]) === "[object Array]" || typeof obj[keys[i]] === "object") {
                    obj[keys[i]] = sortObject(obj[keys[i]]);
                }
                sortedObj[keys[i]] = obj[keys[i]];
            }
        }
    }

    return sortedObj;
}

function getSecurityHeaders(method, path, body, token, secret) {
    const bodyDeep = JSON.parse(JSON.stringify(body));
    const bodyClone = JSON.stringify(sortObject(bodyDeep));
    let nonce = securityUtils.generateNonce();
    let timestamp = securityUtils.generateTimestamp();
    let signature = securityUtils.generateSignature(method, path, timestamp, nonce, bodyClone, token, secret);

    return {
        Signature: signature,
        Timestamp: timestamp,
        Nonce: nonce
    };
}

async function async(method, url, body, type, isUpload = false) {
    let auth = await cookieUtils.getAuthCookie(COOKIE_KEYS.AUTH);
    let urlEncoded = encodeURI(url);
    let headers = getHeaders(method, urlEncoded, body, auth);
    let apiUrl = getUrl(urlEncoded, type);

    const isConnected = await internetUtils.checkInternetConnectionStatus();
    if (!isConnected) {
        toast.error('No internet connection. Please recheck internet & try again!');
        return {
            status: HttpStatus.SERVICE_UNAVAILABLE,
            message,
        };
    }

    // Config options
    const options = {
        method,
        mode: 'cors',
        headers,
        timeout: 30000, // 60s
    };

    // Check api upload file
    if (body && isUpload) {
        options.data = body;
        delete options.headers['Content-Type'];
    } else if (body) {
        options.data = JSON.stringify(body);
    }

    return new Promise((resolve, reject) => {
        axios
            .request({
                url: apiUrl,
                ...options,
            })
            .then(response => {
                const { data: successData = {}, status } = response;
                const dataHandle = { ...successData, status };
                return resolve(dataHandle);
            })
            .catch(error => {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    const { data: errorData, status } = error.response;
                    const dataHandle = { ...errorData, status };
                    // Send to bugsnag
                    if (status >= HttpStatus.BAD_REQUEST && status < 600 && status && status !== HttpStatus.UNAUTHORIZED) {
                        // Push notify bugsnag
                        // bugsnagHTTP.notify(new Error(JSON.stringify({ response: dataHandle, apiUrl, body })));
                    }
                    return resolve(dataHandle);
                } else if (error.request) {

                    // Handle retry api
                    // const retryService = new RetryService();
                    // retryService.emit(`${method}_${url}_FAILURE`);

                    // Send to bugsnag
                    // bugsnagHTTP.notify(new Error(JSON.stringify({ apiUrl, status: HttpStatus.REQUEST_TIMEOUT })));

                    return resolve({ status: HttpStatus.REQUEST_TIMEOUT, error: { message: 'ECONNABORTED' } });
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                    reject(error);
                }
            });
    });
}

HttpRequest.get = function (url, type) {
    const method = METHODS_TYPES.GET;
    return async(method, url, {}, type);
};

HttpRequest.post = function (url, body, type) {
    const method = METHODS_TYPES.POST;
    return async(method, url, body, type);
};

HttpRequest.postFormData = function (url, formData, type) {
    const method = METHODS_TYPES.POST;
    return async(method, url, formData, type, true);
};

HttpRequest.put = function (url, body, type) {
    const method = METHODS_TYPES.PUT;
    return async(method, url, body, type);
};

HttpRequest.delete = function (url, body, type) {
    const method = METHODS_TYPES.DELETE;
    return async(method, url, body, type);
};

export default HttpRequest;