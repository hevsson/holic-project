import { VideoView } from '../../../model/video';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { VideoService } from '../../dashboard/service/video.service';

@Injectable()
export class VideoDetailResolver implements Resolve<VideoView> {
  constructor(private videoService: VideoService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<VideoView> {

    const id: number = +route.paramMap.get('id');

    return this.videoService.getVideo(id);
  }
}