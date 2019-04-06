import { Document } from './../document';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  educshare_url: string = "http://localhost:8080";
  public userFile:  File;
  private jwtToken = null;
  constructor(private http: HttpClient) { }

  private log(log: string) {
    console.log(log);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    };
  }

  loadToken() {
    this.jwtToken = localStorage.getItem('token');
  }
  AddDocument(document: FormData): Observable<any> {
    return this.http.post(this.educshare_url + '/documents', document).pipe(
      tap(_ => this.log(`Add Document`)),
      catchError(this.handleError<any>('add Document'))
    );
  }

  searchDocument(id: number): Observable <Document> {
    if (this.jwtToken == null) {
      this.loadToken();
    }
    const httpOptions = {
      headers: new HttpHeaders({ 'Authorization': this.jwtToken })
   };
    const url = `${this.educshare_url}/documents/${id}`;
    return this.http.get<Document>(url, httpOptions).pipe(
      tap(_ => this.log(`fetched document id=${id}`)),
      catchError(this.handleError<Document>(`searchDocument id=${id}`))
    );
  }


}
