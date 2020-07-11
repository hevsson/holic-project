import {
  Component,
  ViewEncapsulation,
  OnInit,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { VideoView } from 'src/app/model/video';
import { Router, ActivatedRoute } from '@angular/router';
import { UserProfileService } from '../login/service/userprofile.service';
import { MatSnackBar } from '@angular/material';
import { DeviceDetectorService } from 'ngx-device-detector';
import * as $ from 'jquery';
import * as Hammer from 'hammerjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent implements OnInit, AfterViewInit {
  mainVideo: VideoView;
  interviewVideo: VideoView;
  lifestyleVideo: VideoView;
  reportVideo: VideoView;
  musicVideo: VideoView;
  sportVideo: VideoView;
  interview2Video: VideoView;

  searchtext: string;

  @ViewChild('mainvid', { static: false }) matVideo: any;
  main: HTMLVideoElement;

  @ViewChild('reportvid', { static: false }) matreportVideo: any;
  report: HTMLVideoElement;

  @ViewChild('sportvid', { static: false }) matsportVideo: any;
  sport: HTMLVideoElement;

  @ViewChild('musicvid', { static: false }) matmusicVideo: any;
  music: HTMLVideoElement;

  @ViewChild('lifestylevid', { static: false }) matlifestyleVideo: any;
  lifestyle: HTMLVideoElement;

  @ViewChild('interview2vid', { static: false }) matinterview2Video: any;
  interview2: HTMLVideoElement;

  @ViewChild('interviewvid', { static: false }) matinterviewVideo: any;
  interview: HTMLVideoElement;

  isMobile: boolean;

  constructor(
    public router: Router,
    private activatedRoute: ActivatedRoute,
    private userProfileService: UserProfileService,
    public snackBar: MatSnackBar,
    private deviceService: DeviceDetectorService
  ) {
    this.isMobile = true; //this.deviceService.isMobile();
  }

  ngOnInit(): void {
    const data = this.activatedRoute.snapshot.data['video'];
    this.mainVideo = this.findVideoByType(data, 'MAINVIDEO');
    this.interviewVideo = this.findVideoByType(data, 'INTERVIEW');
    this.reportVideo = this.findVideoByType(data, 'REPORT');
    this.lifestyleVideo = this.findVideoByType(data, 'LIFESTYLE');
    this.musicVideo = this.findVideoByType(data, 'MUSIC_VIDEO');
    this.sportVideo = this.findVideoByType(data, 'SPORT');
    this.interview2Video = this.findVideoByType(data, 'INTERVIEW2');

    $(document).ready(function () {
      var element = document.getElementById('mobileId');
      // tslint:disable-next-line:prefer-const
      const mc = new Hammer(element);
      mc.get('swipe').set({ direction: Hammer.DIRECTION_ALL });

      mc.on('swipedown', function () {
        this.previousUser();
      });

      mc.on('swipeup', function () {
        this.nextUser();
      });

      var right = 0;
      var topOffset = 0;
      var i = 0;
      var j = 0;

      var countDivY = $('#mainWrpY > div').length;
      document.addEventListener('touchstart', handleTouchStart, false);
      document.addEventListener('touchmove', handleTouchMove, false);

      $('#rightArrow').click(function () {
        if (i < 6) {
          console.log(i);
          right += 100;

          $('.currentMainWrp').animate({ right: right + '%' }, 500);
          $('.currentMainWrp .currVideo')[0].pause();
          $('.currentMainWrp .currVideo').removeClass('currVideo');
          i++;
          $('.currentMainWrp video').eq(i).addClass('currVideo');
          $('.currVideo')[0].play();
        }
      });
      $('#leftArrow').click(function () {
        console.log(i);
        if (i > 0) {
          right -= 100;
          $('.currentMainWrp').animate({ right: right + '%' }, 500);
          i--;
          $('.currentMainWrp .currVideo')[0].pause();
          $('.currentMainWrp .currVideo').removeClass('currVideo');
          $('.currentMainWrp video').eq(i).addClass('currVideo');
          $('.currVideo')[0].play();
        }
      });
      var xDown = null;
      var yDown = null;

      function getTouches(evt) {
        return (
          evt.touches || evt.originalEvent.touches // browser API
        ); // jQuery
      }

      function handleTouchStart(evt) {
        const firstTouch = getTouches(evt)[0];
        xDown = firstTouch.clientX;
        yDown = firstTouch.clientY;
      }

      function handleTouchMove(evt) {
        if (!xDown || !yDown) {
          return;
        }

        var xUp = evt.touches[0].clientX;
        var yUp = evt.touches[0].clientY;

        var xDiff = xDown - xUp;
        var yDiff = yDown - yUp;

        if (Math.abs(xDiff) > Math.abs(yDiff)) {
          /*most significant*/
          if (xDiff > 0) {
            //left
            if (i < 6) {
              right += 100;

              $('.currentMainWrp').animate({ right: right + '%' }, 500);
              $('.currentMainWrp .currVideo')[0].pause();
              $('.currentMainWrp .currVideo').removeClass('currVideo');
              i++;
              $('.currentMainWrp video').eq(i).addClass('currVideo');
              $('.currentMainWrp .currVideo')[0].play();
            }
          } else {
            if (i > 0) {
              right -= 100;
              $('.currentMainWrp').animate({ right: right + '%' }, 500);
              i--;
              $('.currentMainWrp .currVideo')[0].pause();
              $('.currentMainWrp .currVideo').removeClass('currVideo');
              $('.currentMainWrp video').eq(i).addClass('currVideo');
              $('.currentMainWrp .currVideo')[0].play();
            }
          }
        } else {
          if (yDiff > 0) {
            if (j < countDivY - 1) {
              j++;
              i = 0;
              right = 0;
              $('#userC').html('User ' + (j + 1));
              $('#mainWrpY > div').each(function (index) {
                $(this).animate({ top: '-' + j * 35 + 'em' }, 500);
              });
              $('.currentMainWrp .currVideo')[0].pause();

              $('.currentMainWrp')
                .css('right', 0)
                .removeClass('currentMainWrp');
              $('#mainWrpY > div').eq(j).addClass('currentMainWrp');
              $('.currentMainWrp .currVideo')[0].play();
            }
          } else {
            if (j > 0) {
              j--;
              i = 0;
              right = 0;
              $('#userC').html('User ' + (j + 1));
              $('#mainWrpY > div').each(function (index) {
                $(this).animate({ top: '-' + j * 35 + 'em' }, 500);
              });
              $('.currentMainWrp .currVideo')[0].pause();
              $('.currentMainWrp')
                .css('right', 0)
                .removeClass('currentMainWrp');
              $('#mainWrpY > div')
                .eq(j)
                .addClass('currentMainWrp')
                .css('right', 0);
              $('.currentMainWrp .currVideo')[0].play();
            }
          }
        }
        /* reset values */
        xDown = null;
        yDown = null;
      }

      function openFullscreen() {
        var elem = $('.currentMainWrp .currVideo')[0];
        if (elem.requestFullscreen) {
          elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) {
          /* Firefox */
          elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
          /* Chrome, Safari and Opera */
          elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
          /* IE/Edge */
          elem.msRequestFullscreen();
        }
      }

      screen.orientation.addEventListener(
        'change',
        function (e) {
          if (
            screen.orientation.type == 'landscape-primary' ||
            screen.orientation.type == 'landscape-secondary'
          ) {
            openFullscreen();
          } else {
            if (document.exitFullscreen) {
              document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
              document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
              document.webkitExitFullscreen();
            } else if (document.webkitCancelFullScreen) {
              document.webkitCancelFullScreen();
            }
          }
        },
        false
      );
    });
  }

  ngAfterViewInit(): void {
    if (!this.isMobile) {
      this.main = this.matVideo.getVideoTag();
      this.main.addEventListener('playing', () => {
        if (
          !this.interviewVideo.mute &&
          !this.reportVideo.mute &&
          !this.lifestyleVideo.mute &&
          !this.musicVideo.mute &&
          !this.sportVideo.mute &&
          !this.interview2Video.mute
        ) {
          this.interviewVideo.mute = true;
          this.reportVideo.mute = true;
          this.lifestyleVideo.mute = true;
          this.musicVideo.mute = true;
          this.sportVideo.mute = true;
          this.interview2Video.mute = true;
          this.mainVideo.mute = false;
        }
      });
      this.main.addEventListener('ondblclick', () => {});

      this.main.addEventListener('onclick', () => {});

      this.main.addEventListener('loadedmetadata', () => {
        const datebb: Date = new Date();
        var x = datebb.valueOf() / 1000;
        this.mainVideo.time = x % this.main.duration;
        this.main.currentTime = x % this.main.duration;
      });

      this.report = this.matreportVideo.getVideoTag();
      this.report.addEventListener('ondblclick', () => {});

      this.report.addEventListener('onclick', () => {});

      this.report.addEventListener('loadedmetadata', () => {
        const datebb: Date = new Date();
        var x = datebb.valueOf() / 1000;
        this.reportVideo.time = x % this.report.duration;
        this.report.currentTime = x % this.report.duration;
      });

      this.sport = this.matsportVideo.getVideoTag();

      this.sport.addEventListener('ondblclick', () => {});

      this.sport.addEventListener('onclick', () => {});

      this.sport.addEventListener('loadedmetadata', () => {
        const datebb: Date = new Date();
        var x = (datebb.valueOf() + 0) / 1000;
        this.sportVideo.time = x % this.sport.duration;
        this.sport.currentTime = x % this.sport.duration;
      });

      this.music = this.matmusicVideo.getVideoTag();

      this.music.addEventListener('ondblclick', () => {});

      this.music.addEventListener('onclick', () => {});

      this.music.addEventListener('loadedmetadata', () => {
        const datebb: Date = new Date();
        var x = datebb.valueOf() / 1000;
        this.musicVideo.time = x % this.music.duration;
        this.music.currentTime = x % this.music.duration;
      });

      this.lifestyle = this.matlifestyleVideo.getVideoTag();

      this.lifestyle.addEventListener('ondblclick', () => {});
      this.lifestyle.addEventListener('onclick', () => {});

      this.lifestyle.addEventListener('loadedmetadata', () => {
        const datebb: Date = new Date();
        var x = datebb.valueOf() / 1000;
        this.lifestyleVideo.time = x % this.lifestyle.duration;
        this.lifestyle.currentTime = x % this.lifestyle.duration;
      });

      this.interview2 = this.matinterview2Video.getVideoTag();

      this.interview2.addEventListener('ondblclick', () => {});
      this.interview2.addEventListener('onclick', () => {});

      this.interview2.addEventListener('loadedmetadata', () => {
        const datebb: Date = new Date();
        var x = datebb.valueOf() / 1000;
        this.interview2Video.time = x % this.interview2.duration;
        this.interview2.currentTime = x % this.interview2.duration;
      });

      this.interview = this.matinterviewVideo.getVideoTag();
      this.interview.addEventListener('mouseover', () => {
        this.playInterview();
      });

      this.interview.addEventListener('mouseout', () => {
        this.muteInterview();
      });
      this.interview.addEventListener('loadedmetadata', () => {
        const datebb: Date = new Date();
        var x = datebb.valueOf() / 1000;
        this.interviewVideo.time = x % this.interview.duration;
        this.interview.currentTime = x % this.interview.duration;
      });
    }
  }
  public playInterview() {
    this.mainVideo.mute = true;
    this.reportVideo.mute = true;
    this.lifestyleVideo.mute = true;
    this.musicVideo.mute = true;
    this.sportVideo.mute = true;
    this.interview2Video.mute = true;
    this.interviewVideo.mute = false;
    this.interviewVideo.fullscreen = true;
  }

  public muteInterview() {
    this.interviewVideo.mute = true;
    this.reportVideo.mute = true;
    this.musicVideo.mute = true;
    this.sportVideo.mute = true;
    this.interview2Video.mute = true;
    this.lifestyleVideo.mute = true;
    this.mainVideo.mute = false;
    this.interviewVideo.fullscreen = false;
  }

  public playInterview2() {
    this.interviewVideo.mute = true;
    this.reportVideo.mute = true;
    this.lifestyleVideo.mute = true;
    this.musicVideo.mute = true;
    this.sportVideo.mute = true;
    this.mainVideo.mute = true;
    this.interview2Video.mute = false;
    this.interview2Video.fullscreen = true;
  }

  public muteInterview2() {
    this.interviewVideo.mute = true;
    this.reportVideo.mute = true;
    this.musicVideo.mute = true;
    this.sportVideo.mute = true;
    this.interview2Video.mute = true;
    this.lifestyleVideo.mute = true;
    this.mainVideo.mute = false;
    this.interview2Video.fullscreen = false;
  }

  public playLifeStyle() {
    this.interviewVideo.mute = true;
    this.reportVideo.mute = true;
    this.mainVideo.mute = true;
    this.musicVideo.mute = true;
    this.sportVideo.mute = true;
    this.interview2Video.mute = true;
    this.lifestyleVideo.mute = false;
    this.lifestyleVideo.fullscreen = true;
  }

  public muteLifeStyle() {
    this.interviewVideo.mute = true;
    this.reportVideo.mute = true;
    this.musicVideo.mute = true;
    this.sportVideo.mute = true;
    this.interview2Video.mute = true;
    this.lifestyleVideo.mute = true;
    this.mainVideo.mute = false;
    this.lifestyleVideo.fullscreen = false;
  }

  public playMusic() {
    this.interviewVideo.mute = true;
    this.reportVideo.mute = true;
    this.lifestyleVideo.mute = true;
    this.mainVideo.mute = true;
    this.sportVideo.mute = true;
    this.interview2Video.mute = true;
    this.musicVideo.mute = false;
    this.musicVideo.fullscreen = true;
  }

  public muteMusic() {
    this.interviewVideo.mute = true;
    this.reportVideo.mute = true;
    this.musicVideo.mute = true;
    this.sportVideo.mute = true;
    this.interview2Video.mute = true;
    this.lifestyleVideo.mute = true;
    this.mainVideo.mute = false;
    this.musicVideo.fullscreen = false;
  }

  public playSport() {
    this.interviewVideo.mute = true;
    this.reportVideo.mute = true;
    this.lifestyleVideo.mute = true;
    this.musicVideo.mute = true;
    this.mainVideo.mute = true;
    this.interview2Video.mute = true;
    this.sportVideo.mute = false;
    this.sportVideo.fullscreen = true;
  }

  public muteSport() {
    this.interviewVideo.mute = true;
    this.reportVideo.mute = true;
    this.musicVideo.mute = true;
    this.sportVideo.mute = true;
    this.interview2Video.mute = true;
    this.lifestyleVideo.mute = true;
    this.mainVideo.mute = false;
    this.sportVideo.fullscreen = false;
  }

  public playReport() {
    this.interviewVideo.mute = true;
    this.mainVideo.mute = true;
    this.lifestyleVideo.mute = true;
    this.musicVideo.mute = true;
    this.sportVideo.mute = true;
    this.interview2Video.mute = true;
    this.reportVideo.mute = false;
    this.reportVideo.fullscreen = true;
  }

  public muteReport() {
    this.interviewVideo.mute = true;
    this.reportVideo.mute = true;
    this.musicVideo.mute = true;
    this.sportVideo.mute = true;
    this.interview2Video.mute = true;
    this.lifestyleVideo.mute = true;
    this.mainVideo.mute = false;
    this.mainVideo.fullscreen = false;
  }

  public findVideoByType(data: VideoView[], type: string): VideoView {
    return data.filter((p) => p.type === type)[0];
  }
  public redirectHome(): void {
    this.router.navigate(['']);
  }

  detail(id: number): void {
    this.router.navigate(['/video/' + id + '/' + this.mainVideo.id]);
  }

  userExist(): void {
    if (this.searchtext !== undefined && this.searchtext !== '') {
      this.userProfileService.userexist(this.searchtext).subscribe((p) => {
        if (p === false) {
          this.snackBar.open('User does not exist', 'close', {
            verticalPosition: this.isMobile ? 'bottom' : 'top',
            horizontalPosition: this.isMobile ? 'center' : 'left',
            duration: 500,
          });
          return;
        }

        if (p === true) {
          this.router.navigate(['/user/' + this.searchtext]);
        }
      });
    }
  }

  previousUser(): void {
    this.userProfileService.previousUser('DASHBOARD_HOLIC').subscribe(
      (p) => {
        this.router.navigate(['/user/' + p.login]);
      },
      (error) => {
        this.snackBar.open('User does not exist', 'close', {
          verticalPosition: 'top',
          horizontalPosition: 'left',
          duration: 500,
        });
      }
    );
  }

  nextUser(): void {
    this.userProfileService.nextUser('DASHBOARD_HOLIC').subscribe(
      (p) => {
        this.router.navigate(['/user/' + p.login]);
      },
      (error) => {
        this.snackBar.open('User does not exist', 'close', {
          verticalPosition: 'top',
          duration: 500,
        });
      }
    );
  }

  keyPress(event: any) {
    if (event.which === 13) {
      this.userExist();
    }
  }

  onSwipeDown(evt) {
    this.previousUser();
  }
  onSwipeUp(evt) {
    this.nextUser();
  }
}
