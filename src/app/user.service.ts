import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url:string = 'http://localhost:3002'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json',"Access-Control-Allow-Origin": '*' })
  };
  constructor(private http: HttpClient) { }

  validateCitizen(id:any):Observable<object> {
    console.log('--*-*-**-**-')
    return this.http.get(`${this.url}/${id}`,this.httpOptions).pipe(
      tap(_ => console.log('reponse')),
      )
    
  }

  createCitizen(newCitizenInfo:any){
    return this.http.post(`${this.url}/registerCitizen`,newCitizenInfo,this.httpOptions).pipe(
      tap(_ => console.log('reponse')),
      )
  }

  authenticateDocument(AuthDocumentInfo:any){
    return this.http.get(`${this.url}/${AuthDocumentInfo.id}/${AuthDocumentInfo.urlDocument}/${AuthDocumentInfo.documentTitle}`,this.httpOptions).pipe(
      tap(_ => console.log('reponse')),
      )
  }
}
