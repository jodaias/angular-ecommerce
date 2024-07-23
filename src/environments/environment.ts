import envConfig from '../../env_config.json';

export const environment = {
  production: false,
  general: {
    stripePublishableKey: envConfig.general.stripePublishableKey,
    baseUrlApi: envConfig.general.baseUrlApi,
  },
  oidc: {
    clientId: envConfig.authOidc.clientId,
    issuer: envConfig.authOidc.issuer,
    redirectUri: window.location.origin + '/login/callback',
    scopes: ['openid', 'profile', 'email'],
  },
};
