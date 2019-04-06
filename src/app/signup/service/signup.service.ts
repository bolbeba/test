import { HttpClient, HttpHeaders, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from 'src/app/users/user';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  educshare_url: string = "http://localhost:8080/";
  public userFile:  File;
  constructor(private http: HttpClient) { }

  private log(log: string) {
    console.log(log);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    };
  }

  SaveStudentWithAvatar(user: FormData): Observable<any> {
    return this.http.post(this.educshare_url + 'SaveStudentWithAvatar', user).pipe(
      tap(_ => this.log(`Add User`)),
      catchError(this.handleError<any>('add User'))
    );
  }

  SaveStudentWithoutAvatar(user: User): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'content-Type': 'application/json'})
    };
    return this.http.post(this.educshare_url + 'SaveStudentWithoutAvatar', user).pipe(
      tap(_ => this.log(`Add User`)),
      catchError(this.handleError<any>('add User'))
    );
  }

  SaveProfessorWithAvatar(user: FormData): Observable<any> {
    return this.http.post(this.educshare_url + 'SaveProfessorWithAvatar', user).pipe(
      tap(_ => this.log(`Add User`)),
      catchError(this.handleError<any>('add User'))
    );
  }

  SaveProfessorWithoutAvatar(user: User): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'content-Type': 'application/json'})
    };
    return this.http.post(this.educshare_url + 'SaveProfessorWithoutAvatar', user).pipe(
      tap(_ => this.log(`Add User`)),
      catchError(this.handleError<any>('add User'))
    );
  }

}

