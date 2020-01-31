import { VideoView } from '../../../model/video';
import { VideoService } from './video.service';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class VideoResolver implements Resolve<VideoView[]> {
  constructor(private videoService: VideoService) {}
  resolve(): Observable<VideoView[]> {
    return this.videoService.getAllVideos();
  }
}
