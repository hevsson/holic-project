(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-user-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/user.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/user.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"!isMobile\">\n  <div class=\"row\" *ngIf=\"isHolic\">\n    <div class=\"col-10\"></div>\n\n    <div class=\"col-2\" *ngIf=\"!isConnected\">\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"login()\">\n        Login\n      </button>\n    </div>\n  </div>\n  <div>\n    <img\n      src=\"assets/img/holic/logo-holic-o.png\"\n      style=\"\n        margin-left: auto;\n        margin-right: auto;\n        width: 59px;\n        display: block;\n      \"\n    />\n  </div>\n\n  <div class=\"holicTvPanel\">\n    <div class=\"currentLiveTVPanel\">\n      <div\n        id=\"liveTvPanelPanel\"\n        class=\"liveTvPanel\"\n        (dblclick)=\"detail(mainVideo.id)\"\n      >\n        <div style=\"height: 39vw;\">\n          <div>\n            <mat-video\n              #mainvid\n              [title]=\"mainVideo.titre\"\n              [autoplay]=\"true\"\n              [loop]=\"true\"\n              [overlay]=\"false\"\n              [time]=\"mainVideo.time\"\n              [preload]=\"true\"\n              [fullscreen]=\"false\"\n              [download]=\"false\"\n              [muted]=\"mainVideo.mute\"\n              color=\"primary\"\n              spinner=\"spin\"\n            >\n              <source\n                matVideoSource\n                src=\"api/account/videos/{{ mainVideo.id }}\"\n                type=\"{{ mainVideo.format }}\"\n              />\n            </mat-video>\n          </div>\n          <div *ngIf=\"!isMobile\">\n            <div class=\"videotitle\" *ngIf=\"isHolic\">\n              HOLIC LIVE TV\n            </div>\n\n            <div class=\"videotitle\" *ngIf=\"!isHolic\">\n              HOLIC LIVE TV <span class=\"blackcolor\">|</span>\n              {{ mainVideo.username }}\n            </div>\n            <div class=\"menu\">\n              <img\n                (click)=\"redirectHome()\"\n                src=\"assets/img/holic/home.png\"\n                style=\"width: 30px;\"\n              />\n\n              <a (click)=\"previousUser()\">\n                <img\n                  src=\"assets/img/holic/bouton-holic-up.jpg\"\n                  style=\"width: 30px;\"\n              /></a>\n              <a (click)=\"nextUser()\"\n                ><img\n                  src=\"assets/img/holic/bouton-holic-dwn.jpg\"\n                  style=\"width: 30px;\"\n              /></a>\n              <a (click)=\"userExist()\">\n                <img\n                  src=\"assets/img/holic/search-icon.png\"\n                  style=\"width: 30px;\"\n              /></a>\n              <input\n                type=\"text\"\n                id=\"videoCategorieId\"\n                style=\"\n                  border: none;\n                  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n                  width: 24vw;\n                \"\n                [(ngModel)]=\"searchtext\"\n                (keypress)=\"keyPress($event)\"\n              />\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"smallLiveTvPanel\">\n      <div\n        class=\"videoPanel\"\n        (dblclick)=\"detail(interviewVideo.id)\"\n        (mouseover)=\"playInterview()\"\n        (mouseout)=\"muteInterview()\"\n      >\n        <div class=\"title\">{{ interviewVideo.titre }}</div>\n        <div id=\"interviewVideoPanel\" class=\"video\">\n          <div id=\"interviewVideo\">\n            <div>\n              <mat-video\n                #interviewvid\n                [title]=\"interviewVideo.titre\"\n                [autoplay]=\"true\"\n                [loop]=\"true\"\n                [overlay]=\"false\"\n                [preload]=\"true\"\n                [time]=\"interviewVideo.time\"\n                [fullscreen]=\"false\"\n                [download]=\"false\"\n                [muted]=\"interviewVideo.mute\"\n                color=\"accent\"\n                spinner=\"spin\"\n              >\n                <source\n                  matVideoSource\n                  src=\"api/account/videos/{{ interviewVideo.id }}\"\n                  type=\"{{ interviewVideo.format }}\"\n                />\n              </mat-video>\n            </div>\n          </div>\n        </div>\n        <a class=\"description\">{{ interviewVideo.description }}</a>\n      </div>\n\n      <div\n        class=\"videoPanel\"\n        (dblclick)=\"detail(reportVideo.id)\"\n        (mouseover)=\"playReport()\"\n        (mouseout)=\"muteReport()\"\n      >\n        <a onclick=\"\">\n          <div class=\"title\">{{ reportVideo.description }}</div>\n          <div id=\"reportVideoPanel\" class=\"video\">\n            <div id=\"reportVideo\">\n              <div>\n                <mat-video\n                  #reportvid\n                  matVideoSource\n                  [title]=\"reportVideo.titre\"\n                  [autoplay]=\"true\"\n                  [loop]=\"true\"\n                  [overlay]=\"false\"\n                  [time]=\"reportVideo.time\"\n                  [fullscreen]=\"false\"\n                  [download]=\"false\"\n                  [muted]=\"reportVideo.mute\"\n                  [preload]=\"true\"\n                  color=\"accent\"\n                  spinner=\"spin\"\n                >\n                  <source\n                    src=\"api/account/videos/{{ reportVideo.id }}\"\n                    type=\"{{ reportVideo.format }}\"\n                  />\n                </mat-video>\n              </div>\n            </div>\n          </div>\n          <div class=\"description\">{{ reportVideo.description }}</div>\n        </a>\n      </div>\n\n      <div\n        class=\"videoPanel\"\n        (dblclick)=\"detail(sportVideo.id)\"\n        (mouseover)=\"playSport()\"\n        (mouseout)=\"muteSport()\"\n      >\n        <a onclick=\"\">\n          <div class=\"title\">{{ sportVideo.titre }}</div>\n          <div id=\"sportVideoPanel\" class=\"video\">\n            <div id=\"sportVideo\">\n              <div>\n                <mat-video\n                  #sportvid\n                  matVideoSource\n                  [title]=\"sportVideo.titre\"\n                  [autoplay]=\"true\"\n                  [loop]=\"true\"\n                  [time]=\"sportVideo.time\"\n                  [fullscreen]=\"false\"\n                  [download]=\"false\"\n                  [muted]=\"sportVideo.mute\"\n                  [overlay]=\"false\"\n                  [preload]=\"true\"\n                  color=\"accent\"\n                  spinner=\"spin\"\n                >\n                  >\n                  <source\n                    src=\"api/account/videos/{{ sportVideo.id }}\"\n                    type=\"{{ interviewVideo.format }}\"\n                  />\n                </mat-video>\n              </div>\n            </div>\n          </div>\n          <a class=\"description\">{{ sportVideo.description }}</a>\n        </a>\n      </div>\n    </div>\n\n    <div class=\"smallLiveTvPanel\">\n      <div\n        class=\"videoPanel\"\n        (dblclick)=\"detail(musicVideo.id)\"\n        (mouseover)=\"playMusic()\"\n        (mouseout)=\"muteMusic()\"\n      >\n        <div class=\"title\">{{ musicVideo.titre }}</div>\n        <div id=\"musicVideoPanel\" class=\"video\">\n          <div id=\"musicVideo\">\n            <div>\n              <mat-video\n                #musicvid\n                [title]=\"musicVideo.titre\"\n                [overlay]=\"false\"\n                [autoplay]=\"true\"\n                [loop]=\"true\"\n                [time]=\"musicVideo.time\"\n                [fullscreen]=\"false\"\n                [download]=\"false\"\n                [muted]=\"musicVideo.mute\"\n                [preload]=\"true\"\n                color=\"accent\"\n                spinner=\"spin\"\n              >\n                >\n                <source\n                  matVideoSource\n                  src=\"api/account/videos/{{ musicVideo.id }}\"\n                  type=\"{{ interviewVideo.format }}\"\n                />\n              </mat-video>\n            </div>\n          </div>\n        </div>\n        <a class=\"description\">{{ musicVideo.description }}</a>\n      </div>\n\n      <div\n        class=\"videoPanel\"\n        (dblclick)=\"detail(lifestyleVideo.id)\"\n        (mouseover)=\"playLifeStyle()\"\n        (mouseout)=\"muteLifeStyle()\"\n      >\n        <div class=\"title\">{{ lifestyleVideo.titre }}</div>\n        <div id=\"lifestyleVideoPanel\" class=\"video\">\n          <div id=\"lifestyleVideo\">\n            <div>\n              <mat-video\n                #lifestylevid\n                [title]=\"lifestyleVideo.titre\"\n                [autoplay]=\"true\"\n                [preload]=\"true\"\n                [loop]=\"true\"\n                [time]=\"lifestyleVideo.time\"\n                [overlay]=\"false\"\n                [fullscreen]=\"false\"\n                [preload]=\"true\"\n                [download]=\"false\"\n                [muted]=\"lifestyleVideo.mute\"\n                color=\"accent\"\n                spinner=\"spin\"\n              >\n                >\n                <source\n                  matVideoSource\n                  src=\"api/account/videos/{{ lifestyleVideo.id }}\"\n                  type=\"{{ lifestyleVideo.format }}\"\n                />\n              </mat-video>\n            </div>\n          </div>\n        </div>\n        <a class=\"description\">{{ lifestyleVideo.description }}</a>\n      </div>\n\n      <div\n        class=\"videoPanel\"\n        (dblclick)=\"detail(interview2Video.id)\"\n        (mouseover)=\"playInterview2()\"\n        (mouseout)=\"muteInterview2()\"\n      >\n        <div class=\"title\">\n          {{ interview2Video.titre }}\n        </div>\n        <div id=\"interview2VideoPanel\" class=\"video\">\n          <div id=\"interview2Video\">\n            <div>\n              <mat-video\n                #interview2vid\n                [title]=\"interview2Video.titre\"\n                [autoplay]=\"true\"\n                [preload]=\"true\"\n                [loop]=\"true\"\n                [time]=\"interview2Video.time\"\n                [fullscreen]=\"false\"\n                [download]=\"false\"\n                [preload]=\"true\"\n                [overlay]=\"false\"\n                [muted]=\"interview2Video.mute\"\n                color=\"accent\"\n                spinner=\"spin\"\n              >\n                >\n                <source\n                  matVideoSource\n                  src=\"api/account/videos/{{ interview2Video.id }}\"\n                  type=\"{{ interview2Video.format }}\"\n                />\n              </mat-video>\n            </div>\n          </div>\n        </div>\n        <a class=\"description\">{{ interview2Video.description }}</a>\n      </div>\n    </div>\n    <div class=\"smallLiveTvPanel\"></div>\n  </div>\n</div>\n\n<div\n  *ngIf=\"isMobile\"\n  class=\"mobile\"\n  id=\"mobileId\"\n  (swipeup)=\"onSwipeUp($event)\"\n  (swipedown)=\"onSwipeDown($event)\"\n  style=\"background-color: white;\"\n>\n  <header\n    style=\"\n      width: 100%;\n      background: #fbfbfb;\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n    \"\n  >\n    <span id=\"loginB2\" style=\"visibility: hidden;\" (click)=\"login()\"\n      >LOGIN</span\n    >\n\n    <img src=\"assets/img/holic/logo-holic-o.png\" id=\"logo1\" />\n\n    <div *ngIf=\"isHolic && !isConnected\">\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"login()\">\n        Login\n      </button>\n    </div>\n  </header>\n\n  <div\n    id=\"main\"\n    touch-action=\"none\"\n    style=\"\n      height: 30em;\n      width: 100%;\n      display: flex;\n      flex-direction: column;\n      justify-content: flex-end;\n      -webkit-user-select: none;\n      -moz-user-select: none;\n      -ms-user-select: none;\n      user-select: none;\n    \"\n  >\n    <img\n      id=\"leftArrow\"\n      src=\"assets/img/holic/left.png\"\n      style=\"\n        height: 3em;\n        width: 3em;\n        position: absolute;\n        left: 1em;\n        top: 50%;\n        z-index: 999;\n      \"\n    />\n    <img\n      id=\"rightArrow\"\n      src=\"assets/img/holic/right.png\"\n      style=\"\n        height: 3em;\n        width: 3em;\n        position: absolute;\n        right: 1em;\n        top: 50%;\n        z-index: 999;\n      \"\n    />\n\n    <div\n      style=\"\n        height: 700%;\n        overflow: hidden;\n        position: relative;\n        top: 0;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n      \"\n      id=\"mainWrpY\"\n    >\n      <div\n        class=\"currentMainWrp\"\n        style=\"\n          width: 700%;\n          overflow: hidden;\n          position: relative;\n          display: flex;\n          right: 0;\n          top: 0;\n        \"\n      >\n        <div\n          style=\"\n            display: flex;\n            flex-direction: column;\n            height: 100%;\n            width: 100%;\n          \"\n        >\n          <video class=\"currVideo holicvideo\" controls allowfullscreen=\"true\">\n            <source\n              src=\"api/account/videos/{{ mainVideo.id }}\"\n              type=\"video/mp4\"\n            />\n          </video>\n\n          <div *ngIf=\"isHolic\" style=\"text-align: center;\">\n            <img src=\"assets/img/holic/logo-holic.png\" id=\"logo1\" />\n          </div>\n\n          <span class=\"videotitle\" *ngIf=\"!isHolic\">\n            HOLIC LIVE TV <span class=\"blackcolor\">|</span>\n            {{ mainVideo.username }}\n          </span>\n        </div>\n        <div\n          style=\"\n            display: flex;\n            flex-direction: column;\n            height: 100%;\n            width: 100%;\n          \"\n        >\n          <video controls allowfullscreen=\"true\" class=\"holicvideo\">\n            <source\n              src=\"api/account/videos/{{ interviewVideo.id }}\"\n              type=\"video/mp4\"\n            />\n          </video>\n          <span class=\"videotitle\">{{ interviewVideo.titre }}</span>\n          <br />\n          <span class=\"videotitle\">{{ interviewVideo.description }}</span>\n        </div>\n        <div\n          style=\"\n            display: flex;\n            flex-direction: column;\n            height: 100%;\n            width: 100%;\n          \"\n        >\n          <video controls allowfullscreen=\"true\" class=\"holicvideo\">\n            <source\n              src=\"api/account/videos/{{ reportVideo.id }}\"\n              type=\"video/mp4\"\n            />\n          </video>\n          <span class=\"videotitle\">{{ reportVideo.titre }}</span>\n          <br />\n          <span class=\"videotitle\">{{ reportVideo.description }}</span>\n        </div>\n\n        <div\n          style=\"\n            display: flex;\n            flex-direction: column;\n            height: 100%;\n            width: 100%;\n          \"\n        >\n          <video controls allowfullscreen=\"true\" class=\"holicvideo\">\n            <source\n              src=\"api/account/videos/{{ sportVideo.id }}\"\n              type=\"video/mp4\"\n            />\n          </video>\n          <span class=\"videotitle\">{{ sportVideo.titre }}</span>\n          <br />\n          <span class=\"videotitle\">{{ sportVideo.description }}</span>\n        </div>\n\n        <div\n          style=\"\n            display: flex;\n            flex-direction: column;\n            height: 100%;\n            width: 100%;\n          \"\n        >\n          <video controls allowfullscreen=\"true\" class=\"holicvideo\">\n            <source\n              src=\"api/account/videos/{{ musicVideo.id }}\"\n              type=\"video/mp4\"\n            />\n          </video>\n          <span class=\"videotitle\">{{ musicVideo.titre }}</span>\n          <br />\n          <span class=\"videotitle\">{{ musicVideo.description }}</span>\n        </div>\n\n        <div\n          style=\"\n            display: flex;\n            flex-direction: column;\n            height: 100%;\n            width: 100%;\n          \"\n        >\n          <video controls allowfullscreen=\"true\" class=\"holicvideo\">\n            <source\n              src=\"api/account/videos/{{ lifestyleVideo.id }}\"\n              type=\"video/mp4\"\n            />\n          </video>\n          <span class=\"videotitle\">{{ lifestyleVideo.titre }}</span>\n          <br />\n          <span class=\"videotitle\">{{ lifestyleVideo.description }}</span>\n        </div>\n\n        <div\n          style=\"\n            display: flex;\n            flex-direction: column;\n            height: 100%;\n            width: 100%;\n          \"\n        >\n          <video controls allowfullscreen=\"true\" class=\"holicvideo\">\n            <source\n              src=\"api/account/videos/{{ interview2Video.id }}\"\n              type=\"video/mp4\"\n            />\n          </video>\n          <span class=\"videotitle\">{{ interview2Video.titre }}</span>\n          <br />\n          <span class=\"videotitle\">{{ interview2Video.description }}</span>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <footer\n    style=\"\n      display: flex;\n      padding: 1em;\n      padding-left: 1em;\n      background: #f5f5f5;\n      justify-content: space-between;\n      align-items: center;\n      border-color: gray;\n    \"\n  >\n    <div style=\"display: flex;\" id=\"footerWrp\">\n      <a href=\"\"> <img src=\"assets/img/holic/home.png\" /> </a>\n      <a href=\"http://twitter.com\">\n        <img src=\"assets/img/holic/twitter.png\" />\n      </a>\n      <a href=\"http://fb.com\"> <img src=\"assets/img/holic/fb.png\" /> </a>\n    </div>\n\n    <input\n      type=\"text\"\n      placeholder=\"Search...\"\n      id=\"searchInput\"\n      [(ngModel)]=\"searchtext\"\n      (keypress)=\"keyPress($event)\"\n    />\n  </footer>\n</div>\n");

