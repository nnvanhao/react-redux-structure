import { API_ROUTES } from '~/constants/apiRoutes';

export function getApiPath(route, params) {
    return getPath(route, params, API_ROUTES);
}

/**
 * pathsCollection: URL or API. See core/common/app.routes.js for details
 */
function getPath(route, params, pathsCollection) {
    let path = getPathTemplate(route, pathsCollection);
    let queryArray = [];
    let routeParams = [];

    const rParams = path.match(/:\w+/g);
    if (rParams) {
        rParams.forEach(function (param) {
            routeParams.push(param.substring(1));
        });
    }

    if (params) {
        Object.keys(params).forEach(function (key) {
            if (routeParams.indexOf(key) > -1) {
                path = path.replace(':' + key, params[key]);
            } else {
                queryArray.push(key + '=' + params[key]);
            }
        });
        path += (queryArray.length ? '?' + queryArray.join('&') : '');
    }

    return path;
}

/**
 * pathsCollection: URL or API. See core/common/app.routes.js for details
 */
function getPathTemplate(route, pathsCollection) {
    if (route.parent) {
        let path = getPathTemplate(pathsCollection[route.parent], pathsCollection) + '/' + route.path;
        return path;
    }
    return route.path;
}

export function formatHostPortUrlApi(host, port) {
    return `${host}:${port}/`;
}