import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { UserProfileService } from '../pages/login/service/userprofile.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: UserProfileService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {

    if (route.params['username'] === 'holic') {
      return of(true);
    }
    if (!this.authenticationService.isAuthenticated()) {
      // authorised so return true
      return this.authenticationService.getPrincipal(true).pipe(
        map(result => {
          return true;
        }),
        catchError(error => {
          // not logged in so redirect to login page with the return url
          this.router.navigate(
            ['/user/holic']
            //, {queryParams: { returnUrl: state.url }}
          );
          return of(false);
        })
      );
    } else {
      return of(true);
    }
  }
}
