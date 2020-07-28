import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import * as routesPermissionUtils from '~/utils/routesPermissionUtils';
import * as ROUTES from '~/constants/routes';

import { store } from '~/store';

export default function RouteWrapper({
    component: Component,
    authorityRoles,
    authorityRights,
    ...rest
}) {
    if (authorityRoles.length || authorityRights.length) {
        const isHasRoutesPermission = routesPermissionUtils.checkRoutesPermission(authorityRoles, authorityRights);

        if (!isHasRoutesPermission) {
            return <Redirect to={ROUTES.NOT_FOUND} />
        }
    }

    // const { signed } = store.getState().auth

    // if (!signed && isPrivate) {
    //     return <Redirect to="/" />
    // }

    return <Route {...rest} render={props => <Component {...props} />} />
}

RouteWrapper.propTypes = {
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
        .isRequired,
}

RouteWrapper.defaultProps = {
    authorityRoles: [],
    authorityRights: [],
}
