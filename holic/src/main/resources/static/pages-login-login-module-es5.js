(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"formulaire\">\n  <img src=\"assets/img/holic/logo-holic-o.png\" />\n\n  <div>\n    <form\n      [formGroup]=\"form\"\n      (ngSubmit)=\"onSubmit(form.value)\"\n      class=\"text-left mt-4\"\n    >\n      <div class=\"form-group\">\n        <input\n          formControlName=\"login\"\n          class=\"form-control validation-field\"\n          placeholder=\"Login\"\n          type=\"text\"\n        />\n        <small\n          class=\"text-danger\"\n          *ngIf=\"\n            form.get('login').touched && form.get('login').hasError('required')\n          \"\n          >Login is required</small\n        >\n      </div>\n      <div class=\"form-group\">\n        <input\n          formControlName=\"password\"\n          class=\"form-control validation-field\"\n          placeholder=\"Password\"\n          type=\"password\"\n        />\n        <small\n          class=\"text-danger\"\n          *ngIf=\"\n            form.get('password').touched &&\n            form.get('password').hasError('required')\n          \"\n          >Password is required</small\n        >\n        <small\n          class=\"text-danger\"\n          *ngIf=\"\n            form.get('password').touched &&\n            form.get('password').hasError('minlength')\n          \"\n          >Password isn't long enough, minimum of 6 characters</small\n        >\n      </div>\n      <div class=\"form-group d-flex justify-content-between\">\n        <div class=\"custom-control custom-checkbox\">\n          <input\n            type=\"checkbox\"\n            class=\"custom-control-input\"\n            id=\"login-checkbox\"\n          />\n          <label class=\"custom-control-label keepme\" for=\"login-checkbox\"\n            >Keep me signed in.</label\n          >\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <button\n          [disabled]=\"!form.valid\"\n          class=\"btn btn-block submit\"\n          type=\"submit\"\n        >\n          Submit\n        </button>\n      </div>\n    </form>\n\n    <a routerLink=\"/register\" class=\"transition\">Subscribe ?</a>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/model/credential.ts":
  /*!*************************************!*\
    !*** ./src/app/model/credential.ts ***!
    \*************************************/

  /*! exports provided: Credential */

  /***/
  function srcAppModelCredentialTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Credential", function () {
      return Credential;
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    class Credential {}
    /***/

  },

  /***/
  "./src/app/pages/login/login.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/pages/login/login.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".login-container {\n  position: absolute;\n  border: none !important; }\n\n.login {\n  background-color: white !important; }\n\n.keepme {\n  color: black !important; }\n\n.submit {\n  color: white !important;\n  background-color: black !important; }\n\n.formulaire {\n  margin-left: auto;\n  margin-right: auto;\n  vertical-align: center;\n  text-align: center;\n  margin-top: 8em;\n  max-width: 180px; }\n\n.formulaire img {\n  display: block;\n  width: 59px;\n  height: auto;\n  margin: 15px auto; }\n\n.formulaire form ul {\n  text-align: center; }\n\n.formulaire form ul > li {\n  margin: 10px 0;\n  list-style-type: none; }\n\n.formulaire form ul > li > * {\n  display: inline-block;\n  vertical-align: middle; }\n\n.formulaire form ul > li > label {\n  min-width: 100px;\n  text-align: left;\n  color: black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vQzpcXFVzZXJzXFxoZXJ2ZVxcaG9saWNcXHN0YXJ0bmcvc3JjXFxhcHBcXHBhZ2VzXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCLEVBQUE7O0FBR3pCO0VBQ0Usa0NBQWtDLEVBQUE7O0FBR3BDO0VBQ0UsdUJBQXVCLEVBQUE7O0FBRXpCO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtDQUFrQyxFQUFBOztBQUtwQztFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCLEVBQUE7O0FBRW5CO0VBQ0Usa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0UsY0FBYztFQUNkLHFCQUFxQixFQUFBOztBQUV2QjtFQUNFLHFCQUFxQjtFQUNyQixzQkFBc0IsRUFBQTs7QUFFeEI7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5sb2dpbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5rZWVwbWUge1xuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbn1cbi5zdWJtaXQge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbn1cblxuXG5cbi5mb3JtdWxhaXJlIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA4ZW07XG4gIG1heC13aWR0aDogMTgwcHg7XG59XG4uZm9ybXVsYWlyZSBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDU5cHg7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAxNXB4IGF1dG87XG59XG4uZm9ybXVsYWlyZSBmb3JtIHVsIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmZvcm11bGFpcmUgZm9ybSB1bCA+IGxpIHtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cbi5mb3JtdWxhaXJlIGZvcm0gdWwgPiBsaSA+ICoge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4uZm9ybXVsYWlyZSBmb3JtIHVsID4gbGkgPiBsYWJlbCB7XG4gIG1pbi13aWR0aDogMTAwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiBibGFjaztcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/login/login.component.ts":
  /*!************************************************!*\
    !*** ./src/app/pages/login/login.component.ts ***!
    \************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppPagesLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
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


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_model_credential__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/model/credential */
    "./src/app/model/credential.ts");
    /* harmony import */


    var _service_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./service/login.service */
    "./src/app/pages/login/service/login.service.ts");
    /* harmony import */


    var _dashboard_service_video_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
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

    let LoginComponent = class LoginComponent {
      constructor(fb, router, loginService, snackBar, activatedRoute, videoservice) {
        this.fb = fb;
        this.router = router;
        this.loginService = loginService;
        this.snackBar = snackBar;
        this.activatedRoute = activatedRoute;
        this.videoservice = videoservice;
        this.credential = new src_app_model_credential__WEBPACK_IMPORTED_MODULE_4__["Credential"]();
        this.API_URL = '/api/account';
        this.router = router;
        this.form = fb.group({
          login: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
          password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2)])],
          rememberMe: [false]
        });
      }

      ngOnInit() {
        // get return url from route parameters or default to '/'
        this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '';
      }

      onSubmit(values) {
        if (this.form.valid) {
          this.credential.username = this.form.value.login;
          this.credential.password = this.form.value.password;

          if (this.form.value.rememberMe === true) {
            this.credential.rememberMe = 'true';
          } else {
            this.credential.rememberMe = 'false';
          }

          this.loginService.login(this.credential).subscribe(p => {
            this.snackBar.open('Login successful', 'close', {
              verticalPosition: 'top',
              duration: 2000
            });
            this.router.navigate([this.returnUrl]);
          }, err => {
            this.snackBar.open('Identifiants incorrects', 'close', {
              verticalPosition: 'top',
              duration: 2000
            });
          });
        }
      }

      ngAfterViewInit() {
        document.getElementById('preloader').classList.add('hide');
      }

    };

    LoginComponent.ctorParameters = () => [{
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
    }, {
      type: _service_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"]
    }, {
      type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
    }, {
      type: _dashboard_service_video_service__WEBPACK_IMPORTED_MODULE_6__["VideoService"]
    }];

    LoginComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-login',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html")).default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
      styles: [__importDefault(__webpack_require__(
      /*! ./login.component.scss */
      "./src/app/pages/login/login.component.scss")).default]
    }), __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _service_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _dashboard_service_video_service__WEBPACK_IMPORTED_MODULE_6__["VideoService"]])], LoginComponent);
    /***/
  },

  /***/
  "./src/app/pages/login/login.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/login/login.module.ts ***!
    \*********************************************/

  /*! exports provided: routes, LoginModule */

  /***/
  function srcAppPagesLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginModule", function () {
      return LoginModule;
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


    var _login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./login.component */
    "./src/app/pages/login/login.component.ts");

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
      component: _login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
      pathMatch: 'full'
    }];
    let LoginModule = class LoginModule {};
    LoginModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      declarations: [_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]]
    })], LoginModule);
    /***/
  }
}]);
//# sourceMappingURL=pages-login-login-module-es5.js.map