import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VideoView } from 'src/app/model/video';
import { VideoService } from '../dashboard/service/video.service';

@Component({
  selector: 'app-holicvideo-voyage',
  templateUrl: './holicvideo.component.html',
  styleUrls: ['./holicvideo.component.scss']
})
export class HolicVideoComponent implements OnInit, AfterViewInit {
  video: VideoView;
  showMenu: boolean;
  mainId: number;
  fullscreen: boolean;

  @ViewChild('mainvid', { static: false }) matVideo: any;
  main: HTMLVideoElement;

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private videoService: VideoService
  ) {}

  mouseover() {
    this.fullscreen = true;
  }

  mouseout() {
    this.fullscreen = true;
  }
  ngOnInit() {
    const id = this.activeRoute.snapshot.params.id;
    this.fullscreen = false;
    this.mainId = this.activeRoute.snapshot.params.mainid;


    this.video = this.activeRoute.snapshot.data['detail'];
  }

  show() {
    if (!this.showMenu) {
      this.showMenu = true;
    }
  }

  notshow() {
    if (this.showMenu) {
      this.showMenu = false;
    }
  }

  ngAfterViewInit(): void {

      this.main = this.matVideo.getVideoTag();
      this.main.addEventListener('loadedmetadata', () => {
        const datebb: Date = new Date();
        var x = datebb.valueOf() / 1000;
        this.video.time = x % this.main.duration;
        this.main.currentTime = x % this.main.duration;
      });

      this.main.addEventListener('mouseover', () => {
        this.showMenu = true;
        this.fullscreen = true;
      });

      this.main.addEventListener('mouseout', () => {
        this.showMenu = false;
        this.fullscreen = false;
      });

      this.main.addEventListener('ondblclick', () => {});
      this.main.addEventListener('onclick', () => {});
  }

  redirectfacebook() {
    window.open(
      'https://www.facebook.com/sharer/sharer.php?u=' +
        encodeURIComponent(this.main.currentSrc)
    );
  }

  redirecttwitter() {
    window.open(
      'https://twitter.com/intent/tweet?url=' +
        encodeURIComponent(this.main.currentSrc)
    );
  }

  redirectapple() {
    window.open(
      'https://www.facebook.com/sharer.php?s=100&p[url]=' +
        encodeURIComponent(this.main.currentSrc)
    );
  }

  previous(): void {
    if (this.main.currentTime >= this.video.third) {
      this.video.time = this.video.second;
      this.main.currentTime = this.video.second;
      return;
    }
    if (this.main.currentTime >= this.video.second) {
      this.video.time = this.video.first;
      this.main.currentTime = this.video.first;
      return;
    }
    this.video.time = this.video.third;
    this.main.currentTime = this.video.third;
  }

  next(): void {
    if (this.main.currentTime < this.video.second) {
      this.video.time = this.video.second;
      this.main.currentTime = this.video.second;
      return;
    }

    if (this.main.currentTime < this.video.third) {
      this.video.time = this.video.third;
      this.main.currentTime = this.video.third;
      return;
    }

    this.video.time = this.video.first;
    this.main.currentTime = this.video.first;
  }

  playcurrent(): void {
    if (this.main.paused) {
      this.main.play();
      return;
    }
    this.main.pause();
  }

  public redirectHome(): void {
    this.router.navigate(['']);
  }

  redirectMainTv() {
    this.router.navigate(['/video/' + this.mainId + '/' + this.mainId]);
  }

  zoom() {
    this.matVideo.is = true;
  }
}
