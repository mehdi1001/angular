import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import QueResponse from '../models/QueResponse';
import QueRequest from '../models/QueRequest';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export default class QueResponseService {
  public API = 'http://localhost:2551';
  public QUEREPONSE_API = `${this.API}/requester`;
  
  /* const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  }; */

  constructor(private http: HttpClient) {}

 /*  getAll(): Observable<Array<QueResponse>> {
    return this.http.get<Array<QueResponse>>(this.QUEREPONSE_API);
  }

  get(id: string) {
    return this.http.get(`${this.QUEREPONSE_API}`);
  } */

  postrequest(request: QueRequest): Observable <QueRequest>{
     const httpOptions = { 
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      });
     
    }; 
   return this.http.post(this.QUEREPONSE_API, request ,).subscribe(
    data => {
      console.log("User Login: " + data.login);
      console.log("Bio: " + data.bio);
      console.log("Company: " + data.company);
    }
   )
}
}