/***/ }),

/***/ "./src/app/pages/user/user.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/user/user.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#liveVideo {\n  display: none !important; }\n\n#wrapper {\n  padding: 0vw 0 0 4em !important; }\n\n/*-------------------------------------------------------------------*/\n\n.hide {\n  display: none; }\n\n.holicTvPanel {\n  width: 100%;\n  margin-top: 2vw; }\n\n.holicTvPanel > div > img,\nholicTvPanel > div > img {\n  margin: 30px 0; }\n\n.currentLiveTVPanel {\n  width: 100%;\n  float: left; }\n\n.currentLiveTVPanel .liveTvPanel {\n  width: 75%;\n  height: 39vw;\n  margin-left: auto;\n  margin-right: auto; }\n\n.liveTvPanel {\n  height: 32vw; }\n\n.currentLiveTVPanel .videotitle {\n  color: #7e4855;\n  font-size: 2vw;\n  padding: 1vw 0; }\n\n.currentLiveTVPanel .videoContentTitle {\n  font-weight: bold; }\n\n/*\n.logo {\n\tdisplay: block;\n\tmargin: 0 auto;\n\tmargin-top: 100px;\n\t\n}\n*/\n\n/*---------------Small Video-----------------*/\n\n.smallLiveTvPanel {\n  width: 100%;\n  /* \toverflow: auto; */\n  clear: both;\n  padding-left: 1%;\n  /* \theight: 35.6vw; */\n  /* \tmax-height: 500px; */\n  margin-right: auto;\n  margin-left: auto;\n  width: 75%;\n  padding-top: 3vw; }\n\n.smallLiveTvPanel a {\n  text-decoration: none;\n  color: black; }\n\n.smallLiveTvPanel a:hover {\n  text-decoration: none;\n  color: black; }\n\n.videoPanel {\n  float: left;\n  width: 33%;\n  margin-top: 2em; }\n\n.blackcolor {\n  color: black !important;\n  font-weight: bold; }\n\n.videoPanel .title {\n  border-bottom: solid 1px #7e4855;\n  text-align: center;\n  color: #8e8e8e;\n  font-weight: bold;\n  font-size: 1vw; }\n\n.videoPanel {\n  padding: 1em 1em 0 1em;\n  height: 12vw; }\n\n.videoPanel .description {\n  padding-left: 1em;\n  padding-right: 1em;\n  padding-bottom: 1em;\n  font-size: 1vw;\n  line-height: 150%; }\n\n/*----------------------------- PAGE VIDEO DETAIL-------------------------*/\n\n.currentLiveTVPanelDetail {\n  width: 70%;\n  float: left; }\n\n.smallLiveTvPanelDetail {\n  width: 29%;\n  cursor: pointer;\n  float: left;\n  padding-left: 1%;\n  height: 36.5vw;\n  overflow-y: auto; }\n\n.smallLiveTvPanelDetail a {\n  text-decoration: none;\n  color: black; }\n\n.smallLiveTvPanelDetail a:hover {\n  text-decoration: none;\n  color: black; }\n\n.videoPanelDetail {\n  float: left;\n  width: 100%;\n  position: relative; }\n\n.videoPanelDetail .caption {\n  position: absolute;\n  top: 20%;\n  left: 25%;\n  width: 15%;\n  margin-left: -1%;\n  opacity: 0.7;\n  z-index: 1; }\n\n.videoPanelDetailmg {\n  float: left;\n  width: 70%; }\n\n.videoPanelDetailDescription {\n  float: left;\n  width: 35%;\n  padding-left: 2%;\n  font-size: 1vw;\n  line-height: 150%; }\n\n.multiple-items {\n  float: left;\n  width: 60%; }\n\n.holicdetail {\n  width: 100%;\n  padding: 0%;\n  margin: 0%;\n  padding: 0%;\n  display-block: 0;\n  margin-top: 0px;\n  margin-bottom: 0px; }\n\n.item {\n  height: 8.5vw !important; }\n\n#searchVideo img {\n  width: 1vw;\n  height: 1vw; }\n\nvideo:-webkit-full-screen {\n  max-height: 100%; }\n\nvideo:-moz-full-screen {\n  max-height: 100%; }\n\n.currentLiveTVPanel video::-webkit-media-controls-timeline {\n  visibility: hidden !important;\n  max-width: 40%; }\n\n.currentLiveTVPanel video::-webkit-media-controls-play-button {\n  display: none !important; }\n\n.currentLiveTVPanel video::-webkit-media-controls-current-time-display {\n  display: none !important; }\n\n.hiddden {\n  display: none !important; }\n\n.shown {\n  display: block !important; }\n\n.parentDiv {\n  position: absolute;\n  top: 11px;\n  right: 10px;\n  left: 10px;\n  height: calc(50% - 18px);\n  display: block; }\n\nbody > .formulaire {\n  margin-top: 150px; }\n\nbody > .formulaire img {\n  display: block;\n  width: 59px;\n  height: auto;\n  margin: 15px auto; }\n\nbody > .formulaire form ul {\n  text-align: center; }\n\nbody > .formulaire form ul > li {\n  margin: 10px 0;\n  list-style-type: none; }\n\nbody > .formulaire form ul > li > * {\n  display: inline-block;\n  vertical-align: middle; }\n\nbody > .formulaire form ul > li > label {\n  min-width: 100px;\n  text-align: left;\n  color: black; }\n\n.videoPanel2 {\n  width: 33%; }\n\n#progressbox {\n  position: relative;\n  width: 400px;\n  border: 1px solid #ddd;\n  padding: 1px;\n  border-radius: 3px; }\n\n#progressbar {\n  background-color: #cccccc;\n  width: 0%;\n  height: 20px;\n  border-radius: 4px; }\n\n#percent {\n  position: absolute;\n  display: inline-block;\n  top: 3px;\n  left: 48%; }\n\n.videotitle {\n  float: left; }\n\n.menu {\n  float: right;\n  padding: 1vw 0; }\n\n.mobile {\n  min-height: -webkit-fill-available !important;\n  min-width: -webkit-fill-available !important;\n  padding: 0 !important;\n  margin: 0 !important;\n  overflow: hidden !important;\n  font-family: 'Roboto' !important;\n  display: -webkit-box !important;\n  display: flex !important;\n  -webkit-box-orient: vertical !important;\n  -webkit-box-direction: normal !important;\n          flex-direction: column !important;\n  -webkit-box-pack: justify !important;\n          justify-content: space-between !important; }\n\nvideo {\n  width: 100%; }\n\n@media (max-width: 800px) {\n  #description {\n    margin: auto;\n    margin-top: 1em;\n    width: 20em; }\n  #logo1 {\n    height: 4em;\n    width: 4em; }\n  #loginB,\n  #loginB2 {\n    padding: 1em;\n    font-size: 100%;\n    width: auto;\n    text-align: center;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n            justify-content: center;\n    margin: 1em;\n    margin-right: 1.5em;\n    color: #2a9544;\n    border: 2px solid #2a9544; }\n  #main video {\n    max-width: 100%;\n    height: auto; }\n  #searchInput {\n    width: 50%;\n    height: auto;\n    border: 1px solid rgba(0, 0, 0, 0.3);\n    color: rgba(0, 0, 0, 0.7);\n    font-size: 110%;\n    padding: 1em; }\n  #footerWrp img {\n    height: 2em;\n    width: 2em;\n    margin-right: 0.85em; }\n  #mainWrpY > div {\n    height: 35em; }\n  #leftArrow,\n  #rightArrow {\n    display: none; }\n  .videotitle {\n    color: #7e4855;\n    font-size: 2vw;\n    padding: 1vw 0;\n    float: left; } }\n\n@media (min-width: 800px) {\n  #logo1 {\n    height: 3.2em;\n    width: 3.2em; }\n  #loginB {\n    padding: 5px;\n    font-size: 100%;\n    width: auto;\n    text-align: center;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n            justify-content: center;\n    margin: 1em;\n    margin-right: 1.5em;\n    color: #0088e3; }\n  #main video {\n    height: 29em;\n    -webkit-user-select: none;\n    /* Chrome all / Safari all */\n    -moz-user-select: none;\n    /* Firefox all */\n    -ms-user-select: none;\n    /* IE 10+ */\n    user-select: none; }\n  #searchInput {\n    width: 50%;\n    height: auto;\n    border: 1px solid rgba(0, 0, 0, 0.3);\n    color: rgba(0, 0, 0, 0.7);\n    font-size: 105%;\n    margin-bottom: 0.6em;\n    padding: 0.6em; }\n  #footerWrp img {\n    height: 2.3em;\n    width: 2.3em;\n    margin-right: 0.6em; }\n  .videotitle {\n    color: #7e4855;\n    font-size: 2vw;\n    padding: 1vw 0;\n    float: left; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlci9DOlxcVXNlcnNcXGhlcnZlXFxob2xpY1xcc3RhcnRuZy9zcmNcXGFwcFxccGFnZXNcXHVzZXJcXHVzZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3VzZXIvdXNlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUF3QixFQUFBOztBQUcxQjtFQUNFLCtCQUErQixFQUFBOztBQUdqQyxzRUFBQTs7QUFFQTtFQUNFLGFBQWEsRUFBQTs7QUFFZjtFQUNFLFdBQVc7RUFDWCxlQUFlLEVBQUE7O0FBRWpCOztFQUVFLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxXQUFXO0VBQ1gsV0FBVyxFQUFBOztBQUtiO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsaUJBQWlCLEVBQUE7O0FBR25COzs7Ozs7O0NDSEM7O0FEV0QsOENBQUE7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gscUJBQUE7RUFDQSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLHFCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxxQkFBcUI7RUFDckIsWUFBWSxFQUFBOztBQUdkO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVksRUFBQTs7QUFHZDtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsZUFBZSxFQUFBOztBQUVqQjtFQUNFLHVCQUF1QjtFQUN2QixpQkFBaUIsRUFBQTs7QUFFbkI7RUFDRSxnQ0FBZ0M7RUFDaEMsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsY0FBYyxFQUFBOztBQUdoQjtFQUNFLHNCQUFzQjtFQUN0QixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsaUJBQWlCLEVBQUE7O0FBR25CLDJFQUFBOztBQUNBO0VBQ0UsVUFBVTtFQUNWLFdBQVcsRUFBQTs7QUFHYjtFQUNFLFVBQVU7RUFDVixlQUFlO0VBQ2YsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVksRUFBQTs7QUFHZDtFQUNFLHFCQUFxQjtFQUNyQixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFdBQVc7RUFDWCxVQUFVLEVBQUE7O0FBR1o7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsV0FBVztFQUNYLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsVUFBVTtFQUNWLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLHdCQUF3QixFQUFBOztBQUcxQjtFQUNFLFVBQVU7RUFDVixXQUFXLEVBQUE7O0FBR2I7RUFDRSxnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFPbEI7RUFDRSw2QkFBNkI7RUFDN0IsY0FBYyxFQUFBOztBQUVoQjtFQUNFLHdCQUF3QixFQUFBOztBQUUxQjtFQUNFLHdCQUF3QixFQUFBOztBQUUxQjtFQUNFLHdCQUF3QixFQUFBOztBQUcxQjtFQUNFLHlCQUF5QixFQUFBOztBQUczQjtFQUVFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLFVBQVU7RUFFVix3QkFBd0I7RUFDeEIsY0FBYyxFQUFBOztBQUVoQjtFQUNFLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLGNBQWM7RUFDZCxxQkFBcUIsRUFBQTs7QUFFdkI7RUFDRSxxQkFBcUI7RUFDckIsc0JBQXNCLEVBQUE7O0FBRXhCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UseUJBQXlCO0VBQ3pCLFNBQVM7RUFDVCxZQUFZO0VBQ1osa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixRQUFRO0VBQ1IsU0FBUyxFQUFBOztBQUdYO0VBQ0UsV0FBVyxFQUFBOztBQUdiO0VBQ0UsWUFBWTtFQUNaLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSw2Q0FBNkM7RUFDN0MsNENBQTRDO0VBQzVDLHFCQUFxQjtFQUNyQixvQkFBb0I7RUFDcEIsMkJBQTJCO0VBQzNCLGdDQUFnQztFQUNoQywrQkFBd0I7RUFBeEIsd0JBQXdCO0VBQ3hCLHVDQUFpQztFQUFqQyx3Q0FBaUM7VUFBakMsaUNBQWlDO0VBQ2pDLG9DQUF5QztVQUF6Qyx5Q0FBeUMsRUFBQTs7QUFHM0M7RUFDRSxXQUFXLEVBQUE7O0FBR2I7RUFDRTtJQUNFLFlBQVk7SUFDWixlQUFlO0lBQ2YsV0FBVyxFQUFBO0VBRWI7SUFDRSxXQUFXO0lBQ1gsVUFBVSxFQUFBO0VBRVo7O0lBRUUsWUFBWTtJQUNaLGVBQWU7SUFDZixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCx5QkFBeUIsRUFBQTtFQUUzQjtJQUNFLGVBQWU7SUFDZixZQUFZLEVBQUE7RUFFZDtJQUNFLFVBQVU7SUFDVixZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsWUFBWSxFQUFBO0VBRWQ7SUFDRSxXQUFXO0lBQ1gsVUFBVTtJQUNWLG9CQUFvQixFQUFBO0VBRXRCO0lBQ0UsWUFBWSxFQUFBO0VBRWQ7O0lBRUUsYUFBYSxFQUFBO0VBR2Y7SUFDRSxjQUFjO0lBQ2QsY0FBYztJQUNkLGNBQWM7SUFDZCxXQUFXLEVBQUEsRUFDWjs7QUFFSDtFQUNFO0lBQ0UsYUFBYTtJQUNiLFlBQVksRUFBQTtFQUVkO0lBQ0UsWUFBWTtJQUNaLGVBQWU7SUFDZixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGNBQWMsRUFBQTtFQUVoQjtJQUNFLFlBQVk7SUFDWix5QkFBeUI7SUFBRSw0QkFBQTtJQUMzQixzQkFBc0I7SUFBRSxnQkFBQTtJQUN4QixxQkFBcUI7SUFBRSxXQUFBO0lBQ3ZCLGlCQUFpQixFQUFBO0VBRW5CO0lBQ0UsVUFBVTtJQUNWLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsY0FBYyxFQUFBO0VBR2hCO0lBQ0UsYUFBYTtJQUNiLFlBQVk7SUFDWixtQkFBbUIsRUFBQTtFQUlyQjtJQUNFLGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYztJQUNkLFdBQVcsRUFBQSxFQUNaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdXNlci91c2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xpdmVWaWRlbyB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuI3dyYXBwZXIge1xuICBwYWRkaW5nOiAwdncgMCAwIDRlbSAhaW1wb3J0YW50O1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4uaGlkZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uaG9saWNUdlBhbmVsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDJ2dztcbn1cbi5ob2xpY1R2UGFuZWwgPiBkaXYgPiBpbWcsXG5ob2xpY1R2UGFuZWwgPiBkaXYgPiBpbWcge1xuICBtYXJnaW46IDMwcHggMDtcbn1cblxuLmN1cnJlbnRMaXZlVFZQYW5lbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbn1cbi5jdXJyZW50TGl2ZVRWQ2FyZCB7XG59XG5cbi5jdXJyZW50TGl2ZVRWUGFuZWwgLmxpdmVUdlBhbmVsIHtcbiAgd2lkdGg6IDc1JTtcbiAgaGVpZ2h0OiAzOXZ3O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLmxpdmVUdlBhbmVsIHtcbiAgaGVpZ2h0OiAzMnZ3O1xufVxuXG4uY3VycmVudExpdmVUVlBhbmVsIC52aWRlb3RpdGxlIHtcbiAgY29sb3I6ICM3ZTQ4NTU7XG4gIGZvbnQtc2l6ZTogMnZ3O1xuICBwYWRkaW5nOiAxdncgMDtcbn1cblxuLmN1cnJlbnRMaXZlVFZQYW5lbCAudmlkZW9Db250ZW50VGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLypcbi5sb2dvIHtcblx0ZGlzcGxheTogYmxvY2s7XG5cdG1hcmdpbjogMCBhdXRvO1xuXHRtYXJnaW4tdG9wOiAxMDBweDtcblx0XG59XG4qL1xuLyotLS0tLS0tLS0tLS0tLS1TbWFsbCBWaWRlby0tLS0tLS0tLS0tLS0tLS0tKi9cbi5zbWFsbExpdmVUdlBhbmVsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIC8qIFx0b3ZlcmZsb3c6IGF1dG87ICovXG4gIGNsZWFyOiBib3RoO1xuICBwYWRkaW5nLWxlZnQ6IDElO1xuICAvKiBcdGhlaWdodDogMzUuNnZ3OyAqL1xuICAvKiBcdG1heC1oZWlnaHQ6IDUwMHB4OyAqL1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICB3aWR0aDogNzUlO1xuICBwYWRkaW5nLXRvcDogM3Z3O1xufVxuXG4uc21hbGxMaXZlVHZQYW5lbCBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5zbWFsbExpdmVUdlBhbmVsIGE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnZpZGVvUGFuZWwge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDMzJTtcbiAgbWFyZ2luLXRvcDogMmVtO1xufVxuLmJsYWNrY29sb3Ige1xuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4udmlkZW9QYW5lbCAudGl0bGUge1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggIzdlNDg1NTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzhlOGU4ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMXZ3O1xufVxuXG4udmlkZW9QYW5lbCB7XG4gIHBhZGRpbmc6IDFlbSAxZW0gMCAxZW07XG4gIGhlaWdodDogMTJ2dztcbn1cblxuLnZpZGVvUGFuZWwgLmRlc2NyaXB0aW9uIHtcbiAgcGFkZGluZy1sZWZ0OiAxZW07XG4gIHBhZGRpbmctcmlnaHQ6IDFlbTtcbiAgcGFkZGluZy1ib3R0b206IDFlbTtcbiAgZm9udC1zaXplOiAxdnc7XG4gIGxpbmUtaGVpZ2h0OiAxNTAlO1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFBBR0UgVklERU8gREVUQUlMLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4uY3VycmVudExpdmVUVlBhbmVsRGV0YWlsIHtcbiAgd2lkdGg6IDcwJTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5zbWFsbExpdmVUdlBhbmVsRGV0YWlsIHtcbiAgd2lkdGg6IDI5JTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZy1sZWZ0OiAxJTtcbiAgaGVpZ2h0OiAzNi41dnc7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5zbWFsbExpdmVUdlBhbmVsRGV0YWlsIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnNtYWxsTGl2ZVR2UGFuZWxEZXRhaWwgYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4udmlkZW9QYW5lbERldGFpbCB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udmlkZW9QYW5lbERldGFpbCAuY2FwdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMCU7XG4gIGxlZnQ6IDI1JTtcbiAgd2lkdGg6IDE1JTtcbiAgbWFyZ2luLWxlZnQ6IC0xJTtcbiAgb3BhY2l0eTogMC43O1xuICB6LWluZGV4OiAxO1xufVxuXG4udmlkZW9QYW5lbERldGFpbG1nIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA3MCU7XG59XG5cbi52aWRlb1BhbmVsRGV0YWlsRGVzY3JpcHRpb24ge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDM1JTtcbiAgcGFkZGluZy1sZWZ0OiAyJTtcbiAgZm9udC1zaXplOiAxdnc7XG4gIGxpbmUtaGVpZ2h0OiAxNTAlO1xufVxuXG4ubXVsdGlwbGUtaXRlbXMge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDYwJTtcbn1cblxuLmhvbGljZGV0YWlsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAlO1xuICBtYXJnaW46IDAlO1xuICBwYWRkaW5nOiAwJTtcbiAgZGlzcGxheS1ibG9jazogMDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG4uaXRlbSB7XG4gIGhlaWdodDogOC41dncgIWltcG9ydGFudDtcbn1cblxuI3NlYXJjaFZpZGVvIGltZyB7XG4gIHdpZHRoOiAxdnc7XG4gIGhlaWdodDogMXZ3O1xufVxuXG52aWRlbzotd2Via2l0LWZ1bGwtc2NyZWVuIHtcbiAgbWF4LWhlaWdodDogMTAwJTtcbn1cbnZpZGVvOi1tb3otZnVsbC1zY3JlZW4ge1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xufVxuXG4uY3VycmVudExpdmVUVlBhbmVsIHZpZGVvOjotd2Via2l0LW1lZGlhLWNvbnRyb2xzIHtcbiAgLy9kaXNwbGF5Om5vbmUgIWltcG9ydGFudDtcbn1cblxuLmN1cnJlbnRMaXZlVFZQYW5lbCB2aWRlbzo6LXdlYmtpdC1tZWRpYS1jb250cm9scy10aW1lbGluZSB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbiAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDQwJTtcbn1cbi5jdXJyZW50TGl2ZVRWUGFuZWwgdmlkZW86Oi13ZWJraXQtbWVkaWEtY29udHJvbHMtcGxheS1idXR0b24ge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG4uY3VycmVudExpdmVUVlBhbmVsIHZpZGVvOjotd2Via2l0LW1lZGlhLWNvbnRyb2xzLWN1cnJlbnQtdGltZS1kaXNwbGF5IHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuLmhpZGRkZW4ge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5zaG93biB7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbi5wYXJlbnREaXYgLy8gUmVzdWx0cyBpbiBhcm91bmQgNDAweDQwMCBwaXhlbHMgZm9yIG1lXG57XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMXB4O1xuICByaWdodDogMTBweDtcbiAgbGVmdDogMTBweDtcbiAgaGVpZ2h0OiAtd2Via2l0LWNhbGMoNTAlIC0gMThweCk7XG4gIGhlaWdodDogY2FsYyg1MCUgLSAxOHB4KTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5ib2R5ID4gLmZvcm11bGFpcmUge1xuICBtYXJnaW4tdG9wOiAxNTBweDtcbn1cbmJvZHkgPiAuZm9ybXVsYWlyZSBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDU5cHg7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAxNXB4IGF1dG87XG59XG5ib2R5ID4gLmZvcm11bGFpcmUgZm9ybSB1bCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmJvZHkgPiAuZm9ybXVsYWlyZSBmb3JtIHVsID4gbGkge1xuICBtYXJnaW46IDEwcHggMDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuYm9keSA+IC5mb3JtdWxhaXJlIGZvcm0gdWwgPiBsaSA+ICoge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5ib2R5ID4gLmZvcm11bGFpcmUgZm9ybSB1bCA+IGxpID4gbGFiZWwge1xuICBtaW4td2lkdGg6IDEwMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi52aWRlb1BhbmVsMiB7XG4gIHdpZHRoOiAzMyU7XG59XG5cbiNwcm9ncmVzc2JveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDQwMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBwYWRkaW5nOiAxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuI3Byb2dyZXNzYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcbiAgd2lkdGg6IDAlO1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuI3BlcmNlbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdG9wOiAzcHg7XG4gIGxlZnQ6IDQ4JTtcbn1cblxuLnZpZGVvdGl0bGUge1xuICBmbG9hdDogbGVmdDtcbn1cblxuLm1lbnUge1xuICBmbG9hdDogcmlnaHQ7XG4gIHBhZGRpbmc6IDF2dyAwO1xufVxuXG4ubW9iaWxlIHtcbiAgbWluLWhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZSAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGUgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogJ1JvYm90bycgIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50O1xufVxuXG52aWRlbyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcbiAgI2Rlc2NyaXB0aW9uIHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWFyZ2luLXRvcDogMWVtO1xuICAgIHdpZHRoOiAyMGVtO1xuICB9XG4gICNsb2dvMSB7XG4gICAgaGVpZ2h0OiA0ZW07XG4gICAgd2lkdGg6IDRlbTtcbiAgfVxuICAjbG9naW5CLFxuICAjbG9naW5CMiB7XG4gICAgcGFkZGluZzogMWVtO1xuICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICB3aWR0aDogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbjogMWVtO1xuICAgIG1hcmdpbi1yaWdodDogMS41ZW07XG4gICAgY29sb3I6ICMyYTk1NDQ7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzJhOTU0NDtcbiAgfVxuICAjbWFpbiB2aWRlbyB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuICAjc2VhcmNoSW5wdXQge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICAgIGZvbnQtc2l6ZTogMTEwJTtcbiAgICBwYWRkaW5nOiAxZW07XG4gIH1cbiAgI2Zvb3RlcldycCBpbWcge1xuICAgIGhlaWdodDogMmVtO1xuICAgIHdpZHRoOiAyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjg1ZW07XG4gIH1cbiAgI21haW5XcnBZID4gZGl2IHtcbiAgICBoZWlnaHQ6IDM1ZW07XG4gIH1cbiAgI2xlZnRBcnJvdyxcbiAgI3JpZ2h0QXJyb3cge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAudmlkZW90aXRsZSB7XG4gICAgY29sb3I6ICM3ZTQ4NTU7XG4gICAgZm9udC1zaXplOiAydnc7XG4gICAgcGFkZGluZzogMXZ3IDA7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA4MDBweCkge1xuICAjbG9nbzEge1xuICAgIGhlaWdodDogMy4yZW07XG4gICAgd2lkdGg6IDMuMmVtO1xuICB9XG4gICNsb2dpbkIge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBmb250LXNpemU6IDEwMCU7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46IDFlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEuNWVtO1xuICAgIGNvbG9yOiAjMDA4OGUzO1xuICB9XG4gICNtYWluIHZpZGVvIHtcbiAgICBoZWlnaHQ6IDI5ZW07XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogQ2hyb21lIGFsbCAvIFNhZmFyaSBhbGwgKi9cbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lOyAvKiBGaXJlZm94IGFsbCAqL1xuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTsgLyogSUUgMTArICovXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIH1cbiAgI3NlYXJjaElucHV0IHtcbiAgICB3aWR0aDogNTAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgICBmb250LXNpemU6IDEwNSU7XG4gICAgbWFyZ2luLWJvdHRvbTogMC42ZW07XG4gICAgcGFkZGluZzogMC42ZW07XG4gIH1cblxuICAjZm9vdGVyV3JwIGltZyB7XG4gICAgaGVpZ2h0OiAyLjNlbTtcbiAgICB3aWR0aDogMi4zZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjZlbTtcbiAgfVxuXG4gIFxuICAudmlkZW90aXRsZSB7XG4gICAgY29sb3I6ICM3ZTQ4NTU7XG4gICAgZm9udC1zaXplOiAydnc7XG4gICAgcGFkZGluZzogMXZ3IDA7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cbn1cbiIsIiNsaXZlVmlkZW8ge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cblxuI3dyYXBwZXIge1xuICBwYWRkaW5nOiAwdncgMCAwIDRlbSAhaW1wb3J0YW50OyB9XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4uaGlkZSB7XG4gIGRpc3BsYXk6IG5vbmU7IH1cblxuLmhvbGljVHZQYW5lbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAydnc7IH1cblxuLmhvbGljVHZQYW5lbCA+IGRpdiA+IGltZyxcbmhvbGljVHZQYW5lbCA+IGRpdiA+IGltZyB7XG4gIG1hcmdpbjogMzBweCAwOyB9XG5cbi5jdXJyZW50TGl2ZVRWUGFuZWwge1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7IH1cblxuLmN1cnJlbnRMaXZlVFZQYW5lbCAubGl2ZVR2UGFuZWwge1xuICB3aWR0aDogNzUlO1xuICBoZWlnaHQ6IDM5dnc7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87IH1cblxuLmxpdmVUdlBhbmVsIHtcbiAgaGVpZ2h0OiAzMnZ3OyB9XG5cbi5jdXJyZW50TGl2ZVRWUGFuZWwgLnZpZGVvdGl0bGUge1xuICBjb2xvcjogIzdlNDg1NTtcbiAgZm9udC1zaXplOiAydnc7XG4gIHBhZGRpbmc6IDF2dyAwOyB9XG5cbi5jdXJyZW50TGl2ZVRWUGFuZWwgLnZpZGVvQ29udGVudFRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cblxuLypcbi5sb2dvIHtcblx0ZGlzcGxheTogYmxvY2s7XG5cdG1hcmdpbjogMCBhdXRvO1xuXHRtYXJnaW4tdG9wOiAxMDBweDtcblx0XG59XG4qL1xuLyotLS0tLS0tLS0tLS0tLS1TbWFsbCBWaWRlby0tLS0tLS0tLS0tLS0tLS0tKi9cbi5zbWFsbExpdmVUdlBhbmVsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIC8qIFx0b3ZlcmZsb3c6IGF1dG87ICovXG4gIGNsZWFyOiBib3RoO1xuICBwYWRkaW5nLWxlZnQ6IDElO1xuICAvKiBcdGhlaWdodDogMzUuNnZ3OyAqL1xuICAvKiBcdG1heC1oZWlnaHQ6IDUwMHB4OyAqL1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICB3aWR0aDogNzUlO1xuICBwYWRkaW5nLXRvcDogM3Z3OyB9XG5cbi5zbWFsbExpdmVUdlBhbmVsIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBibGFjazsgfVxuXG4uc21hbGxMaXZlVHZQYW5lbCBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogYmxhY2s7IH1cblxuLnZpZGVvUGFuZWwge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDMzJTtcbiAgbWFyZ2luLXRvcDogMmVtOyB9XG5cbi5ibGFja2NvbG9yIHtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XG5cbi52aWRlb1BhbmVsIC50aXRsZSB7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjN2U0ODU1O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjOGU4ZThlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxdnc7IH1cblxuLnZpZGVvUGFuZWwge1xuICBwYWRkaW5nOiAxZW0gMWVtIDAgMWVtO1xuICBoZWlnaHQ6IDEydnc7IH1cblxuLnZpZGVvUGFuZWwgLmRlc2NyaXB0aW9uIHtcbiAgcGFkZGluZy1sZWZ0OiAxZW07XG4gIHBhZGRpbmctcmlnaHQ6IDFlbTtcbiAgcGFkZGluZy1ib3R0b206IDFlbTtcbiAgZm9udC1zaXplOiAxdnc7XG4gIGxpbmUtaGVpZ2h0OiAxNTAlOyB9XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gUEFHRSBWSURFTyBERVRBSUwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi5jdXJyZW50TGl2ZVRWUGFuZWxEZXRhaWwge1xuICB3aWR0aDogNzAlO1xuICBmbG9hdDogbGVmdDsgfVxuXG4uc21hbGxMaXZlVHZQYW5lbERldGFpbCB7XG4gIHdpZHRoOiAyOSU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmctbGVmdDogMSU7XG4gIGhlaWdodDogMzYuNXZ3O1xuICBvdmVyZmxvdy15OiBhdXRvOyB9XG5cbi5zbWFsbExpdmVUdlBhbmVsRGV0YWlsIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBibGFjazsgfVxuXG4uc21hbGxMaXZlVHZQYW5lbERldGFpbCBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogYmxhY2s7IH1cblxuLnZpZGVvUGFuZWxEZXRhaWwge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuXG4udmlkZW9QYW5lbERldGFpbCAuY2FwdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMCU7XG4gIGxlZnQ6IDI1JTtcbiAgd2lkdGg6IDE1JTtcbiAgbWFyZ2luLWxlZnQ6IC0xJTtcbiAgb3BhY2l0eTogMC43O1xuICB6LWluZGV4OiAxOyB9XG5cbi52aWRlb1BhbmVsRGV0YWlsbWcge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDcwJTsgfVxuXG4udmlkZW9QYW5lbERldGFpbERlc2NyaXB0aW9uIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAzNSU7XG4gIHBhZGRpbmctbGVmdDogMiU7XG4gIGZvbnQtc2l6ZTogMXZ3O1xuICBsaW5lLWhlaWdodDogMTUwJTsgfVxuXG4ubXVsdGlwbGUtaXRlbXMge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDYwJTsgfVxuXG4uaG9saWNkZXRhaWwge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMCU7XG4gIG1hcmdpbjogMCU7XG4gIHBhZGRpbmc6IDAlO1xuICBkaXNwbGF5LWJsb2NrOiAwO1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDsgfVxuXG4uaXRlbSB7XG4gIGhlaWdodDogOC41dncgIWltcG9ydGFudDsgfVxuXG4jc2VhcmNoVmlkZW8gaW1nIHtcbiAgd2lkdGg6IDF2dztcbiAgaGVpZ2h0OiAxdnc7IH1cblxudmlkZW86LXdlYmtpdC1mdWxsLXNjcmVlbiB7XG4gIG1heC1oZWlnaHQ6IDEwMCU7IH1cblxudmlkZW86LW1vei1mdWxsLXNjcmVlbiB7XG4gIG1heC1oZWlnaHQ6IDEwMCU7IH1cblxuLmN1cnJlbnRMaXZlVFZQYW5lbCB2aWRlbzo6LXdlYmtpdC1tZWRpYS1jb250cm9scy10aW1lbGluZSB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbiAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDQwJTsgfVxuXG4uY3VycmVudExpdmVUVlBhbmVsIHZpZGVvOjotd2Via2l0LW1lZGlhLWNvbnRyb2xzLXBsYXktYnV0dG9uIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XG5cbi5jdXJyZW50TGl2ZVRWUGFuZWwgdmlkZW86Oi13ZWJraXQtbWVkaWEtY29udHJvbHMtY3VycmVudC10aW1lLWRpc3BsYXkge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cblxuLmhpZGRkZW4ge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cblxuLnNob3duIHtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDsgfVxuXG4ucGFyZW50RGl2IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDExcHg7XG4gIHJpZ2h0OiAxMHB4O1xuICBsZWZ0OiAxMHB4O1xuICBoZWlnaHQ6IC13ZWJraXQtY2FsYyg1MCUgLSAxOHB4KTtcbiAgaGVpZ2h0OiBjYWxjKDUwJSAtIDE4cHgpO1xuICBkaXNwbGF5OiBibG9jazsgfVxuXG5ib2R5ID4gLmZvcm11bGFpcmUge1xuICBtYXJnaW4tdG9wOiAxNTBweDsgfVxuXG5ib2R5ID4gLmZvcm11bGFpcmUgaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA1OXB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMTVweCBhdXRvOyB9XG5cbmJvZHkgPiAuZm9ybXVsYWlyZSBmb3JtIHVsIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG5cbmJvZHkgPiAuZm9ybXVsYWlyZSBmb3JtIHVsID4gbGkge1xuICBtYXJnaW46IDEwcHggMDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lOyB9XG5cbmJvZHkgPiAuZm9ybXVsYWlyZSBmb3JtIHVsID4gbGkgPiAqIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyB9XG5cbmJvZHkgPiAuZm9ybXVsYWlyZSBmb3JtIHVsID4gbGkgPiBsYWJlbCB7XG4gIG1pbi13aWR0aDogMTAwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiBibGFjazsgfVxuXG4udmlkZW9QYW5lbDIge1xuICB3aWR0aDogMzMlOyB9XG5cbiNwcm9ncmVzc2JveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDQwMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBwYWRkaW5nOiAxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDsgfVxuXG4jcHJvZ3Jlc3NiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xuICB3aWR0aDogMCU7XG4gIGhlaWdodDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4OyB9XG5cbiNwZXJjZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRvcDogM3B4O1xuICBsZWZ0OiA0OCU7IH1cblxuLnZpZGVvdGl0bGUge1xuICBmbG9hdDogbGVmdDsgfVxuXG4ubWVudSB7XG4gIGZsb2F0OiByaWdodDtcbiAgcGFkZGluZzogMXZ3IDA7IH1cblxuLm1vYmlsZSB7XG4gIG1pbi1oZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGUgIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gIWltcG9ydGFudDsgfVxuXG52aWRlbyB7XG4gIHdpZHRoOiAxMDAlOyB9XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xuICAjZGVzY3JpcHRpb24ge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgd2lkdGg6IDIwZW07IH1cbiAgI2xvZ28xIHtcbiAgICBoZWlnaHQ6IDRlbTtcbiAgICB3aWR0aDogNGVtOyB9XG4gICNsb2dpbkIsXG4gICNsb2dpbkIyIHtcbiAgICBwYWRkaW5nOiAxZW07XG4gICAgZm9udC1zaXplOiAxMDAlO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luOiAxZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAxLjVlbTtcbiAgICBjb2xvcjogIzJhOTU0NDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMmE5NTQ0OyB9XG4gICNtYWluIHZpZGVvIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvOyB9XG4gICNzZWFyY2hJbnB1dCB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gICAgZm9udC1zaXplOiAxMTAlO1xuICAgIHBhZGRpbmc6IDFlbTsgfVxuICAjZm9vdGVyV3JwIGltZyB7XG4gICAgaGVpZ2h0OiAyZW07XG4gICAgd2lkdGg6IDJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuODVlbTsgfVxuICAjbWFpbldycFkgPiBkaXYge1xuICAgIGhlaWdodDogMzVlbTsgfVxuICAjbGVmdEFycm93LFxuICAjcmlnaHRBcnJvdyB7XG4gICAgZGlzcGxheTogbm9uZTsgfVxuICAudmlkZW90aXRsZSB7XG4gICAgY29sb3I6ICM3ZTQ4NTU7XG4gICAgZm9udC1zaXplOiAydnc7XG4gICAgcGFkZGluZzogMXZ3IDA7XG4gICAgZmxvYXQ6IGxlZnQ7IH0gfVxuXG5AbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIHtcbiAgI2xvZ28xIHtcbiAgICBoZWlnaHQ6IDMuMmVtO1xuICAgIHdpZHRoOiAzLjJlbTsgfVxuICAjbG9naW5CIHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgZm9udC1zaXplOiAxMDAlO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luOiAxZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAxLjVlbTtcbiAgICBjb2xvcjogIzAwODhlMzsgfVxuICAjbWFpbiB2aWRlbyB7XG4gICAgaGVpZ2h0OiAyOWVtO1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLyogQ2hyb21lIGFsbCAvIFNhZmFyaSBhbGwgKi9cbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC8qIEZpcmVmb3ggYWxsICovXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgIC8qIElFIDEwKyAqL1xuICAgIHVzZXItc2VsZWN0OiBub25lOyB9XG4gICNzZWFyY2hJbnB1dCB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gICAgZm9udC1zaXplOiAxMDUlO1xuICAgIG1hcmdpbi1ib3R0b206IDAuNmVtO1xuICAgIHBhZGRpbmc6IDAuNmVtOyB9XG4gICNmb290ZXJXcnAgaW1nIHtcbiAgICBoZWlnaHQ6IDIuM2VtO1xuICAgIHdpZHRoOiAyLjNlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNmVtOyB9XG4gIC52aWRlb3RpdGxlIHtcbiAgICBjb2xvcjogIzdlNDg1NTtcbiAgICBmb250LXNpemU6IDJ2dztcbiAgICBwYWRkaW5nOiAxdncgMDtcbiAgICBmbG9hdDogbGVmdDsgfSB9XG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/user/user.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/user/user.component.ts ***!
  \**********************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_service_userprofile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/service/userprofile.service */ "./src/app/pages/login/service/userprofile.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-device-detector */ "./node_modules/ngx-device-detector/fesm2015/ngx-device-detector.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_6__);
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







