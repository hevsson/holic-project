function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-user-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/user.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/user.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesUserUserComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\" *ngIf=\"isHolic\">\r\n  <div class=\"col-10\"></div>\r\n\r\n  <div class=\"col-2\" *ngIf=\"!isConnected\">\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"login()\">Login</button>\r\n  </div>\r\n</div>\r\n<div>\r\n  <img\r\n    src=\"assets/img/holic/logo-holic-o.png\"\r\n    style=\"margin-left:auto;margin-right:auto;width:59px;display:block\"\r\n  />\r\n</div>\r\n\r\n<div class=\"holicTvPanel\">\r\n  <div class=\"currentLiveTVPanel\">\r\n    <div\r\n      id=\"liveTvPanelPanel\"\r\n      class=\"liveTvPanel\"\r\n      (dblclick)=\"detail(mainVideo.id)\"\r\n    >\r\n      <div style=\"height: 39vw\">\r\n        <div>\r\n          <mat-video\r\n            #mainvid\r\n            [title]=\"mainVideo.titre\"\r\n            [autoplay]=\"true\"\r\n            [loop]=\"true\"\r\n            [overlay]=\"false\"\r\n            [time]=\"mainVideo.time\"\r\n            [preload]=\"true\"\r\n            [fullscreen]=\"false\"\r\n            [download]=\"false\"\r\n            [muted]=\"mainVideo.mute\"\r\n            color=\"primary\"\r\n            spinner=\"spin\"\r\n          >\r\n            <source\r\n              matVideoSource\r\n              src=\"api/account/videos/{{ mainVideo.id }}\"\r\n              type=\"{{ mainVideo.format }}\"\r\n            />\r\n          </mat-video>\r\n        </div>\r\n        <div *ngIf=\"!isMobile\">\r\n          <div class=\"videotitle\" *ngIf=\"isHolic\">\r\n            HOLIC LIVE TV\r\n          </div>\r\n\r\n          <div class=\"videotitle\" *ngIf=\"!isHolic\">\r\n            HOLIC LIVE TV <span class=\"blackcolor\">|</span>\r\n            {{ mainVideo.username }}\r\n          </div>\r\n          <div class=\"menu\">\r\n            <img\r\n              (click)=\"redirectHome()\"\r\n              src=\"assets/img/holic/home.png\"\r\n              style=\"width:30px;\"\r\n            />\r\n\r\n            <a (click)=\"previousUser()\">\r\n              <img\r\n                src=\"assets/img/holic/bouton-holic-up.jpg\"\r\n                style=\"width:30px;\"\r\n            /></a>\r\n            <a (click)=\"nextUser()\"\r\n              ><img\r\n                src=\"assets/img/holic/bouton-holic-dwn.jpg\"\r\n                style=\"width:30px;\"\r\n            /></a>\r\n            <a (click)=\"userExist()\">\r\n              <img src=\"assets/img/holic/search-icon.png\" style=\"width:30px;\"\r\n            /></a>\r\n            <input\r\n              type=\"text\"\r\n              id=\"videoCategorieId\"\r\n              style=\"border: none; border-bottom: 1px solid rgba(0, 0, 0, 0.1); width: 24vw;\"\r\n              [(ngModel)]=\"searchtext\"\r\n              (keypress)=\"keyPress($event)\"\r\n            />\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"smallLiveTvPanel\" *ngIf=\"!isMobile\">\r\n    <div\r\n      class=\"videoPanel\"\r\n      (dblclick)=\"detail(interviewVideo.id)\"\r\n      (mouseover)=\"playInterview()\"\r\n      (mouseout)=\"muteInterview()\"\r\n    >\r\n      \r\n        <div class=\"title\">{{ interviewVideo.titre }}</div>\r\n        <div id=\"interviewVideoPanel\" class=\"video\">\r\n          <div id=\"interviewVideo\">\r\n            <div>\r\n              <mat-video\r\n                #interviewvid\r\n                [title]=\"interviewVideo.titre\"\r\n                [autoplay]=\"true\"\r\n                [loop]=\"true\"\r\n                [overlay]=\"false\"\r\n                [preload]=\"true\"\r\n                [time]=\"interviewVideo.time\"\r\n                [fullscreen]=\"false\"\r\n                [download]=\"false\"\r\n                [muted]=\"interviewVideo.mute\"\r\n                color=\"accent\"\r\n                spinner=\"spin\"\r\n              >\r\n                <source\r\n                  matVideoSource\r\n                  src=\"api/account/videos/{{ interviewVideo.id }}\"\r\n                  type=\"{{ interviewVideo.format }}\"\r\n                />\r\n              </mat-video>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <a class=\"description\">{{ interviewVideo.description }}</a>\r\n    </div>\r\n\r\n    <div\r\n      class=\"videoPanel\"\r\n      (dblclick)=\"detail(reportVideo.id)\"\r\n      (mouseover)=\"playReport()\"\r\n      (mouseout)=\"muteReport()\"\r\n    >\r\n      <a onclick=\"\">\r\n        <div class=\"title\">{{ reportVideo.description }}</div>\r\n        <div id=\"reportVideoPanel\" class=\"video\">\r\n          <div id=\"reportVideo\">\r\n            <div>\r\n              <mat-video\r\n                #reportvid\r\n                matVideoSource\r\n                [title]=\"reportVideo.titre\"\r\n                [autoplay]=\"true\"\r\n                [loop]=\"true\"\r\n                [overlay]=\"false\"\r\n                [time]=\"reportVideo.time\"\r\n                [fullscreen]=\"false\"\r\n                [download]=\"false\"\r\n                [muted]=\"reportVideo.mute\"\r\n                [preload]=\"true\"\r\n                color=\"accent\"\r\n                spinner=\"spin\"\r\n              >\r\n                <source\r\n                  src=\"api/account/videos/{{ reportVideo.id }}\"\r\n                  type=\"{{ reportVideo.format }}\"\r\n                />\r\n              </mat-video>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"description\">{{ reportVideo.description }}</div>\r\n      </a>\r\n    </div>\r\n\r\n    <div\r\n      class=\"videoPanel\"\r\n      (dblclick)=\"detail(sportVideo.id)\"\r\n      (mouseover)=\"playSport()\"\r\n      (mouseout)=\"muteSport()\"\r\n    >\r\n      <a onclick=\"\">\r\n        <div class=\"title\">{{ sportVideo.titre }}</div>\r\n        <div id=\"sportVideoPanel\" class=\"video\">\r\n          <div id=\"sportVideo\">\r\n            <div>\r\n              <mat-video\r\n                #sportvid\r\n                matVideoSource\r\n                [title]=\"sportVideo.titre\"\r\n                [autoplay]=\"true\"\r\n                [loop]=\"true\"\r\n                [time]=\"sportVideo.time\"\r\n                [fullscreen]=\"false\"\r\n                [download]=\"false\"\r\n                [muted]=\"sportVideo.mute\"\r\n                [overlay]=\"false\"\r\n                [preload]=\"true\"\r\n                color=\"accent\"\r\n                spinner=\"spin\"\r\n              >\r\n                >\r\n                <source\r\n                  src=\"api/account/videos/{{ sportVideo.id }}\"\r\n                  type=\"{{ interviewVideo.format }}\"\r\n                />\r\n              </mat-video>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <a class=\"description\">{{ sportVideo.description }}</a>\r\n      </a>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"smallLiveTvPanel\" *ngIf=\"!isMobile\">\r\n    <div\r\n      class=\"videoPanel\"\r\n      (dblclick)=\"detail(musicVideo.id)\"\r\n      (mouseover)=\"playMusic()\"\r\n      (mouseout)=\"muteMusic()\"\r\n    >\r\n        <div class=\"title\">{{ musicVideo.titre }}</div>\r\n        <div id=\"musicVideoPanel\" class=\"video\">\r\n          <div id=\"musicVideo\">\r\n            <div>\r\n              <mat-video\r\n                #musicvid\r\n                [title]=\"musicVideo.titre\"\r\n                [overlay]=\"false\"\r\n                [autoplay]=\"true\"\r\n                [loop]=\"true\"\r\n                [time]=\"musicVideo.time\"\r\n                [fullscreen]=\"false\"\r\n                [download]=\"false\"\r\n                [muted]=\"musicVideo.mute\"\r\n                [preload]=\"true\"\r\n                color=\"accent\"\r\n                spinner=\"spin\"\r\n              >\r\n                >\r\n                <source\r\n                  matVideoSource\r\n                  src=\"api/account/videos/{{ musicVideo.id }}\"\r\n                  type=\"{{ interviewVideo.format }}\"\r\n                />\r\n              </mat-video>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <a class=\"description\">{{ musicVideo.description }}</a>\r\n    </div>\r\n\r\n    <div\r\n      class=\"videoPanel\"\r\n      (dblclick)=\"detail(lifestyleVideo.id)\"\r\n      (mouseover)=\"playLifeStyle()\"\r\n      (mouseout)=\"muteLifeStyle()\"\r\n    >\r\n        <div class=\"title\">{{ lifestyleVideo.titre }}</div>\r\n        <div id=\"lifestyleVideoPanel\" class=\"video\">\r\n          <div id=\"lifestyleVideo\">\r\n            <div>\r\n              <mat-video\r\n                #lifestylevid\r\n                [title]=\"lifestyleVideo.titre\"\r\n                [autoplay]=\"true\"\r\n                [preload]=\"true\"\r\n                [loop]=\"true\"\r\n                [time]=\"lifestyleVideo.time\"\r\n                [overlay]=\"false\"\r\n                [fullscreen]=\"false\"\r\n                [preload]=\"true\"\r\n                [download]=\"false\"\r\n                [muted]=\"lifestyleVideo.mute\"\r\n                color=\"accent\"\r\n                spinner=\"spin\"\r\n              >\r\n                >\r\n                <source\r\n                  matVideoSource\r\n                  src=\"api/account/videos/{{ lifestyleVideo.id }}\"\r\n                  type=\"{{ lifestyleVideo.format }}\"\r\n                />\r\n              </mat-video>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <a class=\"description\">{{ lifestyleVideo.description }}</a>\r\n    </div>\r\n\r\n    <div\r\n      class=\"videoPanel\"\r\n      (dblclick)=\"detail(interview2Video.id)\"\r\n      (mouseover)=\"playInterview2()\"\r\n      (mouseout)=\"muteInterview2()\"\r\n    >\r\n        <div class=\"title\">\r\n          {{ interview2Video.titre }}\r\n        </div>\r\n        <div id=\"interview2VideoPanel\" class=\"video\">\r\n          <div id=\"interview2Video\">\r\n            <div>\r\n              <mat-video\r\n                #interview2vid\r\n                [title]=\"interview2Video.titre\"\r\n                [autoplay]=\"true\"\r\n                [preload]=\"true\"\r\n                [loop]=\"true\"\r\n                [time]=\"interview2Video.time\"\r\n                [fullscreen]=\"false\"\r\n                [download]=\"false\"\r\n                [preload]=\"true\"\r\n                [overlay]=\"false\"\r\n                [muted]=\"interview2Video.mute\"\r\n                color=\"accent\"\r\n                spinner=\"spin\"\r\n              >\r\n                >\r\n                <source\r\n                  matVideoSource\r\n                  src=\"api/account/videos/{{ interview2Video.id }}\"\r\n                  type=\"{{ interview2Video.format }}\"\r\n                />\r\n              </mat-video>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <a class=\"description\">{{ interview2Video.description }}</a>\r\n    </div>\r\n  </div>\r\n  <div class=\"smallLiveTvPanel\" *ngIf=\"!isMobile\">\r\n  </div>\r\n\r\n  <div\r\n    class=\"currentLiveTVPanel\"\r\n    *ngIf=\"isMobile\"\r\n    (mouseover)=\"playInterview()\"\r\n    (mouseout)=\"muteInterview()\"\r\n    (touchmove)=\"playInterview()\"\r\n\r\n  >\r\n    <div\r\n      id=\"liveTvPanelPanel\"\r\n      class=\"liveTvPanel\"\r\n      (dbclick)=\"detail(interviewVideo.id)\"\r\n    >\r\n      <div style=\"height: 39vw\">\r\n        <div>\r\n          <mat-video\r\n            #interviewvid\r\n            [title]=\"interviewVideo.titre\"\r\n            [autoplay]=\"true\"\r\n            [loop]=\"true\"\r\n            [overlay]=\"false\"\r\n            [time]=\"interviewVideo.time\"\r\n            [preload]=\"true\"\r\n            [fullscreen]=\"false\"\r\n            [download]=\"false\"\r\n            [muted]=\"interviewVideo.mute\"\r\n            color=\"primary\"\r\n            spinner=\"spin\"\r\n          >\r\n            <source\r\n              matVideoSource\r\n              src=\"api/account/videos/{{ interviewVideo.id }}\"\r\n              type=\"{{ interviewVideo.format }}\"\r\n            />\r\n          </mat-video>\r\n        </div>\r\n        <div>\r\n          <div class=\"videotitle\">{{ interviewVideo.description }}</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div\r\n    class=\"currentLiveTVPanel\"\r\n    *ngIf=\"isMobile\"\r\n    (mouseover)=\"playReport()\"\r\n    (mouseout)=\"muteReport()\"\r\n    (touchmove)=\"playReport()\"\r\n  >\r\n    <div\r\n      id=\"liveTvPanelPanel\"\r\n      class=\"liveTvPanel\"\r\n      (dbclick)=\"detail(reportVideo.id)\"\r\n    >\r\n      <div style=\"height: 39vw\">\r\n        <div>\r\n          <mat-video\r\n            #reportvid\r\n            [title]=\"reportVideo.titre\"\r\n            [autoplay]=\"true\"\r\n            [loop]=\"true\"\r\n            [overlay]=\"false\"\r\n            [time]=\"reportVideo.time\"\r\n            [preload]=\"true\"\r\n            [fullscreen]=\"false\"\r\n            [download]=\"false\"\r\n            [muted]=\"reportVideo.mute\"\r\n            color=\"primary\"\r\n            spinner=\"spin\"\r\n          >\r\n            <source\r\n              matVideoSource\r\n              src=\"api/account/videos/{{ reportVideo.id }}\"\r\n              type=\"{{ reportVideo.format }}\"\r\n            />\r\n          </mat-video>\r\n        </div>\r\n        <div>\r\n          <div class=\"videotitle\">{{ reportVideo.description }}</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div\r\n    class=\"currentLiveTVPanel\"\r\n    *ngIf=\"isMobile\"\r\n    (mouseover)=\"playSport()\"\r\n    (mouseout)=\"muteSport()\"\r\n    (touchmove)=\"playSport()\"\r\n  >\r\n    <div\r\n      id=\"liveTvPanelPanel\"\r\n      class=\"liveTvPanel\"\r\n      (dbclick)=\"detail(sportVideo.id)\"\r\n    >\r\n      <div style=\"height: 39vw\">\r\n        <div>\r\n          <mat-video\r\n            #sportvid\r\n            [title]=\"sportVideo.titre\"\r\n            [autoplay]=\"true\"\r\n            [loop]=\"true\"\r\n            [overlay]=\"false\"\r\n            [time]=\"sportVideo.time\"\r\n            [preload]=\"true\"\r\n            [fullscreen]=\"false\"\r\n            [download]=\"false\"\r\n            [muted]=\"sportVideo.mute\"\r\n            color=\"primary\"\r\n            spinner=\"spin\"\r\n          >\r\n            <source\r\n              matVideoSource\r\n              src=\"api/account/videos/{{ sportVideo.id }}\"\r\n              type=\"{{ sportVideo.format }}\"\r\n            />\r\n          </mat-video>\r\n        </div>\r\n        <div>\r\n          <div class=\"videotitle\">{{ sportVideo.description }}</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div\r\n    class=\"currentLiveTVPanel\"\r\n    *ngIf=\"isMobile\"\r\n    (mouseover)=\"playMusic()\"\r\n    (mouseout)=\"muteMusic()\"\r\n    (touchmove)=\"playMusic()\"\r\n  >\r\n    <div\r\n      id=\"liveTvPanelPanel\"\r\n      class=\"liveTvPanel\"\r\n      (dbclick)=\"detail(musicVideo.id)\"\r\n    >\r\n      <div style=\"height: 39vw\">\r\n        <div>\r\n          <mat-video\r\n            #musicvid\r\n            [title]=\"musicVideo.titre\"\r\n            [autoplay]=\"true\"\r\n            [loop]=\"true\"\r\n            [overlay]=\"false\"\r\n            [time]=\"musicVideo.time\"\r\n            [preload]=\"true\"\r\n            [fullscreen]=\"false\"\r\n            [download]=\"false\"\r\n            [muted]=\"musicVideo.mute\"\r\n            color=\"primary\"\r\n            spinner=\"spin\"\r\n          >\r\n            <source\r\n              matVideoSource\r\n              src=\"api/account/videos/{{ musicVideo.id }}\"\r\n              type=\"{{ musicVideo.format }}\"\r\n            />\r\n          </mat-video>\r\n        </div>\r\n        <div>\r\n          <div class=\"videotitle\">{{ musicVideo.description }}</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div\r\n    class=\"currentLiveTVPanel\"\r\n    *ngIf=\"isMobile\"\r\n    (mouseover)=\"playLifeStyle()\"\r\n    (mouseout)=\"muteLifeStyle()\"\r\n    (touchmove)=\"playLifeStyle()\"\r\n  >\r\n    <div\r\n      id=\"liveTvPanelPanel\"\r\n      class=\"liveTvPanel\"\r\n      (dbclick)=\"detail(lifestyleVideo.id)\"\r\n    >\r\n      <div style=\"height: 39vw\">\r\n        <div>\r\n          <mat-video\r\n            #lifestylevid\r\n            [title]=\"lifestyleVideo.titre\"\r\n            [autoplay]=\"true\"\r\n            [loop]=\"true\"\r\n            [overlay]=\"false\"\r\n            [time]=\"lifestyleVideo.time\"\r\n            [preload]=\"true\"\r\n            [fullscreen]=\"false\"\r\n            [download]=\"false\"\r\n            [muted]=\"lifestyleVideo.mute\"\r\n            color=\"primary\"\r\n            spinner=\"spin\"\r\n          >\r\n            <source\r\n              matVideoSource\r\n              src=\"api/account/videos/{{ lifestyleVideo.id }}\"\r\n              type=\"{{ lifestyleVideo.format }}\"\r\n            />\r\n          </mat-video>\r\n        </div>\r\n        <div>\r\n          <div class=\"videotitle\">{{ lifestyleVideo.description }}</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div\r\n    class=\"currentLiveTVPanel\"\r\n    *ngIf=\"isMobile\"\r\n    (mouseover)=\"playInterview2()\"\r\n    (mouseout)=\"muteInterview2()\"\r\n    (touchmove)=\"playInterview2()\"\r\n  >\r\n    <div\r\n      id=\"liveTvPanelPanel\"\r\n      class=\"liveTvPanel\"\r\n      (dbclick)=\"detail(interview2Video.id)\"\r\n    >\r\n      <div style=\"height: 39vw\">\r\n        <div>\r\n          <mat-video\r\n            #interview2vid\r\n            [title]=\"interview2Video.titre\"\r\n            [autoplay]=\"true\"\r\n            [loop]=\"true\"\r\n            [overlay]=\"false\"\r\n            [time]=\"interview2Video.time\"\r\n            [preload]=\"true\"\r\n            [fullscreen]=\"false\"\r\n            [download]=\"false\"\r\n            [muted]=\"interview2Video.mute\"\r\n            color=\"primary\"\r\n            spinner=\"spin\"\r\n          >\r\n            <source\r\n              matVideoSource\r\n              src=\"api/account/videos/{{ interview2Video.id }}\"\r\n              type=\"{{ interview2Video.format }}\"\r\n            />\r\n          </mat-video>\r\n        </div>\r\n        <div>\r\n          <div class=\"videotitle\">{{ interview2Video.description }}</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div *ngIf=\"isMobile\" class=\"row\">\r\n    <div class=\"videotitle\" *ngIf=\"isHolic\">\r\n      HOLIC LIVE TV\r\n    </div>\r\n\r\n    <div class=\"videotitle\" *ngIf=\"!isHolic\">\r\n      HOLIC LIVE TV <span class=\"blackcolor\">|</span>\r\n      {{ mainVideo.username }}\r\n    </div>\r\n    <div class=\"menu\">\r\n      <img\r\n        (click)=\"redirectHome()\"\r\n        src=\"assets/img/holic/home.png\"\r\n        style=\"width:30px;\"\r\n      />\r\n\r\n      <a (click)=\"previousUser()\">\r\n        <img\r\n          src=\"assets/img/holic/bouton-holic-up.jpg\"\r\n          style=\"width:30px;\"\r\n      /></a>\r\n      <a (click)=\"nextUser()\"\r\n        ><img\r\n          src=\"assets/img/holic/bouton-holic-dwn.jpg\"\r\n          style=\"width:30px;\"\r\n      /></a>\r\n      <a (click)=\"userExist()\">\r\n        <img src=\"assets/img/holic/search-icon.png\" style=\"width:30px;\"\r\n      /></a>\r\n      <input\r\n        type=\"text\"\r\n        id=\"videoCategorieId\"\r\n        style=\"border: none; border-bottom: 1px solid rgba(0, 0, 0, 0.1); width: 24vw;\"\r\n        [(ngModel)]=\"searchtext\"\r\n        (keypress)=\"keyPress($event)\"\r\n      />\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/user/user.component.scss":
  /*!************************************************!*\
    !*** ./src/app/pages/user/user.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesUserUserComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#liveVideo {\n  display: none !important; }\n\n#wrapper {\n  padding: 0vw 0 0 4em !important; }\n\n/*-------------------------------------------------------------------*/\n\n.hide {\n  display: none; }\n\n.holicTvPanel {\n  width: 100%;\n  margin-top: 2vw; }\n\n.holicTvPanel > div > img, holicTvPanel > div > img {\n  margin: 30px 0; }\n\n.currentLiveTVPanel {\n  width: 100%;\n  float: left; }\n\n.currentLiveTVPanel .liveTvPanel {\n  width: 75%;\n  height: 39vw;\n  margin-left: auto;\n  margin-right: auto; }\n\n.liveTvPanel {\n  height: 32vw; }\n\n.currentLiveTVPanel .videotitle {\n  color: #7E4855;\n  font-size: 2vw;\n  padding: 1vw 0; }\n\n.currentLiveTVPanel .videoContentTitle {\n  font-weight: bold; }\n\n/*\r\n.logo {\r\n\tdisplay: block;\r\n\tmargin: 0 auto;\r\n\tmargin-top: 100px;\r\n\t\r\n}\r\n*/\n\n/*---------------Small Video-----------------*/\n\n.smallLiveTvPanel {\n  width: 100%;\n  /* \toverflow: auto; */\n  clear: both;\n  padding-left: 1%;\n  /* \theight: 35.6vw; */\n  /* \tmax-height: 500px; */\n  margin-right: auto;\n  margin-left: auto;\n  width: 75%;\n  padding-top: 3vw; }\n\n.smallLiveTvPanel a {\n  text-decoration: none;\n  color: black; }\n\n.smallLiveTvPanel a:HOVER {\n  text-decoration: none;\n  color: black; }\n\n.videoPanel {\n  float: left;\n  width: 33%;\n  margin-top: 2em; }\n\n.blackcolor {\n  color: black !important;\n  font-weight: bold; }\n\n.videoPanel .title {\n  border-bottom: solid 1px #7E4855;\n  text-align: center;\n  color: #8E8E8E;\n  font-weight: bold;\n  font-size: 1vw; }\n\n.videoPanel {\n  padding: 1em 1em 0 1em;\n  height: 12vw; }\n\n.videoPanel .description {\n  padding-left: 1em;\n  padding-right: 1em;\n  padding-bottom: 1em;\n  font-size: 1vw;\n  line-height: 150%; }\n\n/*----------------------------- PAGE VIDEO DETAIL-------------------------*/\n\n.currentLiveTVPanelDetail {\n  width: 70%;\n  float: left; }\n\n.smallLiveTvPanelDetail {\n  width: 29%;\n  cursor: pointer;\n  float: left;\n  padding-left: 1%;\n  height: 36.5vw;\n  overflow-y: auto; }\n\n.smallLiveTvPanelDetail a {\n  text-decoration: none;\n  color: black; }\n\n.smallLiveTvPanelDetail a:HOVER {\n  text-decoration: none;\n  color: black; }\n\n.videoPanelDetail {\n  float: left;\n  width: 100%;\n  position: relative; }\n\n.videoPanelDetail .caption {\n  position: absolute;\n  top: 20%;\n  left: 25%;\n  width: 15%;\n  margin-left: -1%;\n  opacity: 0.7;\n  z-index: 1; }\n\n.videoPanelDetailmg {\n  float: left;\n  width: 70%; }\n\n.videoPanelDetailDescription {\n  float: left;\n  width: 35%;\n  padding-left: 2%;\n  font-size: 1vw;\n  line-height: 150%; }\n\n.multiple-items {\n  float: left;\n  width: 60%; }\n\n.holicdetail {\n  width: 100%;\n  padding: 0%;\n  margin: 0%;\n  padding: 0%;\n  display-block: 0;\n  margin-top: 0px;\n  margin-bottom: 0px; }\n\n.item {\n  height: 8.5vw !important; }\n\n#searchVideo img {\n  width: 1vw;\n  height: 1vw; }\n\nvideo:-webkit-full-screen {\n  max-height: 100%; }\n\nvideo:-moz-full-screen {\n  max-height: 100%; }\n\n.currentLiveTVPanel video::-webkit-media-controls-timeline {\n  visibility: hidden !important;\n  max-width: 40%; }\n\n.currentLiveTVPanel video::-webkit-media-controls-play-button {\n  display: none !important; }\n\n.currentLiveTVPanel video::-webkit-media-controls-current-time-display {\n  display: none !important; }\n\n.hiddden {\n  display: none !important; }\n\n.shown {\n  display: block !important; }\n\n.parentDiv {\n  position: absolute;\n  top: 11px;\n  right: 10px;\n  left: 10px;\n  height: calc(50% - 18px);\n  display: block; }\n\nbody > .formulaire {\n  margin-top: 150px; }\n\nbody > .formulaire img {\n  display: block;\n  width: 59px;\n  height: auto;\n  margin: 15px auto; }\n\nbody > .formulaire form ul {\n  text-align: center; }\n\nbody > .formulaire form ul > li {\n  margin: 10px 0;\n  list-style-type: none; }\n\nbody > .formulaire form ul > li > * {\n  display: inline-block;\n  vertical-align: middle; }\n\nbody > .formulaire form ul > li > label {\n  min-width: 100px;\n  text-align: left;\n  color: black; }\n\n.videoPanel2 {\n  width: 33%; }\n\n#progressbox {\n  position: relative;\n  width: 400px;\n  border: 1px solid #ddd;\n  padding: 1px;\n  border-radius: 3px; }\n\n#progressbar {\n  background-color: #cccccc;\n  width: 0%;\n  height: 20px;\n  border-radius: 4px; }\n\n#percent {\n  position: absolute;\n  display: inline-block;\n  top: 3px;\n  left: 48%; }\n\n.videotitle {\n  float: left; }\n\n.menu {\n  float: right;\n  padding: 1vw 0; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlci9DOlxcVXNlcnNcXGhlcnZlXFxob2xpY1xcc3RhcnRuZy9zcmNcXGFwcFxccGFnZXNcXHVzZXJcXHVzZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3VzZXIvdXNlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLHdCQUF3QixFQUFBOztBQUd6QjtFQUNLLCtCQUE4QixFQUFBOztBQUduQyxzRUFBQTs7QUFFQTtFQUNBLGFBQVksRUFBQTs7QUFFWjtFQUNDLFdBQVc7RUFDWCxlQUFlLEVBQUE7O0FBRWhCO0VBQXFELGNBQWMsRUFBQTs7QUFFbkU7RUFDQyxXQUFXO0VBQ1gsV0FBVyxFQUFBOztBQUlaO0VBQ0MsVUFBVTtFQUNWLFlBQVk7RUFDWixpQkFBZ0I7RUFDaEIsa0JBQWlCLEVBQUE7O0FBRWxCO0VBQ0MsWUFBWSxFQUFBOztBQUdiO0VBQ0MsY0FBYztFQUNkLGNBQWM7RUFDZCxjQUFjLEVBQUE7O0FBR2Y7RUFDQyxpQkFBaUIsRUFBQTs7QUFHbEI7Ozs7Ozs7Q0NBQzs7QURRRCw4Q0FBQTs7QUFDQTtFQUNDLFdBQVc7RUFDWixxQkFBQTtFQUNDLFdBQVk7RUFDWixnQkFBZ0I7RUFDakIscUJBQUE7RUFDQyx3QkFBQTtFQUNBLGtCQUFpQjtFQUNqQixpQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLGdCQUFnQixFQUFBOztBQUdqQjtFQUNDLHFCQUFxQjtFQUNyQixZQUFZLEVBQUE7O0FBR2I7RUFDQyxxQkFBcUI7RUFDckIsWUFBWSxFQUFBOztBQUdiO0VBQ0MsV0FBVztFQUNYLFVBQVU7RUFDVixlQUFlLEVBQUE7O0FBRWhCO0VBQ0MsdUJBQXVCO0VBQ3ZCLGlCQUFpQixFQUFBOztBQUVsQjtFQUNDLGdDQUFnQztFQUNoQyxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixjQUFjLEVBQUE7O0FBR2Y7RUFDQyxzQkFBc0I7RUFDdEIsWUFBWSxFQUFBOztBQUdiO0VBQ0MsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGlCQUFpQixFQUFBOztBQUdsQiwyRUFBQTs7QUFDQTtFQUNDLFVBQVU7RUFDVixXQUFXLEVBQUE7O0FBR1o7RUFDQyxVQUFVO0VBQ1YsZUFBZTtFQUNmLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGdCQUFnQixFQUFBOztBQUlqQjtFQUNDLHFCQUFxQjtFQUNyQixZQUFZLEVBQUE7O0FBR2I7RUFDQyxxQkFBcUI7RUFDckIsWUFBWSxFQUFBOztBQUdiO0VBQ0MsV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0IsRUFBQTs7QUFHbkI7RUFDQyxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixVQUFVLEVBQUE7O0FBR1g7RUFDQyxXQUFXO0VBQ1gsVUFBVSxFQUFBOztBQUdYO0VBQ0MsV0FBVztFQUNYLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGlCQUFpQixFQUFBOztBQUdsQjtFQUNDLFdBQVc7RUFDWCxVQUFVLEVBQUE7O0FBR1g7RUFDQyxXQUFXO0VBQ1gsV0FBVztFQUNYLFVBQVU7RUFDVixXQUFXO0VBQ1gsZ0JBQWU7RUFDZixlQUFlO0VBQ1osa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0Msd0JBQXdCLEVBQUE7O0FBR3pCO0VBQ0MsVUFBUztFQUNULFdBQVUsRUFBQTs7QUFHWDtFQUFnQyxnQkFBZ0IsRUFBQTs7QUFDaEQ7RUFBZ0MsZ0JBQWdCLEVBQUE7O0FBT2hEO0VBQ0ksNkJBQTZCO0VBQzdCLGNBQWEsRUFBQTs7QUFHakI7RUFDRSx3QkFBdUIsRUFBQTs7QUFFekI7RUFDRSx3QkFBdUIsRUFBQTs7QUFFekI7RUFDQyx3QkFBdUIsRUFBQTs7QUFHeEI7RUFDQyx5QkFBd0IsRUFBQTs7QUFHekI7RUFFSSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxVQUFVO0VBRVYsd0JBQXdCO0VBQ3hCLGNBQWMsRUFBQTs7QUFFbEI7RUFBb0IsaUJBQWlCLEVBQUE7O0FBQ3JDO0VBQXdCLGNBQWM7RUFDckMsV0FBVTtFQUNWLFlBQVk7RUFDWixpQkFBaUIsRUFBQTs7QUFFbEI7RUFBNEIsa0JBQWtCLEVBQUE7O0FBQzlDO0VBQWlDLGNBQWM7RUFDOUMscUJBQXFCLEVBQUE7O0FBRXRCO0VBQXFDLHFCQUFxQjtFQUN6RCxzQkFBc0IsRUFBQTs7QUFFdkI7RUFBeUMsZ0JBQWdCO0VBQ3hELGdCQUFnQjtFQUNoQixZQUFZLEVBQUE7O0FBR2I7RUFDQyxVQUFVLEVBQUE7O0FBR1g7RUFDQyxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osa0JBQWtCLEVBQUE7O0FBR25CO0VBQ0MseUJBQXlCO0VBQ3pCLFNBQVM7RUFDVCxZQUFZO0VBQ1osa0JBQWtCLEVBQUE7O0FBR25CO0VBQ0Msa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixRQUFRO0VBQ1IsU0FBUyxFQUFBOztBQUdWO0VBR0EsV0FBWSxFQUFBOztBQUdaO0VBR0EsWUFBYTtFQUNiLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXIvdXNlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNsaXZlVmlkZW8ge1xyXG5cdGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuI3dyYXBwZXJ7XHJcblx0ICAgIHBhZGRpbmc6IDB2dyAwIDAgNGVtIWltcG9ydGFudDtcclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHRcclxuLmhpZGV7XHJcbmRpc3BsYXk6bm9uZTtcclxufVxyXG4uaG9saWNUdlBhbmVsIHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRtYXJnaW4tdG9wOiAydnc7XHJcbn1cclxuLmhvbGljVHZQYW5lbCA+IGRpdiA+IGltZywgaG9saWNUdlBhbmVsID4gZGl2ID4gaW1neyBtYXJnaW46IDMwcHggMDsgfVxyXG5cclxuLmN1cnJlbnRMaXZlVFZQYW5lbCB7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0ZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcblxyXG4uY3VycmVudExpdmVUVlBhbmVsIC5saXZlVHZQYW5lbCB7XHJcblx0d2lkdGg6IDc1JTtcclxuXHRoZWlnaHQ6IDM5dnc7XHJcblx0bWFyZ2luLWxlZnQ6YXV0bztcclxuXHRtYXJnaW4tcmlnaHQ6YXV0bztcclxufVxyXG4ubGl2ZVR2UGFuZWwge1xyXG5cdGhlaWdodDogMzJ2dztcclxufVxyXG5cclxuLmN1cnJlbnRMaXZlVFZQYW5lbCAudmlkZW90aXRsZSB7XHJcblx0Y29sb3I6ICM3RTQ4NTU7XHJcblx0Zm9udC1zaXplOiAydnc7XHJcblx0cGFkZGluZzogMXZ3IDA7XHJcbn1cclxuXHJcbi5jdXJyZW50TGl2ZVRWUGFuZWwgIC52aWRlb0NvbnRlbnRUaXRsZSB7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi8qXHJcbi5sb2dvIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRtYXJnaW46IDAgYXV0bztcclxuXHRtYXJnaW4tdG9wOiAxMDBweDtcclxuXHRcclxufVxyXG4qL1xyXG4vKi0tLS0tLS0tLS0tLS0tLVNtYWxsIFZpZGVvLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4uc21hbGxMaXZlVHZQYW5lbCB7XHJcblx0d2lkdGg6IDEwMCU7XHJcbi8qIFx0b3ZlcmZsb3c6IGF1dG87ICovXHJcblx0Y2xlYXIgOiBib3RoO1xyXG5cdHBhZGRpbmctbGVmdDogMSU7XHJcbi8qIFx0aGVpZ2h0OiAzNS42dnc7ICovXHJcblx0LyogXHRtYXgtaGVpZ2h0OiA1MDBweDsgKi9cclxuXHRtYXJnaW4tcmlnaHQ6YXV0bztcclxuXHRtYXJnaW4tbGVmdDphdXRvO1xyXG5cdHdpZHRoOiA3NSU7XHJcblx0cGFkZGluZy10b3A6IDN2dztcclxufVxyXG5cclxuLnNtYWxsTGl2ZVR2UGFuZWwgYSB7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLnNtYWxsTGl2ZVR2UGFuZWwgYTpIT1ZFUiB7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLnZpZGVvUGFuZWwge1xyXG5cdGZsb2F0OiBsZWZ0O1xyXG5cdHdpZHRoOiAzMyU7XHJcblx0bWFyZ2luLXRvcDogMmVtO1xyXG59XHJcbi5ibGFja2NvbG9yIHtcclxuXHRjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4udmlkZW9QYW5lbCAudGl0bGUge1xyXG5cdGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjN0U0ODU1O1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRjb2xvcjogIzhFOEU4RTtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxuXHRmb250LXNpemU6IDF2dztcclxufVxyXG5cclxuLnZpZGVvUGFuZWwge1xyXG5cdHBhZGRpbmc6IDFlbSAxZW0gMCAxZW07XHJcblx0aGVpZ2h0OiAxMnZ3O1xyXG59XHJcblxyXG4udmlkZW9QYW5lbCAuZGVzY3JpcHRpb24ge1xyXG5cdHBhZGRpbmctbGVmdDogMWVtO1xyXG5cdHBhZGRpbmctcmlnaHQ6IDFlbTtcclxuXHRwYWRkaW5nLWJvdHRvbTogMWVtO1xyXG5cdGZvbnQtc2l6ZTogMXZ3O1xyXG5cdGxpbmUtaGVpZ2h0OiAxNTAlO1xyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFBBR0UgVklERU8gREVUQUlMLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi5jdXJyZW50TGl2ZVRWUGFuZWxEZXRhaWwge1xyXG5cdHdpZHRoOiA3MCU7XHJcblx0ZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5zbWFsbExpdmVUdlBhbmVsRGV0YWlsIHtcclxuXHR3aWR0aDogMjklO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRmbG9hdDogbGVmdDtcclxuXHRwYWRkaW5nLWxlZnQ6IDElO1xyXG5cdGhlaWdodDogMzYuNXZ3O1xyXG5cdG92ZXJmbG93LXk6IGF1dG87XHJcblx0XHJcbn1cclxuXHJcbi5zbWFsbExpdmVUdlBhbmVsRGV0YWlsIGEge1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5zbWFsbExpdmVUdlBhbmVsRGV0YWlsIGE6SE9WRVIge1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi52aWRlb1BhbmVsRGV0YWlsIHtcclxuXHRmbG9hdDogbGVmdDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi52aWRlb1BhbmVsRGV0YWlsIC5jYXB0aW9uIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAyMCU7XHJcblx0bGVmdDogMjUlO1xyXG5cdHdpZHRoOiAxNSU7XHJcblx0bWFyZ2luLWxlZnQ6IC0xJTtcclxuXHRvcGFjaXR5OiAwLjc7XHJcblx0ei1pbmRleDogMTtcclxufVxyXG5cclxuLnZpZGVvUGFuZWxEZXRhaWxtZyB7XHJcblx0ZmxvYXQ6IGxlZnQ7XHJcblx0d2lkdGg6IDcwJTtcclxufVxyXG5cclxuLnZpZGVvUGFuZWxEZXRhaWxEZXNjcmlwdGlvbiB7XHJcblx0ZmxvYXQ6IGxlZnQ7XHJcblx0d2lkdGg6IDM1JTtcclxuXHRwYWRkaW5nLWxlZnQ6IDIlO1xyXG5cdGZvbnQtc2l6ZTogMXZ3O1xyXG5cdGxpbmUtaGVpZ2h0OiAxNTAlO1xyXG59XHJcblxyXG4ubXVsdGlwbGUtaXRlbXMge1xyXG5cdGZsb2F0OiBsZWZ0O1xyXG5cdHdpZHRoOiA2MCU7XHJcbn1cclxuXHJcbi5ob2xpY2RldGFpbCB7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0cGFkZGluZzogMCU7XHJcblx0bWFyZ2luOiAwJTtcclxuXHRwYWRkaW5nOiAwJTtcclxuXHRkaXNwbGF5LWJsb2NrOjA7XHJcblx0bWFyZ2luLXRvcDogMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4OyBcclxufVxyXG4uaXRlbSB7XHJcblx0aGVpZ2h0OiA4LjV2dyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4jc2VhcmNoVmlkZW8gaW1ne1xyXG5cdHdpZHRoOjF2dztcclxuXHRoZWlnaHQ6MXZ3O1xyXG59XHJcblxyXG52aWRlbzotd2Via2l0LWZ1bGwtc2NyZWVuICAgICB7IG1heC1oZWlnaHQ6IDEwMCU7IH1cclxudmlkZW86LW1vei1mdWxsLXNjcmVlbiAgICAgICAgeyBtYXgtaGVpZ2h0OiAxMDAlOyB9XHJcblxyXG4uY3VycmVudExpdmVUVlBhbmVsIHZpZGVvOjotd2Via2l0LW1lZGlhLWNvbnRyb2xzIHtcclxuIC8vZGlzcGxheTpub25lICFpbXBvcnRhbnQ7XHJcbiB9XHJcblxyXG5cclxuLmN1cnJlbnRMaXZlVFZQYW5lbCB2aWRlbzo6LXdlYmtpdC1tZWRpYS1jb250cm9scy10aW1lbGluZSB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW4gIWltcG9ydGFudDtcclxuICAgIG1heC13aWR0aDo0MCU7XHJcbiAgIFxyXG59XHJcbi5jdXJyZW50TGl2ZVRWUGFuZWwgdmlkZW86Oi13ZWJraXQtbWVkaWEtY29udHJvbHMtcGxheS1idXR0b257XHJcblx0IGRpc3BsYXk6bm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbi5jdXJyZW50TGl2ZVRWUGFuZWwgdmlkZW86Oi13ZWJraXQtbWVkaWEtY29udHJvbHMtY3VycmVudC10aW1lLWRpc3BsYXl7XHJcblx0IGRpc3BsYXk6bm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbi5oaWRkZGVue1xyXG5cdGRpc3BsYXk6bm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2hvd257XHJcblx0ZGlzcGxheTpibG9jayAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucGFyZW50RGl2IC8vIFJlc3VsdHMgaW4gYXJvdW5kIDQwMHg0MDAgcGl4ZWxzIGZvciBtZVxyXG57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDExcHg7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIGxlZnQ6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IC13ZWJraXQtY2FsYyg1MCUgLSAxOHB4KTtcclxuICAgIGhlaWdodDogY2FsYyg1MCUgLSAxOHB4KTsgXHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5ib2R5ID4gLmZvcm11bGFpcmV7IG1hcmdpbi10b3A6IDE1MHB4OyB9XHJcbmJvZHkgPiAuZm9ybXVsYWlyZSBpbWd7IGRpc3BsYXk6IGJsb2NrO1xyXG5cdHdpZHRoOjU5cHg7XHJcblx0aGVpZ2h0OiBhdXRvO1xyXG5cdG1hcmdpbjogMTVweCBhdXRvO1xyXG59XHJcbmJvZHkgPiAuZm9ybXVsYWlyZSBmb3JtIHVseyB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cclxuYm9keSA+IC5mb3JtdWxhaXJlIGZvcm0gdWwgPiBsaXsgbWFyZ2luOiAxMHB4IDA7XHJcblx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59XHJcbmJvZHkgPiAuZm9ybXVsYWlyZSBmb3JtIHVsID4gbGkgPiAqeyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5ib2R5ID4gLmZvcm11bGFpcmUgZm9ybSB1bCA+IGxpID4gbGFiZWx7IG1pbi13aWR0aDogMTAwcHg7XHJcblx0dGV4dC1hbGlnbjogbGVmdDtcclxuXHRjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi52aWRlb1BhbmVsMiB7XHJcblx0d2lkdGg6IDMzJTtcclxufVxyXG5cclxuI3Byb2dyZXNzYm94IHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0d2lkdGg6IDQwMHB4O1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcblx0cGFkZGluZzogMXB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG5cclxuI3Byb2dyZXNzYmFyIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xyXG5cdHdpZHRoOiAwJTtcclxuXHRoZWlnaHQ6IDIwcHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4jcGVyY2VudCB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHR0b3A6IDNweDtcclxuXHRsZWZ0OiA0OCU7XHJcbn1cclxuXHJcbi52aWRlb3RpdGxlXHJcbntcclxuXHRcclxuZmxvYXQgOiBsZWZ0O1xyXG59XHJcblxyXG4ubWVudVxyXG57XHJcblx0XHJcbmZsb2F0IDogcmlnaHQ7XHJcbnBhZGRpbmc6IDF2dyAwO1xyXG59XHJcbiIsIiNsaXZlVmlkZW8ge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cblxuI3dyYXBwZXIge1xuICBwYWRkaW5nOiAwdncgMCAwIDRlbSAhaW1wb3J0YW50OyB9XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4uaGlkZSB7XG4gIGRpc3BsYXk6IG5vbmU7IH1cblxuLmhvbGljVHZQYW5lbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAydnc7IH1cblxuLmhvbGljVHZQYW5lbCA+IGRpdiA+IGltZywgaG9saWNUdlBhbmVsID4gZGl2ID4gaW1nIHtcbiAgbWFyZ2luOiAzMHB4IDA7IH1cblxuLmN1cnJlbnRMaXZlVFZQYW5lbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDsgfVxuXG4uY3VycmVudExpdmVUVlBhbmVsIC5saXZlVHZQYW5lbCB7XG4gIHdpZHRoOiA3NSU7XG4gIGhlaWdodDogMzl2dztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bzsgfVxuXG4ubGl2ZVR2UGFuZWwge1xuICBoZWlnaHQ6IDMydnc7IH1cblxuLmN1cnJlbnRMaXZlVFZQYW5lbCAudmlkZW90aXRsZSB7XG4gIGNvbG9yOiAjN0U0ODU1O1xuICBmb250LXNpemU6IDJ2dztcbiAgcGFkZGluZzogMXZ3IDA7IH1cblxuLmN1cnJlbnRMaXZlVFZQYW5lbCAudmlkZW9Db250ZW50VGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDsgfVxuXG4vKlxyXG4ubG9nbyB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0bWFyZ2luOiAwIGF1dG87XHJcblx0bWFyZ2luLXRvcDogMTAwcHg7XHJcblx0XHJcbn1cclxuKi9cbi8qLS0tLS0tLS0tLS0tLS0tU21hbGwgVmlkZW8tLS0tLS0tLS0tLS0tLS0tLSovXG4uc21hbGxMaXZlVHZQYW5lbCB7XG4gIHdpZHRoOiAxMDAlO1xuICAvKiBcdG92ZXJmbG93OiBhdXRvOyAqL1xuICBjbGVhcjogYm90aDtcbiAgcGFkZGluZy1sZWZ0OiAxJTtcbiAgLyogXHRoZWlnaHQ6IDM1LjZ2dzsgKi9cbiAgLyogXHRtYXgtaGVpZ2h0OiA1MDBweDsgKi9cbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgd2lkdGg6IDc1JTtcbiAgcGFkZGluZy10b3A6IDN2dzsgfVxuXG4uc21hbGxMaXZlVHZQYW5lbCBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogYmxhY2s7IH1cblxuLnNtYWxsTGl2ZVR2UGFuZWwgYTpIT1ZFUiB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGJsYWNrOyB9XG5cbi52aWRlb1BhbmVsIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAzMyU7XG4gIG1hcmdpbi10b3A6IDJlbTsgfVxuXG4uYmxhY2tjb2xvciB7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZDsgfVxuXG4udmlkZW9QYW5lbCAudGl0bGUge1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggIzdFNDg1NTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzhFOEU4RTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMXZ3OyB9XG5cbi52aWRlb1BhbmVsIHtcbiAgcGFkZGluZzogMWVtIDFlbSAwIDFlbTtcbiAgaGVpZ2h0OiAxMnZ3OyB9XG5cbi52aWRlb1BhbmVsIC5kZXNjcmlwdGlvbiB7XG4gIHBhZGRpbmctbGVmdDogMWVtO1xuICBwYWRkaW5nLXJpZ2h0OiAxZW07XG4gIHBhZGRpbmctYm90dG9tOiAxZW07XG4gIGZvbnQtc2l6ZTogMXZ3O1xuICBsaW5lLWhlaWdodDogMTUwJTsgfVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFBBR0UgVklERU8gREVUQUlMLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4uY3VycmVudExpdmVUVlBhbmVsRGV0YWlsIHtcbiAgd2lkdGg6IDcwJTtcbiAgZmxvYXQ6IGxlZnQ7IH1cblxuLnNtYWxsTGl2ZVR2UGFuZWxEZXRhaWwge1xuICB3aWR0aDogMjklO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nLWxlZnQ6IDElO1xuICBoZWlnaHQ6IDM2LjV2dztcbiAgb3ZlcmZsb3cteTogYXV0bzsgfVxuXG4uc21hbGxMaXZlVHZQYW5lbERldGFpbCBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogYmxhY2s7IH1cblxuLnNtYWxsTGl2ZVR2UGFuZWxEZXRhaWwgYTpIT1ZFUiB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGJsYWNrOyB9XG5cbi52aWRlb1BhbmVsRGV0YWlsIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cblxuLnZpZGVvUGFuZWxEZXRhaWwgLmNhcHRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjAlO1xuICBsZWZ0OiAyNSU7XG4gIHdpZHRoOiAxNSU7XG4gIG1hcmdpbi1sZWZ0OiAtMSU7XG4gIG9wYWNpdHk6IDAuNztcbiAgei1pbmRleDogMTsgfVxuXG4udmlkZW9QYW5lbERldGFpbG1nIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA3MCU7IH1cblxuLnZpZGVvUGFuZWxEZXRhaWxEZXNjcmlwdGlvbiB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMzUlO1xuICBwYWRkaW5nLWxlZnQ6IDIlO1xuICBmb250LXNpemU6IDF2dztcbiAgbGluZS1oZWlnaHQ6IDE1MCU7IH1cblxuLm11bHRpcGxlLWl0ZW1zIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA2MCU7IH1cblxuLmhvbGljZGV0YWlsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAlO1xuICBtYXJnaW46IDAlO1xuICBwYWRkaW5nOiAwJTtcbiAgZGlzcGxheS1ibG9jazogMDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7IH1cblxuLml0ZW0ge1xuICBoZWlnaHQ6IDguNXZ3ICFpbXBvcnRhbnQ7IH1cblxuI3NlYXJjaFZpZGVvIGltZyB7XG4gIHdpZHRoOiAxdnc7XG4gIGhlaWdodDogMXZ3OyB9XG5cbnZpZGVvOi13ZWJraXQtZnVsbC1zY3JlZW4ge1xuICBtYXgtaGVpZ2h0OiAxMDAlOyB9XG5cbnZpZGVvOi1tb3otZnVsbC1zY3JlZW4ge1xuICBtYXgtaGVpZ2h0OiAxMDAlOyB9XG5cbi5jdXJyZW50TGl2ZVRWUGFuZWwgdmlkZW86Oi13ZWJraXQtbWVkaWEtY29udHJvbHMtdGltZWxpbmUge1xuICB2aXNpYmlsaXR5OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiA0MCU7IH1cblxuLmN1cnJlbnRMaXZlVFZQYW5lbCB2aWRlbzo6LXdlYmtpdC1tZWRpYS1jb250cm9scy1wbGF5LWJ1dHRvbiB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxuXG4uY3VycmVudExpdmVUVlBhbmVsIHZpZGVvOjotd2Via2l0LW1lZGlhLWNvbnRyb2xzLWN1cnJlbnQtdGltZS1kaXNwbGF5IHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XG5cbi5oaWRkZGVuIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XG5cbi5zaG93biB7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7IH1cblxuLnBhcmVudERpdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMXB4O1xuICByaWdodDogMTBweDtcbiAgbGVmdDogMTBweDtcbiAgaGVpZ2h0OiAtd2Via2l0LWNhbGMoNTAlIC0gMThweCk7XG4gIGhlaWdodDogY2FsYyg1MCUgLSAxOHB4KTtcbiAgZGlzcGxheTogYmxvY2s7IH1cblxuYm9keSA+IC5mb3JtdWxhaXJlIHtcbiAgbWFyZ2luLXRvcDogMTUwcHg7IH1cblxuYm9keSA+IC5mb3JtdWxhaXJlIGltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogNTlweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDE1cHggYXV0bzsgfVxuXG5ib2R5ID4gLmZvcm11bGFpcmUgZm9ybSB1bCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG5ib2R5ID4gLmZvcm11bGFpcmUgZm9ybSB1bCA+IGxpIHtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTsgfVxuXG5ib2R5ID4gLmZvcm11bGFpcmUgZm9ybSB1bCA+IGxpID4gKiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgfVxuXG5ib2R5ID4gLmZvcm11bGFpcmUgZm9ybSB1bCA+IGxpID4gbGFiZWwge1xuICBtaW4td2lkdGg6IDEwMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogYmxhY2s7IH1cblxuLnZpZGVvUGFuZWwyIHtcbiAgd2lkdGg6IDMzJTsgfVxuXG4jcHJvZ3Jlc3Nib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA0MDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgcGFkZGluZzogMXB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7IH1cblxuI3Byb2dyZXNzYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcbiAgd2lkdGg6IDAlO1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDsgfVxuXG4jcGVyY2VudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0b3A6IDNweDtcbiAgbGVmdDogNDglOyB9XG5cbi52aWRlb3RpdGxlIHtcbiAgZmxvYXQ6IGxlZnQ7IH1cblxuLm1lbnUge1xuICBmbG9hdDogcmlnaHQ7XG4gIHBhZGRpbmc6IDF2dyAwOyB9XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/user/user.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/pages/user/user.component.ts ***!
    \**********************************************/

  /*! exports provided: UserComponent */

  /***/
  function srcAppPagesUserUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserComponent", function () {
      return UserComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _login_service_userprofile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../login/service/userprofile.service */
    "./src/app/pages/login/service/userprofile.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-device-detector */
    "./node_modules/ngx-device-detector/fesm2015/ngx-device-detector.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var UserComponent =
    /*#__PURE__*/
    function () {
      function UserComponent(router, activatedRoute, userProfileService, snackBar, deviceService) {
        _classCallCheck(this, UserComponent);

        this.router = router;
        this.activatedRoute = activatedRoute;
        this.userProfileService = userProfileService;
        this.snackBar = snackBar;
        this.deviceService = deviceService;
        this.isMobile = this.deviceService.isMobile();
      }

      _createClass(UserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
          };

          this.router.onSameUrlNavigation = 'reload';
          var data = this.activatedRoute.snapshot.data['video'];
          this.username = this.activatedRoute.snapshot.params['username'];
          this.isHolic = this.username === 'holic';
          this.mainVideo = this.findVideoByType(data, 'MAINVIDEO');
          this.interviewVideo = this.findVideoByType(data, 'INTERVIEW');
          this.reportVideo = this.findVideoByType(data, 'REPORT');
          this.lifestyleVideo = this.findVideoByType(data, 'LIFESTYLE');
          this.musicVideo = this.findVideoByType(data, 'MUSIC_VIDEO');
          this.sportVideo = this.findVideoByType(data, 'SPORT');
          this.interview2Video = this.findVideoByType(data, 'INTERVIEW2');
          this.userProfileService.getPrincipal().subscribe(function (data) {
            _this.isConnected = _this.userProfileService.isAuthenticated();
          }, function (error) {
            _this.isConnected = false;
          });
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          this.username = this.activatedRoute.snapshot.params['username'];
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this2 = this;

          this.main = this.matVideo.getVideoTag();
          this.main.addEventListener('playing', function () {
            if (!_this2.interviewVideo.mute && !_this2.reportVideo.mute && !_this2.lifestyleVideo.mute && !_this2.musicVideo.mute && !_this2.sportVideo.mute && !_this2.interview2Video.mute) {
              _this2.interviewVideo.mute = true;
              _this2.reportVideo.mute = true;
              _this2.lifestyleVideo.mute = true;
              _this2.musicVideo.mute = true;
              _this2.sportVideo.mute = true;
              _this2.interview2Video.mute = true;
              _this2.mainVideo.mute = false;
            }
          });
          this.main.addEventListener('ondblclick', function () {});
          this.main.addEventListener('onclick', function () {
            console.log('tettt');
          });
          this.main.addEventListener('loadedmetadata', function () {
            var datebb = new Date();
            var x = datebb.valueOf() / 1000;
            _this2.mainVideo.time = x % _this2.main.duration;
            _this2.main.currentTime = x % _this2.main.duration;
          });
          this.main.addEventListener('mouseover', function () {
            _this2.mainVideo.fullscreen = true;
          });
          this.main.addEventListener('mouseout', function () {
            _this2.mainVideo.fullscreen = false;
          });
          this.report = this.matreportVideo.getVideoTag();
          this.report.addEventListener('ondblclick', function () {});
          this.report.addEventListener('onclick', function () {});
          this.report.addEventListener('loadedmetadata', function () {
            var datebb = new Date();
            var x = datebb.valueOf() / 1000;
            _this2.reportVideo.time = x % _this2.report.duration;
            _this2.report.currentTime = x % _this2.report.duration;
          });
          this.sport = this.matsportVideo.getVideoTag();
          this.sport.addEventListener('ondblclick', function () {});
          this.sport.addEventListener('onclick', function () {});
          this.sport.addEventListener('loadedmetadata', function () {
            var datebb = new Date();
            var x = (datebb.valueOf() + 0) / 1000;
            _this2.sportVideo.time = x % _this2.sport.duration;
            _this2.sport.currentTime = x % _this2.sport.duration;
          });
          this.music = this.matmusicVideo.getVideoTag();
          this.music.addEventListener('ondblclick', function () {});
          this.music.addEventListener('onclick', function () {});
          this.music.addEventListener('loadedmetadata', function () {
            var datebb = new Date();
            var x = datebb.valueOf() / 1000;
            _this2.musicVideo.time = x % _this2.music.duration;
            _this2.music.currentTime = x % _this2.music.duration;
          });
          this.lifestyle = this.matlifestyleVideo.getVideoTag();
          this.lifestyle.addEventListener('ondblclick', function () {});
          this.lifestyle.addEventListener('onclick', function () {});
          this.lifestyle.addEventListener('loadedmetadata', function () {
            var datebb = new Date();
            var x = datebb.valueOf() / 1000;
            _this2.lifestyleVideo.time = x % _this2.lifestyle.duration;
            _this2.lifestyle.currentTime = x % _this2.lifestyle.duration;
          });
          this.interview2 = this.matinterview2Video.getVideoTag();
          this.interview2.addEventListener('ondblclick', function () {});
          this.interview2.addEventListener('onclick', function () {});
          this.interview2.addEventListener('loadedmetadata', function () {
            var datebb = new Date();
            var x = datebb.valueOf() / 1000;
            _this2.interview2Video.time = x % _this2.interview2.duration;
            _this2.interview2.currentTime = x % _this2.interview2.duration;
          });
          this.interview = this.matinterviewVideo.getVideoTag();
          this.interview.addEventListener('loadedmetadata', function () {
            var datebb = new Date();
            var x = datebb.valueOf() / 1000;
            _this2.interviewVideo.time = x % _this2.interview.duration;
            _this2.interview.currentTime = x % _this2.interview.duration;
          });
        }
      }, {
        key: "playInterview",
        value: function playInterview() {
          this.mainVideo.mute = true;
          this.reportVideo.mute = true;
          this.lifestyleVideo.mute = true;
          this.musicVideo.mute = true;
          this.sportVideo.mute = true;
          this.interview2Video.mute = true;
          this.interviewVideo.mute = false;
          this.interviewVideo.fullscreen = true;
        }
      }, {
        key: "muteInterview",
        value: function muteInterview() {
          this.interviewVideo.mute = true;
          this.reportVideo.mute = true;
          this.musicVideo.mute = true;
          this.sportVideo.mute = true;
          this.interview2Video.mute = true;
          this.lifestyleVideo.mute = true;
          this.mainVideo.mute = false;
          this.interviewVideo.fullscreen = false;
        }
      }, {
        key: "playInterview2",
        value: function playInterview2() {
          this.interviewVideo.mute = true;
          this.reportVideo.mute = true;
          this.lifestyleVideo.mute = true;
          this.musicVideo.mute = true;
          this.sportVideo.mute = true;
          this.mainVideo.mute = true;
          this.interview2Video.mute = false;
          this.interview2Video.fullscreen = true;
        }
      }, {
        key: "muteInterview2",
        value: function muteInterview2() {
          this.interviewVideo.mute = true;
          this.reportVideo.mute = true;
          this.musicVideo.mute = true;
          this.sportVideo.mute = true;
          this.interview2Video.mute = true;
          this.lifestyleVideo.mute = true;
          this.mainVideo.mute = false;
          this.interview2Video.fullscreen = false;
        }
      }, {
        key: "playLifeStyle",
        value: function playLifeStyle() {
          this.interviewVideo.mute = true;
          this.reportVideo.mute = true;
          this.mainVideo.mute = true;
          this.musicVideo.mute = true;
          this.sportVideo.mute = true;
          this.interview2Video.mute = true;
          this.lifestyleVideo.mute = false;
          this.lifestyleVideo.fullscreen = true;
        }
      }, {
        key: "muteLifeStyle",
        value: function muteLifeStyle() {
          this.interviewVideo.mute = true;
          this.reportVideo.mute = true;
          this.musicVideo.mute = true;
          this.sportVideo.mute = true;
          this.interview2Video.mute = true;
          this.lifestyleVideo.mute = true;
          this.mainVideo.mute = false;
          this.lifestyleVideo.fullscreen = false;
        }
      }, {
        key: "playMusic",
        value: function playMusic() {
          this.interviewVideo.mute = true;
          this.reportVideo.mute = true;
          this.lifestyleVideo.mute = true;
          this.mainVideo.mute = true;
          this.sportVideo.mute = true;
          this.interview2Video.mute = true;
          this.musicVideo.mute = false;
          this.musicVideo.fullscreen = true;
        }
      }, {
        key: "muteMusic",
        value: function muteMusic() {
          this.interviewVideo.mute = true;
          this.reportVideo.mute = true;
          this.musicVideo.mute = true;
          this.sportVideo.mute = true;
          this.interview2Video.mute = true;
          this.lifestyleVideo.mute = true;
          this.mainVideo.mute = false;
          this.musicVideo.fullscreen = false;
        }
      }, {
        key: "playSport",
        value: function playSport() {
          this.interviewVideo.mute = true;
          this.reportVideo.mute = true;
          this.lifestyleVideo.mute = true;
          this.musicVideo.mute = true;
          this.mainVideo.mute = true;
          this.interview2Video.mute = true;
          this.sportVideo.mute = false;
          this.sportVideo.fullscreen = true;
        }
      }, {
        key: "muteSport",
        value: function muteSport() {
          this.interviewVideo.mute = true;
          this.reportVideo.mute = true;
          this.musicVideo.mute = true;
          this.sportVideo.mute = true;
          this.interview2Video.mute = true;
          this.lifestyleVideo.mute = true;
          this.mainVideo.mute = false;
          this.sportVideo.fullscreen = false;
        }
      }, {
        key: "playReport",
        value: function playReport() {
          this.interviewVideo.mute = true;
          this.mainVideo.mute = true;
          this.lifestyleVideo.mute = true;
          this.musicVideo.mute = true;
          this.sportVideo.mute = true;
          this.interview2Video.mute = true;
          this.reportVideo.mute = false;
          this.reportVideo.fullscreen = true;
        }
      }, {
        key: "muteReport",
        value: function muteReport() {
          this.interviewVideo.mute = true;
          this.reportVideo.mute = true;
          this.musicVideo.mute = true;
          this.sportVideo.mute = true;
          this.interview2Video.mute = true;
          this.lifestyleVideo.mute = true;
          this.mainVideo.mute = false;
          this.mainVideo.fullscreen = false;
        }
      }, {
        key: "findVideoByType",
        value: function findVideoByType(data, type) {
          return data.filter(function (p) {
            return p.type === type;
          })[0];
        }
      }, {
        key: "redirectHome",
        value: function redirectHome() {
          this.router.navigate(['']);
        }
      }, {
        key: "detail",
        value: function detail(id) {
          this.router.navigate(['/video/' + id + '/' + this.mainVideo.id + '/' + this.mainVideo.username]);
        }
      }, {
        key: "userExist",
        value: function userExist() {
          var _this3 = this;

          if (this.searchtext !== undefined && this.searchtext !== '') {
            this.userProfileService.userexist(this.searchtext).subscribe(function (p) {
              if (p === false) {
                _this3.snackBar.open('User does not exist', 'close', {
                  verticalPosition: 'top',
                  duration: 2000
                });

                return;
              }

              if (p === true) {
                _this3.router.navigate(['/user/' + _this3.searchtext]);
              }
            });
          }
        }
      }, {
        key: "previousUser",
        value: function previousUser() {
          var _this4 = this;

          this.userProfileService.previousUser(this.activatedRoute.snapshot.params.username).subscribe(function (p) {
            _this4.router.navigate(['/user/' + p.login]);
          }, function (error) {
            _this4.snackBar.open('User does not exist', 'close', {
              verticalPosition: 'top',
              duration: 2000
            });
          });
        }
      }, {
        key: "nextUser",
        value: function nextUser() {
          var _this5 = this;

          this.userProfileService.nextUser(this.activatedRoute.snapshot.params.username).subscribe(function (p) {
            _this5.router.navigate(['/user/' + p.login]);
          }, function (error) {
            _this5.snackBar.open('User does not exist', 'close', {
              verticalPosition: 'top',
              duration: 2000
            });
          });
        }
      }, {
        key: "keyPress",
        value: function keyPress(event) {
          if (event.which === 13) {
            this.userExist();
          }
        }
      }, {
        key: "login",
        value: function login() {
          this.router.navigate(['login']);
        }
      }]);

      return UserComponent;
    }();

    UserComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
      }, {
        type: _login_service_userprofile_service__WEBPACK_IMPORTED_MODULE_2__["UserProfileService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
      }, {
        type: ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__["DeviceDetectorService"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('mainvid', {
      static: false
    }), __metadata("design:type", Object)], UserComponent.prototype, "matVideo", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('reportvid', {
      static: false
    }), __metadata("design:type", Object)], UserComponent.prototype, "matreportVideo", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sportvid', {
      static: false
    }), __metadata("design:type", Object)], UserComponent.prototype, "matsportVideo", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('musicvid', {
      static: false
    }), __metadata("design:type", Object)], UserComponent.prototype, "matmusicVideo", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('lifestylevid', {
      static: false
    }), __metadata("design:type", Object)], UserComponent.prototype, "matlifestyleVideo", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('interview2vid', {
      static: false
    }), __metadata("design:type", Object)], UserComponent.prototype, "matinterview2Video", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('interviewvid', {
      static: false
    }), __metadata("design:type", Object)], UserComponent.prototype, "matinterviewVideo", void 0);

    UserComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-user',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./user.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/user.component.html")).default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
      styles: [__importDefault(__webpack_require__(
      /*! ./user.component.scss */
      "./src/app/pages/user/user.component.scss")).default]
    }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _login_service_userprofile_service__WEBPACK_IMPORTED_MODULE_2__["UserProfileService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"], ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__["DeviceDetectorService"]])], UserComponent);
    /***/
  },

  /***/
  "./src/app/pages/user/user.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/user/user.module.ts ***!
    \*******************************************/

  /*! exports provided: routes, UserModule */

  /***/
  function srcAppPagesUserUserModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserModule", function () {
      return UserModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-perfect-scrollbar */
    "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
    /* harmony import */


    var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @swimlane/ngx-charts */
    "./node_modules/@swimlane/ngx-charts/release/esm.js");
    /* harmony import */


    var _theme_directives_directives_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../theme/directives/directives.module */
    "./src/app/theme/directives/directives.module.ts");
    /* harmony import */


    var _user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./user.component */
    "./src/app/pages/user/user.component.ts");
    /* harmony import */


    var _video_video_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../video/video.module */
    "./src/app/pages/video/video.module.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var routes = [{
      path: '',
      component: _user_component__WEBPACK_IMPORTED_MODULE_7__["UserComponent"],
      pathMatch: 'full'
    }];

    var UserModule = function UserModule() {
      _classCallCheck(this, UserModule);
    };

    UserModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_5__["NgxChartsModule"], _theme_directives_directives_module__WEBPACK_IMPORTED_MODULE_6__["DirectivesModule"], _video_video_module__WEBPACK_IMPORTED_MODULE_8__["MatVideoModule"]],
      declarations: [_user_component__WEBPACK_IMPORTED_MODULE_7__["UserComponent"]]
    })], UserModule);
    /***/
  }
}]);
//# sourceMappingURL=pages-user-user-module-es5.js.map