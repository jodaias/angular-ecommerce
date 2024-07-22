import { Component, Inject } from '@angular/core';
import { OKTA_AUTH } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';
// import OktaSignIn from '@okta/okta-signin-widget';
// import { environment } from 'src/environments/environment';

import { AuthService } from '@auth0/auth0-angular';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    standalone: true
})
export class LoginComponent {

  oktaSignin: any;

  constructor(@Inject(OKTA_AUTH) public oktaAuth: OktaAuth, @Inject(AuthService) public auth: AuthService) {

    // this.oktaSignin = new OktaSignIn({
    //   logo: 'assets/images/logo.png',
    //   baseUrl: environment.oidc.issuer.split('/oauth2')[0],
    //   clientId: environment.oidc.clientId,
    //   redirectUri: environment.oidc.redirectUri,
    //   authParams: {
    //     pkce: true,
    //     issuer: environment.oidc.issuer,
    //     scopes: environment.oidc.scopes
    //   }
    // });

    // this.oktaSignin = new OktaSignIn({
    //   baseUrl: environment.oidc.issuer.split('/oauth2')[0],
    //   clientId:  environment.oidc.clientId,
    //   redirectUri: environment.oidc.redirectUri,
    //   logo: 'assets/images/logo.png',
    //   i18n: {
    //     en: {
    //       'primaryauth.title': 'Sign in to Angular & Company',
    //     },
    //   },
    //   authClient: oktaAuth,
    //   useClassicEngine: environment.widget.USE_CLASSIC_ENGINE === 'true',
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
  //     scopes: environment.oidc.scopes
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
