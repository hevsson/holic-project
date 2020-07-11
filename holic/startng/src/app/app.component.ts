import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AppSettings } from './app.settings';
import { Settings } from './app.settings.model';
import { UserProfileService } from './pages/login/service/userprofile.service';
import { LoginService } from './pages/login/service/login.service';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  public settings: Settings;
  public isMobile: boolean;
  constructor(
    public appSettings: AppSettings,
    private router: Router,
    private loginService: LoginService,
    private deviceService: DeviceDetectorService
  ) {
    this.settings = this.appSettings.settings;
    this.isMobile = this.deviceService.isMobile();
  }

  /* These following methods used for theme preview, you can remove this methods */

  // ngOnInit() {
  //     var demo = this.getParameterByName('demo');
  //     this.setLayout(demo);
  // }

  // private getParameterByName(name) {
  //     var url = window.location.href;
  //     name = name.replace(/[\[\]]/g, "\\$&");
  //     var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
  //         results = regex.exec(url);
  //     if (!results) return null;
  //     if (!results[2]) return '';
  //     return decodeURIComponent(results[2].replace(/\+/g, " "));
  // }

  // private setLayout(demo){
  //      switch (demo) {
  //         case "vertical-default":
  //             this.settings.theme.menu = 'vertical';
  //             this.settings.theme.menuType = 'default';
  //             break;
  //         case "vertical-compact":
  //             this.settings.theme.menu = 'vertical';
  //             this.settings.theme.menuType = 'compact';
  //             break;
  //         case "vertical-mini":
  //             this.settings.theme.menu = 'vertical';
  //             this.settings.theme.menuType = 'mini';
  //             break;
  //         case "horizontal-default":
  //             this.settings.theme.menu = 'horizontal';
  //             this.settings.theme.menuType = 'default';
  //             break;
  //         case "horizontal-compact":
  //             this.settings.theme.menu = 'horizontal';
  //             this.settings.theme.menuType = 'compact';
  //             break;
  //         case "horizontal-mini":
  //             this.settings.theme.menu = 'horizontal';
  //             this.settings.theme.menuType = 'mini';
  //             break;
  //         default:
  //             this.settings.theme.menu = 'vertical';
  //             this.settings.theme.menuType = 'default';
  //     }
  //     this.router.navigate(['/']);
  // }

  logout() {
    this.loginService.logout().subscribe((p) => {
      this.router.navigate(['login']);
    });
  }
}
