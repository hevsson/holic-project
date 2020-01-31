function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-register-register-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesRegisterRegisterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"d-flex justify-content-center align-items-center w-100 h-100 register-container register\">\r\n    <div class=\"col-xl-4 col-md-6 col-10\">\r\n        <div class=\"card border-0 box-shadow rounded-0 register\">\r\n            <div class=\"card-body text-center pb-1\">\r\n                <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\" class=\"text-left mt-4\">\r\n                    <div class=\"form-group\">\r\n                        <input [formControl]=\"name\" class=\"form-control validation-field\" placeholder=\"Login\" type=\"text\"> \r\n                        <small class=\"text-danger\" *ngIf=\"form.get('name').touched\">\r\n                            <span *ngIf=\"form.get('name').hasError('required')\">Login is required</span>\r\n                            <span *ngIf=\"form.get('name').hasError('minlength')\">Minimum of 3 characters</span>\r\n                        </small>       \r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <input [formControl]=\"email\" class=\"form-control validation-field\" placeholder=\"Email\" type=\"text\"> \r\n                        <small class=\"text-danger\" *ngIf=\"form.get('email').touched\">\r\n                            <span *ngIf=\"form.get('email').hasError('required')\">Email is required</span>\r\n                            <span *ngIf=\"form.get('email').hasError('invalidEmail')\">Invalid email address</span>\r\n                        </small> \r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <input [formControl]=\"password\" class=\"form-control validation-field\" placeholder=\"Password\" type=\"password\" minlength=\"6\">\r\n                         <small class=\"text-danger\" *ngIf=\"form.get('password').touched\">\r\n                            <span *ngIf=\"form.get('password').hasError('required')\">Password is required</span>\r\n                            <span *ngIf=\"form.get('password').hasError('minlength')\">Password isn't long enough, minimum of 6 characters</span>\r\n                        </small>                     \r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <input [formControl]=\"confirmPassword\" class=\"form-control validation-field\" placeholder=\"Confirm Password\" type=\"password\">\r\n                        <small class=\"text-danger\" *ngIf=\"form.get('confirmPassword').touched\">\r\n                            <span *ngIf=\"form.get('confirmPassword').hasError('required')\">Confirm Password is required</span>\r\n                            <span *ngIf=\"form.get('confirmPassword').hasError('mismatchedPasswords')\">Passwords do not match</span>\r\n                        </small> \r\n                    </div>             \r\n                    <div class=\"form-group\">\r\n                        <button [disabled]=\"!form.valid\" class=\"btn btn-block submit\" type=\"submit\">Sign up</button>\r\n                    </div>\r\n                </form>\r\n                <a routerLink=\"/login\" class=\"transition\">Already have an account? Sign in!</a> \r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./src/app/model/principal.ts":
  /*!************************************!*\
    !*** ./src/app/model/principal.ts ***!
    \************************************/

  /*! exports provided: Principal, RegisterView */

  /***/
  function srcAppModelPrincipalTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Principal", function () {
      return Principal;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterView", function () {
      return RegisterView;
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var Principal =
    /*#__PURE__*/
    function () {
      function Principal() {
        _classCallCheck(this, Principal);
      }

      _createClass(Principal, null, [{
        key: "initPrincipal",
        value: function initPrincipal(principal) {
          var p = new Principal();
          p.id = principal.id;
          p.name = principal.name;
          p.firstName = principal.firstName;
          p.email = principal.email;
          p.login = principal.login;
          p.password = principal.password;
          p.country = principal.country;
          p.age = principal.age;
          p.admin = principal.admin;
          return p;
        }
      }]);

      return Principal;
    }();

    var RegisterView = function RegisterView() {
      _classCallCheck(this, RegisterView);
    };
    /***/

  },

  /***/
  "./src/app/pages/register/register.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/pages/register/register.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesRegisterRegisterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".register-container {\n  position: absolute; }\n  .register-container .card .card-header {\n    width: 80px;\n    height: 80px;\n    margin: 0 auto;\n    margin-top: -40px;\n    border-radius: 50%;\n    font-size: 36px; }\n  .register {\n  background-color: white !important; }\n  .submit {\n  color: white !important;\n  background-color: black !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvQzpcXFVzZXJzXFxoZXJ2ZVxcaG9saWNcXHN0YXJ0bmcvc3JjXFxhcHBcXHBhZ2VzXFxyZWdpc3RlclxccmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0IsRUFBQTtFQUR0QjtJQUlZLFdBQVc7SUFDWCxZQUFZO0lBQ1osY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZSxFQUFBO0VBSzNCO0VBQ0ksa0NBQWtDLEVBQUE7RUFHdEM7RUFDSSx1QkFBdUI7RUFDdkIsa0NBQWtDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWdpc3Rlci1jb250YWluZXJ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAuY2FyZHtcclxuICAgICAgICAuY2FyZC1oZWFkZXJ7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtNDBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ucmVnaXN0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnN1Ym1pdCB7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/register/register.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/register/register.component.ts ***!
    \******************************************************/

  /*! exports provided: RegisterComponent, emailValidator, matchingPasswords */

  /***/
  function srcAppPagesRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "emailValidator", function () {
      return emailValidator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "matchingPasswords", function () {
      return matchingPasswords;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_model_principal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/model/principal */
    "./src/app/model/principal.ts");
    /* harmony import */


    var _login_service_userprofile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../login/service/userprofile.service */
    "./src/app/pages/login/service/userprofile.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

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

    var RegisterComponent =
    /*#__PURE__*/
    function () {
      function RegisterComponent(router, fb, userProfileService, snackBar) {
        _classCallCheck(this, RegisterComponent);

        this.userProfileService = userProfileService;
        this.snackBar = snackBar;
        this.router = router;
        this.form = fb.group({
          name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)])],
          email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, emailValidator])],
          password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        }, {
          validator: matchingPasswords('password', 'confirmPassword')
        });
        this.name = this.form.controls['name'];
        this.email = this.form.controls['email'];
        this.password = this.form.controls['password'];
        this.confirmPassword = this.form.controls['confirmPassword'];
      }

      _createClass(RegisterComponent, [{
        key: "onSubmit",
        value: function onSubmit(values) {
          var _this = this;

          if (this.form.valid) {
            var register = new src_app_model_principal__WEBPACK_IMPORTED_MODULE_3__["RegisterView"]();
            register.login = this.form.value.name;
            register.password = this.form.value.password;
            register.email = this.form.value.email;
            this.userProfileService.register(register).subscribe(function (p) {
              _this.snackBar.open('Account created successfully', 'close', {
                verticalPosition: 'top',
                duration: 2000
              });

              _this.router.navigate(['/login']);
            });
          }
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          document.getElementById('preloader').classList.add('hide');
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _login_service_userprofile_service__WEBPACK_IMPORTED_MODULE_4__["UserProfileService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
      }];
    };

    RegisterComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-register',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./register.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.component.html")).default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
      styles: [__importDefault(__webpack_require__(
      /*! ./register.component.scss */
      "./src/app/pages/register/register.component.scss")).default]
    }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _login_service_userprofile_service__WEBPACK_IMPORTED_MODULE_4__["UserProfileService"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])], RegisterComponent);

    function emailValidator(control) {
      var emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;

      if (control.value && !emailRegexp.test(control.value)) {
        return {
          invalidEmail: true
        };
      }
    }

    function matchingPasswords(passwordKey, passwordConfirmationKey) {
      return function (group) {
        var password = group.controls[passwordKey];
        var passwordConfirmation = group.controls[passwordConfirmationKey];

        if (password.value !== passwordConfirmation.value) {
          return passwordConfirmation.setErrors({
            mismatchedPasswords: true
          });
        }
      };
    }
    /***/

  },

  /***/
  "./src/app/pages/register/register.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/register/register.module.ts ***!
    \***************************************************/

  /*! exports provided: routes, RegisterModule */

  /***/
  function srcAppPagesRegisterRegisterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterModule", function () {
      return RegisterModule;
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


    var _register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./register.component */
    "./src/app/pages/register/register.component.ts");

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
      component: _register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"],
      pathMatch: 'full'
    }];

    var RegisterModule = function RegisterModule() {
      _classCallCheck(this, RegisterModule);
    };

    RegisterModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      declarations: [_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]]
    })], RegisterModule);
    /***/
  }
}]);
//# sourceMappingURL=pages-register-register-module-es5.js.map