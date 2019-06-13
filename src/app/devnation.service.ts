import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DevnationService {

  constructor(private http:HttpClient) { }

  getDetails(uri:string):Observable<any> {
    // return this.http.get(uri,{observe: 'response'});
    return this.http.get(uri);
  }
}
