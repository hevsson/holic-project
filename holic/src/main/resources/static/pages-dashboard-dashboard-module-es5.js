(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-dashboard-dashboard-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"!isMobile\">\n  <div>\n    <img\n      src=\"assets/img/holic/logo-holic-o.png\"\n      style=\"\n        margin-left: auto;\n        margin-right: auto;\n        width: 59px;\n        display: block;\n      \"\n    />\n  </div>\n  <div class=\"holicTvPanel\">\n    <div class=\"currentLiveTVPanel\">\n      <div\n        id=\"liveTvPanelPanel\"\n        class=\"liveTvPanel\"\n        (dblclick)=\"detail(mainVideo.id)\"\n      >\n        <div style=\"height: 39vw;\">\n          <div>\n            <mat-video\n              #mainvid\n              [title]=\"mainVideo.titre\"\n              [autoplay]=\"true\"\n              [loop]=\"true\"\n              [overlay]=\"false\"\n              [time]=\"mainVideo.time\"\n              [preload]=\"true\"\n              [fullscreen]=\"false\"\n              [download]=\"false\"\n              [muted]=\"mainVideo.mute\"\n              color=\"primary\"\n              spinner=\"spin\"\n            >\n              <source\n                matVideoSource\n                src=\"api/account/videos/{{ mainVideo.id }}\"\n                type=\"{{ mainVideo.format }}\"\n              />\n            </mat-video>\n          </div>\n          <div *ngIf=\"!isMobile\">\n            <div class=\"videotitle\">\n              HOLIC LIVE TV <span class=\"blackcolor\">|</span>\n              {{ mainVideo.username }}\n            </div>\n            <div class=\"menu\">\n              <img\n                (click)=\"redirectHome()\"\n                src=\"assets/img/holic/home.png\"\n                style=\"width: 30px;\"\n              />\n\n              <a (click)=\"previousUser()\">\n                <img\n                  src=\"assets/img/holic/bouton-holic-up.jpg\"\n                  style=\"width: 30px;\"\n              /></a>\n              <a (click)=\"nextUser()\"\n                ><img\n                  src=\"assets/img/holic/bouton-holic-dwn.jpg\"\n                  style=\"width: 30px;\"\n              /></a>\n              <a (click)=\"userExist()\">\n                <img\n                  src=\"assets/img/holic/search-icon.png\"\n                  style=\"width: 30px;\"\n              /></a>\n              <input\n                type=\"text\"\n                id=\"videoCategorieId\"\n                style=\"\n                  border: none;\n                  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n                  width: 24vw;\n                \"\n                [(ngModel)]=\"searchtext\"\n                (keypress)=\"keyPress($event)\"\n              />\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"smallLiveTvPanel\">\n      <div\n        class=\"videoPanel\"\n        (dblclick)=\"detail(interviewVideo.id)\"\n        (mouseover)=\"playInterview()\"\n        (mouseout)=\"muteInterview()\"\n      >\n        <a onclick=\"\">\n          <div class=\"title\">{{ interviewVideo.titre }}</div>\n          <div id=\"interviewVideoPanel\" class=\"video\">\n            <div id=\"interviewVideo\">\n              <div>\n                <mat-video\n                  #interviewvid\n                  [title]=\"interviewVideo.titre\"\n                  [autoplay]=\"true\"\n                  [loop]=\"true\"\n                  [overlay]=\"false\"\n                  [preload]=\"true\"\n                  [time]=\"interviewVideo.time\"\n                  [fullscreen]=\"false\"\n                  [download]=\"false\"\n                  [muted]=\"interviewVideo.mute\"\n                  color=\"accent\"\n                  spinner=\"spin\"\n                >\n                  <source\n                    matVideoSource\n                    src=\"api/account/videos/{{ interviewVideo.id }}\"\n                    type=\"{{ interviewVideo.format }}\"\n                  />\n                </mat-video>\n              </div>\n            </div>\n          </div>\n          <br />\n          <a class=\"description\">{{ interviewVideo.description }}</a>\n        </a>\n      </div>\n\n      <div\n        class=\"videoPanel\"\n        (dblclick)=\"detail(reportVideo.id)\"\n        (mouseover)=\"playReport()\"\n        (mouseout)=\"muteReport()\"\n      >\n        <a onclick=\"\">\n          <div class=\"title\">{{ reportVideo.description }}</div>\n          <div id=\"reportVideoPanel\" class=\"video\">\n            <div id=\"reportVideo\">\n              <div>\n                <mat-video\n                  #reportvid\n                  matVideoSource\n                  [title]=\"reportVideo.titre\"\n                  [autoplay]=\"true\"\n                  [loop]=\"true\"\n                  [overlay]=\"false\"\n                  [time]=\"reportVideo.time\"\n                  [fullscreen]=\"false\"\n                  [download]=\"false\"\n                  [muted]=\"reportVideo.mute\"\n                  [preload]=\"true\"\n                  color=\"accent\"\n                  spinner=\"spin\"\n                >\n                  <source\n                    src=\"api/account/videos/{{ reportVideo.id }}\"\n                    type=\"{{ reportVideo.format }}\"\n                  />\n                </mat-video>\n              </div>\n            </div>\n          </div>\n          <br />\n          <div class=\"description\">{{ reportVideo.description }}</div>\n        </a>\n      </div>\n\n      <div\n        class=\"videoPanel\"\n        (dblclick)=\"detail(sportVideo.id)\"\n        (mouseover)=\"playSport()\"\n        (mouseout)=\"muteSport()\"\n      >\n        <a onclick=\"\">\n          <div class=\"title\">{{ sportVideo.titre }}</div>\n          <div id=\"sportVideoPanel\" class=\"video\">\n            <div id=\"sportVideo\">\n              <div>\n                <mat-video\n                  #sportvid\n                  matVideoSource\n                  [title]=\"sportVideo.titre\"\n                  [autoplay]=\"true\"\n                  [loop]=\"true\"\n                  [time]=\"sportVideo.time\"\n                  [fullscreen]=\"false\"\n                  [download]=\"false\"\n                  [muted]=\"sportVideo.mute\"\n                  [overlay]=\"false\"\n                  [preload]=\"true\"\n                  color=\"accent\"\n                  spinner=\"spin\"\n                >\n                  >\n                  <source\n                    src=\"api/account/videos/{{ sportVideo.id }}\"\n                    type=\"{{ interviewVideo.format }}\"\n                  />\n                </mat-video>\n              </div>\n            </div>\n          </div>\n          <br />\n          <a class=\"description\">{{ sportVideo.description }}</a>\n        </a>\n      </div>\n    </div>\n\n    <div class=\"smallLiveTvPanel\">\n      <div\n        class=\"videoPanel\"\n        (dblclick)=\"detail(musicVideo.id)\"\n        (mouseover)=\"playMusic()\"\n        (mouseout)=\"muteMusic()\"\n      >\n        <a onclick=\"\">\n          <div class=\"title\">{{ musicVideo.titre }}</div>\n          <div id=\"musicVideoPanel\" class=\"video\">\n            <div id=\"musicVideo\">\n              <div>\n                <mat-video\n                  #musicvid\n                  [title]=\"musicVideo.titre\"\n                  [overlay]=\"false\"\n                  [autoplay]=\"true\"\n                  [loop]=\"true\"\n                  [time]=\"musicVideo.time\"\n                  [fullscreen]=\"false\"\n                  [download]=\"false\"\n                  [muted]=\"musicVideo.mute\"\n                  [preload]=\"true\"\n                  color=\"accent\"\n                  spinner=\"spin\"\n                >\n                  >\n                  <source\n                    matVideoSource\n                    src=\"api/account/videos/{{ musicVideo.id }}\"\n                    type=\"{{ interviewVideo.format }}\"\n                  />\n                </mat-video>\n              </div>\n            </div>\n          </div>\n          <br />\n          <a class=\"description\">{{ musicVideo.description }}</a>\n        </a>\n      </div>\n\n      <div\n        class=\"videoPanel\"\n        (dblclick)=\"detail(lifestyleVideo.id)\"\n        (mouseover)=\"playLifeStyle()\"\n        (mouseout)=\"muteLifeStyle()\"\n      >\n        <a onclick=\"\">\n          <div class=\"title\">{{ lifestyleVideo.titre }}</div>\n          <div id=\"lifestyleVideoPanel\" class=\"video\">\n            <div id=\"lifestyleVideo\">\n              <div>\n                <mat-video\n                  #lifestylevid\n                  [title]=\"lifestyleVideo.titre\"\n                  [autoplay]=\"true\"\n                  [preload]=\"true\"\n                  [loop]=\"true\"\n                  [time]=\"lifestyleVideo.time\"\n                  [overlay]=\"false\"\n                  [fullscreen]=\"false\"\n                  [preload]=\"true\"\n                  [download]=\"false\"\n                  [muted]=\"lifestyleVideo.mute\"\n                  color=\"accent\"\n                  spinner=\"spin\"\n                >\n                  >\n                  <source\n                    matVideoSource\n                    src=\"api/account/videos/{{ lifestyleVideo.id }}\"\n                    type=\"{{ lifestyleVideo.format }}\"\n                  />\n                </mat-video>\n              </div>\n            </div>\n          </div>\n          <br />\n          <a class=\"description\">{{ lifestyleVideo.description }}</a>\n        </a>\n      </div>\n\n      <div\n        class=\"videoPanel\"\n        (dblclick)=\"detail(interview2Video.id)\"\n        (mouseover)=\"playInterview2()\"\n        (mouseout)=\"muteInterview2()\"\n      >\n        <a onclick=\"\">\n          <div class=\"title\">\n            {{ interview2Video.titre }}\n          </div>\n          <div id=\"interview2VideoPanel\" class=\"video\">\n            <div id=\"interview2Video\">\n              <div>\n                <mat-video\n                  #interview2vid\n                  [title]=\"interview2Video.titre\"\n                  [autoplay]=\"true\"\n                  [preload]=\"true\"\n                  [loop]=\"true\"\n                  [time]=\"interview2Video.time\"\n                  [fullscreen]=\"false\"\n                  [download]=\"false\"\n                  [preload]=\"true\"\n                  [overlay]=\"false\"\n                  [muted]=\"interview2Video.mute\"\n                  color=\"accent\"\n                  spinner=\"spin\"\n                >\n                  >\n                  <source\n                    matVideoSource\n                    src=\"api/account/videos/{{ interview2Video.id }}\"\n                    type=\"{{ interview2Video.format }}\"\n                  />\n                </mat-video>\n              </div>\n            </div>\n          </div>\n          <br />\n          <a class=\"description\">{{ interview2Video.description }}</a>\n        </a>\n      </div>\n    </div>\n\n    <div class=\"smallLiveTvPanel\"></div>\n  </div>\n</div>\n\n<div\n  *ngIf=\"isMobile\"\n  class=\"mobile\"\n  id=\"mobileId\"\n  (swipeup)=\"onSwipeUp($event)\"\n  (swipedown)=\"onSwipeDown($event)\"\n  style=\"background-color: white;\"\n>\n  <header\n    style=\"\n      width: 100%;\n      background: #fbfbfb;\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n    \"\n  >\n    <span id=\"loginB2\" style=\"visibility: hidden;\"\n      >LOGIN</span\n    >\n    <img src=\"assets/img/holic/logo-holic-o.png\" id=\"logo1\" />\n\n    <div class=\"col-2\" style=\"display: none;\">\n      <button type=\"button\" class=\"btn btn-primary\">\n        Login\n      </button>\n    </div>\n  </header>\n\n  <div\n    id=\"main\"\n    touch-action=\"none\"\n    style=\"\n      height: 30em;\n      width: 100%;\n      display: flex;\n      flex-direction: column;\n      justify-content: flex-end;\n      -webkit-user-select: none;\n      -moz-user-select: none;\n      -ms-user-select: none;\n      user-select: none;\n    \"\n  >\n    <img\n      id=\"leftArrow\"\n      src=\"assets/img/holic/left.png\"\n      style=\"\n        height: 3em;\n        width: 3em;\n        position: absolute;\n        left: 1em;\n        top: 50%;\n        z-index: 999;\n      \"\n    />\n    <img\n      id=\"rightArrow\"\n      src=\"assets/img/holic/right.png\"\n      style=\"\n        height: 3em;\n        width: 3em;\n        position: absolute;\n        right: 1em;\n        top: 50%;\n        z-index: 999;\n      \"\n    />\n\n    <div\n      style=\"\n        height: 700%;\n        overflow: hidden;\n        position: relative;\n        top: 0;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n      \"\n      id=\"mainWrpY\"\n    >\n      <div\n        class=\"currentMainWrp\"\n        style=\"\n          width: 700%;\n          overflow: hidden;\n          position: relative;\n          display: flex;\n          right: 0;\n          top: 0;\n        \"\n      >\n        <div\n          style=\"\n            display: flex;\n            flex-direction: column;\n            height: 100%;\n            width: 100%;\n          \"\n        >\n          <video class=\"currVideo holicvideo\" controls allowfullscreen=\"true\">\n            <source\n              src=\"api/account/videos/{{ mainVideo.id }}\"\n              type=\"video/mp4\"\n            />\n          </video>\n          <span class=\"videotitle\"\n            >HOLIC LIVE TV <span class=\"blackcolor\">|</span>\n            {{ mainVideo.username }}</span\n          >\n        </div>\n        <div\n          style=\"\n            display: flex;\n            flex-direction: column;\n            height: 100%;\n            width: 100%;\n          \"\n        >\n          <video controls allowfullscreen=\"true\" class=\"holicvideo\">\n            <source\n              src=\"api/account/videos/{{ interviewVideo.id }}\"\n              type=\"video/mp4\"\n            />\n          </video>\n          <span class=\"videotitle\">{{ interviewVideo.titre }}</span>\n          <br />\n          <span class=\"videotitle\">{{ interviewVideo.description }}</span>\n        </div>\n        <div\n          style=\"\n            display: flex;\n            flex-direction: column;\n            height: 100%;\n            width: 100%;\n          \"\n        >\n          <video controls allowfullscreen=\"true\" class=\"holicvideo\">\n            <source\n              src=\"api/account/videos/{{ reportVideo.id }}\"\n              type=\"video/mp4\"\n            />\n          </video>\n          <span class=\"videotitle\">{{ reportVideo.titre }}</span>\n          <br />\n          <span class=\"videotitle\">{{ reportVideo.description }}</span>\n        </div>\n\n        <div\n          style=\"\n            display: flex;\n            flex-direction: column;\n            height: 100%;\n            width: 100%;\n          \"\n        >\n          <video controls allowfullscreen=\"true\" class=\"holicvideo\">\n            <source\n              src=\"api/account/videos/{{ sportVideo.id }}\"\n              type=\"video/mp4\"\n            />\n          </video>\n          <span class=\"videotitle\">{{ sportVideo.titre }}</span>\n          <br />\n          <span class=\"videotitle\">{{ sportVideo.description }}</span>\n        </div>\n\n        <div\n          style=\"\n            display: flex;\n            flex-direction: column;\n            height: 100%;\n            width: 100%;\n          \"\n        >\n          <video controls allowfullscreen=\"true\" class=\"holicvideo\">\n            <source\n              src=\"api/account/videos/{{ musicVideo.id }}\"\n              type=\"video/mp4\"\n            />\n          </video>\n          <span class=\"videotitle\">{{ musicVideo.titre }}</span>\n          <br />\n          <span class=\"videotitle\">{{ musicVideo.description }}</span>\n        </div>\n\n        <div\n          style=\"\n            display: flex;\n            flex-direction: column;\n            height: 100%;\n            width: 100%;\n          \"\n        >\n          <video controls allowfullscreen=\"true\" class=\"holicvideo\">\n            <source\n              src=\"api/account/videos/{{ lifestyleVideo.id }}\"\n              type=\"video/mp4\"\n            />\n          </video>\n          <span class=\"videotitle\">{{ lifestyleVideo.titre }}</span>\n          <br />\n          <span class=\"videotitle\">{{ lifestyleVideo.description }}</span>\n        </div>\n\n        <div\n          style=\"\n            display: flex;\n            flex-direction: column;\n            height: 100%;\n            width: 100%;\n          \"\n        >\n          <video controls allowfullscreen=\"true\" class=\"holicvideo\">\n            <source\n              src=\"api/account/videos/{{ interview2Video.id }}\"\n              type=\"video/mp4\"\n            />\n          </video>\n          <span class=\"videotitle\">{{ interview2Video.titre }}</span>\n          <br />\n          <span class=\"videotitle\">{{ interview2Video.description }}</span>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <footer\n    style=\"\n      display: flex;\n      padding: 1em;\n      padding-left: 1em;\n      background: #f5f5f5;\n      justify-content: space-between;\n      align-items: center;\n      border-color: gray;\n    \"\n  >\n    <div style=\"display: flex;\" id=\"footerWrp\">\n      <a href=\"\"> <img src=\"assets/img/holic/home.png\" /> </a>\n      <a href=\"http://twitter.com\">\n        <img src=\"assets/img/holic/twitter.png\" />\n      </a>\n      <a href=\"http://fb.com\"> <img src=\"assets/img/holic/fb.png\" /> </a>\n    </div>\n    <input\n      type=\"text\"\n      placeholder=\"Search...\"\n      id=\"searchInput\"\n      [(ngModel)]=\"searchtext\"\n      (keypress)=\"keyPress($event)\"\n    />\n  </footer>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/pages/dashboard/dashboard.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/pages/dashboard/dashboard.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesDashboardDashboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#liveVideo {\n  display: none !important; }\n\n#wrapper {\n  padding: 0vw 0 0 4em !important; }\n\n/*-------------------------------------------------------------------*/\n\n.hide {\n  display: none; }\n\n.holicTvPanel {\n  width: 100%;\n  margin-top: 2vw; }\n\n.holicTvPanel > div > img,\nholicTvPanel > div > img {\n  margin: 30px 0; }\n\n.currentLiveTVPanel {\n  width: 100%;\n  float: left; }\n\n.currentLiveTVPanel .liveTvPanel {\n  width: 75%;\n  height: 39vw;\n  margin-left: auto;\n  margin-right: auto; }\n\n.liveTvPanel {\n  height: 32vw; }\n\n.currentLiveTVPanel .videotitle {\n  color: #7e4855;\n  font-size: 2vw;\n  padding: 1vw 0; }\n\n.currentLiveTVPanel .videoContentTitle {\n  font-weight: bold; }\n\n/*\n.logo {\n\tdisplay: block;\n\tmargin: 0 auto;\n\tmargin-top: 100px;\n\t\n}\n*/\n\n/*---------------Small Video-----------------*/\n\n.smallLiveTvPanel {\n  width: 100%;\n  /* \toverflow: auto; */\n  clear: both;\n  padding-left: 1%;\n  /* \theight: 35.6vw; */\n  /* \tmax-height: 500px; */\n  margin-right: auto;\n  margin-left: auto;\n  width: 75%;\n  padding-top: 3vw; }\n\n.smallLiveTvPanel a {\n  text-decoration: none;\n  color: black; }\n\n.smallLiveTvPanel a:hover {\n  text-decoration: none;\n  color: black; }\n\n.videoPanel {\n  float: left;\n  width: 33%;\n  margin-top: 2em; }\n\n.blackcolor {\n  color: black !important;\n  font-weight: bold; }\n\n.videoPanel .title {\n  border-bottom: solid 1px #7e4855;\n  text-align: center;\n  color: #8e8e8e;\n  font-weight: bold;\n  font-size: 1vw; }\n\n.videoPanel {\n  padding: 1em 1em 0 1em;\n  height: 12vw; }\n\n.videoPanel .description {\n  padding-left: 1em;\n  padding-right: 1em;\n  padding-bottom: 1em;\n  font-size: 1vw;\n  line-height: 150%; }\n\n/*----------------------------- PAGE VIDEO DETAIL-------------------------*/\n\n.currentLiveTVPanelDetail {\n  width: 70%;\n  float: left; }\n\n.smallLiveTvPanelDetail {\n  width: 29%;\n  cursor: pointer;\n  float: left;\n  padding-left: 1%;\n  height: 36.5vw;\n  overflow-y: auto; }\n\n.smallLiveTvPanelDetail a {\n  text-decoration: none;\n  color: black; }\n\n.smallLiveTvPanelDetail a:hover {\n  text-decoration: none;\n  color: black; }\n\n.videoPanelDetail {\n  float: left;\n  width: 100%;\n  position: relative; }\n\n.videoPanelDetail .caption {\n  position: absolute;\n  top: 20%;\n  left: 25%;\n  width: 15%;\n  margin-left: -1%;\n  opacity: 0.7;\n  z-index: 1; }\n\n.videoPanelDetailmg {\n  float: left;\n  width: 70%; }\n\n.videoPanelDetailDescription {\n  float: left;\n  width: 35%;\n  padding-left: 2%;\n  font-size: 1vw;\n  line-height: 150%; }\n\n.multiple-items {\n  float: left;\n  width: 60%; }\n\n.holicdetail {\n  width: 100%;\n  padding: 0%;\n  margin: 0%;\n  padding: 0%;\n  display-block: 0;\n  margin-top: 0px;\n  margin-bottom: 0px; }\n\n.item {\n  height: 8.5vw !important; }\n\n#searchVideo img {\n  width: 1vw;\n  height: 1vw; }\n\nvideo:-webkit-full-screen {\n  max-height: 100%; }\n\nvideo:-moz-full-screen {\n  max-height: 100%; }\n\n.currentLiveTVPanel video::-webkit-media-controls-timeline {\n  visibility: hidden !important;\n  max-width: 40%; }\n\n.currentLiveTVPanel video::-webkit-media-controls-play-button {\n  display: none !important; }\n\n.currentLiveTVPanel video::-webkit-media-controls-current-time-display {\n  display: none !important; }\n\n.hiddden {\n  display: none !important; }\n\n.shown {\n  display: block !important; }\n\n.parentDiv {\n  position: absolute;\n  top: 11px;\n  right: 10px;\n  left: 10px;\n  height: calc(50% - 18px);\n  display: block; }\n\nbody > .formulaire {\n  margin-top: 150px; }\n\nbody > .formulaire img {\n  display: block;\n  width: 59px;\n  height: auto;\n  margin: 15px auto; }\n\nbody > .formulaire form ul {\n  text-align: center; }\n\nbody > .formulaire form ul > li {\n  margin: 10px 0;\n  list-style-type: none; }\n\nbody > .formulaire form ul > li > * {\n  display: inline-block;\n  vertical-align: middle; }\n\nbody > .formulaire form ul > li > label {\n  min-width: 100px;\n  text-align: left;\n  color: black; }\n\n.videoPanel2 {\n  width: 33%; }\n\n#progressbox {\n  position: relative;\n  width: 400px;\n  border: 1px solid #ddd;\n  padding: 1px;\n  border-radius: 3px; }\n\n#progressbar {\n  background-color: #cccccc;\n  width: 0%;\n  height: 20px;\n  border-radius: 4px; }\n\n#percent {\n  position: absolute;\n  display: inline-block;\n  top: 3px;\n  left: 48%; }\n\n.videotitle {\n  float: left; }\n\n.menu {\n  float: right;\n  padding: 1vw 0; }\n\n.mobile {\n  min-height: -webkit-fill-available !important;\n  min-width: -webkit-fill-available !important;\n  padding: 0 !important;\n  margin: 0 !important;\n  overflow: hidden !important;\n  font-family: 'Roboto' !important;\n  display: -webkit-box !important;\n  display: flex !important;\n  -webkit-box-orient: vertical !important;\n  -webkit-box-direction: normal !important;\n          flex-direction: column !important;\n  -webkit-box-pack: justify !important;\n          justify-content: space-between !important; }\n\nvideo {\n  width: 100%; }\n\n@media (max-width: 800px) {\n  #description {\n    margin: auto;\n    margin-top: 1em;\n    width: 20em; }\n  #logo1 {\n    height: 4em;\n    width: 4em; }\n  #loginB,\n  #loginB2 {\n    padding: 1em;\n    font-size: 100%;\n    width: auto;\n    text-align: center;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n            justify-content: center;\n    margin: 1em;\n    margin-right: 1.5em;\n    color: #2a9544;\n    border: 2px solid #2a9544; }\n  #main video {\n    max-width: 100%;\n    height: auto; }\n  #searchInput {\n    width: 50%;\n    height: auto;\n    border: 1px solid rgba(0, 0, 0, 0.3);\n    color: rgba(0, 0, 0, 0.7);\n    font-size: 110%;\n    padding: 1em; }\n  #footerWrp img {\n    height: 2em;\n    width: 2em;\n    margin-right: 0.85em; }\n  #mainWrpY > div {\n    height: 35em; }\n  #leftArrow,\n  #rightArrow {\n    display: none; }\n  .videotitle {\n    color: #7e4855;\n    font-size: 2vw;\n    padding: 1vw 0;\n    float: left; } }\n\n@media (min-width: 800px) {\n  #logo1 {\n    height: 3.2em;\n    width: 3.2em; }\n  #loginB {\n    padding: 5px;\n    font-size: 100%;\n    width: auto;\n    text-align: center;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n            justify-content: center;\n    margin: 1em;\n    margin-right: 1.5em;\n    color: #0088e3; }\n  #main video {\n    height: 29em;\n    -webkit-user-select: none;\n    /* Chrome all / Safari all */\n    -moz-user-select: none;\n    /* Firefox all */\n    -ms-user-select: none;\n    /* IE 10+ */\n    user-select: none; }\n  #searchInput {\n    width: 50%;\n    height: auto;\n    border: 1px solid rgba(0, 0, 0, 0.3);\n    color: rgba(0, 0, 0, 0.7);\n    font-size: 105%;\n    margin-bottom: 0.6em;\n    padding: 0.6em; }\n  #footerWrp img {\n    height: 2.3em;\n    width: 2.3em;\n    margin-right: 0.6em; }\n  .videotitle {\n    color: #7e4855;\n    font-size: 2vw;\n    padding: 1vw 0;\n    float: left; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL0M6XFxVc2Vyc1xcaGVydmVcXGhvbGljXFxzdGFydG5nL3NyY1xcYXBwXFxwYWdlc1xcZGFzaGJvYXJkXFxkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBd0IsRUFBQTs7QUFHMUI7RUFDRSwrQkFBK0IsRUFBQTs7QUFHakMsc0VBQUE7O0FBRUE7RUFDRSxhQUFhLEVBQUE7O0FBRWY7RUFDRSxXQUFXO0VBQ1gsZUFBZSxFQUFBOztBQUVqQjs7RUFFRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsV0FBVztFQUNYLFdBQVcsRUFBQTs7QUFHYjtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLGNBQWM7RUFDZCxjQUFjO0VBQ2QsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGlCQUFpQixFQUFBOztBQUduQjs7Ozs7OztDQ0RDOztBRFNELDhDQUFBOztBQUNBO0VBQ0UsV0FBVztFQUNYLHFCQUFBO0VBQ0EsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixxQkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVksRUFBQTs7QUFHZDtFQUNFLHFCQUFxQjtFQUNyQixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLGVBQWUsRUFBQTs7QUFFakI7RUFDRSx1QkFBdUI7RUFDdkIsaUJBQWlCLEVBQUE7O0FBRW5CO0VBQ0UsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWSxFQUFBOztBQUdkO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGlCQUFpQixFQUFBOztBQUduQiwyRUFBQTs7QUFDQTtFQUNFLFVBQVU7RUFDVixXQUFXLEVBQUE7O0FBR2I7RUFDRSxVQUFVO0VBQ1YsZUFBZTtFQUNmLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLHFCQUFxQjtFQUNyQixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxxQkFBcUI7RUFDckIsWUFBWSxFQUFBOztBQUdkO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixVQUFVLEVBQUE7O0FBR1o7RUFDRSxXQUFXO0VBQ1gsVUFBVSxFQUFBOztBQUdaO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLFdBQVc7RUFDWCxVQUFVLEVBQUE7O0FBR1o7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLFVBQVU7RUFDVixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSx3QkFBd0IsRUFBQTs7QUFHMUI7RUFDRSxVQUFVO0VBQ1YsV0FBVyxFQUFBOztBQUdiO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBT2xCO0VBQ0UsNkJBQTZCO0VBQzdCLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSx3QkFBd0IsRUFBQTs7QUFFMUI7RUFDRSx3QkFBd0IsRUFBQTs7QUFFMUI7RUFDRSx3QkFBd0IsRUFBQTs7QUFHMUI7RUFDRSx5QkFBeUIsRUFBQTs7QUFHM0I7RUFFRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxVQUFVO0VBRVYsd0JBQXdCO0VBQ3hCLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxpQkFBaUIsRUFBQTs7QUFFbkI7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUIsRUFBQTs7QUFFbkI7RUFDRSxrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSxjQUFjO0VBQ2QscUJBQXFCLEVBQUE7O0FBRXZCO0VBQ0UscUJBQXFCO0VBQ3JCLHNCQUFzQixFQUFBOztBQUV4QjtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsWUFBWSxFQUFBOztBQUdkO0VBQ0UsVUFBVSxFQUFBOztBQUdaO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLHlCQUF5QjtFQUN6QixTQUFTO0VBQ1QsWUFBWTtFQUNaLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsUUFBUTtFQUNSLFNBQVMsRUFBQTs7QUFHWDtFQUNFLFdBQVcsRUFBQTs7QUFHYjtFQUNFLFlBQVk7RUFDWixjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsNkNBQTZDO0VBQzdDLDRDQUE0QztFQUM1QyxxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLDJCQUEyQjtFQUMzQixnQ0FBZ0M7RUFDaEMsK0JBQXdCO0VBQXhCLHdCQUF3QjtFQUN4Qix1Q0FBaUM7RUFBakMsd0NBQWlDO1VBQWpDLGlDQUFpQztFQUNqQyxvQ0FBeUM7VUFBekMseUNBQXlDLEVBQUE7O0FBRzNDO0VBQ0UsV0FBVyxFQUFBOztBQUdiO0VBQ0U7SUFDRSxZQUFZO0lBQ1osZUFBZTtJQUNmLFdBQVcsRUFBQTtFQUViO0lBQ0UsV0FBVztJQUNYLFVBQVUsRUFBQTtFQUVaOztJQUVFLFlBQVk7SUFDWixlQUFlO0lBQ2YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixvQkFBYTtJQUFiLGFBQWE7SUFDYix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QseUJBQXlCLEVBQUE7RUFFM0I7SUFDRSxlQUFlO0lBQ2YsWUFBWSxFQUFBO0VBRWQ7SUFDRSxVQUFVO0lBQ1YsWUFBWTtJQUNaLG9DQUFvQztJQUNwQyx5QkFBeUI7SUFDekIsZUFBZTtJQUNmLFlBQVksRUFBQTtFQUVkO0lBQ0UsV0FBVztJQUNYLFVBQVU7SUFDVixvQkFBb0IsRUFBQTtFQUV0QjtJQUNFLFlBQVksRUFBQTtFQUVkOztJQUVFLGFBQWEsRUFBQTtFQUlmO0lBQ0UsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjO0lBQ2QsV0FBVyxFQUFBLEVBQ1o7O0FBRUg7RUFDRTtJQUNFLGFBQWE7SUFDYixZQUFZLEVBQUE7RUFFZDtJQUNFLFlBQVk7SUFDWixlQUFlO0lBQ2YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixvQkFBYTtJQUFiLGFBQWE7SUFDYix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixjQUFjLEVBQUE7RUFFaEI7SUFDRSxZQUFZO0lBQ1oseUJBQXlCO0lBQUUsNEJBQUE7SUFDM0Isc0JBQXNCO0lBQUUsZ0JBQUE7SUFDeEIscUJBQXFCO0lBQUUsV0FBQTtJQUN2QixpQkFBaUIsRUFBQTtFQUVuQjtJQUNFLFVBQVU7SUFDVixZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGNBQWMsRUFBQTtFQUdoQjtJQUNFLGFBQWE7SUFDYixZQUFZO0lBQ1osbUJBQW1CLEVBQUE7RUFJckI7SUFDRSxjQUFjO0lBQ2QsY0FBYztJQUNkLGNBQWM7SUFDZCxXQUFXLEVBQUEsRUFDWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbGl2ZVZpZGVvIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4jd3JhcHBlciB7XG4gIHBhZGRpbmc6IDB2dyAwIDAgNGVtICFpbXBvcnRhbnQ7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi5oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5ob2xpY1R2UGFuZWwge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMnZ3O1xufVxuLmhvbGljVHZQYW5lbCA+IGRpdiA+IGltZyxcbmhvbGljVHZQYW5lbCA+IGRpdiA+IGltZyB7XG4gIG1hcmdpbjogMzBweCAwO1xufVxuXG4uY3VycmVudExpdmVUVlBhbmVsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4uY3VycmVudExpdmVUVlBhbmVsIC5saXZlVHZQYW5lbCB7XG4gIHdpZHRoOiA3NSU7XG4gIGhlaWdodDogMzl2dztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbi5saXZlVHZQYW5lbCB7XG4gIGhlaWdodDogMzJ2dztcbn1cblxuLmN1cnJlbnRMaXZlVFZQYW5lbCAudmlkZW90aXRsZSB7XG4gIGNvbG9yOiAjN2U0ODU1O1xuICBmb250LXNpemU6IDJ2dztcbiAgcGFkZGluZzogMXZ3IDA7XG59XG5cbi5jdXJyZW50TGl2ZVRWUGFuZWwgLnZpZGVvQ29udGVudFRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi8qXG4ubG9nbyB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRtYXJnaW46IDAgYXV0bztcblx0bWFyZ2luLXRvcDogMTAwcHg7XG5cdFxufVxuKi9cbi8qLS0tLS0tLS0tLS0tLS0tU21hbGwgVmlkZW8tLS0tLS0tLS0tLS0tLS0tLSovXG4uc21hbGxMaXZlVHZQYW5lbCB7XG4gIHdpZHRoOiAxMDAlO1xuICAvKiBcdG92ZXJmbG93OiBhdXRvOyAqL1xuICBjbGVhcjogYm90aDtcbiAgcGFkZGluZy1sZWZ0OiAxJTtcbiAgLyogXHRoZWlnaHQ6IDM1LjZ2dzsgKi9cbiAgLyogXHRtYXgtaGVpZ2h0OiA1MDBweDsgKi9cbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgd2lkdGg6IDc1JTtcbiAgcGFkZGluZy10b3A6IDN2dztcbn1cblxuLnNtYWxsTGl2ZVR2UGFuZWwgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uc21hbGxMaXZlVHZQYW5lbCBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi52aWRlb1BhbmVsIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAzMyU7XG4gIG1hcmdpbi10b3A6IDJlbTtcbn1cbi5ibGFja2NvbG9yIHtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnZpZGVvUGFuZWwgLnRpdGxlIHtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICM3ZTQ4NTU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM4ZThlOGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDF2dztcbn1cblxuLnZpZGVvUGFuZWwge1xuICBwYWRkaW5nOiAxZW0gMWVtIDAgMWVtO1xuICBoZWlnaHQ6IDEydnc7XG59XG5cbi52aWRlb1BhbmVsIC5kZXNjcmlwdGlvbiB7XG4gIHBhZGRpbmctbGVmdDogMWVtO1xuICBwYWRkaW5nLXJpZ2h0OiAxZW07XG4gIHBhZGRpbmctYm90dG9tOiAxZW07XG4gIGZvbnQtc2l6ZTogMXZ3O1xuICBsaW5lLWhlaWdodDogMTUwJTtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBQQUdFIFZJREVPIERFVEFJTC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLmN1cnJlbnRMaXZlVFZQYW5lbERldGFpbCB7XG4gIHdpZHRoOiA3MCU7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4uc21hbGxMaXZlVHZQYW5lbERldGFpbCB7XG4gIHdpZHRoOiAyOSU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmctbGVmdDogMSU7XG4gIGhlaWdodDogMzYuNXZ3O1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uc21hbGxMaXZlVHZQYW5lbERldGFpbCBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5zbWFsbExpdmVUdlBhbmVsRGV0YWlsIGE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnZpZGVvUGFuZWxEZXRhaWwge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnZpZGVvUGFuZWxEZXRhaWwgLmNhcHRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjAlO1xuICBsZWZ0OiAyNSU7XG4gIHdpZHRoOiAxNSU7XG4gIG1hcmdpbi1sZWZ0OiAtMSU7XG4gIG9wYWNpdHk6IDAuNztcbiAgei1pbmRleDogMTtcbn1cblxuLnZpZGVvUGFuZWxEZXRhaWxtZyB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogNzAlO1xufVxuXG4udmlkZW9QYW5lbERldGFpbERlc2NyaXB0aW9uIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAzNSU7XG4gIHBhZGRpbmctbGVmdDogMiU7XG4gIGZvbnQtc2l6ZTogMXZ3O1xuICBsaW5lLWhlaWdodDogMTUwJTtcbn1cblxuLm11bHRpcGxlLWl0ZW1zIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA2MCU7XG59XG5cbi5ob2xpY2RldGFpbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwJTtcbiAgbWFyZ2luOiAwJTtcbiAgcGFkZGluZzogMCU7XG4gIGRpc3BsYXktYmxvY2s6IDA7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuLml0ZW0ge1xuICBoZWlnaHQ6IDguNXZ3ICFpbXBvcnRhbnQ7XG59XG5cbiNzZWFyY2hWaWRlbyBpbWcge1xuICB3aWR0aDogMXZ3O1xuICBoZWlnaHQ6IDF2dztcbn1cblxudmlkZW86LXdlYmtpdC1mdWxsLXNjcmVlbiB7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG59XG52aWRlbzotbW96LWZ1bGwtc2NyZWVuIHtcbiAgbWF4LWhlaWdodDogMTAwJTtcbn1cblxuLmN1cnJlbnRMaXZlVFZQYW5lbCB2aWRlbzo6LXdlYmtpdC1tZWRpYS1jb250cm9scyB7XG4gIC8vZGlzcGxheTpub25lICFpbXBvcnRhbnQ7XG59XG5cbi5jdXJyZW50TGl2ZVRWUGFuZWwgdmlkZW86Oi13ZWJraXQtbWVkaWEtY29udHJvbHMtdGltZWxpbmUge1xuICB2aXNpYmlsaXR5OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiA0MCU7XG59XG4uY3VycmVudExpdmVUVlBhbmVsIHZpZGVvOjotd2Via2l0LW1lZGlhLWNvbnRyb2xzLXBsYXktYnV0dG9uIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuLmN1cnJlbnRMaXZlVFZQYW5lbCB2aWRlbzo6LXdlYmtpdC1tZWRpYS1jb250cm9scy1jdXJyZW50LXRpbWUtZGlzcGxheSB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5oaWRkZGVuIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uc2hvd24ge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuXG4ucGFyZW50RGl2IC8vIFJlc3VsdHMgaW4gYXJvdW5kIDQwMHg0MDAgcGl4ZWxzIGZvciBtZVxue1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTFweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIGxlZnQ6IDEwcHg7XG4gIGhlaWdodDogLXdlYmtpdC1jYWxjKDUwJSAtIDE4cHgpO1xuICBoZWlnaHQ6IGNhbGMoNTAlIC0gMThweCk7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuYm9keSA+IC5mb3JtdWxhaXJlIHtcbiAgbWFyZ2luLXRvcDogMTUwcHg7XG59XG5ib2R5ID4gLmZvcm11bGFpcmUgaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA1OXB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMTVweCBhdXRvO1xufVxuYm9keSA+IC5mb3JtdWxhaXJlIGZvcm0gdWwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5ib2R5ID4gLmZvcm11bGFpcmUgZm9ybSB1bCA+IGxpIHtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cbmJvZHkgPiAuZm9ybXVsYWlyZSBmb3JtIHVsID4gbGkgPiAqIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuYm9keSA+IC5mb3JtdWxhaXJlIGZvcm0gdWwgPiBsaSA+IGxhYmVsIHtcbiAgbWluLXdpZHRoOiAxMDBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4udmlkZW9QYW5lbDIge1xuICB3aWR0aDogMzMlO1xufVxuXG4jcHJvZ3Jlc3Nib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA0MDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgcGFkZGluZzogMXB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbiNwcm9ncmVzc2JhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XG4gIHdpZHRoOiAwJTtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbiNwZXJjZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRvcDogM3B4O1xuICBsZWZ0OiA0OCU7XG59XG5cbi52aWRlb3RpdGxlIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5tZW51IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwYWRkaW5nOiAxdncgMDtcbn1cblxuLm1vYmlsZSB7XG4gIG1pbi1oZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGUgIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gIWltcG9ydGFudDtcbn1cblxudmlkZW8ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICNkZXNjcmlwdGlvbiB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICB3aWR0aDogMjBlbTtcbiAgfVxuICAjbG9nbzEge1xuICAgIGhlaWdodDogNGVtO1xuICAgIHdpZHRoOiA0ZW07XG4gIH1cbiAgI2xvZ2luQixcbiAgI2xvZ2luQjIge1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgICBmb250LXNpemU6IDEwMCU7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46IDFlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEuNWVtO1xuICAgIGNvbG9yOiAjMmE5NTQ0O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMyYTk1NDQ7XG4gIH1cbiAgI21haW4gdmlkZW8ge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbiAgI3NlYXJjaElucHV0IHtcbiAgICB3aWR0aDogNTAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgICBmb250LXNpemU6IDExMCU7XG4gICAgcGFkZGluZzogMWVtO1xuICB9XG4gICNmb290ZXJXcnAgaW1nIHtcbiAgICBoZWlnaHQ6IDJlbTtcbiAgICB3aWR0aDogMmVtO1xuICAgIG1hcmdpbi1yaWdodDogMC44NWVtO1xuICB9XG4gICNtYWluV3JwWSA+IGRpdiB7XG4gICAgaGVpZ2h0OiAzNWVtO1xuICB9XG4gICNsZWZ0QXJyb3csXG4gICNyaWdodEFycm93IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgXG4gIC52aWRlb3RpdGxlIHtcbiAgICBjb2xvcjogIzdlNDg1NTtcbiAgICBmb250LXNpemU6IDJ2dztcbiAgICBwYWRkaW5nOiAxdncgMDtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDgwMHB4KSB7XG4gICNsb2dvMSB7XG4gICAgaGVpZ2h0OiAzLjJlbTtcbiAgICB3aWR0aDogMy4yZW07XG4gIH1cbiAgI2xvZ2luQiB7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICB3aWR0aDogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbjogMWVtO1xuICAgIG1hcmdpbi1yaWdodDogMS41ZW07XG4gICAgY29sb3I6ICMwMDg4ZTM7XG4gIH1cbiAgI21haW4gdmlkZW8ge1xuICAgIGhlaWdodDogMjllbTtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAvKiBDaHJvbWUgYWxsIC8gU2FmYXJpIGFsbCAqL1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEZpcmVmb3ggYWxsICovXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAvKiBJRSAxMCsgKi9cbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgfVxuICAjc2VhcmNoSW5wdXQge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICAgIGZvbnQtc2l6ZTogMTA1JTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjZlbTtcbiAgICBwYWRkaW5nOiAwLjZlbTtcbiAgfVxuXG4gICNmb290ZXJXcnAgaW1nIHtcbiAgICBoZWlnaHQ6IDIuM2VtO1xuICAgIHdpZHRoOiAyLjNlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNmVtO1xuICB9XG5cbiAgXG4gIC52aWRlb3RpdGxlIHtcbiAgICBjb2xvcjogIzdlNDg1NTtcbiAgICBmb250LXNpemU6IDJ2dztcbiAgICBwYWRkaW5nOiAxdncgMDtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxufVxuIiwiI2xpdmVWaWRlbyB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxuXG4jd3JhcHBlciB7XG4gIHBhZGRpbmc6IDB2dyAwIDAgNGVtICFpbXBvcnRhbnQ7IH1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi5oaWRlIHtcbiAgZGlzcGxheTogbm9uZTsgfVxuXG4uaG9saWNUdlBhbmVsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDJ2dzsgfVxuXG4uaG9saWNUdlBhbmVsID4gZGl2ID4gaW1nLFxuaG9saWNUdlBhbmVsID4gZGl2ID4gaW1nIHtcbiAgbWFyZ2luOiAzMHB4IDA7IH1cblxuLmN1cnJlbnRMaXZlVFZQYW5lbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDsgfVxuXG4uY3VycmVudExpdmVUVlBhbmVsIC5saXZlVHZQYW5lbCB7XG4gIHdpZHRoOiA3NSU7XG4gIGhlaWdodDogMzl2dztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bzsgfVxuXG4ubGl2ZVR2UGFuZWwge1xuICBoZWlnaHQ6IDMydnc7IH1cblxuLmN1cnJlbnRMaXZlVFZQYW5lbCAudmlkZW90aXRsZSB7XG4gIGNvbG9yOiAjN2U0ODU1O1xuICBmb250LXNpemU6IDJ2dztcbiAgcGFkZGluZzogMXZ3IDA7IH1cblxuLmN1cnJlbnRMaXZlVFZQYW5lbCAudmlkZW9Db250ZW50VGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDsgfVxuXG4vKlxuLmxvZ28ge1xuXHRkaXNwbGF5OiBibG9jaztcblx0bWFyZ2luOiAwIGF1dG87XG5cdG1hcmdpbi10b3A6IDEwMHB4O1xuXHRcbn1cbiovXG4vKi0tLS0tLS0tLS0tLS0tLVNtYWxsIFZpZGVvLS0tLS0tLS0tLS0tLS0tLS0qL1xuLnNtYWxsTGl2ZVR2UGFuZWwge1xuICB3aWR0aDogMTAwJTtcbiAgLyogXHRvdmVyZmxvdzogYXV0bzsgKi9cbiAgY2xlYXI6IGJvdGg7XG4gIHBhZGRpbmctbGVmdDogMSU7XG4gIC8qIFx0aGVpZ2h0OiAzNS42dnc7ICovXG4gIC8qIFx0bWF4LWhlaWdodDogNTAwcHg7ICovXG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIHdpZHRoOiA3NSU7XG4gIHBhZGRpbmctdG9wOiAzdnc7IH1cblxuLnNtYWxsTGl2ZVR2UGFuZWwgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGJsYWNrOyB9XG5cbi5zbWFsbExpdmVUdlBhbmVsIGE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBibGFjazsgfVxuXG4udmlkZW9QYW5lbCB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMzMlO1xuICBtYXJnaW4tdG9wOiAyZW07IH1cblxuLmJsYWNrY29sb3Ige1xuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cblxuLnZpZGVvUGFuZWwgLnRpdGxlIHtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICM3ZTQ4NTU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM4ZThlOGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDF2dzsgfVxuXG4udmlkZW9QYW5lbCB7XG4gIHBhZGRpbmc6IDFlbSAxZW0gMCAxZW07XG4gIGhlaWdodDogMTJ2dzsgfVxuXG4udmlkZW9QYW5lbCAuZGVzY3JpcHRpb24ge1xuICBwYWRkaW5nLWxlZnQ6IDFlbTtcbiAgcGFkZGluZy1yaWdodDogMWVtO1xuICBwYWRkaW5nLWJvdHRvbTogMWVtO1xuICBmb250LXNpemU6IDF2dztcbiAgbGluZS1oZWlnaHQ6IDE1MCU7IH1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBQQUdFIFZJREVPIERFVEFJTC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLmN1cnJlbnRMaXZlVFZQYW5lbERldGFpbCB7XG4gIHdpZHRoOiA3MCU7XG4gIGZsb2F0OiBsZWZ0OyB9XG5cbi5zbWFsbExpdmVUdlBhbmVsRGV0YWlsIHtcbiAgd2lkdGg6IDI5JTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZy1sZWZ0OiAxJTtcbiAgaGVpZ2h0OiAzNi41dnc7XG4gIG92ZXJmbG93LXk6IGF1dG87IH1cblxuLnNtYWxsTGl2ZVR2UGFuZWxEZXRhaWwgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGJsYWNrOyB9XG5cbi5zbWFsbExpdmVUdlBhbmVsRGV0YWlsIGE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBibGFjazsgfVxuXG4udmlkZW9QYW5lbERldGFpbCB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG5cbi52aWRlb1BhbmVsRGV0YWlsIC5jYXB0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwJTtcbiAgbGVmdDogMjUlO1xuICB3aWR0aDogMTUlO1xuICBtYXJnaW4tbGVmdDogLTElO1xuICBvcGFjaXR5OiAwLjc7XG4gIHotaW5kZXg6IDE7IH1cblxuLnZpZGVvUGFuZWxEZXRhaWxtZyB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogNzAlOyB9XG5cbi52aWRlb1BhbmVsRGV0YWlsRGVzY3JpcHRpb24ge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDM1JTtcbiAgcGFkZGluZy1sZWZ0OiAyJTtcbiAgZm9udC1zaXplOiAxdnc7XG4gIGxpbmUtaGVpZ2h0OiAxNTAlOyB9XG5cbi5tdWx0aXBsZS1pdGVtcyB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogNjAlOyB9XG5cbi5ob2xpY2RldGFpbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwJTtcbiAgbWFyZ2luOiAwJTtcbiAgcGFkZGluZzogMCU7XG4gIGRpc3BsYXktYmxvY2s6IDA7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4OyB9XG5cbi5pdGVtIHtcbiAgaGVpZ2h0OiA4LjV2dyAhaW1wb3J0YW50OyB9XG5cbiNzZWFyY2hWaWRlbyBpbWcge1xuICB3aWR0aDogMXZ3O1xuICBoZWlnaHQ6IDF2dzsgfVxuXG52aWRlbzotd2Via2l0LWZ1bGwtc2NyZWVuIHtcbiAgbWF4LWhlaWdodDogMTAwJTsgfVxuXG52aWRlbzotbW96LWZ1bGwtc2NyZWVuIHtcbiAgbWF4LWhlaWdodDogMTAwJTsgfVxuXG4uY3VycmVudExpdmVUVlBhbmVsIHZpZGVvOjotd2Via2l0LW1lZGlhLWNvbnRyb2xzLXRpbWVsaW5lIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogNDAlOyB9XG5cbi5jdXJyZW50TGl2ZVRWUGFuZWwgdmlkZW86Oi13ZWJraXQtbWVkaWEtY29udHJvbHMtcGxheS1idXR0b24ge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cblxuLmN1cnJlbnRMaXZlVFZQYW5lbCB2aWRlbzo6LXdlYmtpdC1tZWRpYS1jb250cm9scy1jdXJyZW50LXRpbWUtZGlzcGxheSB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxuXG4uaGlkZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxuXG4uc2hvd24ge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50OyB9XG5cbi5wYXJlbnREaXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTFweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIGxlZnQ6IDEwcHg7XG4gIGhlaWdodDogLXdlYmtpdC1jYWxjKDUwJSAtIDE4cHgpO1xuICBoZWlnaHQ6IGNhbGMoNTAlIC0gMThweCk7XG4gIGRpc3BsYXk6IGJsb2NrOyB9XG5cbmJvZHkgPiAuZm9ybXVsYWlyZSB7XG4gIG1hcmdpbi10b3A6IDE1MHB4OyB9XG5cbmJvZHkgPiAuZm9ybXVsYWlyZSBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDU5cHg7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAxNXB4IGF1dG87IH1cblxuYm9keSA+IC5mb3JtdWxhaXJlIGZvcm0gdWwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuYm9keSA+IC5mb3JtdWxhaXJlIGZvcm0gdWwgPiBsaSB7XG4gIG1hcmdpbjogMTBweCAwO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7IH1cblxuYm9keSA+IC5mb3JtdWxhaXJlIGZvcm0gdWwgPiBsaSA+ICoge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IH1cblxuYm9keSA+IC5mb3JtdWxhaXJlIGZvcm0gdWwgPiBsaSA+IGxhYmVsIHtcbiAgbWluLXdpZHRoOiAxMDBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6IGJsYWNrOyB9XG5cbi52aWRlb1BhbmVsMiB7XG4gIHdpZHRoOiAzMyU7IH1cblxuI3Byb2dyZXNzYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNDAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIHBhZGRpbmc6IDFweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4OyB9XG5cbiNwcm9ncmVzc2JhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XG4gIHdpZHRoOiAwJTtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7IH1cblxuI3BlcmNlbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdG9wOiAzcHg7XG4gIGxlZnQ6IDQ4JTsgfVxuXG4udmlkZW90aXRsZSB7XG4gIGZsb2F0OiBsZWZ0OyB9XG5cbi5tZW51IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwYWRkaW5nOiAxdncgMDsgfVxuXG4ubW9iaWxlIHtcbiAgbWluLWhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZSAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGUgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogJ1JvYm90bycgIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50OyB9XG5cbnZpZGVvIHtcbiAgd2lkdGg6IDEwMCU7IH1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICNkZXNjcmlwdGlvbiB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICB3aWR0aDogMjBlbTsgfVxuICAjbG9nbzEge1xuICAgIGhlaWdodDogNGVtO1xuICAgIHdpZHRoOiA0ZW07IH1cbiAgI2xvZ2luQixcbiAgI2xvZ2luQjIge1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgICBmb250LXNpemU6IDEwMCU7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46IDFlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEuNWVtO1xuICAgIGNvbG9yOiAjMmE5NTQ0O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMyYTk1NDQ7IH1cbiAgI21haW4gdmlkZW8ge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87IH1cbiAgI3NlYXJjaElucHV0IHtcbiAgICB3aWR0aDogNTAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgICBmb250LXNpemU6IDExMCU7XG4gICAgcGFkZGluZzogMWVtOyB9XG4gICNmb290ZXJXcnAgaW1nIHtcbiAgICBoZWlnaHQ6IDJlbTtcbiAgICB3aWR0aDogMmVtO1xuICAgIG1hcmdpbi1yaWdodDogMC44NWVtOyB9XG4gICNtYWluV3JwWSA+IGRpdiB7XG4gICAgaGVpZ2h0OiAzNWVtOyB9XG4gICNsZWZ0QXJyb3csXG4gICNyaWdodEFycm93IHtcbiAgICBkaXNwbGF5OiBub25lOyB9XG4gIC52aWRlb3RpdGxlIHtcbiAgICBjb2xvcjogIzdlNDg1NTtcbiAgICBmb250LXNpemU6IDJ2dztcbiAgICBwYWRkaW5nOiAxdncgMDtcbiAgICBmbG9hdDogbGVmdDsgfSB9XG5cbkBtZWRpYSAobWluLXdpZHRoOiA4MDBweCkge1xuICAjbG9nbzEge1xuICAgIGhlaWdodDogMy4yZW07XG4gICAgd2lkdGg6IDMuMmVtOyB9XG4gICNsb2dpbkIge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBmb250LXNpemU6IDEwMCU7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46IDFlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEuNWVtO1xuICAgIGNvbG9yOiAjMDA4OGUzOyB9XG4gICNtYWluIHZpZGVvIHtcbiAgICBoZWlnaHQ6IDI5ZW07XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAvKiBDaHJvbWUgYWxsIC8gU2FmYXJpIGFsbCAqL1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLyogRmlyZWZveCBhbGwgKi9cbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLyogSUUgMTArICovXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7IH1cbiAgI3NlYXJjaElucHV0IHtcbiAgICB3aWR0aDogNTAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgICBmb250LXNpemU6IDEwNSU7XG4gICAgbWFyZ2luLWJvdHRvbTogMC42ZW07XG4gICAgcGFkZGluZzogMC42ZW07IH1cbiAgI2Zvb3RlcldycCBpbWcge1xuICAgIGhlaWdodDogMi4zZW07XG4gICAgd2lkdGg6IDIuM2VtO1xuICAgIG1hcmdpbi1yaWdodDogMC42ZW07IH1cbiAgLnZpZGVvdGl0bGUge1xuICAgIGNvbG9yOiAjN2U0ODU1O1xuICAgIGZvbnQtc2l6ZTogMnZ3O1xuICAgIHBhZGRpbmc6IDF2dyAwO1xuICAgIGZsb2F0OiBsZWZ0OyB9IH1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/dashboard/dashboard.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
    \********************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppPagesDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
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
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_6__);

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
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

    let DashboardComponent = class DashboardComponent {
      constructor(router, activatedRoute, userProfileService, snackBar, deviceService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.userProfileService = userProfileService;
        this.snackBar = snackBar;
        this.deviceService = deviceService;
        this.isMobile = true; //this.deviceService.isMobile();
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
        jquery__WEBPACK_IMPORTED_MODULE_5__(document).ready(function () {
          var element = document.getElementById('mobileId'); // tslint:disable-next-line:prefer-const

          const mc = new hammerjs__WEBPACK_IMPORTED_MODULE_6__(element);
          mc.get('swipe').set({
            direction: hammerjs__WEBPACK_IMPORTED_MODULE_6__["DIRECTION_ALL"]
          });
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
              jquery__WEBPACK_IMPORTED_MODULE_5__('.currentMainWrp').animate({
                right: right + '%'
              }, 500);
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
              jquery__WEBPACK_IMPORTED_MODULE_5__('.currentMainWrp').animate({
                right: right + '%'
              }, 500);
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
            return evt.touches || evt.originalEvent.touches // browser API
            ; // jQuery
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
                  jquery__WEBPACK_IMPORTED_MODULE_5__('.currentMainWrp').animate({
                    right: right + '%'
                  }, 500);
                  jquery__WEBPACK_IMPORTED_MODULE_5__('.currentMainWrp .currVideo')[0].pause();
                  jquery__WEBPACK_IMPORTED_MODULE_5__('.currentMainWrp .currVideo').removeClass('currVideo');
                  i++;
                  jquery__WEBPACK_IMPORTED_MODULE_5__('.currentMainWrp video').eq(i).addClass('currVideo');
                  jquery__WEBPACK_IMPORTED_MODULE_5__('.currentMainWrp .currVideo')[0].play();
                }
              } else {
                if (i > 0) {
                  right -= 100;
                  jquery__WEBPACK_IMPORTED_MODULE_5__('.currentMainWrp').animate({
                    right: right + '%'
                  }, 500);
                  i--;
                  jquery__WEBPACK_IMPORTED_MODULE_5__('.currentMainWrp .currVideo')[0].pause();
                  jquery__WEBPACK_IMPORTED_MODULE_5__('.currentMainWrp .currVideo').removeClass('currVideo');
                  jquery__WEBPACK_IMPORTED_MODULE_5__('.currentMainWrp video').eq(i).addClass('currVideo');
                  jquery__WEBPACK_IMPORTED_MODULE_5__('.currentMainWrp .currVideo')[0].play();
                }
              }
            } else {
              if (yDiff > 0) {
                if (j < countDivY - 1) {
                  j++;
                  i = 0;
                  right = 0;
                  jquery__WEBPACK_IMPORTED_MODULE_5__('#userC').html('User ' + (j + 1));
                  jquery__WEBPACK_IMPORTED_MODULE_5__('#mainWrpY > div').each(function (index) {
                    jquery__WEBPACK_IMPORTED_MODULE_5__(this).animate({
                      top: '-' + j * 35 + 'em'
                    }, 500);
                  });
                  jquery__WEBPACK_IMPORTED_MODULE_5__('.currentMainWrp .currVideo')[0].pause();
                  jquery__WEBPACK_IMPORTED_MODULE_5__('.currentMainWrp').css('right', 0).removeClass('currentMainWrp');
                  jquery__WEBPACK_IMPORTED_MODULE_5__('#mainWrpY > div').eq(j).addClass('currentMainWrp');
                  jquery__WEBPACK_IMPORTED_MODULE_5__('.currentMainWrp .currVideo')[0].play();
                }
              } else {
                if (j > 0) {
                  j--;
                  i = 0;
                  right = 0;
                  jquery__WEBPACK_IMPORTED_MODULE_5__('#userC').html('User ' + (j + 1));
                  jquery__WEBPACK_IMPORTED_MODULE_5__('#mainWrpY > div').each(function (index) {
                    jquery__WEBPACK_IMPORTED_MODULE_5__(this).animate({
                      top: '-' + j * 35 + 'em'
                    }, 500);
                  });
                  jquery__WEBPACK_IMPORTED_MODULE_5__('.currentMainWrp .currVideo')[0].pause();
                  jquery__WEBPACK_IMPORTED_MODULE_5__('.currentMainWrp').css('right', 0).removeClass('currentMainWrp');
                  jquery__WEBPACK_IMPORTED_MODULE_5__('#mainWrpY > div').eq(j).addClass('currentMainWrp').css('right', 0);
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

          screen.orientation.addEventListener('change', function (e) {
            if (screen.orientation.type == 'landscape-primary' || screen.orientation.type == 'landscape-secondary') {
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
          }, false);
        });
      }

      ngAfterViewInit() {
        if (!this.isMobile) {
          this.main = this.matVideo.getVideoTag();
          this.main.addEventListener('playing', () => {
            if (!this.interviewVideo.mute && !this.reportVideo.mute && !this.lifestyleVideo.mute && !this.musicVideo.mute && !this.sportVideo.mute && !this.interview2Video.mute) {
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
            const datebb = new Date();
            var x = datebb.valueOf() / 1000;
            this.mainVideo.time = x % this.main.duration;
            this.main.currentTime = x % this.main.duration;
          });
          this.report = this.matreportVideo.getVideoTag();
          this.report.addEventListener('ondblclick', () => {});
          this.report.addEventListener('onclick', () => {});
          this.report.addEventListener('loadedmetadata', () => {
            const datebb = new Date();
            var x = datebb.valueOf() / 1000;
            this.reportVideo.time = x % this.report.duration;
            this.report.currentTime = x % this.report.duration;
          });
          this.sport = this.matsportVideo.getVideoTag();
          this.sport.addEventListener('ondblclick', () => {});
          this.sport.addEventListener('onclick', () => {});
          this.sport.addEventListener('loadedmetadata', () => {
            const datebb = new Date();
            var x = (datebb.valueOf() + 0) / 1000;
            this.sportVideo.time = x % this.sport.duration;
            this.sport.currentTime = x % this.sport.duration;
          });
          this.music = this.matmusicVideo.getVideoTag();
          this.music.addEventListener('ondblclick', () => {});
          this.music.addEventListener('onclick', () => {});
          this.music.addEventListener('loadedmetadata', () => {
            const datebb = new Date();
            var x = datebb.valueOf() / 1000;
            this.musicVideo.time = x % this.music.duration;
            this.music.currentTime = x % this.music.duration;
          });
          this.lifestyle = this.matlifestyleVideo.getVideoTag();
          this.lifestyle.addEventListener('ondblclick', () => {});
          this.lifestyle.addEventListener('onclick', () => {});
          this.lifestyle.addEventListener('loadedmetadata', () => {
            const datebb = new Date();
            var x = datebb.valueOf() / 1000;
            this.lifestyleVideo.time = x % this.lifestyle.duration;
            this.lifestyle.currentTime = x % this.lifestyle.duration;
          });
          this.interview2 = this.matinterview2Video.getVideoTag();
          this.interview2.addEventListener('ondblclick', () => {});
          this.interview2.addEventListener('onclick', () => {});
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
                verticalPosition: this.isMobile ? 'bottom' : 'top',
                horizontalPosition: this.isMobile ? 'center' : 'left',
                duration: 500
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
            duration: 500
          });
        });
      }

      nextUser() {
        this.userProfileService.nextUser('DASHBOARD_HOLIC').subscribe(p => {
          this.router.navigate(['/user/' + p.login]);
        }, error => {
          this.snackBar.open('User does not exist', 'close', {
            verticalPosition: 'top',
            duration: 500
          });
        });
      }

      keyPress(event) {
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

    };

    DashboardComponent.ctorParameters = () => [{
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

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('mainvid', {
      static: false
    }), __metadata("design:type", Object)], DashboardComponent.prototype, "matVideo", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('reportvid', {
      static: false
    }), __metadata("design:type", Object)], DashboardComponent.prototype, "matreportVideo", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sportvid', {
      static: false
    }), __metadata("design:type", Object)], DashboardComponent.prototype, "matsportVideo", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('musicvid', {
      static: false
    }), __metadata("design:type", Object)], DashboardComponent.prototype, "matmusicVideo", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('lifestylevid', {
      static: false
    }), __metadata("design:type", Object)], DashboardComponent.prototype, "matlifestyleVideo", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('interview2vid', {
      static: false
    }), __metadata("design:type", Object)], DashboardComponent.prototype, "matinterview2Video", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('interviewvid', {
      static: false
    }), __metadata("design:type", Object)], DashboardComponent.prototype, "matinterviewVideo", void 0);

    DashboardComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-dashboard',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html")).default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
      styles: [__importDefault(__webpack_require__(
      /*! ./dashboard.component.scss */
      "./src/app/pages/dashboard/dashboard.component.scss")).default]
    }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _login_service_userprofile_service__WEBPACK_IMPORTED_MODULE_2__["UserProfileService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"], ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__["DeviceDetectorService"]])], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/pages/dashboard/dashboard.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
    \*****************************************************/

  /*! exports provided: routes, DashboardModule */

  /***/
  function srcAppPagesDashboardDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardModule", function () {
      return DashboardModule;
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


    var _dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./dashboard.component */
    "./src/app/pages/dashboard/dashboard.component.ts");
    /* harmony import */


    var _video_video_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../video/video.module */
    "./src/app/pages/video/video.module.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    const routes = [{
      path: '',
      component: _dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
      pathMatch: 'full'
    }];
    let DashboardModule = class DashboardModule {};
    DashboardModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_5__["NgxChartsModule"], _theme_directives_directives_module__WEBPACK_IMPORTED_MODULE_6__["DirectivesModule"], _video_video_module__WEBPACK_IMPORTED_MODULE_8__["MatVideoModule"]],
      declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"]]
    })], DashboardModule);
    /***/
  }
}]);
//# sourceMappingURL=pages-dashboard-dashboard-module-es5.js.map