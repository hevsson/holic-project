import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, map, finalize } from 'rxjs/operators';
import { Principal, RegisterView } from 'src/app/model/principal';
import { PasswordRequest } from 'src/app/model/passwordView';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

 principal: Principal;

  API_URL = '/api/account';
  constructor(private httpClient: HttpClient) {}


  getp(): Principal {
    return this.principal;
  }
  isAuthenticated(): boolean {
    return this.principal !== undefined;
  }

  isAdmin(): boolean {
    return this.principal.admin === true;
  }

  getPrincipal(force?: boolean): Observable<Principal> {
    if (force !== undefined && force === true) {
      this.removePrincipal();
    }
    if (this.principal !== undefined) {
      return of(this.principal);
    }

    return this.getPrincipalFromServer();
  }

  removePrincipal(): void {
    this.principal = undefined;
  }

  getPrincipalFromServer(): Observable<Principal> {
    return this.httpClient.get(this.API_URL + '/user').pipe(
      map((result: Principal) => {
        this.principal = result;
        return result;
      }),
      catchError((error: any) => {
        this.removePrincipal();
        return Observable.throw(error);
      })
    );
  }

  register(user: RegisterView): Observable<Principal> {
    return this.httpClient.post(this.API_URL + '/register', user).pipe(
      map((result: Principal) => {
        return result;
      }),
      catchError((error: any) => {
        return Observable.throw(error);
      })
    );
  }

  updatePassword(password: PasswordRequest): Observable<boolean> {
    return this.httpClient.post(this.API_URL + '/updatepassword', password).pipe(
      map((result: boolean) => {
        return result;
      }),
      catchError((error: any) => {
        return Observable.throw(error);
      })
    );
  }

  updateProfile(principal: Principal): Observable<boolean> {
    return this.httpClient.post(this.API_URL + '/updateprofile', principal).pipe(
      map((result: boolean) => {
        return result;
      }),
      catchError((error: any) => {
        return Observable.throw(error);
      })
    );
  }


  userexist(name: string): Observable<boolean> {
    return this.httpClient
      .get<boolean>(`${this.API_URL}/userexist/${name}`)
      .pipe(catchError(this.handleError));
  }

  previousUser(name: string): Observable<Principal> {
    return this.httpClient
      .get<Principal>(`${this.API_URL}/previousUser/${name}`)
      .pipe(catchError(this.handleError));
  }

  nextUser(name: string): Observable<Principal> {
    return this.httpClient
      .get<Principal>(`${this.API_URL}/nextUser/${name}`)
      .pipe(catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}
