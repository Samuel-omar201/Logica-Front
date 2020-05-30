import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ClientService {
  endpoint = 'http://localhost:3000/v1/'
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  private extractData(res){
    let body = res;
    return body || { } || [ ];
  }

  getClient(): Observable<any>{
    return this.http.get(this.endpoint + 'client', this.httpOptions).pipe(map(this.extractData))
  }

  setClient(client){
    let params = JSON.stringify(client);

    return this.http.post(this.endpoint + 'addClient', params, this.httpOptions).pipe(map(this.extractData));
  }
}
