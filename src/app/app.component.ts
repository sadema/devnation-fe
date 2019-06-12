import { Component } from '@angular/core';
import {DevnationService} from "./devnation.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'devnation-fe';
  details$:Observable<any>;

  constructor(private devnationService:DevnationService) {
  }

  click() {
    this.details$ = this.devnationService.getDetails();
      // .subscribe(resp => {
      //   console.log("status: " + resp.status);
      //   if (resp.status === 401) {
      //     window.location.href = '/api/oauth2/authorization/keycloak';
      //   } else {
      //     console.log(resp.body);
      //     this.details = resp.body;
      //   }
      // });
  }

  ngOnInit() {
  }

}
