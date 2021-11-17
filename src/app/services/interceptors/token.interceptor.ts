import { Injectable, Injector } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {

  constructor(private injector: Injector) { }
  intercept(req: any, next: any) {
    try {
      const authService = this.injector.get(AuthService);
      if (!authService.loggedIn()) {
        return next.handle(req).pipe(
          map((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
            }
            return event;
          }),
          catchError((error: HttpErrorResponse) => {
            if (error.status === 401) { authService.logout(); }
            return throwError(error);
          }));
      }
      const tokenizedReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${authService.getToken()}`,
        },
      });
      return next.handle(tokenizedReq).pipe(
        map((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
          }
          return event;
        }),
        catchError((error: HttpErrorResponse) => {
          if (error.status === 401) { authService.logout(); }
          return throwError(error);
        }));
    } catch (error) {
    }
  }
}
