import { tap, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../users/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private host: string = "http://localhost:8080";
  private jwtToken = null;
  private roles: Array<any> = [];
  private email: string;
  constructor(private http: HttpClient) { }

  login(user): Observable<any> {
    return this.http.post<any>(this.host + `/login`, user, {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        observe: 'response'
      });
  }

  saveToken(jwt: string) {
    this.jwtToken = jwt;
    sessionStorage.setItem('token', jwt);
    const jwtHelper = new JwtHelperService();
    this.roles = jwtHelper.decodeToken(this.jwtToken).roles;
    this.email = jwtHelper.decodeToken(this.jwtToken).sub;
    sessionStorage.setItem('email', this.email);
    const expirationDate = jwtHelper.getTokenExpirationDate(this.jwtToken);
    const isExpired = jwtHelper.isTokenExpired(this.jwtToken);
    // console.log("this.roles " + this.roles);
    // console.log("Expiration date " + expirationDate);
    // console.log("Is expired " + isExpired);
  }

  saveEmail(email: string) {
    sessionStorage.setItem('email', email);
  }

  logoutToken() {
    this.jwtToken = null;
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('email');
  }

  isUserLoggedIn() {
     const user = sessionStorage.getItem('token');
     return !(user === null);
  }

  isAdmin() {
    const jwtHelper = new JwtHelperService();
    this.roles = jwtHelper.decodeToken(this.jwtToken).roles;
    let index = this.roles.indexOf('ADMIN');
    console.log("index is : " + index);

    if (index == 0)
      return true;
    else
      return false;
  }

  isAdmin1() {
    let jwtHelper = new JwtHelperService();
    this.roles = jwtHelper.decodeToken(this.jwtToken).roles;
    if (this.roles[0] === 'ADMIN') {
      return true;
    }
  }

  private handleError<T>(operation= 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // console.log(error);
      // console.log(`${operation} failed: ${error.message}`);
      return   of(result as T);
    };
  }

  getUserByEmail(email: string): Observable <User> {
    if (this.jwtToken == null) {
      this.jwtToken = localStorage.getItem('token');
    }
    const httpOptions = {
      headers: new HttpHeaders({ 'Authorization': this.jwtToken })
   };
    const url = `${this.host}/profil/${email}`;
    return this.http.get<User>(url, httpOptions).pipe(
      tap(_ => console.log(`fetched user by email =${email}`)),
      catchError(this.handleError<User>(`get User id=${email}`))
    );
  }

}
