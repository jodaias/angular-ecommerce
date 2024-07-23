import { Component, Inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule, DOCUMENT, NgIf } from '@angular/common';
import { AuthService } from '@auth0/auth0-angular';

@Component({
    selector: 'app-login-status',
    templateUrl: './login-status.component.html',
    styleUrls: ['./login-status.component.css'],
    standalone: true,
    imports: [NgIf, RouterLink, CommonModule]
})
export class LoginStatusComponent implements OnInit {

  isAuthenticated: boolean = false;
  userFullName: string = '';

  storage: Storage = sessionStorage;

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
    this.getUserDetails();
  }

  getUserDetails() {
    this.auth.isAuthenticated$.subscribe((isAuthenticated: any)=>{
      this.isAuthenticated = isAuthenticated;
      if(isAuthenticated){
        this.auth.user$.subscribe(
          (res: any) => {
            this.userFullName = res.nickname as string;

            const theEmail = res.email;
            this.storage.setItem('userEmail', JSON.stringify(theEmail));

            const theToken = res.sub;
            this.storage.setItem('userToken', JSON.stringify(theToken));
          }
        );
      }
    })

  }

  logout() {
    this.auth.logout({
      openUrl(url) {
        window.location.replace(url);
      }
    });
  }
}
