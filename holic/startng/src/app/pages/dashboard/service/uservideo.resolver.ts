import { VideoView } from '../../../model/video';
import { VideoService } from './video.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class UserVideoResolver implements Resolve<VideoView[]> {
  constructor(private videoService: VideoService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<VideoView[]> {
    return this.videoService.getAllVideosByUsername(route.paramMap.get('username'));
  }
}
