import * as apiUtils from '~/utils/apiUtils';
const BUGSNAG_ID = '';

const API_HOST = 'http://10.1.1.0';
const API_PORT = 3000;

export default {
    API_URL: apiUtils.formatHostPortUrlApi(API_HOST, API_PORT),
    BUGSNAG_ID,
}