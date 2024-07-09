import { Component, Inject, OnInit } from '@angular/core';
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

  constructor(@Inject(OKTA_AUTH) public oktaAuth: OktaAuth, public auth: AuthService) {

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
   }

  // ngOnInit(): void {
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
