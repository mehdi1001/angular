import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import QueResponse from '../models/QueResponse';
import QueRequest from '../models/QueRequest';
import { HttpHeaders } from '@angular/common/http';

export interface credentiels{
UserName: string;
Password: string;
grant_type: string;
}
@Injectable()
export default class QueResponseService {
  public API = 'http://localhost:2551';
  public QUEREPONSE_API = `${this.API}/Que`;
  public TOKEN_API = `${this.API}/Token`;
  public GUID_API = `${this.API}/Guid`;
  

  constructor(private http: HttpClient) {}

 /*  getAll(): Observable<Array<QueResponse>> {
    return this.http.get<Array<QueResponse>>(this.QUEREPONSE_API);
  }

  get(id: string) {
    return this.http.get(`${this.QUEREPONSE_API}`);
  } */

  get(QueRequest: QueRequest,Token: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': Token
      })
    };
    return this.http.get(`${this.QUEREPONSE_API}?json=${QueRequest}`, httpOptions);
  }
 /*  read(id: string): Observable<QueRequest> {
    return this.http
      .get<QueRequest>(`${this.QUEREPONSE_API}/${id}`);
     
  }


   getAll(): Observable<Array<QueResponse>> {
    return this.http.get<Array<QueResponse>>(this.QUEREPONSE_API);
  }
  save(QueRequest: QueRequest): Observable<QueRequest> {
    let result: Observable<QueRequest>;
    if (QueRequest.UniqueIdentifierId) {
      result = this.http.put<QueRequest>(
        `${this.QUEREPONSE_API}/${QueRequest.UniqueIdentifierId}`,
        QueRequest
      );
    } else {
      result = this.http.post<QueRequest>(this.QUEREPONSE_API, QueRequest);
    }
    return result;
  } */
  
  getToken(credentiels: credentiels){
    /*const httpOptions: { headers; observe; } = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded',
         'Username': credentiels.Username,
        'Password': credentiels.Password 
      }),
      observe: 'response'
    };
   return this.http.post(`${this.TOKEN_API}`,credentiels, httpOptions);*/
  /*  const httpOptions: { headers; observe; } = {
    headers: new HttpHeaders({
      'Content-Type':  'application/x-www-form-urlencoded',
    }),
    observe: 'response'
  }; */
   const payload = new HttpParams()
    .set('UserName',credentiels.UserName)
    .set('Password',credentiels.Password)
    .set('grant_type',credentiels.grant_type);
   return this.http.post(`${this.TOKEN_API}`,payload);
  }
  GetGuids(counter: number){

    return this.http.get(`${this.GUID_API}?counter=${counter}`);
  }
}