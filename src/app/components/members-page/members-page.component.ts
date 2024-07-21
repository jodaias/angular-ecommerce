import { Component, Inject, OnInit } from '@angular/core';
import { OKTA_AUTH } from '@okta/okta-angular';
import OktaAuth from '@okta/okta-auth-js';

@Component({
    selector: 'app-members-page',
    templateUrl: './members-page.component.html',
    styleUrls: ['./members-page.component.css'],
    standalone: true
})
export class MembersPageComponent implements OnInit {
  user: string = '';
  constructor(@Inject(OKTA_AUTH) private oktaAuth: OktaAuth) {}

  async ngOnInit() {
    const user = await this.oktaAuth.getUser();
    this.user = JSON.stringify(user, null, 4);
  }
}
