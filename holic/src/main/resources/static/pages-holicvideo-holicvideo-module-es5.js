(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-holicvideo-holicvideo-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/holicvideo/holicvideo.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/holicvideo/holicvideo.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesHolicvideoHolicvideoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div>\n\t<img src=\"assets/img/holic/logo-holic-o.png\" style=\"margin-left:auto;margin-right:auto;margin-top:5em;width:59px;display:block\" />\n</div>\n<div  class=\"player\">\n\t<div id=\"mycontrols\" class=\"controls\" (mouseover)=\"show()\" (mouseout)=\"notshow()\" [hidden]=\"!showMenu\">\n  \t\t<div style=\"margin-top: 20px;\"></div>\n  \t\t<a id=\"twiter\" (click)=\"redirecttwitter()\"><i class=\"fa fa-twitter\" style=\"font-size:20px\"></i></a>\n  \t\t<a id=\"facebook\" (click)=\"redirectfacebook()\" ><i class=\"fa fa-facebook-f\" style=\"font-size:20px\"></i></a>\n  \t\t<a id=\"airplay\" href=\"#\"><i class=\"fa fa-apple\" style=\"font-size:20px\"></i></a>\n  </div>\n  <div >\n\t<mat-video\n    #mainvid\n    [title]=\"video.titre\"\n    [autoplay]=\"true\"\n    [loop]=\"true\"\n    [overlay]=\"false\"\n    [time]=\"video.time\"\n    [preload]=\"true\"\n    [fullscreen]=\"true\"\n    [download]=\"false\"\n    [muted]=\"video.mute\"\n    color=\"primary\"\n    spinner=\"spin\"\n>\n<source\n  matVideoSource\n  src=\"api/account/videos/{{ video.id }}\"\n  type=\"{{ video.format }}\"\n/>\n</mat-video>\n</div>\n</div>\n\n\n<div id=\"bouton\" class=\"bouton\" >\n<a id=\"link\" (click)=\"previous()\" parambouton=\"previous\"> <img src=\"assets/img/holic/previous1.png\" style=\"width:30px;\" /></a>\n<a id=\"link\" (click)=\"playcurrent()\" parambouton=\"current\" > <img src=\"assets/img/holic/play.png\" style=\"width:30px;\" /></a>\n<a id=\"link\" (click)=\"next()\" parambouton=\"next\" > <img src=\"assets/img/holic/next.png\" style=\"width:30px;\" /></a>\n</div>\n<br/>\n<div class=\"menubar\">\n  <div class=\"videotitle\"><a (click)=\"redirectMainTv()\">HOLIC LIVE TV <span class=\"blackcolor\">|</span> {{video.username}}</a></div>\n  <div class=\"menu\">\n    <img\n      (click)=\"redirectHome()\"\n      src=\"assets/img/holic/home.png\"\n      style=\"width:30px;\"\n    />\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/pages/holicvideo/holicvideo.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/pages/holicvideo/holicvideo.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesHolicvideoHolicvideoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".controls {\n  position: absolute;\n  height: 337.5px;\n  max-width: 40px;\n  background-color: #111;\n  overflow-x: hidden;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  opacity: 0.5;\n  z-index: 1; }\n\n.controls a {\n  padding: 8px 8px 8px 8px;\n  text-decoration: none;\n  font-size: 15px;\n  color: #818181;\n  display: block;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n  text-align: center; }\n\n.controls a:hover, .offcanvas a:focus {\n  color: #f1f1f1; }\n\nvideo {\n  position: absolute;\n  -o-object-fit: fill;\n     object-fit: fill; }\n\n.player {\n  position: relative;\n  margin: 0 auto;\n  max-height: 300px;\n  max-width: 600px;\n  align: \"center\";\n  margin-top: 0px;\n  margin-bottom: 0px; }\n\n.bouton {\n  max-width: 600px;\n  height: auto;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: center;\n  margin-top: 40px; }\n\n.menutitle {\n  position: relative;\n  margin: 0 auto;\n  max-width: 600px;\n  margin-top: 0px;\n  margin-bottom: 0px; }\n\n.videotitle {\n  float: left;\n  color: #7E4855;\n  font-size: 2vw;\n  padding: 1vw 0; }\n\n.menu {\n  float: right;\n  padding: 1vw 0; }\n\n.videotitle {\n  color: #7E4855;\n  font-size: 2vw;\n  padding: 1vw 0; }\n\n.menubar {\n  position: relative;\n  margin: 0 auto;\n  max-width: 600px;\n  margin-top: 0px;\n  margin-bottom: 0px; }\n\n.blackcolor {\n  color: black !important;\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9saWN2aWRlby9DOlxcVXNlcnNcXGhlcnZlXFxob2xpY1xcc3RhcnRuZy9zcmNcXGFwcFxccGFnZXNcXGhvbGljdmlkZW9cXGhvbGljdmlkZW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUU7RUFDSSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHdCQUFnQjtFQUFoQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFVBQVUsRUFBQTs7QUFHZDtFQUNJLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGNBQWM7RUFDZCxjQUFjO0VBQ2Qsd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxjQUFjLEVBQUE7O0FBSWxCO0VBQ0ssa0JBQWtCO0VBQ2xCLG1CQUFnQjtLQUFoQixnQkFBZ0IsRUFBQTs7QUFJckI7RUFDSyxrQkFBa0I7RUFDbkIsY0FBYztFQUNkLGlCQUFnQjtFQUNoQixnQkFBZTtFQUNmLGVBQWM7RUFDZCxlQUFlO0VBQ2Ysa0JBQWtCLEVBQUE7O0FBSXRCO0VBQ0ksZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixpQkFBZ0I7RUFDaEIsa0JBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFFRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGdCQUFlO0VBQ2IsZUFBZTtFQUNmLGtCQUFrQixFQUFBOztBQUV0QjtFQUdGLFdBQVk7RUFDWixjQUFjO0VBQ1YsY0FBYztFQUNkLGNBQWMsRUFBQTs7QUFJbEI7RUFHQSxZQUFhO0VBQ2IsY0FBYyxFQUFBOztBQUlkO0VBQ0MsY0FBYztFQUNkLGNBQWM7RUFDZCxjQUFjLEVBQUE7O0FBR2Y7RUFDSSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGdCQUFlO0VBQ2YsZUFBZTtFQUNmLGtCQUFrQixFQUFBOztBQUd0QjtFQUNDLHVCQUF1QjtFQUN2QixpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbGljdmlkZW8vaG9saWN2aWRlby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgLmNvbnRyb2xzIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGhlaWdodDogMzM3LjVweDtcbiAgICAgIG1heC13aWR0aDogNDBweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTE7XG4gICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgei1pbmRleDogMTtcbiAgfVxuICBcbiAgLmNvbnRyb2xzIGEge1xuICAgICAgcGFkZGluZzogOHB4IDhweCA4cHggOHB4O1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgY29sb3I6ICM4MTgxODE7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5jb250cm9scyBhOmhvdmVyLCAub2ZmY2FudmFzIGE6Zm9jdXN7XG4gICAgICBjb2xvcjogI2YxZjFmMTtcbiAgfVxuICBcbiAgXG4gIHZpZGVvIHtcbiAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgb2JqZWN0LWZpdDogZmlsbDtcbiAgICBcbiAgfVxuICBcbiAgLnBsYXllciB7XG4gICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICBtYXgtaGVpZ2h0OjMwMHB4O1xuICAgICAgbWF4LXdpZHRoOjYwMHB4O1xuICAgICAgYWxpZ246XCJjZW50ZXJcIjtcbiAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDBweDsgXG4gICAgICBcbiAgfVxuICBcbiAgLmJvdXRvbiB7XG4gICAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgbWFyZ2luLWxlZnQ6YXV0bztcbiAgICAgIG1hcmdpbi1yaWdodDphdXRvO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luLXRvcDogNDBweDtcbiAgfVxuICBcbiAgLm1lbnV0aXRsZVxue1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtYXgtd2lkdGg6NjAwcHg7XG4gICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwcHg7IFxufVxuICAudmlkZW90aXRsZVxue1xuXHRcbmZsb2F0IDogbGVmdDtcbmNvbG9yOiAjN0U0ODU1O1xuICAgIGZvbnQtc2l6ZTogMnZ3O1xuICAgIHBhZGRpbmc6IDF2dyAwO1xuXG59XG5cbi5tZW51XG57XG5cdFxuZmxvYXQgOiByaWdodDtcbnBhZGRpbmc6IDF2dyAwO1xufVxuXG5cbi52aWRlb3RpdGxlIHtcblx0Y29sb3I6ICM3RTQ4NTU7XG5cdGZvbnQtc2l6ZTogMnZ3O1xuXHRwYWRkaW5nOiAxdncgMDtcbn1cblxuLm1lbnViYXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtYXgtd2lkdGg6NjAwcHg7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDsgXG59XG5cbi5ibGFja2NvbG9yIHtcblx0Y29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/holicvideo/holicvideo.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/pages/holicvideo/holicvideo.component.ts ***!
    \**********************************************************/

  /*! exports provided: HolicVideoComponent */

  /***/
  function srcAppPagesHolicvideoHolicvideoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HolicVideoComponent", function () {
      return HolicVideoComponent;
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


    var _dashboard_service_video_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../dashboard/service/video.service */
    "./src/app/pages/dashboard/service/video.service.ts");

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

    let HolicVideoComponent = class HolicVideoComponent {
      constructor(activeRoute, router, videoService) {
        this.activeRoute = activeRoute;
        this.router = router;
        this.videoService = videoService;
      }

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

      ngAfterViewInit() {
        this.main = this.matVideo.getVideoTag();
        this.main.addEventListener('loadedmetadata', () => {
          const datebb = new Date();
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
        window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(this.main.currentSrc));
      }

      redirecttwitter() {
        window.open('https://twitter.com/intent/tweet?url=' + encodeURIComponent(this.main.currentSrc));
      }

      redirectapple() {
        window.open('https://www.facebook.com/sharer.php?s=100&p[url]=' + encodeURIComponent(this.main.currentSrc));
      }

      previous() {
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

      next() {
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

      playcurrent() {
        if (this.main.paused) {
          this.main.play();
          return;
        }

        this.main.pause();
      }

      redirectHome() {
        this.router.navigate(['']);
      }

      redirectMainTv() {
        this.router.navigate(['/video/' + this.mainId + '/' + this.mainId]);
      }

      zoom() {
        this.matVideo.is = true;
      }

    };

    HolicVideoComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
    }, {
      type: _dashboard_service_video_service__WEBPACK_IMPORTED_MODULE_2__["VideoService"]
    }];

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('mainvid', {
      static: false
    }), __metadata("design:type", Object)], HolicVideoComponent.prototype, "matVideo", void 0);

    HolicVideoComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-holicvideo-voyage',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./holicvideo.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/holicvideo/holicvideo.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./holicvideo.component.scss */
      "./src/app/pages/holicvideo/holicvideo.component.scss")).default]
    }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _dashboard_service_video_service__WEBPACK_IMPORTED_MODULE_2__["VideoService"]])], HolicVideoComponent);
    /***/
  },

  /***/
  "./src/app/pages/holicvideo/holicvideo.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/holicvideo/holicvideo.module.ts ***!
    \*******************************************************/

  /*! exports provided: routes, HolicvideoModule */

  /***/
  function srcAppPagesHolicvideoHolicvideoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HolicvideoModule", function () {
      return HolicvideoModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _holicvideo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./holicvideo.component */
    "./src/app/pages/holicvideo/holicvideo.component.ts");
    /* harmony import */


    var _video_video_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
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
      component: _holicvideo_component__WEBPACK_IMPORTED_MODULE_4__["HolicVideoComponent"],
      pathMatch: 'full'
    }];
    let HolicvideoModule = class HolicvideoModule {};
    HolicvideoModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _video_video_module__WEBPACK_IMPORTED_MODULE_5__["MatVideoModule"]],
      declarations: [_holicvideo_component__WEBPACK_IMPORTED_MODULE_4__["HolicVideoComponent"]]
    })], HolicvideoModule);
    /***/
  }
}]);
//# sourceMappingURL=pages-holicvideo-holicvideo-module-es5.js.map