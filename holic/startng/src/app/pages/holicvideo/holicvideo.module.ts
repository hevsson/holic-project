
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HolicVideoComponent } from './holicvideo.component';
import { MatVideoModule } from '../video/video.module';




export const routes = [
  { path: '', component: HolicVideoComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MatVideoModule
  ],
  declarations: [HolicVideoComponent]
})
export class HolicvideoModule {}
