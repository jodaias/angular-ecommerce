// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  MyUrlApi: "http://localhost:3000/api",
  stripePublishableKey: "pk_test_51PaI0ORwXHFy4L8UM7xf5r4eObY4gA22NQ9tboFRDAlOdsEpwznec4nlWMgJ50TI9ICWrB7J8huKmkhj8mPL2Edx00u01VFK7f",
  oidc: {
    clientId:'KQ9p2xAE5jque62TxX81wG9vKZ94e32Y',
    issuer: 'https://dev-q843dhxj5a77724s.us.auth0.com/oauth2/default',
    redirectUri: 'http://localhost:4200/login/callback',
    scopes: ['openid', 'profile', 'email'],
    testing: {
      disableHttpsCheck: false
    },
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CL
