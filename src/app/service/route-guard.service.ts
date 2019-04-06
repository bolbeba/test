import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (this.authenticationService.isUserLoggedIn()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
  constructor(private authenticationService: AuthenticationService, private router: Router) { }
}