let UserComponent = class UserComponent {
    constructor(router, activatedRoute, userProfileService, snackBar, deviceService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.userProfileService = userProfileService;
        this.snackBar = snackBar;
        this.deviceService = deviceService;
    }
    ngOnInit() {
        this.isMobile = this.deviceService.isMobile();
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        const data = this.activatedRoute.snapshot.data['video'];
        this.username = this.activatedRoute.snapshot.params['username'];
        this.isHolic = this.username === 'holic';
        this.mainVideo = this.findVideoByType(data, 'MAINVIDEO');
        this.interviewVideo = this.findVideoByType(data, 'INTERVIEW');
        this.reportVideo = this.findVideoByType(data, 'REPORT');
        this.lifestyleVideo = this.findVideoByType(data, 'LIFESTYLE');
        this.musicVideo = this.findVideoByType(data, 'MUSIC_VIDEO');
        this.sportVideo = this.findVideoByType(data, 'SPORT');
        this.interview2Video = this.findVideoByType(data, 'INTERVIEW2');
        this.userProfileService.getPrincipal().subscribe((data) => {
            this.isConnected = this.userProfileService.isAuthenticated();
        }, (error) => {
            this.isConnected = false;
        });
        jquery__WEBPACK_IMPORTED_MODULE_5__(document).ready(function () {
            var element = document.getElementById('mobileId');
            // tslint:disable-next-line:prefer-const
            const mc = new hammerjs__WEBPACK_IMPORTED_MODULE_6__(element);
            mc.get('swipe').set({ direction: hammerjs__WEBPACK_IMPORTED_MODULE_6__["DIRECTION_ALL"] });
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
            var countDivY = jquery__WEBPACK_IMPORTED_MODULE_5__('#mainWrpY > div').length;
            document.addEventListener('touchstart', handleTouchStart, false);
            document.addEventListener('touchmove', handleTouchMove, false);
            jquery__WEBPACK_IMPORTED_MODULE_5__('#rightArrow').click(function () {
                if (i < 6) {
                    console.log(i);
                    right += 100;
                    jquery__WEBPACK_IMPORTED_MODULE_5__('.currentMainWrp').animate({ right: right + '%' }, 500);
                    jquery__WEBPACK_IMPORTED_MODULE_5__('.currentMainWrp .currVideo')[0].pause();
                    jquery__WEBPACK_IMPORTED_MODULE_5__('.currentMainWrp .currVideo').removeClass('currVideo');
                    i++;
                    jquery__WEBPACK_IMPORTED_MODULE_5__('.currentMainWrp video').eq(i).addClass('currVideo');
                    jquery__WEBPACK_IMPORTED_MODULE_5__('.currVideo')[0].play();
                }
            });
            jquery__WEBPACK_IMPORTED_MODULE_5__('#leftArrow').click(function () {
                console.log(i);
                if (i > 0) {
                    right -= 100;
                    jquery__WEBPACK_IMPORTED_MODULE_5__('.currentMainWrp').animate({ right: right + '%' }, 500);
                    i--;
                    jquery__WEBPACK_IMPORTED_MODULE_5__('.currentMainWrp .currVideo')[0].pause();
                    jquery__WEBPACK_IMPORTED_MODULE_5__('.currentMainWrp .currVideo').removeClass('currVideo');
                    jquery__WEBPACK_IMPORTED_MODULE_5__('.currentMainWrp video').eq(i).addClass('currVideo');
                    jquery__WEBPACK_IMPORTED_MODULE_5__('.currVideo')[0].play();
                }
            });
            var xDown = null;
            var yDown = null;
            function getTouches(evt) {
                return (evt.touches || evt.originalEvent.touches // browser API
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
                            jquery__WEBPACK_IMPORTED_MODULE_5__('.currentMainWrp').animate({ right: right + '%' }, 500);
                            jquery__WEBPACK_IMPORTED_MODULE_5__('.currentMainWrp .currVideo')[0].pause();
                            jquery__WEBPACK_IMPORTED_MODULE_5__('.currentMainWrp .currVideo').removeClass('currVideo');
                            i++;
                            jquery__WEBPACK_IMPORTED_MODULE_5__('.currentMainWrp video').eq(i).addClass('currVideo');
                            jquery__WEBPACK_IMPORTED_MODULE_5__('.currentMainWrp .currVideo')[0].play();
                        }
                    }
                    else {
                        if (i > 0) {
                            right -= 100;
                            jquery__WEBPACK_IMPORTED_MODULE_5__('.currentMainWrp').animate({ right: right + '%' }, 500);
                            i--;
                            jquery__WEBPACK_IMPORTED_MODULE_5__('.currentMainWrp .currVideo')[0].pause();
                            jquery__WEBPACK_IMPORTED_MODULE_5__('.currentMainWrp .currVideo').removeClass('currVideo');
                            jquery__WEBPACK_IMPORTED_MODULE_5__('.currentMainWrp video').eq(i).addClass('currVideo');
                            jquery__WEBPACK_IMPORTED_MODULE_5__('.currentMainWrp .currVideo')[0].play();
                        }
                    }
                }
                else {
                    if (yDiff > 0) {
                        if (j < countDivY - 1) {
                            j++;
                            i = 0;
                            right = 0;
                            jquery__WEBPACK_IMPORTED_MODULE_5__('#userC').html('User ' + (j + 1));
                            jquery__WEBPACK_IMPORTED_MODULE_5__('#mainWrpY > div').each(function (index) {
                                jquery__WEBPACK_IMPORTED_MODULE_5__(this).animate({ top: '-' + j * 35 + 'em' }, 500);
                            });
                            jquery__WEBPACK_IMPORTED_MODULE_5__('.currentMainWrp .currVideo')[0].pause();
                            jquery__WEBPACK_IMPORTED_MODULE_5__('.currentMainWrp')
                                .css('right', 0)
                                .removeClass('currentMainWrp');
                            jquery__WEBPACK_IMPORTED_MODULE_5__('#mainWrpY > div').eq(j).addClass('currentMainWrp');
                            jquery__WEBPACK_IMPORTED_MODULE_5__('.currentMainWrp .currVideo')[0].play();
                        }
                    }
                    else {
                        if (j > 0) {
                            j--;
                            i = 0;
                            right = 0;
                            jquery__WEBPACK_IMPORTED_MODULE_5__('#userC').html('User ' + (j + 1));
                            jquery__WEBPACK_IMPORTED_MODULE_5__('#mainWrpY > div').each(function (index) {
                                jquery__WEBPACK_IMPORTED_MODULE_5__(this).animate({ top: '-' + j * 35 + 'em' }, 500);
                            });
                            jquery__WEBPACK_IMPORTED_MODULE_5__('.currentMainWrp .currVideo')[0].pause();
                            jquery__WEBPACK_IMPORTED_MODULE_5__('.currentMainWrp')
                                .css('right', 0)
                                .removeClass('currentMainWrp');
                            jquery__WEBPACK_IMPORTED_MODULE_5__('#mainWrpY > div')
                                .eq(j)
                                .addClass('currentMainWrp')
                                .css('right', 0);
                            jquery__WEBPACK_IMPORTED_MODULE_5__('.currentMainWrp .currVideo')[0].play();
                        }
                    }
                }
                /* reset values */
                xDown = null;
                yDown = null;
            }
            function openFullscreen() {
                var elem = jquery__WEBPACK_IMPORTED_MODULE_5__('.currentMainWrp .currVideo')[0];
                if (elem.requestFullscreen) {
                    elem.requestFullscreen();
                }
                else if (elem.mozRequestFullScreen) {
                    /* Firefox */
                    elem.mozRequestFullScreen();
                }
                else if (elem.webkitRequestFullscreen) {
                    /* Chrome, Safari and Opera */
                    elem.webkitRequestFullscreen();
                }
                else if (elem.msRequestFullscreen) {
                    /* IE/Edge */
                    elem.msRequestFullscreen();
                }
            }
            screen.orientation.addEventListener('change', function (e) {
                if (screen.orientation.type == 'landscape-primary' ||
                    screen.orientation.type == 'landscape-secondary') {
                    openFullscreen();
                }
                else {
                    if (document.exitFullscreen) {
                        document.exitFullscreen();
                    }
                    else if (document.mozCancelFullScreen) {
                        document.mozCancelFullScreen();
                    }
                    else if (document.webkitExitFullscreen) {
                        document.webkitExitFullscreen();
                    }
                    else if (document.webkitCancelFullScreen) {
                        document.webkitCancelFullScreen();
                    }
                }
            }, false);
        });
    }
    ngOnChanges(changes) {
        this.username = this.activatedRoute.snapshot.params['username'];
    }
    ngAfterViewInit() {
        if (!this.isMobile) {
            this.main = this.matVideo.getVideoTag();
            this.main.addEventListener('playing', () => {
                if (!this.interviewVideo.mute &&
                    !this.reportVideo.mute &&
                    !this.lifestyleVideo.mute &&
                    !this.musicVideo.mute &&
                    !this.sportVideo.mute &&
                    !this.interview2Video.mute) {
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
            this.main.addEventListener('onclick', () => {
                console.log('tettt');
            });
            this.main.addEventListener('loadedmetadata', () => {
                const datebb = new Date();
                var x = datebb.valueOf() / 1000;
                this.mainVideo.time = x % this.main.duration;
                this.main.currentTime = x % this.main.duration;
            });
            this.main.addEventListener('mouseover', () => {
                this.mainVideo.fullscreen = true;
            });
            this.main.addEventListener('mouseout', () => {
                this.mainVideo.fullscreen = false;
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
            this.interview.addEventListener('loadedmetadata', () => {
                const datebb = new Date();
                var x = datebb.valueOf() / 1000;
                this.interviewVideo.time = x % this.interview.duration;
                this.interview.currentTime = x % this.interview.duration;
            });
        }
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
        return data.filter((p) => p.type === type)[0];
    }
    redirectHome() {
        this.router.navigate(['']);
    }
    detail(id) {
        this.router.navigate([
            '/video/' + id + '/' + this.mainVideo.id + '/' + this.mainVideo.username,
        ]);
    }
    userExist() {
        if (this.searchtext !== undefined && this.searchtext !== '') {
            this.userProfileService.userexist(this.searchtext).subscribe((p) => {
                if (p === false) {
                    this.snackBar.open('User does not exist', 'close', {
                        verticalPosition: 'top',
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
    previousUser() {
        this.userProfileService
            .previousUser(this.activatedRoute.snapshot.params.username)
            .subscribe((p) => {
            this.router.navigate(['/user/' + p.login]);
        }, (error) => {
            this.snackBar.open('User does not exist', 'close', {
                verticalPosition: 'top',
                duration: 500,
            });
        });
    }
    nextUser() {
        this.userProfileService
            .nextUser(this.activatedRoute.snapshot.params.username)
            .subscribe((p) => {
            this.router.navigate(['/user/' + p.login]);
        }, (error) => {
            this.snackBar.open('User does not exist', 'close', {
                verticalPosition: 'top',
                duration: 500,
            });
        });
    }
    keyPress(event) {
        if (event.which === 13) {
            this.userExist();
        }
    }
    login() {
        this.router.navigate(['login']);
    }
    onSwipeDown(evt) {
        this.previousUser();
    }
    onSwipeUp(evt) {
        this.nextUser();
    }
    onSwipeRight(evt) {
        this.test = 'right';
    }
    onSwipeLeft(evt) {
        this.test = 'left';
    }
};
UserComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
    { type: _login_service_userprofile_service__WEBPACK_IMPORTED_MODULE_2__["UserProfileService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
    { type: ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__["DeviceDetectorService"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('mainvid', { static: false }),
    __metadata("design:type", Object)
], UserComponent.prototype, "matVideo", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('reportvid', { static: false }),
    __metadata("design:type", Object)
], UserComponent.prototype, "matreportVideo", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sportvid', { static: false }),
    __metadata("design:type", Object)
], UserComponent.prototype, "matsportVideo", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('musicvid', { static: false }),
    __metadata("design:type", Object)
], UserComponent.prototype, "matmusicVideo", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('lifestylevid', { static: false }),
    __metadata("design:type", Object)
], UserComponent.prototype, "matlifestyleVideo", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('interview2vid', { static: false }),
    __metadata("design:type", Object)
], UserComponent.prototype, "matinterview2Video", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('interviewvid', { static: false }),
    __metadata("design:type", Object)
], UserComponent.prototype, "matinterviewVideo", void 0);
UserComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-user',
        template: __importDefault(__webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/user.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        styles: [__importDefault(__webpack_require__(/*! ./user.component.scss */ "./src/app/pages/user/user.component.scss")).default]
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
        _login_service_userprofile_service__WEBPACK_IMPORTED_MODULE_2__["UserProfileService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
        ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__["DeviceDetectorService"]])
], UserComponent);



/***/ }),

/***/ "./src/app/pages/user/user.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/user/user.module.ts ***!
  \*******************************************/
/*! exports provided: routes, UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/esm.js");
/* harmony import */ var _theme_directives_directives_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../theme/directives/directives.module */ "./src/app/theme/directives/directives.module.ts");
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user.component */ "./src/app/pages/user/user.component.ts");
/* harmony import */ var _video_video_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../video/video.module */ "./src/app/pages/video/video.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var src_app_app_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/app.module */ "./src/app/app.module.ts");
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
    { path: '', component: _user_component__WEBPACK_IMPORTED_MODULE_7__["UserComponent"], pathMatch: 'full' }
];
let UserModule = class UserModule {
};
UserModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarModule"],
            _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_5__["NgxChartsModule"],
            _theme_directives_directives_module__WEBPACK_IMPORTED_MODULE_6__["DirectivesModule"],
            _video_video_module__WEBPACK_IMPORTED_MODULE_8__["MatVideoModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"]
        ],
        declarations: [
            _user_component__WEBPACK_IMPORTED_MODULE_7__["UserComponent"]
        ],
        providers: [
            {
                provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["HAMMER_GESTURE_CONFIG"],
                useClass: src_app_app_module__WEBPACK_IMPORTED_MODULE_11__["MyHammerConfig"],
            },
        ]
    })
], UserModule);



/***/ })

}]);
//# sourceMappingURL=pages-user-user-module-es2015.js.map