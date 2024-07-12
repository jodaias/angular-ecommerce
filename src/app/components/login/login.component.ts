import { Component, Inject } from '@angular/core';
import { OKTA_AUTH } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';
// import myAppConfig from 'src/app/config/my-app-config';
// import OktaSignIn from '@okta/okta-signin-widget';

import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  oktaSignin: any;

  constructor(@Inject(OKTA_AUTH) public oktaAuth: OktaAuth, @Inject(AuthService) public auth: AuthService) {

    // this.oktaSignin = new OktaSignIn({
    //   logo: 'assets/images/logo.png',
    //   baseUrl: myAppConfig.oidc.issuer.split('/oauth2')[0],
    //   clientId: myAppConfig.oidc.clientId,
    //   redirectUri: myAppConfig.oidc.redirectUri,
    //   authParams: {
    //     pkce: true,
    //     issuer: myAppConfig.oidc.issuer,
    //     scopes: myAppConfig.oidc.scopes
    //   }
    // });

    // this.oktaSignin = new OktaSignIn({
    //   baseUrl: myAppConfig.oidc.issuer.split('/oauth2')[0],
    //   clientId:  myAppConfig.oidc.clientId,
    //   redirectUri: myAppConfig.oidc.redirectUri,
    //   logo: 'assets/images/logo.png',
    //   i18n: {
    //     en: {
    //       'primaryauth.title': 'Sign in to Angular & Company',
    //     },
    //   },
    //   authClient: oktaAuth,
    //   useClassicEngine: myAppConfig.widget.USE_CLASSIC_ENGINE === 'true',
    // });
   }

  // ngOnInit(): void {
    // this.oktaSignin.remove();

    // this.oktaSignin.renderEl({
    //   el: '#okta-sign-in-widget'},
    //   (response: any) => {
    //     if(response.status === 'SUCCESS') {
    //       this.oktaAuth.signInWithRedirect();
    //     }
    //   },
    //   (error: any) => {
    //     throw error;
    //   }
    // );

  //   const originalUri = this.oktaAuth.getOriginalUri();
  //   if (!originalUri || originalUri === DEFAULT_ORIGINAL_URI) {
  //     this.oktaAuth.setOriginalUri('/');
  //   }

  //   this.oktaSignin.showSignInToGetTokens({
  //     el: '#okta-sign-in-widget',
  //     scopes: myAppConfig.oidc.scopes
  //   }).then((tokens: Tokens) => {
  //     // Remove the widget
  //     this.oktaSignin.remove();

  //     // In this flow the redirect to Okta occurs in a hidden iframe
  //     this.oktaAuth.handleLoginRedirect(tokens);
  //   }).catch((err: any) => {
  //     // Typically due to misconfiguration
  //     throw err;
  //   });
  // }

  // ngOnDestroy() {
  //   this.oktaSignin.remove();

  //   this.oktaSignin.renderEl({
  //     el: '#okta-sign-in-widget'},
  //     (response: any) => {
  //       if(response.status === 'SUCCESS') {
  //         this.oktaAuth.signInWithRedirect();
  //       }
  //     },
  //     (error: any) => {
  //       throw error;
  //     }
  //   );
  // }
}
