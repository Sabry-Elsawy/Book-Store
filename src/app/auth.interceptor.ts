import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token =localStorage.getItem('userToken')
    const baseUrl='https://upskilling-egypt.com:3007/';
    let newRequest =request.clone({
      url: request.url.includes('assets')? request.url : baseUrl + request.url,
      setHeaders:{  'Authorization': `Bearer ${token}`}
    })
    return next.handle(newRequest);
  }
}
