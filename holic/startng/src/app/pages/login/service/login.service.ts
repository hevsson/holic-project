import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpParams,
  HttpHeaders
} from '@angular/common/http';
import { Observable, throwError as observableThrowError, of } from 'rxjs';
import { catchError, map, finalize, switchMap } from 'rxjs/operators';
import { Principal, RegisterView } from 'src/app/model/principal';
import { UserProfileService } from './userprofile.service';
import { Credential } from 'src/app/model/credential';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {
  principal: Principal;

  API_URL = '/api/account';
  constructor(
    private userProfileService: UserProfileService,
    private http: HttpClient,
    private router: Router
  ) {}

  login(credential: Credential) {
    const body = new HttpParams()
      .set('username', credential.username)
      .set('password', credential.password)
      .append('remember-me', credential.rememberMe);
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/x-www-form-urlencoded'
    );

    return this.http
      .post(`${this.API_URL}/login`, body, {
        headers: headers,
        observe: 'response',
        responseType: 'text'
      })
      .pipe(
        switchMap(response => {
          return this.userProfileService.getPrincipal(true);
        }),
        catchError(error => {
          return observableThrowError(error.message || error);
        })
      );
  }

  logout(): Observable<any> {
    return this.http.post(this.API_URL + '/logout', '').pipe(
      catchError(err => of<any>()),
      finalize(() => {
        this.userProfileService.removePrincipal();
        this.router.navigate(['/login']);
      })
    );
  }
}
