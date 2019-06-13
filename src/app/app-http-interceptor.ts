import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(req);
    return next.handle(req)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status == 401 || error.status == 403) {
            window.location.href =`/api/login?uri=${error.url}`;
          }
          return throwError(error);
        })
      );
 }

}
