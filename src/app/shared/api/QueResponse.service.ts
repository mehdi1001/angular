import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import QueResponse from '../models/QueResponse';
import QueRequest from '../models/QueRequest';
import { HttpHeaders } from '@angular/common/http';


@Injectable()
export default class QueResponseService {
  public API = 'http://localhost:2551';
  public QUEREPONSE_API = `${this.API}/Que`;
  
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
}