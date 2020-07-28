export function checkRoutesPermission(accessRoleRequireRoutes = [], accessRightRoutes = []) {
    const accessRoles = [];
    const accessRights = [];

    const hasAccessRoleRequire = accessRoles.some(item=> accessRoleRequireRoutes.indexOf(item) !== -1);
    const hasAccessRightRequire = accessRights.some(item=> accessRightRoutes.indexOf(item) !== -1);

    return hasAccessRoleRequire && hasAccessRightRequire;
}