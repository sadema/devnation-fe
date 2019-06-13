import {Component} from '@angular/core';
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

  click(uri:string) {
    this.details$ = this.devnationService.getDetails(uri);
  }

  ngOnInit() {
  }

}
