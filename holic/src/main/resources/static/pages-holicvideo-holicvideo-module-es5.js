function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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


    __webpack_exports__["default"] = "\r\n<div>\r\n\t<img src=\"assets/img/holic/logo-holic-o.png\" style=\"margin-left:auto;margin-right:auto;margin-top:5em;width:59px;display:block\" />\r\n</div>\r\n<div  class=\"player\">\r\n\t<div id=\"mycontrols\" class=\"controls\" (mouseover)=\"show()\" (mouseout)=\"notshow()\" [hidden]=\"!showMenu\">\r\n  \t\t<div style=\"margin-top: 20px;\"></div>\r\n  \t\t<a id=\"twiter\" (click)=\"redirecttwitter()\"><i class=\"fa fa-twitter\" style=\"font-size:20px\"></i></a>\r\n  \t\t<a id=\"facebook\" (click)=\"redirectfacebook()\" ><i class=\"fa fa-facebook-f\" style=\"font-size:20px\"></i></a>\r\n  \t\t<a id=\"airplay\" href=\"#\"><i class=\"fa fa-apple\" style=\"font-size:20px\"></i></a>\r\n  </div>\r\n  <div >\r\n\t<mat-video\r\n    #mainvid\r\n    [title]=\"video.titre\"\r\n    [autoplay]=\"true\"\r\n    [loop]=\"true\"\r\n    [overlay]=\"false\"\r\n    [time]=\"video.time\"\r\n    [preload]=\"true\"\r\n    [fullscreen]=\"true\"\r\n    [download]=\"false\"\r\n    [muted]=\"video.mute\"\r\n    color=\"primary\"\r\n    spinner=\"spin\"\r\n>\r\n<source\r\n  matVideoSource\r\n  src=\"api/account/videos/{{ video.id }}\"\r\n  type=\"{{ video.format }}\"\r\n/>\r\n</mat-video>\r\n</div>\r\n</div>\r\n\r\n\r\n<div id=\"bouton\" class=\"bouton\" >\r\n<a id=\"link\" (click)=\"previous()\" parambouton=\"previous\"> <img src=\"assets/img/holic/previous1.png\" style=\"width:30px;\" /></a>\r\n<a id=\"link\" (click)=\"playcurrent()\" parambouton=\"current\" > <img src=\"assets/img/holic/play.png\" style=\"width:30px;\" /></a>\r\n<a id=\"link\" (click)=\"next()\" parambouton=\"next\" > <img src=\"assets/img/holic/next.png\" style=\"width:30px;\" /></a>\r\n</div>\r\n<br/>\r\n<div class=\"menubar\">\r\n  <div class=\"videotitle\"><a (click)=\"redirectMainTv()\">HOLIC LIVE TV <span class=\"blackcolor\">|</span> {{video.username}}</a></div>\r\n  <div class=\"menu\">\r\n    <img\r\n      (click)=\"redirectHome()\"\r\n      src=\"assets/img/holic/home.png\"\r\n      style=\"width:30px;\"\r\n    />\r\n  </div>\r\n</div>\r\n";
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


    __webpack_exports__["default"] = ".controls {\n  position: absolute;\n  height: 337.5px;\n  max-width: 40px;\n  background-color: #111;\n  overflow-x: hidden;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  opacity: 0.5;\n  z-index: 1; }\n\n.controls a {\n  padding: 8px 8px 8px 8px;\n  text-decoration: none;\n  font-size: 15px;\n  color: #818181;\n  display: block;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n  text-align: center; }\n\n.controls a:hover, .offcanvas a:focus {\n  color: #f1f1f1; }\n\nvideo {\n  position: absolute;\n  -o-object-fit: fill;\n     object-fit: fill; }\n\n.player {\n  position: relative;\n  margin: 0 auto;\n  max-height: 300px;\n  max-width: 600px;\n  align: \"center\";\n  margin-top: 0px;\n  margin-bottom: 0px; }\n\n.bouton {\n  max-width: 600px;\n  height: auto;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: center;\n  margin-top: 40px; }\n\n.menutitle {\n  position: relative;\n  margin: 0 auto;\n  max-width: 600px;\n  margin-top: 0px;\n  margin-bottom: 0px; }\n\n.videotitle {\n  float: left;\n  color: #7E4855;\n  font-size: 2vw;\n  padding: 1vw 0; }\n\n.menu {\n  float: right;\n  padding: 1vw 0; }\n\n.videotitle {\n  color: #7E4855;\n  font-size: 2vw;\n  padding: 1vw 0; }\n\n.menubar {\n  position: relative;\n  margin: 0 auto;\n  max-width: 600px;\n  margin-top: 0px;\n  margin-bottom: 0px; }\n\n.blackcolor {\n  color: black !important;\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9saWN2aWRlby9DOlxcVXNlcnNcXGhlcnZlXFxob2xpY1xcc3RhcnRuZy9zcmNcXGFwcFxccGFnZXNcXGhvbGljdmlkZW9cXGhvbGljdmlkZW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUU7RUFDSSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHdCQUFnQjtFQUFoQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFVBQVUsRUFBQTs7QUFHZDtFQUNJLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGNBQWM7RUFDZCxjQUFjO0VBQ2Qsd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxjQUFjLEVBQUE7O0FBSWxCO0VBQ0ssa0JBQWtCO0VBQ2xCLG1CQUFnQjtLQUFoQixnQkFBZ0IsRUFBQTs7QUFJckI7RUFDSyxrQkFBa0I7RUFDbkIsY0FBYztFQUNkLGlCQUFnQjtFQUNoQixnQkFBZTtFQUNmLGVBQWM7RUFDZCxlQUFlO0VBQ2Ysa0JBQWtCLEVBQUE7O0FBSXRCO0VBQ0ksZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixpQkFBZ0I7RUFDaEIsa0JBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFFRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGdCQUFlO0VBQ2IsZUFBZTtFQUNmLGtCQUFrQixFQUFBOztBQUV0QjtFQUdGLFdBQVk7RUFDWixjQUFjO0VBQ1YsY0FBYztFQUNkLGNBQWMsRUFBQTs7QUFJbEI7RUFHQSxZQUFhO0VBQ2IsY0FBYyxFQUFBOztBQUlkO0VBQ0MsY0FBYztFQUNkLGNBQWM7RUFDZCxjQUFjLEVBQUE7O0FBR2Y7RUFDSSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGdCQUFlO0VBQ2YsZUFBZTtFQUNmLGtCQUFrQixFQUFBOztBQUd0QjtFQUNDLHVCQUF1QjtFQUN2QixpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbGljdmlkZW8vaG9saWN2aWRlby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgLmNvbnRyb2xzIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBoZWlnaHQ6IDMzNy41cHg7XHJcbiAgICAgIG1heC13aWR0aDogNDBweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzExMTtcclxuICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgIHotaW5kZXg6IDE7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250cm9scyBhIHtcclxuICAgICAgcGFkZGluZzogOHB4IDhweCA4cHggOHB4O1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgY29sb3I6ICM4MTgxODE7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250cm9scyBhOmhvdmVyLCAub2ZmY2FudmFzIGE6Zm9jdXN7XHJcbiAgICAgIGNvbG9yOiAjZjFmMWYxO1xyXG4gIH1cclxuICBcclxuICBcclxuICB2aWRlbyB7XHJcbiAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICBvYmplY3QtZml0OiBmaWxsO1xyXG4gICAgXHJcbiAgfVxyXG4gIFxyXG4gIC5wbGF5ZXIge1xyXG4gICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgbWF4LWhlaWdodDozMDBweDtcclxuICAgICAgbWF4LXdpZHRoOjYwMHB4O1xyXG4gICAgICBhbGlnbjpcImNlbnRlclwiO1xyXG4gICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDBweDsgXHJcbiAgICAgIFxyXG4gIH1cclxuICBcclxuICAuYm91dG9uIHtcclxuICAgICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICBtYXJnaW4tbGVmdDphdXRvO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6YXV0bztcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gIH1cclxuICBcclxuICAubWVudXRpdGxlXHJcbntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOjYwMHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDBweDsgXHJcbn1cclxuICAudmlkZW90aXRsZVxyXG57XHJcblx0XHJcbmZsb2F0IDogbGVmdDtcclxuY29sb3I6ICM3RTQ4NTU7XHJcbiAgICBmb250LXNpemU6IDJ2dztcclxuICAgIHBhZGRpbmc6IDF2dyAwO1xyXG5cclxufVxyXG5cclxuLm1lbnVcclxue1xyXG5cdFxyXG5mbG9hdCA6IHJpZ2h0O1xyXG5wYWRkaW5nOiAxdncgMDtcclxufVxyXG5cclxuXHJcbi52aWRlb3RpdGxlIHtcclxuXHRjb2xvcjogIzdFNDg1NTtcclxuXHRmb250LXNpemU6IDJ2dztcclxuXHRwYWRkaW5nOiAxdncgMDtcclxufVxyXG5cclxuLm1lbnViYXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBtYXgtd2lkdGg6NjAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7IFxyXG59XHJcblxyXG4uYmxhY2tjb2xvciB7XHJcblx0Y29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn0iXX0= */";
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

    var HolicVideoComponent =
    /*#__PURE__*/
    function () {
      function HolicVideoComponent(activeRoute, router, videoService) {
        _classCallCheck(this, HolicVideoComponent);

        this.activeRoute = activeRoute;
        this.router = router;
        this.videoService = videoService;
      }

      _createClass(HolicVideoComponent, [{
        key: "mouseover",
        value: function mouseover() {
          this.fullscreen = true;
        }
      }, {
        key: "mouseout",
        value: function mouseout() {
          this.fullscreen = true;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var id = this.activeRoute.snapshot.params.id;
          this.fullscreen = false;
          this.mainId = this.activeRoute.snapshot.params.mainid;
          this.video = this.activeRoute.snapshot.data['detail'];
        }
      }, {
        key: "show",
        value: function show() {
          if (!this.showMenu) {
            this.showMenu = true;
          }
        }
      }, {
        key: "notshow",
        value: function notshow() {
          if (this.showMenu) {
            this.showMenu = false;
          }
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this = this;

          this.main = this.matVideo.getVideoTag();
          this.main.addEventListener('loadedmetadata', function () {
            var datebb = new Date();
            var x = datebb.valueOf() / 1000;
            _this.video.time = x % _this.main.duration;
            _this.main.currentTime = x % _this.main.duration;
          });
          this.main.addEventListener('mouseover', function () {
            _this.showMenu = true;
            _this.fullscreen = true;
          });
          this.main.addEventListener('mouseout', function () {
            _this.showMenu = false;
            _this.fullscreen = false;
          });
          this.main.addEventListener('ondblclick', function () {});
          this.main.addEventListener('onclick', function () {});
        }
      }, {
        key: "redirectfacebook",
        value: function redirectfacebook() {
          window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(this.main.currentSrc));
        }
      }, {
        key: "redirecttwitter",
        value: function redirecttwitter() {
          window.open('https://twitter.com/intent/tweet?url=' + encodeURIComponent(this.main.currentSrc));
        }
      }, {
        key: "redirectapple",
        value: function redirectapple() {
          window.open('https://www.facebook.com/sharer.php?s=100&p[url]=' + encodeURIComponent(this.main.currentSrc));
        }
      }, {
        key: "previous",
        value: function previous() {
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
      }, {
        key: "next",
        value: function next() {
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
      }, {
        key: "playcurrent",
        value: function playcurrent() {
          if (this.main.paused) {
            this.main.play();
            return;
          }

          this.main.pause();
        }
      }, {
        key: "redirectHome",
        value: function redirectHome() {
          this.router.navigate(['']);
        }
      }, {
        key: "redirectMainTv",
        value: function redirectMainTv() {
          this.router.navigate(['/video/' + this.mainId + '/' + this.mainId]);
        }
      }, {
        key: "zoom",
        value: function zoom() {
          this.matVideo.is = true;
        }
      }]);

      return HolicVideoComponent;
    }();

    HolicVideoComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: _dashboard_service_video_service__WEBPACK_IMPORTED_MODULE_2__["VideoService"]
      }];
    };

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
      component: _holicvideo_component__WEBPACK_IMPORTED_MODULE_4__["HolicVideoComponent"],
      pathMatch: 'full'
    }];

    var HolicvideoModule = function HolicvideoModule() {
      _classCallCheck(this, HolicvideoModule);
    };

    HolicvideoModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _video_video_module__WEBPACK_IMPORTED_MODULE_5__["MatVideoModule"]],
      declarations: [_holicvideo_component__WEBPACK_IMPORTED_MODULE_4__["HolicVideoComponent"]]
    })], HolicvideoModule);
    /***/
  }
}]);
//# sourceMappingURL=pages-holicvideo-holicvideo-module-es5.js.map