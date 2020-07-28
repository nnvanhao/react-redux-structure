import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import * as ROUTES from '~/constants/routes';
import * as ACCESS_ROLES_TYPES from '~/constants/accessRolesTypes';
import * as ACCESS_RIGHTS_TYPES from '~/constants/accessRightsTypes';
import Home from '../pages/Home';
import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import NotFound from '~/pages/_layouts/404';

export default function Routes() {
    return (
        <Switch>
            <Route
                path={ROUTES.NOT_FOUND}
                component={NotFound} />
            <Route
                path={ROUTES.SIGN_IN}
                component={SignIn} />
            <Route
                path={ROUTES.SIGN_UP}
                component={SignUp} />
            <Route
                path={ROUTES.ROOT}
                // authorityRoles={[
                //     ACCESS_ROLES_TYPES.ADMIN,
                // ]}
                // authorityRights={[

                // ]}
                component={Home} />
        </Switch>
    )
}
