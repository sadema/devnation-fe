import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DevnationService {

  constructor(private http:HttpClient) { }

  getDetails():Observable<any> {
    // return this.http.get('/resource/message',{observe: 'response'});
    return this.http.get('/api/message',{observe: 'response'});

    // return this.http.get('http://localhost:8005/auth/realms/demo/.well-known/openid-configuration');
  }
}
