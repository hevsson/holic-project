(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <img\r\n    src=\"assets/img/holic/logo-holic-o.png\"\r\n    style=\"margin-left:auto;margin-right:auto;width:59px;display:block\"\r\n  />\r\n</div>\r\n<div class=\"holicTvPanel\">\r\n  <div class=\"currentLiveTVPanel\">\r\n    <div\r\n      id=\"liveTvPanelPanel\"\r\n      class=\"liveTvPanel\"\r\n      (dblclick)=\"detail(mainVideo.id)\"\r\n    >\r\n      <div style=\"height: 39vw\">\r\n        <div>\r\n          <mat-video\r\n            #mainvid\r\n            [title]=\"mainVideo.titre\"\r\n            [autoplay]=\"true\"\r\n            [loop]=\"true\"\r\n            [overlay]=\"false\"\r\n            [time]=\"mainVideo.time\"\r\n            [preload]=\"true\"\r\n            [fullscreen]=\"false\"\r\n            [download]=\"false\"\r\n            [muted]=\"mainVideo.mute\"\r\n            color=\"primary\"\r\n            spinner=\"spin\"\r\n          >\r\n            <source\r\n              matVideoSource\r\n              src=\"api/account/videos/{{ mainVideo.id }}\"\r\n              type=\"{{ mainVideo.format }}\"\r\n            />\r\n          </mat-video>\r\n        </div>\r\n        <div *ngIf=\"!isMobile\">\r\n          <div class=\"videotitle\">\r\n            HOLIC LIVE TV <span class=\"blackcolor\">|</span>\r\n            {{ mainVideo.username }}\r\n          </div>\r\n          <div class=\"menu\">\r\n            <img\r\n              (click)=\"redirectHome()\"\r\n              src=\"assets/img/holic/home.png\"\r\n              style=\"width:30px;\"\r\n            />\r\n\r\n            <a (click)=\"previousUser()\">\r\n              <img\r\n                src=\"assets/img/holic/bouton-holic-up.jpg\"\r\n                style=\"width:30px;\"\r\n            /></a>\r\n            <a (click)=\"nextUser()\"\r\n              ><img\r\n                src=\"assets/img/holic/bouton-holic-dwn.jpg\"\r\n                style=\"width:30px;\"\r\n            /></a>\r\n            <a (click)=\"userExist()\">\r\n              <img src=\"assets/img/holic/search-icon.png\" style=\"width:30px;\"\r\n            /></a>\r\n            <input\r\n              type=\"text\"\r\n              id=\"videoCategorieId\"\r\n              style=\"border: none; border-bottom: 1px solid rgba(0, 0, 0, 0.1); width: 24vw;\"\r\n              [(ngModel)]=\"searchtext\"\r\n              (keypress)=\"keyPress($event)\"\r\n            />\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"smallLiveTvPanel\" *ngIf=\"!isMobile\" >\r\n    <div class=\"videoPanel\" (dblclick)=\"detail(interviewVideo.id)\" (mouseover)=\"playInterview()\" (mouseout)=\"muteInterview()\">\r\n      <a onclick=\"\">\r\n        <div class=\"title\">{{ interviewVideo.titre }}</div>\r\n        <div id=\"interviewVideoPanel\" class=\"video\">\r\n          <div id=\"interviewVideo\">\r\n            <div>\r\n              <mat-video\r\n                #interviewvid\r\n                [title]=\"interviewVideo.titre\"\r\n                [autoplay]=\"true\"\r\n                [loop]=\"true\"\r\n                [overlay]=\"false\"\r\n                [preload]=\"true\"\r\n                [time]=\"interviewVideo.time\"\r\n                [fullscreen]=\"false\"\r\n                [download]=\"false\"\r\n                [muted]=\"interviewVideo.mute\"\r\n                color=\"accent\"\r\n                spinner=\"spin\"\r\n              >\r\n                <source\r\n                  matVideoSource\r\n                  src=\"api/account/videos/{{ interviewVideo.id }}\"\r\n                  type=\"{{ interviewVideo.format }}\"\r\n                />\r\n              </mat-video>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <br />\r\n        <a class=\"description\">{{ interviewVideo.description }}</a>\r\n      </a>\r\n    </div>\r\n\r\n    <div class=\"videoPanel\" (dblclick)=\"detail(reportVideo.id)\" (mouseover)=\"playReport()\" (mouseout)=\"muteReport()\">\r\n      <a onclick=\"\">\r\n        <div class=\"title\">{{ reportVideo.description }}</div>\r\n        <div id=\"reportVideoPanel\" class=\"video\">\r\n          <div id=\"reportVideo\">\r\n            <div>\r\n              <mat-video\r\n                #reportvid\r\n                matVideoSource\r\n                [title]=\"reportVideo.titre\"\r\n                [autoplay]=\"true\"\r\n                [loop]=\"true\"\r\n                [overlay]=\"false\"\r\n                [time]=\"reportVideo.time\"\r\n                [fullscreen]=\"false\"\r\n                [download]=\"false\"\r\n                [muted]=\"reportVideo.mute\"\r\n                [preload]=\"true\"\r\n                color=\"accent\"\r\n                spinner=\"spin\"\r\n              >\r\n                <source\r\n                  src=\"api/account/videos/{{ reportVideo.id }}\"\r\n                  type=\"{{ reportVideo.format }}\"\r\n                />\r\n              </mat-video>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <br />\r\n        <div class=\"description\">{{ reportVideo.description }}</div>\r\n      </a>\r\n    </div>\r\n\r\n    <div class=\"videoPanel\" (dblclick)=\"detail(sportVideo.id)\" (mouseover)=\"playSport()\" (mouseout)=\"muteSport()\">\r\n      <a onclick=\"\">\r\n        <div class=\"title\">{{ sportVideo.titre }}</div>\r\n        <div id=\"sportVideoPanel\" class=\"video\">\r\n          <div id=\"sportVideo\">\r\n            <div>\r\n              <mat-video\r\n                #sportvid\r\n                matVideoSource\r\n                [title]=\"sportVideo.titre\"\r\n                [autoplay]=\"true\"\r\n                [loop]=\"true\"\r\n                [time]=\"sportVideo.time\"\r\n                [fullscreen]=\"false\"\r\n                [download]=\"false\"\r\n                [muted]=\"sportVideo.mute\"\r\n                [overlay]=\"false\"\r\n                [preload]=\"true\"\r\n                color=\"accent\"\r\n                spinner=\"spin\"\r\n              >\r\n                >\r\n                <source\r\n                  src=\"api/account/videos/{{ sportVideo.id }}\"\r\n                  type=\"{{ interviewVideo.format }}\"\r\n                />\r\n              </mat-video>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <br />\r\n        <a class=\"description\">{{ sportVideo.description }}</a>\r\n      </a>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"smallLiveTvPanel\" *ngIf=\"!isMobile\" >\r\n    <div class=\"videoPanel\" (dblclick)=\"detail(musicVideo.id)\" (mouseover)=\"playMusic()\" (mouseout)=\"muteMusic()\">\r\n      <a onclick=\"\">\r\n        <div class=\"title\">{{ musicVideo.titre }}</div>\r\n        <div id=\"musicVideoPanel\" class=\"video\">\r\n          <div id=\"musicVideo\">\r\n            <div>\r\n              <mat-video\r\n                #musicvid\r\n                [title]=\"musicVideo.titre\"\r\n                [overlay]=\"false\"\r\n                [autoplay]=\"true\"\r\n                [loop]=\"true\"\r\n                [time]=\"musicVideo.time\"\r\n                [fullscreen]=\"false\"\r\n                [download]=\"false\"\r\n                [muted]=\"musicVideo.mute\"\r\n                [preload]=\"true\"\r\n                color=\"accent\"\r\n                spinner=\"spin\"\r\n              >\r\n                >\r\n                <source\r\n                  matVideoSource\r\n                  src=\"api/account/videos/{{ musicVideo.id }}\"\r\n                  type=\"{{ interviewVideo.format }}\"\r\n                />\r\n              </mat-video>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <br />\r\n        <a class=\"description\">{{ musicVideo.description }}</a>\r\n      </a>\r\n    </div>\r\n\r\n    <div class=\"videoPanel\" (dblclick)=\"detail(lifestyleVideo.id)\" (mouseover)=\"playLifeStyle()\" (mouseout)=\"muteLifeStyle()\">\r\n      <a onclick=\"\">\r\n        <div class=\"title\">{{ lifestyleVideo.titre }}</div>\r\n        <div id=\"lifestyleVideoPanel\" class=\"video\">\r\n          <div id=\"lifestyleVideo\">\r\n            <div>\r\n              <mat-video\r\n                #lifestylevid\r\n                [title]=\"lifestyleVideo.titre\"\r\n                [autoplay]=\"true\"\r\n                [preload]=\"true\"\r\n                [loop]=\"true\"\r\n                [time]=\"lifestyleVideo.time\"\r\n                [overlay]=\"false\"\r\n                [fullscreen]=\"false\"\r\n                [preload]=\"true\"\r\n                [download]=\"false\"\r\n                [muted]=\"lifestyleVideo.mute\"\r\n                color=\"accent\"\r\n                spinner=\"spin\"\r\n              >\r\n                >\r\n                <source\r\n                  matVideoSource\r\n                  src=\"api/account/videos/{{ lifestyleVideo.id }}\"\r\n                  type=\"{{ lifestyleVideo.format }}\"\r\n                />\r\n              </mat-video>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <br />\r\n        <a class=\"description\">{{ lifestyleVideo.description }}</a>\r\n      </a>\r\n    </div>\r\n\r\n    <div class=\"videoPanel\" (dblclick)=\"detail(interview2Video.id)\" (mouseover)=\"playInterview2()\" (mouseout)=\"muteInterview2()\">\r\n      <a onclick=\"\">\r\n        <div class=\"title\">\r\n          {{ interview2Video.titre }}\r\n        </div>\r\n        <div id=\"interview2VideoPanel\" class=\"video\">\r\n          <div id=\"interview2Video\">\r\n            <div>\r\n              <mat-video\r\n                #interview2vid\r\n                [title]=\"interview2Video.titre\"\r\n                [autoplay]=\"true\"\r\n                [preload]=\"true\"\r\n                [loop]=\"true\"\r\n                [time]=\"interview2Video.time\"\r\n                [fullscreen]=\"false\"\r\n                [download]=\"false\"\r\n                [preload]=\"true\"\r\n                [overlay]=\"false\"\r\n                [muted]=\"interview2Video.mute\"\r\n                color=\"accent\"\r\n                spinner=\"spin\"\r\n              >\r\n                >\r\n                <source\r\n                  matVideoSource\r\n                  src=\"api/account/videos/{{ interview2Video.id }}\"\r\n                  type=\"{{ interview2Video.format }}\"\r\n                />\r\n              </mat-video>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <br />\r\n        <a class=\"description\">{{ interview2Video.description }}</a>\r\n      </a>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"smallLiveTvPanel\" *ngIf=\"!isMobile\">\r\n  </div>\r\n  <div class=\"currentLiveTVPanel\" *ngIf=\"isMobile\" (touchmove)=\"playInterview()\" (mouseover)=\"playInterview()\" (mouseout)=\"muteInterview()\">\r\n    <div\r\n      id=\"liveTvPanelPanel\"\r\n      class=\"liveTvPanel\"\r\n      (dbclick)=\"detail(interviewVideo.id)\"\r\n    >\r\n      <div style=\"height: 39vw\">\r\n        <div>\r\n          <mat-video\r\n            #interviewvid\r\n            [title]=\"interviewVideo.titre\"\r\n            [autoplay]=\"true\"\r\n            [loop]=\"true\"\r\n            [overlay]=\"false\"\r\n            [time]=\"interviewVideo.time\"\r\n            [preload]=\"true\"\r\n            [fullscreen]=\"false\"\r\n            [download]=\"false\"\r\n            [muted]=\"interviewVideo.mute\"\r\n            color=\"primary\"\r\n            spinner=\"spin\"\r\n          >\r\n            <source\r\n              matVideoSource\r\n              src=\"api/account/videos/{{ interviewVideo.id }}\"\r\n              type=\"{{ interviewVideo.format }}\"\r\n            />\r\n          </mat-video>\r\n        </div>\r\n        <div>\r\n          <div class=\"videotitle\">{{ interviewVideo.description }}</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"currentLiveTVPanel\" *ngIf=\"isMobile\" (touchmove)=\"playReport()\" (mouseover)=\"playReport()\" (mouseout)=\"muteReport()\">\r\n    <div\r\n      id=\"liveTvPanelPanel\"\r\n      class=\"liveTvPanel\"\r\n      (dbclick)=\"detail(reportVideo.id)\"\r\n    >\r\n      <div style=\"height: 39vw\">\r\n        <div>\r\n          <mat-video\r\n            #reportvid\r\n            [title]=\"reportVideo.titre\"\r\n            [autoplay]=\"true\"\r\n            [loop]=\"true\"\r\n            [overlay]=\"false\"\r\n            [time]=\"reportVideo.time\"\r\n            [preload]=\"true\"\r\n            [fullscreen]=\"false\"\r\n            [download]=\"false\"\r\n            [muted]=\"reportVideo.mute\"\r\n            color=\"primary\"\r\n            spinner=\"spin\"\r\n          >\r\n            <source\r\n              matVideoSource\r\n              src=\"api/account/videos/{{ reportVideo.id }}\"\r\n              type=\"{{ reportVideo.format }}\"\r\n            />\r\n          </mat-video>\r\n        </div>\r\n        <div>\r\n          <div class=\"videotitle\">{{ reportVideo.description }}</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"currentLiveTVPanel\" *ngIf=\"isMobile\" (touchmove)=\"playSport()\" (mouseover)=\"playSport()\" (mouseout)=\"muteSport()\">\r\n    <div\r\n      id=\"liveTvPanelPanel\"\r\n      class=\"liveTvPanel\"\r\n      (dbclick)=\"detail(sportVideo.id)\"\r\n    >\r\n      <div style=\"height: 39vw\">\r\n        <div>\r\n          <mat-video\r\n            #sportvid\r\n            [title]=\"sportVideo.titre\"\r\n            [autoplay]=\"true\"\r\n            [loop]=\"true\"\r\n            [overlay]=\"false\"\r\n            [time]=\"sportVideo.time\"\r\n            [preload]=\"true\"\r\n            [fullscreen]=\"false\"\r\n            [download]=\"false\"\r\n            [muted]=\"sportVideo.mute\"\r\n            color=\"primary\"\r\n            spinner=\"spin\"\r\n          >\r\n            <source\r\n              matVideoSource\r\n              src=\"api/account/videos/{{ sportVideo.id }}\"\r\n              type=\"{{ sportVideo.format }}\"\r\n            />\r\n          </mat-video>\r\n        </div>\r\n        <div>\r\n          <div class=\"videotitle\">{{ sportVideo.description }}</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"currentLiveTVPanel\" *ngIf=\"isMobile\" (touchmove)=\"playMusic()\" (mouseover)=\"playMusic()\" (mouseout)=\"muteMusic()\">\r\n    <div\r\n      id=\"liveTvPanelPanel\"\r\n      class=\"liveTvPanel\"\r\n      (dbclick)=\"detail(musicVideo.id)\"\r\n    >\r\n      <div style=\"height: 39vw\">\r\n        <div>\r\n          <mat-video\r\n            #musicvid\r\n            [title]=\"musicVideo.titre\"\r\n            [autoplay]=\"true\"\r\n            [loop]=\"true\"\r\n            [overlay]=\"false\"\r\n            [time]=\"musicVideo.time\"\r\n            [preload]=\"true\"\r\n            [fullscreen]=\"false\"\r\n            [download]=\"false\"\r\n            [muted]=\"musicVideo.mute\"\r\n            color=\"primary\"\r\n            spinner=\"spin\"\r\n          >\r\n            <source\r\n              matVideoSource\r\n              src=\"api/account/videos/{{ musicVideo.id }}\"\r\n              type=\"{{ musicVideo.format }}\"\r\n            />\r\n          </mat-video>\r\n        </div>\r\n        <div>\r\n          <div class=\"videotitle\">{{ musicVideo.description }}</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"currentLiveTVPanel\" *ngIf=\"isMobile\" (touchmove)=\"playLifeStyle()\" (mouseover)=\"playLifeStyle()\" (mouseout)=\"muteLifeStyle()\">\r\n    <div\r\n      id=\"liveTvPanelPanel\"\r\n      class=\"liveTvPanel\"\r\n      (dbclick)=\"detail(lifestyleVideo.id)\"\r\n    >\r\n      <div style=\"height: 39vw\">\r\n        <div>\r\n          <mat-video\r\n            #lifestylevid\r\n            [title]=\"lifestyleVideo.titre\"\r\n            [autoplay]=\"true\"\r\n            [loop]=\"true\"\r\n            [overlay]=\"false\"\r\n            [time]=\"lifestyleVideo.time\"\r\n            [preload]=\"true\"\r\n            [fullscreen]=\"false\"\r\n            [download]=\"false\"\r\n            [muted]=\"lifestyleVideo.mute\"\r\n            color=\"primary\"\r\n            spinner=\"spin\"\r\n          >\r\n            <source\r\n              matVideoSource\r\n              src=\"api/account/videos/{{ lifestyleVideo.id }}\"\r\n              type=\"{{ lifestyleVideo.format }}\"\r\n            />\r\n          </mat-video>\r\n        </div>\r\n        <div>\r\n          <div class=\"videotitle\">{{ lifestyleVideo.description }}</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"currentLiveTVPanel\" *ngIf=\"isMobile\" (touchmove)=\"playInterview2()\" (mouseover)=\"playInterview2()\" (mouseout)=\"muteInterview2()\">\r\n    <div\r\n      id=\"liveTvPanelPanel\"\r\n      class=\"liveTvPanel\"\r\n      (dbclick)=\"detail(interview2Video.id)\"\r\n    >\r\n      <div style=\"height: 39vw\">\r\n        <div>\r\n          <mat-video\r\n            #interview2vid\r\n            [title]=\"interview2Video.titre\"\r\n            [autoplay]=\"true\"\r\n            [loop]=\"true\"\r\n            [overlay]=\"false\"\r\n            [time]=\"interview2Video.time\"\r\n            [preload]=\"true\"\r\n            [fullscreen]=\"false\"\r\n            [download]=\"false\"\r\n            [muted]=\"interview2Video.mute\"\r\n            color=\"primary\"\r\n            spinner=\"spin\"\r\n          >\r\n            <source\r\n              matVideoSource\r\n              src=\"api/account/videos/{{ interview2Video.id }}\"\r\n              type=\"{{ interview2Video.format }}\"\r\n            />\r\n          </mat-video>\r\n        </div>\r\n        <div>\r\n          <div class=\"videotitle\">{{ interview2Video.description }}</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"isMobile\" class=\"row\">\r\n    <div class=\"videotitle\">\r\n      HOLIC LIVE TV <span class=\"blackcolor\">|</span>\r\n      {{ mainVideo.username }}\r\n    </div>\r\n    <div class=\"menu\">\r\n      <img\r\n        (click)=\"redirectHome()\"\r\n        src=\"assets/img/holic/home.png\"\r\n        style=\"width:30px;\"\r\n      />\r\n\r\n      <a (click)=\"previousUser()\">\r\n        <img\r\n          src=\"assets/img/holic/bouton-holic-up.jpg\"\r\n          style=\"width:30px;\"\r\n      /></a>\r\n      <a (click)=\"nextUser()\"\r\n        ><img\r\n          src=\"assets/img/holic/bouton-holic-dwn.jpg\"\r\n          style=\"width:30px;\"\r\n      /></a>\r\n      <a (click)=\"userExist()\">\r\n        <img src=\"assets/img/holic/search-icon.png\" style=\"width:30px;\"\r\n      /></a>\r\n      <input\r\n        type=\"text\"\r\n        id=\"videoCategorieId\"\r\n        style=\"border: none; border-bottom: 1px solid rgba(0, 0, 0, 0.1); width: 24vw;\"\r\n        [(ngModel)]=\"searchtext\"\r\n        (keypress)=\"keyPress($event)\"\r\n      />\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#liveVideo {\n  display: none !important; }\n\n#wrapper {\n  padding: 0vw 0 0 4em !important; }\n\n/*-------------------------------------------------------------------*/\n\n.hide {\n  display: none; }\n\n.holicTvPanel {\n  width: 100%;\n  margin-top: 2vw; }\n\n.holicTvPanel > div > img, holicTvPanel > div > img {\n  margin: 30px 0; }\n\n.currentLiveTVPanel {\n  width: 100%;\n  float: left; }\n\n.currentLiveTVPanel .liveTvPanel {\n  width: 75%;\n  height: 39vw;\n  margin-left: auto;\n  margin-right: auto; }\n\n.liveTvPanel {\n  height: 32vw; }\n\n.currentLiveTVPanel .videotitle {\n  color: #7E4855;\n  font-size: 2vw;\n  padding: 1vw 0; }\n\n.currentLiveTVPanel .videoContentTitle {\n  font-weight: bold; }\n\n/*\r\n.logo {\r\n\tdisplay: block;\r\n\tmargin: 0 auto;\r\n\tmargin-top: 100px;\r\n\t\r\n}\r\n*/\n\n/*---------------Small Video-----------------*/\n\n.smallLiveTvPanel {\n  width: 100%;\n  /* \toverflow: auto; */\n  clear: both;\n  padding-left: 1%;\n  /* \theight: 35.6vw; */\n  /* \tmax-height: 500px; */\n  margin-right: auto;\n  margin-left: auto;\n  width: 75%;\n  padding-top: 3vw; }\n\n.smallLiveTvPanel a {\n  text-decoration: none;\n  color: black; }\n\n.smallLiveTvPanel a:HOVER {\n  text-decoration: none;\n  color: black; }\n\n.videoPanel {\n  float: left;\n  width: 33%;\n  margin-top: 2em; }\n\n.blackcolor {\n  color: black !important;\n  font-weight: bold; }\n\n.videoPanel .title {\n  border-bottom: solid 1px #7E4855;\n  text-align: center;\n  color: #8E8E8E;\n  font-weight: bold;\n  font-size: 1vw; }\n\n.videoPanel {\n  padding: 1em 1em 0 1em;\n  height: 12vw; }\n\n.videoPanel .description {\n  padding-left: 1em;\n  padding-right: 1em;\n  padding-bottom: 1em;\n  font-size: 1vw;\n  line-height: 150%; }\n\n/*----------------------------- PAGE VIDEO DETAIL-------------------------*/\n\n.currentLiveTVPanelDetail {\n  width: 70%;\n  float: left; }\n\n.smallLiveTvPanelDetail {\n  width: 29%;\n  cursor: pointer;\n  float: left;\n  padding-left: 1%;\n  height: 36.5vw;\n  overflow-y: auto; }\n\n.smallLiveTvPanelDetail a {\n  text-decoration: none;\n  color: black; }\n\n.smallLiveTvPanelDetail a:HOVER {\n  text-decoration: none;\n  color: black; }\n\n.videoPanelDetail {\n  float: left;\n  width: 100%;\n  position: relative; }\n\n.videoPanelDetail .caption {\n  position: absolute;\n  top: 20%;\n  left: 25%;\n  width: 15%;\n  margin-left: -1%;\n  opacity: 0.7;\n  z-index: 1; }\n\n.videoPanelDetailmg {\n  float: left;\n  width: 70%; }\n\n.videoPanelDetailDescription {\n  float: left;\n  width: 35%;\n  padding-left: 2%;\n  font-size: 1vw;\n  line-height: 150%; }\n\n.multiple-items {\n  float: left;\n  width: 60%; }\n\n.holicdetail {\n  width: 100%;\n  padding: 0%;\n  margin: 0%;\n  padding: 0%;\n  display-block: 0;\n  margin-top: 0px;\n  margin-bottom: 0px; }\n\n.item {\n  height: 8.5vw !important; }\n\n#searchVideo img {\n  width: 1vw;\n  height: 1vw; }\n\nvideo:-webkit-full-screen {\n  max-height: 100%; }\n\nvideo:-moz-full-screen {\n  max-height: 100%; }\n\n.currentLiveTVPanel video::-webkit-media-controls-timeline {\n  visibility: hidden !important;\n  max-width: 40%; }\n\n.currentLiveTVPanel video::-webkit-media-controls-play-button {\n  display: none !important; }\n\n.currentLiveTVPanel video::-webkit-media-controls-current-time-display {\n  display: none !important; }\n\n.hiddden {\n  display: none !important; }\n\n.shown {\n  display: block !important; }\n\n.parentDiv {\n  position: absolute;\n  top: 11px;\n  right: 10px;\n  left: 10px;\n  height: calc(50% - 18px);\n  display: block; }\n\nbody > .formulaire {\n  margin-top: 150px; }\n\nbody > .formulaire img {\n  display: block;\n  width: 59px;\n  height: auto;\n  margin: 15px auto; }\n\nbody > .formulaire form ul {\n  text-align: center; }\n\nbody > .formulaire form ul > li {\n  margin: 10px 0;\n  list-style-type: none; }\n\nbody > .formulaire form ul > li > * {\n  display: inline-block;\n  vertical-align: middle; }\n\nbody > .formulaire form ul > li > label {\n  min-width: 100px;\n  text-align: left;\n  color: black; }\n\n.videoPanel2 {\n  width: 33%; }\n\n#progressbox {\n  position: relative;\n  width: 400px;\n  border: 1px solid #ddd;\n  padding: 1px;\n  border-radius: 3px; }\n\n#progressbar {\n  background-color: #cccccc;\n  width: 0%;\n  height: 20px;\n  border-radius: 4px; }\n\n#percent {\n  position: absolute;\n  display: inline-block;\n  top: 3px;\n  left: 48%; }\n\n.videotitle {\n  float: left; }\n\n.menu {\n  float: right;\n  padding: 1vw 0; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL0M6XFxVc2Vyc1xcaGVydmVcXGhvbGljXFxzdGFydG5nL3NyY1xcYXBwXFxwYWdlc1xcZGFzaGJvYXJkXFxkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyx3QkFBd0IsRUFBQTs7QUFHekI7RUFDSywrQkFBOEIsRUFBQTs7QUFHbkMsc0VBQUE7O0FBRUE7RUFDQSxhQUFZLEVBQUE7O0FBRVo7RUFDQyxXQUFXO0VBQ1gsZUFBZSxFQUFBOztBQUVoQjtFQUFxRCxjQUFjLEVBQUE7O0FBRW5FO0VBQ0MsV0FBVztFQUNYLFdBQVcsRUFBQTs7QUFJWjtFQUNDLFVBQVU7RUFDVixZQUFZO0VBQ1osaUJBQWdCO0VBQ2hCLGtCQUFpQixFQUFBOztBQUVsQjtFQUNDLFlBQVksRUFBQTs7QUFHYjtFQUNDLGNBQWM7RUFDZCxjQUFjO0VBQ2QsY0FBYyxFQUFBOztBQUdmO0VBQ0MsaUJBQWlCLEVBQUE7O0FBR2xCOzs7Ozs7O0NDQUM7O0FEUUQsOENBQUE7O0FBQ0E7RUFDQyxXQUFXO0VBQ1oscUJBQUE7RUFDQyxXQUFZO0VBQ1osZ0JBQWdCO0VBQ2pCLHFCQUFBO0VBQ0Msd0JBQUE7RUFDQSxrQkFBaUI7RUFDakIsaUJBQWdCO0VBQ2hCLFVBQVU7RUFDVixnQkFBZ0IsRUFBQTs7QUFHakI7RUFDQyxxQkFBcUI7RUFDckIsWUFBWSxFQUFBOztBQUdiO0VBQ0MscUJBQXFCO0VBQ3JCLFlBQVksRUFBQTs7QUFHYjtFQUNDLFdBQVc7RUFDWCxVQUFVO0VBQ1YsZUFBZSxFQUFBOztBQUVoQjtFQUNDLHVCQUF1QjtFQUN2QixpQkFBaUIsRUFBQTs7QUFFbEI7RUFDQyxnQ0FBZ0M7RUFDaEMsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsY0FBYyxFQUFBOztBQUdmO0VBQ0Msc0JBQXNCO0VBQ3RCLFlBQVksRUFBQTs7QUFHYjtFQUNDLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxpQkFBaUIsRUFBQTs7QUFHbEIsMkVBQUE7O0FBQ0E7RUFDQyxVQUFVO0VBQ1YsV0FBVyxFQUFBOztBQUdaO0VBQ0MsVUFBVTtFQUNWLGVBQWU7RUFDZixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxnQkFBZ0IsRUFBQTs7QUFJakI7RUFDQyxxQkFBcUI7RUFDckIsWUFBWSxFQUFBOztBQUdiO0VBQ0MscUJBQXFCO0VBQ3JCLFlBQVksRUFBQTs7QUFHYjtFQUNDLFdBQVc7RUFDWCxXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7O0FBR25CO0VBQ0Msa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osVUFBVSxFQUFBOztBQUdYO0VBQ0MsV0FBVztFQUNYLFVBQVUsRUFBQTs7QUFHWDtFQUNDLFdBQVc7RUFDWCxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxpQkFBaUIsRUFBQTs7QUFHbEI7RUFDQyxXQUFXO0VBQ1gsVUFBVSxFQUFBOztBQUdYO0VBQ0MsV0FBVztFQUNYLFdBQVc7RUFDWCxVQUFVO0VBQ1YsV0FBVztFQUNYLGdCQUFlO0VBQ2YsZUFBZTtFQUNaLGtCQUFrQixFQUFBOztBQUV0QjtFQUNDLHdCQUF3QixFQUFBOztBQUd6QjtFQUNDLFVBQVM7RUFDVCxXQUFVLEVBQUE7O0FBR1g7RUFBZ0MsZ0JBQWdCLEVBQUE7O0FBQ2hEO0VBQWdDLGdCQUFnQixFQUFBOztBQU9oRDtFQUNJLDZCQUE2QjtFQUM3QixjQUFhLEVBQUE7O0FBR2pCO0VBQ0Usd0JBQXVCLEVBQUE7O0FBRXpCO0VBQ0Usd0JBQXVCLEVBQUE7O0FBRXpCO0VBQ0Msd0JBQXVCLEVBQUE7O0FBR3hCO0VBQ0MseUJBQXdCLEVBQUE7O0FBR3pCO0VBRUksa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsVUFBVTtFQUVWLHdCQUF3QjtFQUN4QixjQUFjLEVBQUE7O0FBRWxCO0VBQW9CLGlCQUFpQixFQUFBOztBQUNyQztFQUF3QixjQUFjO0VBQ3JDLFdBQVU7RUFDVixZQUFZO0VBQ1osaUJBQWlCLEVBQUE7O0FBRWxCO0VBQTRCLGtCQUFrQixFQUFBOztBQUM5QztFQUFpQyxjQUFjO0VBQzlDLHFCQUFxQixFQUFBOztBQUV0QjtFQUFxQyxxQkFBcUI7RUFDekQsc0JBQXNCLEVBQUE7O0FBRXZCO0VBQXlDLGdCQUFnQjtFQUN4RCxnQkFBZ0I7RUFDaEIsWUFBWSxFQUFBOztBQUdiO0VBQ0MsVUFBVSxFQUFBOztBQUdYO0VBQ0Msa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGtCQUFrQixFQUFBOztBQUduQjtFQUNDLHlCQUF5QjtFQUN6QixTQUFTO0VBQ1QsWUFBWTtFQUNaLGtCQUFrQixFQUFBOztBQUduQjtFQUNDLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsUUFBUTtFQUNSLFNBQVMsRUFBQTs7QUFHVjtFQUdBLFdBQVksRUFBQTs7QUFHWjtFQUdBLFlBQWE7RUFDYixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xpdmVWaWRlbyB7XHJcblx0ZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4jd3JhcHBlcntcclxuXHQgICAgcGFkZGluZzogMHZ3IDAgMCA0ZW0haW1wb3J0YW50O1xyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cdFxyXG4uaGlkZXtcclxuZGlzcGxheTpub25lO1xyXG59XHJcbi5ob2xpY1R2UGFuZWwge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdG1hcmdpbi10b3A6IDJ2dztcclxufVxyXG4uaG9saWNUdlBhbmVsID4gZGl2ID4gaW1nLCBob2xpY1R2UGFuZWwgPiBkaXYgPiBpbWd7IG1hcmdpbjogMzBweCAwOyB9XHJcblxyXG4uY3VycmVudExpdmVUVlBhbmVsIHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRmbG9hdDogbGVmdDtcclxufVxyXG5cclxuXHJcbi5jdXJyZW50TGl2ZVRWUGFuZWwgLmxpdmVUdlBhbmVsIHtcclxuXHR3aWR0aDogNzUlO1xyXG5cdGhlaWdodDogMzl2dztcclxuXHRtYXJnaW4tbGVmdDphdXRvO1xyXG5cdG1hcmdpbi1yaWdodDphdXRvO1xyXG59XHJcbi5saXZlVHZQYW5lbCB7XHJcblx0aGVpZ2h0OiAzMnZ3O1xyXG59XHJcblxyXG4uY3VycmVudExpdmVUVlBhbmVsIC52aWRlb3RpdGxlIHtcclxuXHRjb2xvcjogIzdFNDg1NTtcclxuXHRmb250LXNpemU6IDJ2dztcclxuXHRwYWRkaW5nOiAxdncgMDtcclxufVxyXG5cclxuLmN1cnJlbnRMaXZlVFZQYW5lbCAgLnZpZGVvQ29udGVudFRpdGxlIHtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLypcclxuLmxvZ28ge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdG1hcmdpbjogMCBhdXRvO1xyXG5cdG1hcmdpbi10b3A6IDEwMHB4O1xyXG5cdFxyXG59XHJcbiovXHJcbi8qLS0tLS0tLS0tLS0tLS0tU21hbGwgVmlkZW8tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi5zbWFsbExpdmVUdlBhbmVsIHtcclxuXHR3aWR0aDogMTAwJTtcclxuLyogXHRvdmVyZmxvdzogYXV0bzsgKi9cclxuXHRjbGVhciA6IGJvdGg7XHJcblx0cGFkZGluZy1sZWZ0OiAxJTtcclxuLyogXHRoZWlnaHQ6IDM1LjZ2dzsgKi9cclxuXHQvKiBcdG1heC1oZWlnaHQ6IDUwMHB4OyAqL1xyXG5cdG1hcmdpbi1yaWdodDphdXRvO1xyXG5cdG1hcmdpbi1sZWZ0OmF1dG87XHJcblx0d2lkdGg6IDc1JTtcclxuXHRwYWRkaW5nLXRvcDogM3Z3O1xyXG59XHJcblxyXG4uc21hbGxMaXZlVHZQYW5lbCBhIHtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0Y29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uc21hbGxMaXZlVHZQYW5lbCBhOkhPVkVSIHtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0Y29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4udmlkZW9QYW5lbCB7XHJcblx0ZmxvYXQ6IGxlZnQ7XHJcblx0d2lkdGg6IDMzJTtcclxuXHRtYXJnaW4tdG9wOiAyZW07XHJcbn1cclxuLmJsYWNrY29sb3Ige1xyXG5cdGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi52aWRlb1BhbmVsIC50aXRsZSB7XHJcblx0Ym9yZGVyLWJvdHRvbTogc29saWQgMXB4ICM3RTQ4NTU7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGNvbG9yOiAjOEU4RThFO1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdGZvbnQtc2l6ZTogMXZ3O1xyXG59XHJcblxyXG4udmlkZW9QYW5lbCB7XHJcblx0cGFkZGluZzogMWVtIDFlbSAwIDFlbTtcclxuXHRoZWlnaHQ6IDEydnc7XHJcbn1cclxuXHJcbi52aWRlb1BhbmVsIC5kZXNjcmlwdGlvbiB7XHJcblx0cGFkZGluZy1sZWZ0OiAxZW07XHJcblx0cGFkZGluZy1yaWdodDogMWVtO1xyXG5cdHBhZGRpbmctYm90dG9tOiAxZW07XHJcblx0Zm9udC1zaXplOiAxdnc7XHJcblx0bGluZS1oZWlnaHQ6IDE1MCU7XHJcbn1cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gUEFHRSBWSURFTyBERVRBSUwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLmN1cnJlbnRMaXZlVFZQYW5lbERldGFpbCB7XHJcblx0d2lkdGg6IDcwJTtcclxuXHRmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLnNtYWxsTGl2ZVR2UGFuZWxEZXRhaWwge1xyXG5cdHdpZHRoOiAyOSU7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdGZsb2F0OiBsZWZ0O1xyXG5cdHBhZGRpbmctbGVmdDogMSU7XHJcblx0aGVpZ2h0OiAzNi41dnc7XHJcblx0b3ZlcmZsb3cteTogYXV0bztcclxuXHRcclxufVxyXG5cclxuLnNtYWxsTGl2ZVR2UGFuZWxEZXRhaWwgYSB7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLnNtYWxsTGl2ZVR2UGFuZWxEZXRhaWwgYTpIT1ZFUiB7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLnZpZGVvUGFuZWxEZXRhaWwge1xyXG5cdGZsb2F0OiBsZWZ0O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnZpZGVvUGFuZWxEZXRhaWwgLmNhcHRpb24ge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDIwJTtcclxuXHRsZWZ0OiAyNSU7XHJcblx0d2lkdGg6IDE1JTtcclxuXHRtYXJnaW4tbGVmdDogLTElO1xyXG5cdG9wYWNpdHk6IDAuNztcclxuXHR6LWluZGV4OiAxO1xyXG59XHJcblxyXG4udmlkZW9QYW5lbERldGFpbG1nIHtcclxuXHRmbG9hdDogbGVmdDtcclxuXHR3aWR0aDogNzAlO1xyXG59XHJcblxyXG4udmlkZW9QYW5lbERldGFpbERlc2NyaXB0aW9uIHtcclxuXHRmbG9hdDogbGVmdDtcclxuXHR3aWR0aDogMzUlO1xyXG5cdHBhZGRpbmctbGVmdDogMiU7XHJcblx0Zm9udC1zaXplOiAxdnc7XHJcblx0bGluZS1oZWlnaHQ6IDE1MCU7XHJcbn1cclxuXHJcbi5tdWx0aXBsZS1pdGVtcyB7XHJcblx0ZmxvYXQ6IGxlZnQ7XHJcblx0d2lkdGg6IDYwJTtcclxufVxyXG5cclxuLmhvbGljZGV0YWlsIHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRwYWRkaW5nOiAwJTtcclxuXHRtYXJnaW46IDAlO1xyXG5cdHBhZGRpbmc6IDAlO1xyXG5cdGRpc3BsYXktYmxvY2s6MDtcclxuXHRtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7IFxyXG59XHJcbi5pdGVtIHtcclxuXHRoZWlnaHQ6IDguNXZ3ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiNzZWFyY2hWaWRlbyBpbWd7XHJcblx0d2lkdGg6MXZ3O1xyXG5cdGhlaWdodDoxdnc7XHJcbn1cclxuXHJcbnZpZGVvOi13ZWJraXQtZnVsbC1zY3JlZW4gICAgIHsgbWF4LWhlaWdodDogMTAwJTsgfVxyXG52aWRlbzotbW96LWZ1bGwtc2NyZWVuICAgICAgICB7IG1heC1oZWlnaHQ6IDEwMCU7IH1cclxuXHJcbi5jdXJyZW50TGl2ZVRWUGFuZWwgdmlkZW86Oi13ZWJraXQtbWVkaWEtY29udHJvbHMge1xyXG4gLy9kaXNwbGF5Om5vbmUgIWltcG9ydGFudDtcclxuIH1cclxuXHJcblxyXG4uY3VycmVudExpdmVUVlBhbmVsIHZpZGVvOjotd2Via2l0LW1lZGlhLWNvbnRyb2xzLXRpbWVsaW5lIHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG4gICAgbWF4LXdpZHRoOjQwJTtcclxuICAgXHJcbn1cclxuLmN1cnJlbnRMaXZlVFZQYW5lbCB2aWRlbzo6LXdlYmtpdC1tZWRpYS1jb250cm9scy1wbGF5LWJ1dHRvbntcclxuXHQgZGlzcGxheTpub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuLmN1cnJlbnRMaXZlVFZQYW5lbCB2aWRlbzo6LXdlYmtpdC1tZWRpYS1jb250cm9scy1jdXJyZW50LXRpbWUtZGlzcGxheXtcclxuXHQgZGlzcGxheTpub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuLmhpZGRkZW57XHJcblx0ZGlzcGxheTpub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zaG93bntcclxuXHRkaXNwbGF5OmJsb2NrICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wYXJlbnREaXYgLy8gUmVzdWx0cyBpbiBhcm91bmQgNDAweDQwMCBwaXhlbHMgZm9yIG1lXHJcbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTFweDtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgbGVmdDogMTBweDtcclxuICAgIGhlaWdodDogLXdlYmtpdC1jYWxjKDUwJSAtIDE4cHgpO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDUwJSAtIDE4cHgpOyBcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbmJvZHkgPiAuZm9ybXVsYWlyZXsgbWFyZ2luLXRvcDogMTUwcHg7IH1cclxuYm9keSA+IC5mb3JtdWxhaXJlIGltZ3sgZGlzcGxheTogYmxvY2s7XHJcblx0d2lkdGg6NTlweDtcclxuXHRoZWlnaHQ6IGF1dG87XHJcblx0bWFyZ2luOiAxNXB4IGF1dG87XHJcbn1cclxuYm9keSA+IC5mb3JtdWxhaXJlIGZvcm0gdWx7IHRleHQtYWxpZ246IGNlbnRlcjsgfVxyXG5ib2R5ID4gLmZvcm11bGFpcmUgZm9ybSB1bCA+IGxpeyBtYXJnaW46IDEwcHggMDtcclxuXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuYm9keSA+IC5mb3JtdWxhaXJlIGZvcm0gdWwgPiBsaSA+ICp7IGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcbmJvZHkgPiAuZm9ybXVsYWlyZSBmb3JtIHVsID4gbGkgPiBsYWJlbHsgbWluLXdpZHRoOiAxMDBweDtcclxuXHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cdGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLnZpZGVvUGFuZWwyIHtcclxuXHR3aWR0aDogMzMlO1xyXG59XHJcblxyXG4jcHJvZ3Jlc3Nib3gge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR3aWR0aDogNDAwcHg7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuXHRwYWRkaW5nOiAxcHg7XHJcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcblxyXG4jcHJvZ3Jlc3NiYXIge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XHJcblx0d2lkdGg6IDAlO1xyXG5cdGhlaWdodDogMjBweDtcclxuXHRib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbiNwZXJjZW50IHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdHRvcDogM3B4O1xyXG5cdGxlZnQ6IDQ4JTtcclxufVxyXG5cclxuLnZpZGVvdGl0bGVcclxue1xyXG5cdFxyXG5mbG9hdCA6IGxlZnQ7XHJcbn1cclxuXHJcbi5tZW51XHJcbntcclxuXHRcclxuZmxvYXQgOiByaWdodDtcclxucGFkZGluZzogMXZ3IDA7XHJcbn1cclxuIiwiI2xpdmVWaWRlbyB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxuXG4jd3JhcHBlciB7XG4gIHBhZGRpbmc6IDB2dyAwIDAgNGVtICFpbXBvcnRhbnQ7IH1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi5oaWRlIHtcbiAgZGlzcGxheTogbm9uZTsgfVxuXG4uaG9saWNUdlBhbmVsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDJ2dzsgfVxuXG4uaG9saWNUdlBhbmVsID4gZGl2ID4gaW1nLCBob2xpY1R2UGFuZWwgPiBkaXYgPiBpbWcge1xuICBtYXJnaW46IDMwcHggMDsgfVxuXG4uY3VycmVudExpdmVUVlBhbmVsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0OyB9XG5cbi5jdXJyZW50TGl2ZVRWUGFuZWwgLmxpdmVUdlBhbmVsIHtcbiAgd2lkdGg6IDc1JTtcbiAgaGVpZ2h0OiAzOXZ3O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvOyB9XG5cbi5saXZlVHZQYW5lbCB7XG4gIGhlaWdodDogMzJ2dzsgfVxuXG4uY3VycmVudExpdmVUVlBhbmVsIC52aWRlb3RpdGxlIHtcbiAgY29sb3I6ICM3RTQ4NTU7XG4gIGZvbnQtc2l6ZTogMnZ3O1xuICBwYWRkaW5nOiAxdncgMDsgfVxuXG4uY3VycmVudExpdmVUVlBhbmVsIC52aWRlb0NvbnRlbnRUaXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XG5cbi8qXHJcbi5sb2dvIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRtYXJnaW46IDAgYXV0bztcclxuXHRtYXJnaW4tdG9wOiAxMDBweDtcclxuXHRcclxufVxyXG4qL1xuLyotLS0tLS0tLS0tLS0tLS1TbWFsbCBWaWRlby0tLS0tLS0tLS0tLS0tLS0tKi9cbi5zbWFsbExpdmVUdlBhbmVsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIC8qIFx0b3ZlcmZsb3c6IGF1dG87ICovXG4gIGNsZWFyOiBib3RoO1xuICBwYWRkaW5nLWxlZnQ6IDElO1xuICAvKiBcdGhlaWdodDogMzUuNnZ3OyAqL1xuICAvKiBcdG1heC1oZWlnaHQ6IDUwMHB4OyAqL1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICB3aWR0aDogNzUlO1xuICBwYWRkaW5nLXRvcDogM3Z3OyB9XG5cbi5zbWFsbExpdmVUdlBhbmVsIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBibGFjazsgfVxuXG4uc21hbGxMaXZlVHZQYW5lbCBhOkhPVkVSIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogYmxhY2s7IH1cblxuLnZpZGVvUGFuZWwge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDMzJTtcbiAgbWFyZ2luLXRvcDogMmVtOyB9XG5cbi5ibGFja2NvbG9yIHtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XG5cbi52aWRlb1BhbmVsIC50aXRsZSB7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjN0U0ODU1O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjOEU4RThFO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxdnc7IH1cblxuLnZpZGVvUGFuZWwge1xuICBwYWRkaW5nOiAxZW0gMWVtIDAgMWVtO1xuICBoZWlnaHQ6IDEydnc7IH1cblxuLnZpZGVvUGFuZWwgLmRlc2NyaXB0aW9uIHtcbiAgcGFkZGluZy1sZWZ0OiAxZW07XG4gIHBhZGRpbmctcmlnaHQ6IDFlbTtcbiAgcGFkZGluZy1ib3R0b206IDFlbTtcbiAgZm9udC1zaXplOiAxdnc7XG4gIGxpbmUtaGVpZ2h0OiAxNTAlOyB9XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gUEFHRSBWSURFTyBERVRBSUwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi5jdXJyZW50TGl2ZVRWUGFuZWxEZXRhaWwge1xuICB3aWR0aDogNzAlO1xuICBmbG9hdDogbGVmdDsgfVxuXG4uc21hbGxMaXZlVHZQYW5lbERldGFpbCB7XG4gIHdpZHRoOiAyOSU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmctbGVmdDogMSU7XG4gIGhlaWdodDogMzYuNXZ3O1xuICBvdmVyZmxvdy15OiBhdXRvOyB9XG5cbi5zbWFsbExpdmVUdlBhbmVsRGV0YWlsIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBibGFjazsgfVxuXG4uc21hbGxMaXZlVHZQYW5lbERldGFpbCBhOkhPVkVSIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogYmxhY2s7IH1cblxuLnZpZGVvUGFuZWxEZXRhaWwge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuXG4udmlkZW9QYW5lbERldGFpbCAuY2FwdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMCU7XG4gIGxlZnQ6IDI1JTtcbiAgd2lkdGg6IDE1JTtcbiAgbWFyZ2luLWxlZnQ6IC0xJTtcbiAgb3BhY2l0eTogMC43O1xuICB6LWluZGV4OiAxOyB9XG5cbi52aWRlb1BhbmVsRGV0YWlsbWcge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDcwJTsgfVxuXG4udmlkZW9QYW5lbERldGFpbERlc2NyaXB0aW9uIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAzNSU7XG4gIHBhZGRpbmctbGVmdDogMiU7XG4gIGZvbnQtc2l6ZTogMXZ3O1xuICBsaW5lLWhlaWdodDogMTUwJTsgfVxuXG4ubXVsdGlwbGUtaXRlbXMge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDYwJTsgfVxuXG4uaG9saWNkZXRhaWwge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMCU7XG4gIG1hcmdpbjogMCU7XG4gIHBhZGRpbmc6IDAlO1xuICBkaXNwbGF5LWJsb2NrOiAwO1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDsgfVxuXG4uaXRlbSB7XG4gIGhlaWdodDogOC41dncgIWltcG9ydGFudDsgfVxuXG4jc2VhcmNoVmlkZW8gaW1nIHtcbiAgd2lkdGg6IDF2dztcbiAgaGVpZ2h0OiAxdnc7IH1cblxudmlkZW86LXdlYmtpdC1mdWxsLXNjcmVlbiB7XG4gIG1heC1oZWlnaHQ6IDEwMCU7IH1cblxudmlkZW86LW1vei1mdWxsLXNjcmVlbiB7XG4gIG1heC1oZWlnaHQ6IDEwMCU7IH1cblxuLmN1cnJlbnRMaXZlVFZQYW5lbCB2aWRlbzo6LXdlYmtpdC1tZWRpYS1jb250cm9scy10aW1lbGluZSB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbiAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDQwJTsgfVxuXG4uY3VycmVudExpdmVUVlBhbmVsIHZpZGVvOjotd2Via2l0LW1lZGlhLWNvbnRyb2xzLXBsYXktYnV0dG9uIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XG5cbi5jdXJyZW50TGl2ZVRWUGFuZWwgdmlkZW86Oi13ZWJraXQtbWVkaWEtY29udHJvbHMtY3VycmVudC10aW1lLWRpc3BsYXkge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cblxuLmhpZGRkZW4ge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cblxuLnNob3duIHtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDsgfVxuXG4ucGFyZW50RGl2IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDExcHg7XG4gIHJpZ2h0OiAxMHB4O1xuICBsZWZ0OiAxMHB4O1xuICBoZWlnaHQ6IC13ZWJraXQtY2FsYyg1MCUgLSAxOHB4KTtcbiAgaGVpZ2h0OiBjYWxjKDUwJSAtIDE4cHgpO1xuICBkaXNwbGF5OiBibG9jazsgfVxuXG5ib2R5ID4gLmZvcm11bGFpcmUge1xuICBtYXJnaW4tdG9wOiAxNTBweDsgfVxuXG5ib2R5ID4gLmZvcm11bGFpcmUgaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA1OXB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMTVweCBhdXRvOyB9XG5cbmJvZHkgPiAuZm9ybXVsYWlyZSBmb3JtIHVsIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG5cbmJvZHkgPiAuZm9ybXVsYWlyZSBmb3JtIHVsID4gbGkge1xuICBtYXJnaW46IDEwcHggMDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lOyB9XG5cbmJvZHkgPiAuZm9ybXVsYWlyZSBmb3JtIHVsID4gbGkgPiAqIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyB9XG5cbmJvZHkgPiAuZm9ybXVsYWlyZSBmb3JtIHVsID4gbGkgPiBsYWJlbCB7XG4gIG1pbi13aWR0aDogMTAwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiBibGFjazsgfVxuXG4udmlkZW9QYW5lbDIge1xuICB3aWR0aDogMzMlOyB9XG5cbiNwcm9ncmVzc2JveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDQwMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBwYWRkaW5nOiAxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDsgfVxuXG4jcHJvZ3Jlc3NiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xuICB3aWR0aDogMCU7XG4gIGhlaWdodDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4OyB9XG5cbiNwZXJjZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRvcDogM3B4O1xuICBsZWZ0OiA0OCU7IH1cblxuLnZpZGVvdGl0bGUge1xuICBmbG9hdDogbGVmdDsgfVxuXG4ubWVudSB7XG4gIGZsb2F0OiByaWdodDtcbiAgcGFkZGluZzogMXZ3IDA7IH1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_service_userprofile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/service/userprofile.service */ "./src/app/pages/login/service/userprofile.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-device-detector */ "./node_modules/ngx-device-detector/fesm2015/ngx-device-detector.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





let DashboardComponent = class DashboardComponent {
    constructor(router, activatedRoute, userProfileService, snackBar, deviceService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.userProfileService = userProfileService;
        this.snackBar = snackBar;
        this.deviceService = deviceService;
        this.isMobile = this.deviceService.isMobile();
    }
    ngOnInit() {
        const data = this.activatedRoute.snapshot.data['video'];
        this.mainVideo = this.findVideoByType(data, 'MAINVIDEO');
        this.interviewVideo = this.findVideoByType(data, 'INTERVIEW');
        this.reportVideo = this.findVideoByType(data, 'REPORT');
        this.lifestyleVideo = this.findVideoByType(data, 'LIFESTYLE');
        this.musicVideo = this.findVideoByType(data, 'MUSIC_VIDEO');
        this.sportVideo = this.findVideoByType(data, 'SPORT');
        this.interview2Video = this.findVideoByType(data, 'INTERVIEW2');
    }
    ngAfterViewInit() {
        this.main = this.matVideo.getVideoTag();
        this.main.addEventListener('playing', () => {
            if (!this.interviewVideo.mute
                && !this.reportVideo.mute
                && !this.lifestyleVideo.mute
                && !this.musicVideo.mute
                && !this.sportVideo.mute
                && !this.interview2Video.mute) {
                this.interviewVideo.mute = true;
                this.reportVideo.mute = true;
                this.lifestyleVideo.mute = true;
                this.musicVideo.mute = true;
                this.sportVideo.mute = true;
                this.interview2Video.mute = true;
                this.mainVideo.mute = false;
            }
        });
        this.main.addEventListener('ondblclick', () => { });
        this.main.addEventListener('onclick', () => { });
        this.main.addEventListener('loadedmetadata', () => {
            const datebb = new Date();
            var x = datebb.valueOf() / 1000;
            this.mainVideo.time = x % this.main.duration;
            this.main.currentTime = x % this.main.duration;
        });
        this.report = this.matreportVideo.getVideoTag();
        this.report.addEventListener('ondblclick', () => { });
        this.report.addEventListener('onclick', () => { });
        this.report.addEventListener('loadedmetadata', () => {
            const datebb = new Date();
            var x = datebb.valueOf() / 1000;
            this.reportVideo.time = x % this.report.duration;
            this.report.currentTime = x % this.report.duration;
        });
        this.sport = this.matsportVideo.getVideoTag();
        this.sport.addEventListener('ondblclick', () => { });
        this.sport.addEventListener('onclick', () => { });
        this.sport.addEventListener('loadedmetadata', () => {
            const datebb = new Date();
            var x = (datebb.valueOf() + 0) / 1000;
            this.sportVideo.time = x % this.sport.duration;
            this.sport.currentTime = x % this.sport.duration;
        });
        this.music = this.matmusicVideo.getVideoTag();
        this.music.addEventListener('ondblclick', () => { });
        this.music.addEventListener('onclick', () => { });
        this.music.addEventListener('loadedmetadata', () => {
            const datebb = new Date();
            var x = datebb.valueOf() / 1000;
            this.musicVideo.time = x % this.music.duration;
            this.music.currentTime = x % this.music.duration;
        });
        this.lifestyle = this.matlifestyleVideo.getVideoTag();
        this.lifestyle.addEventListener('ondblclick', () => { });
        this.lifestyle.addEventListener('onclick', () => { });
        this.lifestyle.addEventListener('loadedmetadata', () => {
            const datebb = new Date();
            var x = datebb.valueOf() / 1000;
            this.lifestyleVideo.time = x % this.lifestyle.duration;
            this.lifestyle.currentTime = x % this.lifestyle.duration;
        });
        this.interview2 = this.matinterview2Video.getVideoTag();
        this.interview2.addEventListener('ondblclick', () => { });
        this.interview2.addEventListener('onclick', () => { });
        this.interview2.addEventListener('loadedmetadata', () => {
            const datebb = new Date();
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
            const datebb = new Date();
            var x = datebb.valueOf() / 1000;
            this.interviewVideo.time = x % this.interview.duration;
            this.interview.currentTime = x % this.interview.duration;
        });
    }
    playInterview() {
        this.mainVideo.mute = true;
        this.reportVideo.mute = true;
        this.lifestyleVideo.mute = true;
        this.musicVideo.mute = true;
        this.sportVideo.mute = true;
        this.interview2Video.mute = true;
        this.interviewVideo.mute = false;
        this.interviewVideo.fullscreen = true;
    }
    muteInterview() {
        this.interviewVideo.mute = true;
        this.reportVideo.mute = true;
        this.musicVideo.mute = true;
        this.sportVideo.mute = true;
        this.interview2Video.mute = true;
        this.lifestyleVideo.mute = true;
        this.mainVideo.mute = false;
        this.interviewVideo.fullscreen = false;
    }
    playInterview2() {
        this.interviewVideo.mute = true;
        this.reportVideo.mute = true;
        this.lifestyleVideo.mute = true;
        this.musicVideo.mute = true;
        this.sportVideo.mute = true;
        this.mainVideo.mute = true;
        this.interview2Video.mute = false;
        this.interview2Video.fullscreen = true;
    }
    muteInterview2() {
        this.interviewVideo.mute = true;
        this.reportVideo.mute = true;
        this.musicVideo.mute = true;
        this.sportVideo.mute = true;
        this.interview2Video.mute = true;
        this.lifestyleVideo.mute = true;
        this.mainVideo.mute = false;
        this.interview2Video.fullscreen = false;
    }
    playLifeStyle() {
        this.interviewVideo.mute = true;
        this.reportVideo.mute = true;
        this.mainVideo.mute = true;
        this.musicVideo.mute = true;
        this.sportVideo.mute = true;
        this.interview2Video.mute = true;
        this.lifestyleVideo.mute = false;
        this.lifestyleVideo.fullscreen = true;
    }
    muteLifeStyle() {
        this.interviewVideo.mute = true;
        this.reportVideo.mute = true;
        this.musicVideo.mute = true;
        this.sportVideo.mute = true;
        this.interview2Video.mute = true;
        this.lifestyleVideo.mute = true;
        this.mainVideo.mute = false;
        this.lifestyleVideo.fullscreen = false;
    }
    playMusic() {
        this.interviewVideo.mute = true;
        this.reportVideo.mute = true;
        this.lifestyleVideo.mute = true;
        this.mainVideo.mute = true;
        this.sportVideo.mute = true;
        this.interview2Video.mute = true;
        this.musicVideo.mute = false;
        this.musicVideo.fullscreen = true;
    }
    muteMusic() {
        this.interviewVideo.mute = true;
        this.reportVideo.mute = true;
        this.musicVideo.mute = true;
        this.sportVideo.mute = true;
        this.interview2Video.mute = true;
        this.lifestyleVideo.mute = true;
        this.mainVideo.mute = false;
        this.musicVideo.fullscreen = false;
    }
    playSport() {
        this.interviewVideo.mute = true;
        this.reportVideo.mute = true;
        this.lifestyleVideo.mute = true;
        this.musicVideo.mute = true;
        this.mainVideo.mute = true;
        this.interview2Video.mute = true;
        this.sportVideo.mute = false;
        this.sportVideo.fullscreen = true;
    }
    muteSport() {
        this.interviewVideo.mute = true;
        this.reportVideo.mute = true;
        this.musicVideo.mute = true;
        this.sportVideo.mute = true;
        this.interview2Video.mute = true;
        this.lifestyleVideo.mute = true;
        this.mainVideo.mute = false;
        this.sportVideo.fullscreen = false;
    }
    playReport() {
        this.interviewVideo.mute = true;
        this.mainVideo.mute = true;
        this.lifestyleVideo.mute = true;
        this.musicVideo.mute = true;
        this.sportVideo.mute = true;
        this.interview2Video.mute = true;
        this.reportVideo.mute = false;
        this.reportVideo.fullscreen = true;
    }
    muteReport() {
        this.interviewVideo.mute = true;
        this.reportVideo.mute = true;
        this.musicVideo.mute = true;
        this.sportVideo.mute = true;
        this.interview2Video.mute = true;
        this.lifestyleVideo.mute = true;
        this.mainVideo.mute = false;
        this.mainVideo.fullscreen = false;
    }
    findVideoByType(data, type) {
        return data.filter(p => p.type === type)[0];
    }
    redirectHome() {
        this.router.navigate(['']);
    }
    detail(id) {
        this.router.navigate(['/video/' + id + '/' + this.mainVideo.id]);
    }
    userExist() {
        if (this.searchtext !== undefined && this.searchtext !== '') {
            this.userProfileService.userexist(this.searchtext).subscribe(p => {
                if (p === false) {
                    this.snackBar.open('User does not exist', 'close', {
                        verticalPosition: 'top',
                        horizontalPosition: 'left',
                        duration: 4000
                    });
                    return;
                }
                if (p === true) {
                    this.router.navigate(['/user/' + this.searchtext]);
                }
            });
        }
    }
    previousUser() {
        this.userProfileService.previousUser('DASHBOARD_HOLIC').subscribe(p => {
            this.router.navigate(['/user/' + p.login]);
        }, error => {
            this.snackBar.open('User does not exist', 'close', {
                verticalPosition: 'top',
                horizontalPosition: 'left',
                duration: 4000
            });
        });
    }
    nextUser() {
        this.userProfileService.nextUser('DASHBOARD_HOLIC').subscribe(p => {
            this.router.navigate(['/user/' + p.login]);
        }, error => {
            this.snackBar.open('User does not exist', 'close', {
                verticalPosition: 'top',
                duration: 4000
            });
        });
    }
    keyPress(event) {
        if (event.which === 13) {
            this.userExist();
        }
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
    { type: _login_service_userprofile_service__WEBPACK_IMPORTED_MODULE_2__["UserProfileService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
    { type: ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__["DeviceDetectorService"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('mainvid', { static: false }),
    __metadata("design:type", Object)
], DashboardComponent.prototype, "matVideo", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('reportvid', { static: false }),
    __metadata("design:type", Object)
], DashboardComponent.prototype, "matreportVideo", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sportvid', { static: false }),
    __metadata("design:type", Object)
], DashboardComponent.prototype, "matsportVideo", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('musicvid', { static: false }),
    __metadata("design:type", Object)
], DashboardComponent.prototype, "matmusicVideo", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('lifestylevid', { static: false }),
    __metadata("design:type", Object)
], DashboardComponent.prototype, "matlifestyleVideo", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('interview2vid', { static: false }),
    __metadata("design:type", Object)
], DashboardComponent.prototype, "matinterview2Video", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('interviewvid', { static: false }),
    __metadata("design:type", Object)
], DashboardComponent.prototype, "matinterviewVideo", void 0);
DashboardComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-dashboard',
        template: __importDefault(__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        styles: [__importDefault(__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/pages/dashboard/dashboard.component.scss")).default]
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
        _login_service_userprofile_service__WEBPACK_IMPORTED_MODULE_2__["UserProfileService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
        ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__["DeviceDetectorService"]])
], DashboardComponent);



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/*! exports provided: routes, DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/esm.js");
/* harmony import */ var _theme_directives_directives_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../theme/directives/directives.module */ "./src/app/theme/directives/directives.module.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _video_video_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../video/video.module */ "./src/app/pages/video/video.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};









const routes = [
    { path: '', component: _dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"], pathMatch: 'full' }
];
let DashboardModule = class DashboardModule {
};
DashboardModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarModule"],
            _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_5__["NgxChartsModule"],
            _theme_directives_directives_module__WEBPACK_IMPORTED_MODULE_6__["DirectivesModule"],
            _video_video_module__WEBPACK_IMPORTED_MODULE_8__["MatVideoModule"]
        ],
        declarations: [
            _dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"]
        ]
    })
], DashboardModule);



/***/ })

}]);
//# sourceMappingURL=pages-dashboard-dashboard-module-es2015.js.map