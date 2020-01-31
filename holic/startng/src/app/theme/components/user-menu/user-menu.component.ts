import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Principal } from 'src/app/model/principal';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/pages/login/service/login.service';
import { UserProfileService } from 'src/app/pages/login/service/userprofile.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserMenuComponent implements OnInit {
  principal: Principal;
  isConnected: boolean = false;
  constructor(
    private router: Router,
    private loginService: LoginService,
    private userProfileService: UserProfileService
  ) {}

  ngOnInit() {
    this.userProfileService.getPrincipal().subscribe(
      data => {
        this.principal = data;
        this.isConnected = this.userProfileService.isAuthenticated();
      },
      error => {
        this.isConnected = false;
      }
    );
  }

  logout() {
    this.loginService.logout().subscribe(p => {
      this.router.navigate(['login']);
    });
  }
}
