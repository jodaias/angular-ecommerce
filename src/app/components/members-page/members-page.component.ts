import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
    selector: 'app-members-page',
    templateUrl: './members-page.component.html',
    styleUrls: ['./members-page.component.css'],
    standalone: true
})
export class MembersPageComponent implements OnInit {
  user: string = '';
  constructor(private auth: AuthService) {}

  async ngOnInit() {
    this.auth.user$.subscribe((res: any) => {
      this.user = JSON.stringify(res, null, 4);
    });
  }
}
