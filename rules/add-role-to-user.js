function (user, context, callback) {
  const namespace = 'http://id.distributeaid.org';
  const assignedRoles = (context.authorization || {}).roles;

  let idTokenClaims = context.idToken || {};
  let accessTokenClaims = context.accessToken || {};

  idTokenClaims[`${namespace}/role`] = assignedRoles;
  accessTokenClaims[`${namespace}/role`] = assignedRoles;

  context.idToken = idTokenClaims;
  context.accessToken = accessTokenClaims;
  callback(null, user, context);
}