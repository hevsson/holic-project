
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DirectivesModule } from '../../theme/directives/directives.module';
import { UserComponent } from './user.component';
import { MatVideoModule } from '../video/video.module';
import { MatCardModule } from '@angular/material';
import { HAMMER_GESTURE_CONFIG, HammerGestureConfig } from '@angular/platform-browser';
import { MyHammerConfig } from 'src/app/app.module';


export const routes = [
  { path: '', component: UserComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    PerfectScrollbarModule,
    NgxChartsModule,
    DirectivesModule,
    MatVideoModule,
    MatCardModule
  ],
  declarations: [
    UserComponent
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig,
    },
  ]
})

export class UserModule { }
