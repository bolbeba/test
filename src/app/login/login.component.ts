import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  connected: boolean = false;
  mode: number = 0;
  constructor( private router: Router , private authenticationService: AuthenticationService) { }

  ngOnInit() {

  }

  onLogin(user) {
    console.log('login et password', user);
    this.authenticationService.login(user)
      .subscribe(resp => {
        const jwt = resp.headers.get('Authorization');
        console.log('jwtToken   >', resp);
        this.authenticationService.saveToken('Bearer ' + jwt);
        this.connected = false;
        this.router.navigate(['documents']);
      }, err => {
        this.connected = true;
        this.mode = 1;
      });
  }

}
