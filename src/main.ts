import { enableProdMode, importProvidersFrom } from '@angular/core';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { provideAuth0 } from '@auth0/auth0-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OKTA_CONFIG, OktaAuthModule, OktaConfig } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AppComponent } from './app/app.component';
import { AuthInterceptorService } from './app/services/auth-interceptor.service';
import { ProductService } from './app/services/product.service';
import { environment } from './environments/environment';
import { APP_ROUTES } from './app/app.routes';

const oktaConfig = environment.oidc;
const oktaAuth = new OktaAuth(oktaConfig);
const moduleConfig: OktaConfig = { oktaAuth };

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, NgbModule, ReactiveFormsModule, NgxSpinnerModule, OktaAuthModule.forRoot(moduleConfig), NgxMaskDirective),
        ProductService,
        { provide: OKTA_CONFIG, useValue: { oktaAuth } },
        provideAuth0({
            domain: oktaConfig.issuer.split('/oauth2')[0],
            clientId: oktaConfig.clientId,
            authorizationParams: {
                redirect_uri: window.location.origin + "/members",
                scopes: ['openid', 'profile', 'email']
            }
        }),
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
        provideNgxMask(),
        provideRouter(APP_ROUTES),
        provideHttpClient(withInterceptorsFromDi()),
        provideAnimations()
    ]
})
  .catch(err => console.error(err));
