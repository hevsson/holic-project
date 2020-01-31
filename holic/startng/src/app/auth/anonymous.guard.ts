import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { map, catchError } from 'rxjs/operators';
import { UserProfileService } from '../pages/login/service/userprofile.service';
import { of } from 'rxjs';

@Injectable()
export class AnonymousGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: UserProfileService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.authenticationService.isAuthenticated()) {
      // authorised so return true
      return this.authenticationService.getPrincipal(true).pipe(
        map(result => {
          const test = state.url;
          this.router.navigate(['']);
          return false;
        }),
        catchError(error => {
          // not logged in so redirect to login page with the return url
          return of(true);
        })
      );
    } else {
      of(false);
    }
  }
}
