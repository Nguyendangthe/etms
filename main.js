(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./account/account.module": [
		"./src/account/account.module.ts",
		"account-account-module~main-main-module",
		"common",
		"account-account-module"
	],
	"./app/main/home/home.module": [
		"./src/app/main/home/home.module.ts",
		"common",
		"app-main-home-home-module"
	],
	"./main/main.module": [
		"./src/app/main/main.module.ts",
		"account-account-module~main-main-module",
		"common",
		"main-main-module"
	],
	"./system/system.module": [
		"./src/app/main/system/system.module.ts",
		"system-system-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    {
                        path: 'app',
                        component: _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                        //canActivate: [AuthGuard],
                        // canActivateChild: [AuthGuard],
                        children: [
                            {
                                path: '',
                                children: [
                                    { path: '', redirectTo: 'main/home', pathMatch: 'full' }
                                ]
                            },
                            {
                                path: 'main',
                                loadChildren: './main/main.module#MainModule',
                                data: { preload: true }
                            },
                        ]
                    }
                ])
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n    <div class=\"wrapper-loader\" style=\"\">\r\n        <div id=\"loader\">\r\n            <img src \"./assets/assets_Desgin/assets/ftl-style/images/icons/loading-icon.gif\">\r\n        </div>\r\n    </div>\r\n    <div class=\"page-wrapper\">\r\n        <!--header-->\r\n        <!-- BEGIN HEADER -->\r\n        <div class=\"page-header navbar navbar-fixed-top ftl-main-header\">\r\n            <div class=\"page-header-inner \">\r\n                <!-- BEGIN LOGO -->\r\n                <div class=\"page-logo ftl-page-logo\">\r\n                    <a  routerLink=\"/main/home/index\" class=\"ftl-logo-wrap\">\r\n                        <img src=\"./assets/assets_Desgin/assets/ftl-style/images/logo.png\" alt=\"logo\" class=\"logo-default logo-ftl\" />\r\n                    </a>\r\n                    <div class=\"menu-toggler sidebar-toggler\">\r\n                        <span></span>\r\n                        <i class=\"icon-x\"></i>\r\n                    </div>\r\n                    <div class=\"search-block\"></div>\r\n                </div>\r\n                <!-- END LOGO -->\r\n                <!-- BEGIN RESPONSIVE MENU TOGGLER -->\r\n                <app-top-menu></app-top-menu>\r\n                <!-- END TOP NAVIGATION MENU -->\r\n            </div>\r\n        </div>\r\n        <!-- END HEADER -->\r\n        <div class=\"clearfix\"> </div>\r\n        <!-- BEGIN CONTAINER -->\r\n        <div class=\"page-container\">\r\n            <!-- menu-sidebar -->\r\n            <!-- BEGIN SIDEBAR -->\r\n            <!-- END SIDEBAR -->\r\n            <app-sidebar-menu></app-sidebar-menu>\r\n            <!--page-container-->\r\n            <!-- BEGIN CONTENT -->  \r\n            <router-outlet></router-outlet>\r\n            <!-- END CONTENT -->\r\n        </div>\r\n        <!--footer-->\r\n\r\n        <div class=\"page-footer\">\r\n            <div class=\"page-footer-inner\">\r\n                <p>Version 1.0.1.666</p>\r\n                <p>Copyright 2015\r\n                    <a href=\"#\" target=\"_blank\">ITL Corp</a>. All rights reversed.</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!--modal-->\r\n    <!-- Change password -->\r\n    <div class=\"modal fade\" id=\"logout-modal\" tabindex=\"-1\" role=\"basic\" aria-hidden=\"true\">\r\n        <div class=\"modal-dialog modal-sm modal-notify\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\r\n                        <i class=\"icon-x\"></i>\r\n                    </button>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-12\">\r\n                            <p class=\"text-center p-20\">Are you sure to logout ? </p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <div class=\"clearfix text-right cta-row\">\r\n                        <button type=\"reset\" class=\"btn btn-sm btn-ftl-outline-primary\" data-dismiss=\"modal\" aria-hidden=\"true\">\r\n                            <i class=\"icon-slash\"></i> Cancel</button>\r\n                        <button type=\"submit\" class=\"btn btn-sm btn-ftl-primary\" onclick=\"location.href='login.html'\">\r\n                            <i class=\"icon-save\"></i> OK</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- /.modal-content -->\r\n        </div>\r\n        <!-- /.modal-dialog -->\r\n    </div>\r\n\r\n\r\n\r\n<!-- END THEME GLOBAL SCRIPTS -->\r\n<!-- <script src=\"../../assets/assets_Desgin/assets/global/scripts/app.js\" type=\"text/javascript\"></script>\r\n<script src=\"../../assets/assets_Desgin/assets/layouts/scripts/layout.js\" type=\"text/javascript\"></script> -->\r\n<!-- BEGIN THEME LAYOUT SCRIPTS -->\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_common_system_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/common/system.constants */ "./src/shared/common/system.constants.ts");
/* harmony import */ var _shared_common_url_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/common/url.constants */ "./src/shared/common/url.constants.ts");
/* harmony import */ var _shared_services_utility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/utility.service */ "./src/shared/services/utility.service.ts");
/* harmony import */ var _shared_services_authen_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/authen.service */ "./src/shared/services/authen.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
// import { Component } from '@angular/core';
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'app';
// }






var AppComponent = /** @class */ (function () {
    function AppComponent(utilityService, authenService) {
        this.utilityService = utilityService;
        this.authenService = authenService;
        this.baseFolder = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].API_URL;
    }
    AppComponent.prototype.ngOnInit = function () {
        $('body').attr('class', 'page-header-fixed page-sidebar-closed-hide-logo page-sidebar-fixed');
        this.user = JSON.parse(localStorage.getItem(_shared_common_system_constants__WEBPACK_IMPORTED_MODULE_1__["SystemConstants"].CURRENT_USER));
    };
    AppComponent.prototype.logout = function () {
        localStorage.removeItem(_shared_common_system_constants__WEBPACK_IMPORTED_MODULE_1__["SystemConstants"].CURRENT_USER);
        this.utilityService.navigate(_shared_common_url_constants__WEBPACK_IMPORTED_MODULE_2__["UrlConstants"].LOGIN);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
        }),
        __metadata("design:paramtypes", [_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityService"],
            _shared_services_authen_service__WEBPACK_IMPORTED_MODULE_4__["AuthenService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _shared_layouts_sidebar_menu_sidebar_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/layouts/sidebar-menu/sidebar-menu.component */ "./src/shared/layouts/sidebar-menu/sidebar-menu.component.ts");
/* harmony import */ var _shared_layouts_top_menu_top_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/layouts/top-menu/top-menu.component */ "./src/shared/layouts/top-menu/top-menu.component.ts");
/* harmony import */ var _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/guards/auth.guard */ "./src/shared/guards/auth.guard.ts");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "./node_modules/ngx-bootstrap/pagination/index.js");
/* harmony import */ var _shared_services_authen_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/services/authen.service */ "./src/shared/services/authen.service.ts");
/* harmony import */ var _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/services/notification.service */ "./src/shared/services/notification.service.ts");
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/services/data.service */ "./src/shared/services/data.service.ts");
/* harmony import */ var _shared_services_utility_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/services/utility.service */ "./src/shared/services/utility.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _shared_layouts_sidebar_menu_sidebar_menu_component__WEBPACK_IMPORTED_MODULE_7__["SidebarMenuComponent"],
                _shared_layouts_top_menu_top_menu_component__WEBPACK_IMPORTED_MODULE_8__["TopMenuComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_10__["PaginationModule"].forRoot()
            ],
            providers: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"],
                _shared_services_data_service__WEBPACK_IMPORTED_MODULE_13__["DataService"],
                _shared_services_authen_service__WEBPACK_IMPORTED_MODULE_11__["AuthenService"],
                _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_12__["NotificationService"],
                _shared_services_utility_service__WEBPACK_IMPORTED_MODULE_14__["UtilityService"]
            ],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    // API_URL: 'https://localhost:44360',
    API_URL: 'http://test.api-etms.itlvn.com',
    // http://test.api-etms.itlvn.com/SystemManagementAPI/v1.0
    // WEB_API_URL:'https://localhost:44360/api/v1/', // local
    WEB_API_URL: 'http://test.api-etms.itlvn.com/SystemManagementAPI/v1.0/',
    showError: true
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _root_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./root.module */ "./src/root.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_root_module__WEBPACK_IMPORTED_MODULE_2__["RootModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/root-routing.module.ts":
/*!************************************!*\
  !*** ./src/root-routing.module.ts ***!
  \************************************/
/*! exports provided: RootRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootRoutingModule", function() { return RootRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    { path: '', redirectTo: '/app/main/home', pathMatch: 'full' },
    {
        path: 'account',
        loadChildren: './account/account.module#AccountModule',
        data: { preload: true }
    },
    {
        path: 'home',
        loadChildren: './app/main/home/home.module#HomeModule',
        data: { preload: true }
    }
];
var RootRoutingModule = /** @class */ (function () {
    function RootRoutingModule() {
    }
    RootRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: []
        })
    ], RootRoutingModule);
    return RootRoutingModule;
}());



/***/ }),

/***/ "./src/root.component.ts":
/*!*******************************!*\
  !*** ./src/root.component.ts ***!
  \*******************************/
/*! exports provided: RootComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootComponent", function() { return RootComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RootComponent = /** @class */ (function () {
    function RootComponent() {
    }
    RootComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'root',
            template: "<router-outlet></router-outlet>"
        })
    ], RootComponent);
    return RootComponent;
}());



/***/ }),

/***/ "./src/root.module.ts":
/*!****************************!*\
  !*** ./src/root.module.ts ***!
  \****************************/
/*! exports provided: RootModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootModule", function() { return RootModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _root_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./root-routing.module */ "./src/root-routing.module.ts");
/* harmony import */ var _root_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./root.component */ "./src/root.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _src_shared_auth_token_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/shared/auth/token.interceptor */ "./src/shared/auth/token.interceptor.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var RootModule = /** @class */ (function () {
    function RootModule() {
    }
    RootModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"],
                _root_routing_module__WEBPACK_IMPORTED_MODULE_4__["RootRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
            ],
            declarations: [
                _root_component__WEBPACK_IMPORTED_MODULE_5__["RootComponent"]
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
                    useClass: _src_shared_auth_token_interceptor__WEBPACK_IMPORTED_MODULE_7__["TokenInterceptor"],
                    multi: true
                }
            ],
            bootstrap: [_root_component__WEBPACK_IMPORTED_MODULE_5__["RootComponent"]]
        })
    ], RootModule);
    return RootModule;
}());



/***/ }),

/***/ "./src/shared/auth/token.interceptor.ts":
/*!**********************************************!*\
  !*** ./src/shared/auth/token.interceptor.ts ***!
  \**********************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authen_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/authen.service */ "./src/shared/services/authen.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor(auth) {
        this.auth = auth;
    }
    TokenInterceptor.prototype.intercept = function (request, next) {
        request = request.clone({
            setHeaders: {}
        });
        return next.handle(request);
    };
    TokenInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_authen_service__WEBPACK_IMPORTED_MODULE_1__["AuthenService"]])
    ], TokenInterceptor);
    return TokenInterceptor;
}());



/***/ }),

/***/ "./src/shared/common/message.constants.ts":
/*!************************************************!*\
  !*** ./src/shared/common/message.constants.ts ***!
  \************************************************/
/*! exports provided: MessageContstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageContstants", function() { return MessageContstants; });
var MessageContstants = /** @class */ (function () {
    function MessageContstants() {
    }
    MessageContstants.SYSTEM_ERROR_MSG = "Có lỗi kết nối đến máy chủ";
    MessageContstants.CONFIRM_DELETE_MSG = "Bạn có chắc muốn xóa bản ghi này?";
    MessageContstants.LOGIN_AGAIN_MSG = "Bạn hết phiên đăng nhập. Mời đăng nhập lại.";
    MessageContstants.CREATED_OK_MSG = "Thêm mới thành công";
    MessageContstants.UPDATED_OK_MSG = "Cập nhật thành công";
    MessageContstants.DELETED_OK_MSG = "Xóa thành công";
    MessageContstants.FORBIDDEN = "Bạn bị chặn truy cập";
    return MessageContstants;
}());



/***/ }),

/***/ "./src/shared/common/system.constants.ts":
/*!***********************************************!*\
  !*** ./src/shared/common/system.constants.ts ***!
  \***********************************************/
/*! exports provided: SystemConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemConstants", function() { return SystemConstants; });
var SystemConstants = /** @class */ (function () {
    function SystemConstants() {
    }
    SystemConstants.CURRENT_USER = "CURRENT_USER";
    return SystemConstants;
}());



/***/ }),

/***/ "./src/shared/common/url.constants.ts":
/*!********************************************!*\
  !*** ./src/shared/common/url.constants.ts ***!
  \********************************************/
/*! exports provided: UrlConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlConstants", function() { return UrlConstants; });
var UrlConstants = /** @class */ (function () {
    function UrlConstants() {
    }
    UrlConstants.LOGIN = "/account/login";
    UrlConstants.HOME = "/app/main/home";
    return UrlConstants;
}());



/***/ }),

/***/ "./src/shared/domain/loggedin.user.ts":
/*!********************************************!*\
  !*** ./src/shared/domain/loggedin.user.ts ***!
  \********************************************/
/*! exports provided: LoggedInUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggedInUser", function() { return LoggedInUser; });
var LoggedInUser = /** @class */ (function () {
    function LoggedInUser(access_token, username, fullName, email, avatar, roles, permissions) {
        this.access_token = access_token;
        this.fullName = fullName;
        this.username = username;
        this.email = email;
        this.avatar = avatar;
        this.roles = roles;
        this.permissions = permissions;
    }
    return LoggedInUser;
}());



/***/ }),

/***/ "./src/shared/guards/auth.guard.ts":
/*!*****************************************!*\
  !*** ./src/shared/guards/auth.guard.ts ***!
  \*****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_system_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/system.constants */ "./src/shared/common/system.constants.ts");
/* harmony import */ var _common_url_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/url.constants */ "./src/shared/common/url.constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (activateRoute, routerState) {
        if (localStorage.getItem(_common_system_constants__WEBPACK_IMPORTED_MODULE_2__["SystemConstants"].CURRENT_USER)) {
            return true;
        }
        else {
            this.router.navigate([_common_url_constants__WEBPACK_IMPORTED_MODULE_3__["UrlConstants"].LOGIN], {
                queryParams: {
                    returnUrl: routerState.url
                }
            });
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/shared/layouts/sidebar-menu/sidebar-menu.component.css":
/*!********************************************************************!*\
  !*** ./src/shared/layouts/sidebar-menu/sidebar-menu.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .li_include_submenu:hover>ul{\r\n    display: block;\r\n} */"

/***/ }),

/***/ "./src/shared/layouts/sidebar-menu/sidebar-menu.component.html":
/*!*********************************************************************!*\
  !*** ./src/shared/layouts/sidebar-menu/sidebar-menu.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-sidebar-wrapper ftl-page-sidebar\">\r\n    <div class=\"page-sidebar navbar-collapse collapse width\">\r\n        <ul class=\"page-sidebar-menu  page-header-fixed\" data-keep-expanded=\"false\" data-auto-scroll=\"true\" data-slide-speed=\"200\">\r\n            <!-- BEGIN SIDEBAR TOGGLER BUTTON -->\r\n            <li class=\"sidebar-toggler-wrappers clearfix\">\r\n                <div class=\"sidebar-togglers\">\r\n                    <div class=\"form-group form-search-sidebar\">\r\n                        <div class=\"input-group\">\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Search for...\">\r\n                            <span class=\"input-group-btn\">\r\n                                <button class=\"btn btn-default\" type=\"button\">\r\n                                    <i class=\"icon-search\"></i>\r\n                                </button>\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </li>\r\n            <li class=\"nav-item active\">\r\n                <a href=\"index.html\" class=\"nav-link\">\r\n                    <i class=\"icon-home pull-left\"></i>\r\n                    <span class=\"title\">Dashboard</span>\r\n                </a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n\r\n                <a href=\"javascript:;\" class=\"nav-link nav-toggle\">\r\n                    <i class=\"icon-book-open pull-left\"></i>\r\n                    <span class=\"title\">Catalogue</span>\r\n                    <span class=\"arrow \"></span>\r\n                </a>\r\n                <ul class=\"sub-menu second\">\r\n                    <li class=\"nav-item li_include_submenu\">\r\n                        <a href=\"javascript:;\" class=\"nav-link nav-toggle\">\r\n                            <i class=\"fa fa-genderless menu-item-icon\" aria-hidden=\"true\"></i>\r\n                            <span class=\"title\">Places</span>\r\n                            <span class=\"arrow \"></span>\r\n                        </a>\r\n                        <ul class=\"sub-menu third\">\r\n                            <li class=\"nav-item \">\r\n                                <a href=\"places.html\" class=\"nav-link\">\r\n                                    <i class=\"fa fa-circle menu-item-icon \" aria-hidden=\"true\"></i>\r\n                                    <span class=\"title\">Places</span>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item \">\r\n                                <a href=\"distance-between-places.html\" class=\"nav-link \">\r\n                                    <i class=\"fa fa-circle menu-item-icon\" aria-hidden=\"true\"></i>\r\n                                    <span class=\"title\">Distance Between Places</span>\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </li>\r\n                    <li class=\"nav-item li_include_submenu\">\r\n                        <a href=\"javascript:;\" class=\"nav-link nav-toggle\">\r\n                            <i class=\"fa fa-genderless menu-item-icon\" aria-hidden=\"true\"></i>\r\n                            <span class=\"title\">Parner</span>\r\n                            <span class=\"arrow \"></span>\r\n                        </a>\r\n                        <ul class=\"sub-menu third\">\r\n                            <li class=\"nav-item \">\r\n                                <a href=\"parner-list.html\" class=\"nav-link\">\r\n                                    <i class=\"fa fa-circle menu-item-icon\" aria-hidden=\"true\"></i>\r\n                                    <span class=\"title\">Parner List</span>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item \">\r\n                                <a href=\"account-bank-parner.html\" class=\"nav-link \">\r\n                                    <i class=\"fa fa-circle menu-item-icon\" aria-hidden=\"true\"></i>\r\n                                    <span class=\"title\">Account Bank of Parner</span>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item \">\r\n                                <a href=\"booking-information.html\" class=\"nav-link \">\r\n                                    <i class=\"fa fa-circle menu-item-icon\" aria-hidden=\"true\"></i>\r\n                                    <span class=\"title\">Booking Information</span>\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </li>\r\n                    <li class=\"nav-item li_include_submenu\">\r\n                        <a href=\"javascript:;\" class=\"nav-link nav-toggle\">\r\n                            <i class=\"fa fa-genderless menu-item-icon\" aria-hidden=\"true\"></i>\r\n                            <span class=\"title\">Vehicle</span>\r\n                            <span class=\"arrow \"></span>\r\n                        </a>\r\n                        <ul class=\"sub-menu third\">\r\n                            <li class=\"nav-item \">\r\n                                <a href=\"vehicle-group.html\" class=\"nav-link\">\r\n                                    <i class=\"fa fa-circle menu-item-icon\" aria-hidden=\"true\"></i>\r\n                                    <span class=\"title\">Vehicle Group</span>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item \">\r\n                                <a href=\"vehicle-part-type.html\" class=\"nav-link \">\r\n                                    <i class=\"fa fa-circle menu-item-icon\" aria-hidden=\"true\"></i>\r\n                                    <span class=\"title\">Vehicle Part Type</span>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item \">\r\n                                <a href=\"vehicle-part.html\" class=\"nav-link \">\r\n                                    <i class=\"fa fa-circle menu-item-icon\" aria-hidden=\"true\"></i>\r\n                                    <span class=\"title\">Vehicle Part</span>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item \">\r\n                                <a href=\"vehicle.html\" class=\"nav-link \">\r\n                                    <i class=\"fa fa-circle menu-item-icon\" aria-hidden=\"true\"></i>\r\n                                    <span class=\"title\">Vehicle</span>\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </li>\r\n                    <li class=\"nav-item li_include_submenu\">\r\n                        <a href=\"javascript:;\" class=\"nav-link nav-toggle\">\r\n                            <i class=\"fa fa-genderless menu-item-icon\" aria-hidden=\"true\"></i>\r\n                            <span class=\"title\">Driver</span>\r\n                            <span class=\"arrow \"></span>\r\n                        </a>\r\n                        <ul class=\"sub-menu third\">\r\n                            <li class=\"nav-item \">\r\n                                <a href=\"driver-list.html\" class=\"nav-link\">\r\n                                    <i class=\"fa fa-circle menu-item-icon\" aria-hidden=\"true\"></i>\r\n                                    <span class=\"title\">Driver List</span>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item \">\r\n                                <a href=\"driver-vehicle.html\" class=\"nav-link \">\r\n                                    <i class=\"fa fa-circle menu-item-icon\" aria-hidden=\"true\"></i>\r\n                                    <span class=\"title\">Vehicle - Driver</span>\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </li>\r\n                    <li class=\"nav-item li_include_submenu\">\r\n                        <a href=\"javascript:;\" class=\"nav-link nav-toggle\">\r\n                            <i class=\"fa fa-genderless menu-item-icon\" aria-hidden=\"true\"></i>\r\n                            <span class=\"title\">Commodity</span>\r\n                            <span class=\"arrow \"></span>\r\n                        </a>\r\n                        <ul class=\"sub-menu third\">\r\n                            <li class=\"nav-item \">\r\n                                <a href=\"commodity-group.html\" class=\"nav-link\">\r\n                                    <i class=\"fa fa-circle menu-item-icon\" aria-hidden=\"true\"></i>\r\n                                    <span class=\"title\">Commodity Group</span>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item \">\r\n                                <a href=\"commodity.html\" class=\"nav-link \">\r\n                                    <i class=\"fa fa-circle menu-item-icon\" aria-hidden=\"true\"></i>\r\n                                    <span class=\"title\">Commodity</span>\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </li>\r\n                    <li class=\"nav-item li_include_submenu\">\r\n                        <a href=\"javascript:;\" class=\"nav-link nav-toggle\">\r\n                            <i class=\"fa fa-genderless menu-item-icon\" aria-hidden=\"true\"></i>\r\n                            <span class=\"title\">Zone Code</span>\r\n                            <span class=\"arrow \"></span>\r\n                        </a>\r\n                        <ul class=\"sub-menu third\">\r\n                            <li class=\"nav-item \">\r\n                                <a href=\"zone-code.html\" class=\"nav-link\">\r\n                                    <i class=\"fa fa-circle menu-item-icon \" aria-hidden=\"true\"></i>\r\n                                    <span class=\"title\">Zone Code</span>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item \">\r\n                                <a href=\"delivery-zone-code.html\" class=\"nav-link \">\r\n                                    <i class=\"fa fa-circle menu-item-icon\" aria-hidden=\"true\"></i>\r\n                                    <span class=\"title\">Delivery Zone Code</span>\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </li>\r\n                    <li class=\"nav-item \">\r\n                        <a href=\"branch.html\" class=\"nav-link \">\r\n                            <i class=\"fa fa-genderless menu-item-icon\" aria-hidden=\"true\"></i>\r\n                            <span class=\"title\">Branch</span>\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"nav-item \">\r\n                        <a href=\"hub-list.html\" class=\"nav-link \">\r\n                            <i class=\"fa fa-genderless menu-item-icon\" aria-hidden=\"true\"></i>\r\n                            <span class=\"title\">Hub</span>\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"nav-item \">\r\n                        <a href=\"charge.html\" class=\"nav-link \">\r\n                            <i class=\"fa fa-genderless menu-item-icon\" aria-hidden=\"true\"></i>\r\n                            <span class=\"title\">Charge</span>\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"nav-item \">\r\n                        <a href=\"administrative-units.html\" class=\"nav-link \">\r\n                            <i class=\"fa fa-genderless menu-item-icon\" aria-hidden=\"true\"></i>\r\n                            <span class=\"title\">Administrative Units</span>\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"nav-item \">\r\n                        <a href=\"unit.html\" class=\"nav-link \">\r\n                            <i class=\"fa fa-genderless menu-item-icon\" aria-hidden=\"true\"></i>\r\n                            <span class=\"title\">Unit</span>\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"nav-item \">\r\n                        <a href=\"weight-range.html\" class=\"nav-link \">\r\n                            <i class=\"fa fa-genderless menu-item-icon\" aria-hidden=\"true\"></i>\r\n                            <span class=\"title\">Weight Range</span>\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"nav-item \">\r\n                        <a href=\"container-type.html\" class=\"nav-link \">\r\n                            <i class=\"fa fa-genderless menu-item-icon\" aria-hidden=\"true\"></i>\r\n                            <span class=\"title\">Container Type</span>\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"nav-item \">\r\n                        <a href=\"geo-code.html\" class=\"nav-link \">\r\n                            <i class=\"fa fa-genderless menu-item-icon\" aria-hidden=\"true\"></i>\r\n                            <span class=\"title\">Geo Code</span>\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"nav-item \">\r\n                        <a href=\"special-handing.html\" class=\"nav-link \">\r\n                            <i class=\"fa fa-genderless menu-item-icon\" aria-hidden=\"true\"></i>\r\n                            <span class=\"title\">Special Handing</span>\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n            <li class=\"nav-item li_include_submenu\">\r\n                <a href=\"javascript:;\" class=\"nav-link nav-toggle\">\r\n                    <i class=\"icon-dollar-sign pull-left\"></i>\r\n                    <span class=\"title\">Pricing</span>\r\n                    <span class=\"arrow \"></span>\r\n                </a>\r\n                <ul class=\"sub-menu second\">\r\n                    <li class=\"nav-item li_include_submenu\">\r\n                        <a href=\"javascript:;\" class=\"nav-link nav-toggle\">\r\n                            <i class=\"fa fa-genderless menu-item-icon\" aria-hidden=\"true\"></i>\r\n                            <span class=\"title\">LCL</span>\r\n                            <span class=\"arrow \"></span>\r\n                        </a>\r\n                        <ul class=\"sub-menu third\">\r\n                            <li class=\"nav-item \">\r\n                                <a href=\"cost-of-route.html\" class=\"nav-link\">\r\n                                    <i class=\"fa fa-circle menu-item-icon \" aria-hidden=\"true\"></i>\r\n                                    <span class=\"title\">Cost of Route</span>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item \">\r\n                                <a href=\"unit-cost.html\" class=\"nav-link \">\r\n                                    <i class=\"fa fa-circle menu-item-icon\" aria-hidden=\"true\"></i>\r\n                                    <span class=\"title\">Unit Cost</span>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item \">\r\n                                <a href=\"unit-cost-for-direct-route.html\" class=\"nav-link \">\r\n                                    <i class=\"fa fa-circle menu-item-icon\" aria-hidden=\"true\"></i>\r\n                                    <span class=\"title\">Unit Cost For Direct Route</span>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item \">\r\n                                <a href=\"weight-range.html\" class=\"nav-link \">\r\n                                    <i class=\"fa fa-circle menu-item-icon\" aria-hidden=\"true\"></i>\r\n                                    <span class=\"title\">Weight Range</span>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item \">\r\n                                <a href=\"rate-card-tool.html\" class=\"nav-link \">\r\n                                    <i class=\"fa fa-circle menu-item-icon\" aria-hidden=\"true\"></i>\r\n                                    <span class=\"title\">Rate Card Tool</span>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item \">\r\n                                <a href=\"rate-card-list.html\" class=\"nav-link \">\r\n                                    <i class=\"fa fa-circle menu-item-icon\" aria-hidden=\"true\"></i>\r\n                                    <span class=\"title\">Rate Card List</span>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item \">\r\n                                <a href=\"buying.html\" class=\"nav-link \">\r\n                                    <i class=\"fa fa-circle menu-item-icon\" aria-hidden=\"true\"></i>\r\n                                    <span class=\"title\">Buying</span>\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </li>\r\n                    <li class=\"nav-item li_include_submenu\">\r\n                        <a href=\"javascript:;\" class=\"nav-link nav-toggle\">\r\n                            <i class=\"fa fa-genderless menu-item-icon\" aria-hidden=\"true\"></i>\r\n                            <span class=\"title\">Distribution</span>\r\n                            <span class=\"arrow \"></span>\r\n                        </a>\r\n                        <ul class=\"sub-menu third\">\r\n                            <li class=\"nav-item \">\r\n                                <a href=\"distribution-rate-card-tool.html\" class=\"nav-link\">\r\n                                    <i class=\"fa fa-circle menu-item-icon \" aria-hidden=\"true\"></i>\r\n                                    <span class=\"title\">Distribution Rate Card Tool</span>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item \">\r\n                                <a href=\"distribution-rate-card.html\" class=\"nav-link \">\r\n                                    <i class=\"fa fa-circle menu-item-icon\" aria-hidden=\"true\"></i>\r\n                                    <span class=\"title\">Distribution Rate Card</span>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item \">\r\n                                <a href=\"buying-per-trip.html\" class=\"nav-link \">\r\n                                    <i class=\"fa fa-circle menu-item-icon\" aria-hidden=\"true\"></i>\r\n                                    <span class=\"title\">Buying per Trip</span>\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </li>\r\n                    <li class=\"nav-item li_include_submenu\">\r\n                        <a href=\"javascript:;\" class=\"nav-link nav-toggle\">\r\n                            <i class=\"fa fa-genderless menu-item-icon\" aria-hidden=\"true\"></i>\r\n                            <span class=\"title\">FCL</span>\r\n                            <span class=\"arrow \"></span>\r\n                        </a>\r\n                        <ul class=\"sub-menu third\">\r\n                            <li class=\"nav-item \">\r\n                                <a href=\"quotation-list.html\" class=\"nav-link\">\r\n                                    <i class=\"fa fa-circle menu-item-icon \" aria-hidden=\"true\"></i>\r\n                                    <span class=\"title\">Quotation List</span>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item \">\r\n                                <a href=\"fcl-buying-price.html\" class=\"nav-link \">\r\n                                    <i class=\"fa fa-circle menu-item-icon\" aria-hidden=\"true\"></i>\r\n                                    <span class=\"title\">FCL Buying Price</span>\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n            <li class=\"nav-item li_include_submenu\">\r\n                <a href=\"javascript:;\" class=\"nav-link nav-toggle\">\r\n                    <i class=\"fa fa-file-alt pull-left\"></i>\r\n                    <span class=\"title\">Quotation</span>\r\n                    <span class=\"arrow\"></span>\r\n                </a>\r\n                <ul class=\"sub-menu second\">\r\n                    <li class=\"nav-item\">\r\n                        <a href=\"\" class=\"nav-link nav-toggle\">\r\n                            <i class=\"fa fa-genderless menu-item-icon\" aria-hidden=\"true\"></i>\r\n                            <span class=\"title\">Create Quotation</span>\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a href=\"\" class=\"nav-link \">\r\n                            <i class=\"fa fa-genderless menu-item-icon\" aria-hidden=\"true\"></i>\r\n                            <span class=\"title\">LCL Create Quotation</span>\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a href=\"\" class=\"nav-link \">\r\n                            <i class=\"fa fa-genderless menu-item-icon\" aria-hidden=\"true\"></i>\r\n                            <span class=\"title\">Sales Target</span>\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a href=\"\" class=\"nav-link \">\r\n                            <i class=\"fa fa-genderless menu-item-icon\" aria-hidden=\"true\"></i>\r\n                            <span class=\"title\">Create Distribution Quotation</span>\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n            <li class=\"nav-item li_include_submenu\">\r\n                <a href=\"javascript:;\" class=\"nav-link nav-toggle\">\r\n                    <i class=\"fa fa-handshake pull-left\"></i>\r\n                    <span class=\"title\">Customer Service</span>\r\n                    <span class=\"arrow\"></span>\r\n                </a>\r\n                <ul class=\"sub-menu second\">\r\n                    <li class=\"nav-item li_include_submenu\">\r\n                        <a href=\"javascript:;\" class=\"nav-link nav-toggle\">\r\n                            <i class=\"fa fa-genderless menu-item-icon\" aria-hidden=\"true\"></i>\r\n                            <span class=\"title\">Common</span>\r\n                            <span class=\"arrow\"></span>\r\n                        </a>\r\n                        <ul class=\"sub-menu third\">\r\n                            <li class=\"nav-item\">\r\n                                <a href=\"\" class=\"nav-link\">\r\n                                    <i class=\"fa fa-circle menu-item-icon \" aria-hidden=\"true\"></i>\r\n                                    <span class=\"title\">Waybill Commission</span>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a href=\"\" class=\"nav-link \">\r\n                                    <i class=\"fa fa-circle menu-item-icon\" aria-hidden=\"true\"></i>\r\n                                    <span class=\"title\">Changed Surcharge Log</span>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a href=\"\" class=\"nav-link \">\r\n                                    <i class=\"fa fa-circle menu-item-icon\" aria-hidden=\"true\"></i>\r\n                                    <span class=\"title\">Importand Export</span>\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </li>\r\n                    <li class=\"nav-item li_include_submenu\">\r\n                        <a href=\"javascript:;\" class=\"nav-link nav-toggle\">\r\n                            <i class=\"fa fa-genderless menu-item-icon\" aria-hidden=\"true\"></i>\r\n                            <span class=\"title\">Distribution</span>\r\n                            <span class=\"arrow\"></span>\r\n                        </a>\r\n                        <ul class=\"sub-menu third\">\r\n                            <li class=\"nav-item\">\r\n                                <a href=\"\" class=\"nav-link\">\r\n                                    <i class=\"fa fa-circle menu-item-icon \" aria-hidden=\"true\"></i>\r\n                                    <span class=\"title\">Distribution Booking</span>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a href=\"\" class=\"nav-link \">\r\n                                    <i class=\"fa fa-circle menu-item-icon\" aria-hidden=\"true\"></i>\r\n                                    <span class=\"title\">DTB Transport Surcharge</span>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a href=\"\" class=\"nav-link \">\r\n                                    <i class=\"fa fa-circle menu-item-icon\" aria-hidden=\"true\"></i>\r\n                                    <span class=\"title\">DTB Order Surcharge</span>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a href=\"\" class=\"nav-link \">\r\n                                    <i class=\"fa fa-circle menu-item-icon\" aria-hidden=\"true\"></i>\r\n                                    <span class=\"title\">Distribution</span>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a href=\"\" class=\"nav-link \">\r\n                                    <i class=\"fa fa-circle menu-item-icon\" aria-hidden=\"true\"></i>\r\n                                    <span class=\"title\">Charge Behalf</span>\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </li>\r\n                    <li class=\"nav-item li_include_submenu\">\r\n                        <a href=\"javascript:;\" class=\"nav-link nav-toggle\">\r\n                            <i class=\"fa fa-genderless menu-item-icon\" aria-hidden=\"true\"></i>\r\n                            <span class=\"title\">FLC</span>\r\n                            <span class=\"arrow\"></span>\r\n                        </a>\r\n                        <ul class=\"sub-menu third\">\r\n                            <li class=\"nav-item\">\r\n                                <a href=\"\" class=\"nav-link\">\r\n                                    <i class=\"fa fa-circle menu-item-icon \" aria-hidden=\"true\"></i>\r\n                                    <span class=\"title\">Booking FCL</span>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a href=\"\" class=\"nav-link \">\r\n                                    <i class=\"fa fa-circle menu-item-icon\" aria-hidden=\"true\"></i>\r\n                                    <span class=\"title\">FCL Transport Surcharge</span>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a href=\"\" class=\"nav-link \">\r\n                                    <i class=\"fa fa-circle menu-item-icon\" aria-hidden=\"true\"></i>\r\n                                    <span class=\"title\">FCL Booking Plan</span>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a href=\"\" class=\"nav-link \">\r\n                                    <i class=\"fa fa-circle menu-item-icon\" aria-hidden=\"true\"></i>\r\n                                    <span class=\"title\">FCL Transport Charge Behalf</span>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a href=\"\" class=\"nav-link \">\r\n                                    <i class=\"fa fa-circle menu-item-icon\" aria-hidden=\"true\"></i>\r\n                                    <span class=\"title\">FCL Shipment Management</span>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a href=\"\" class=\"nav-link \">\r\n                                    <i class=\"fa fa-circle menu-item-icon\" aria-hidden=\"true\"></i>\r\n                                    <span class=\"title\">Draft Booking FCL</span>\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </li>\r\n                    <li class=\"nav-item li_include_submenu\">\r\n                        <a href=\"javascript:;\" class=\"nav-link nav-toggle\">\r\n                            <i class=\"fa fa-genderless menu-item-icon\" aria-hidden=\"true\"></i>\r\n                            <span class=\"title\">LCL</span>\r\n                            <span class=\"arrow\"></span>\r\n                        </a>\r\n                        <ul class=\"sub-menu third\">\r\n                            <li class=\"nav-item\">\r\n                                <a href=\"\" class=\"nav-link\">\r\n                                    <i class=\"fa fa-circle menu-item-icon \" aria-hidden=\"true\"></i>\r\n                                    <span class=\"title\">Booking LCL</span>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a href=\"\" class=\"nav-link \">\r\n                                    <i class=\"fa fa-circle menu-item-icon\" aria-hidden=\"true\"></i>\r\n                                    <span class=\"title\">Shipment Management</span>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a href=\"\" class=\"nav-link \">\r\n                                    <i class=\"fa fa-circle menu-item-icon\" aria-hidden=\"true\"></i>\r\n                                    <span class=\"title\">Transport Surcharge</span>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a href=\"\" class=\"nav-link \">\r\n                                    <i class=\"fa fa-circle menu-item-icon\" aria-hidden=\"true\"></i>\r\n                                    <span class=\"title\">LCL Waybill Expenses</span>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a href=\"\" class=\"nav-link \">\r\n                                    <i class=\"fa fa-circle menu-item-icon\" aria-hidden=\"true\"></i>\r\n                                    <span class=\"title\">Create report for transit plan</span>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a href=\"\" class=\"nav-link \">\r\n                                    <i class=\"fa fa-circle menu-item-icon\" aria-hidden=\"true\"></i>\r\n                                    <span class=\"title\">Vouchers</span>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a href=\"\" class=\"nav-link \">\r\n                                    <i class=\"fa fa-circle menu-item-icon\" aria-hidden=\"true\"></i>\r\n                                    <span class=\"title\">Charge Behalf</span>\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n            <li class=\"nav-item li_include_submenu\">\r\n                <a href=\"javascript:;\" class=\"nav-link nav-toggle\">\r\n                    <i class=\"fa fa-project-diagram pull-left\"></i>\r\n                    <span class=\"title\">Operation</span>\r\n                    <span class=\"arrow\"></span>\r\n                </a>\r\n                <ul class=\"sub-menu second li_include_submenu\">\r\n                    <li class=\"nav-item\">\r\n                        <a href=\"javascript:;\" class=\"nav-link nav-toggle\">\r\n                            <i class=\"fa fa-genderless menu-item-icon\" aria-hidden=\"true\"></i>\r\n                            <span class=\"title\">LCL</span>\r\n                            <span class=\"arrow\"></span>\r\n                        </a>\r\n                        <ul class=\"sub-menu third\">\r\n                            <li class=\"nav-item\">\r\n                                <a href=\"\" class=\"nav-link\">\r\n                                    <i class=\"fa fa-circle menu-item-icon \" aria-hidden=\"true\"></i>\r\n                                    <span class=\"title\">Pickup Plan</span>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a href=\"\" class=\"nav-link \">\r\n                                    <i class=\"fa fa-circle menu-item-icon\" aria-hidden=\"true\"></i>\r\n                                    <span class=\"title\">Pickup Run Sheet</span>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a href=\"\" class=\"nav-link \">\r\n                                    <i class=\"fa fa-circle menu-item-icon\" aria-hidden=\"true\"></i>\r\n                                    <span class=\"title\">PRS Closing</span>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a href=\"\" class=\"nav-link \">\r\n                                    <i class=\"fa fa-circle menu-item-icon\" aria-hidden=\"true\"></i>\r\n                                    <span class=\"title\">Revenue Protection</span>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a href=\"\" class=\"nav-link\">\r\n                                    <i class=\"fa fa-circle menu-item-icon \" aria-hidden=\"true\"></i>\r\n                                    <span class=\"title\">Routing</span>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a href=\"\" class=\"nav-link \">\r\n                                    <i class=\"fa fa-circle menu-item-icon\" aria-hidden=\"true\"></i>\r\n                                    <span class=\"title\">Consolidation</span>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a href=\"\" class=\"nav-link \">\r\n                                    <i class=\"fa fa-circle menu-item-icon\" aria-hidden=\"true\"></i>\r\n                                    <span class=\"title\">Checkout</span>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a href=\"\" class=\"nav-link \">\r\n                                    <i class=\"fa fa-circle menu-item-icon\" aria-hidden=\"true\"></i>\r\n                                    <span class=\"title\">Transit</span>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a href=\"\" class=\"nav-link \">\r\n                                    <i class=\"fa fa-circle menu-item-icon\" aria-hidden=\"true\"></i>\r\n                                    <span class=\"title\">Check In</span>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a href=\"\" class=\"nav-link \">\r\n                                    <i class=\"fa fa-circle menu-item-icon\" aria-hidden=\"true\"></i>\r\n                                    <span class=\"title\">Transit Request Closing</span>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a href=\"\" class=\"nav-link \">\r\n                                    <i class=\"fa fa-circle menu-item-icon\" aria-hidden=\"true\"></i>\r\n                                    <span class=\"title\">Unbag</span>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a href=\"\" class=\"nav-link \">\r\n                                    <i class=\"fa fa-circle menu-item-icon\" aria-hidden=\"true\"></i>\r\n                                    <span class=\"title\">Delivery Plan</span>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a href=\"\" class=\"nav-link \">\r\n                                    <i class=\"fa fa-circle menu-item-icon\" aria-hidden=\"true\"></i>\r\n                                    <span class=\"title\">Delivery Run Sheet</span>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a href=\"\" class=\"nav-link \">\r\n                                    <i class=\"fa fa-circle menu-item-icon\" aria-hidden=\"true\"></i>\r\n                                    <span class=\"title\">DRS Closing</span>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a href=\"\" class=\"nav-link \">\r\n                                    <i class=\"fa fa-circle menu-item-icon\" aria-hidden=\"true\"></i>\r\n                                    <span class=\"title\">Trip Settelment</span>\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </li>\r\n                    <li class=\"nav-item li_include_submenu\">\r\n                        <a href=\"javascript:;\" class=\"nav-link nav-toggle\">\r\n                            <i class=\"fa fa-genderless menu-item-icon\" aria-hidden=\"true\"></i>\r\n                            <span class=\"title\">Common</span>\r\n                            <span class=\"arrow\"></span>\r\n                        </a>\r\n                        <ul class=\"sub-menu third\">\r\n                            <li class=\"nav-item\">\r\n                                <a href=\"\" class=\"nav-link\">\r\n                                    <i class=\"fa fa-circle menu-item-icon \" aria-hidden=\"true\"></i>\r\n                                    <span class=\"title\">Close Transport</span>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a href=\"\" class=\"nav-link \">\r\n                                    <i class=\"fa fa-circle menu-item-icon\" aria-hidden=\"true\"></i>\r\n                                    <span class=\"title\">Unlock Transport Request</span>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a href=\"\" class=\"nav-link \">\r\n                                    <i class=\"fa fa-circle menu-item-icon\" aria-hidden=\"true\"></i>\r\n                                    <span class=\"title\">Vehicle Location</span>\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </li>\r\n                    <li class=\"nav-item li_include_submenu\">\r\n                        <a href=\"javascript:;\" class=\"nav-link nav-toggle\">\r\n                            <i class=\"fa fa-genderless menu-item-icon\" aria-hidden=\"true\"></i>\r\n                            <span class=\"title\">Distribution</span>\r\n                            <span class=\"arrow\"></span>\r\n                        </a>\r\n                        <ul class=\"sub-menu third\">\r\n                            <li class=\"nav-item\">\r\n                                <a href=\"\" class=\"nav-link\">\r\n                                    <i class=\"fa fa-circle menu-item-icon \" aria-hidden=\"true\"></i>\r\n                                    <span class=\"title\">Distribution Plan</span>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a href=\"\" class=\"nav-link \">\r\n                                    <i class=\"fa fa-circle menu-item-icon\" aria-hidden=\"true\"></i>\r\n                                    <span class=\"title\">Distribution Request</span>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a href=\"\" class=\"nav-link \">\r\n                                    <i class=\"fa fa-circle menu-item-icon\" aria-hidden=\"true\"></i>\r\n                                    <span class=\"title\">Distribution Request Closing</span>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a href=\"\" class=\"nav-link \">\r\n                                    <i class=\"fa fa-circle menu-item-icon\" aria-hidden=\"true\"></i>\r\n                                    <span class=\"title\">Pickup Plan (Wawe)</span>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a href=\"\" class=\"nav-link \">\r\n                                    <i class=\"fa fa-circle menu-item-icon\" aria-hidden=\"true\"></i>\r\n                                    <span class=\"title\">DTB Trip Settelment</span>\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </li>\r\n                    <li class=\"nav-item li_include_submenu\">\r\n                        <a href=\"javascript:;\" class=\"nav-link nav-toggle\">\r\n                            <i class=\"fa fa-genderless menu-item-icon\" aria-hidden=\"true\"></i>\r\n                            <span class=\"title\">FCL</span>\r\n                            <span class=\"arrow\"></span>\r\n                        </a>\r\n                        <ul class=\"sub-menu third\">\r\n                            <li class=\"nav-item\">\r\n                                <a href=\"\" class=\"nav-link\">\r\n                                    <i class=\"fa fa-circle menu-item-icon \" aria-hidden=\"true\"></i>\r\n                                    <span class=\"title\">FCL Transport Request List</span>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a href=\"\" class=\"nav-link \">\r\n                                    <i class=\"fa fa-circle menu-item-icon\" aria-hidden=\"true\"></i>\r\n                                    <span class=\"title\">FCL Canneled Request</span>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a href=\"\" class=\"nav-link \">\r\n                                    <i class=\"fa fa-circle menu-item-icon\" aria-hidden=\"true\"></i>\r\n                                    <span class=\"title\">FCL Trip Settelment</span>\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n            <li class=\"nav-item li_include_submenu\">\r\n                <a href=\"javascript:;\" class=\"nav-link nav-toggle\">\r\n                    <i class=\"fa fa-toolbox pull-left\"></i>\r\n                    <span class=\"title\">Maintenance and Repair</span>\r\n                    <span class=\"arrow\"></span>\r\n                </a>\r\n                <ul class=\"sub-menu second\">\r\n                    <li class=\"nav-item\">\r\n                        <a href=\"\" class=\"nav-link nav-toggle\">\r\n                            <i class=\"fa fa-genderless menu-item-icon\" aria-hidden=\"true\"></i>\r\n                            <span class=\"title\">Maintenance Type</span>\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a href=\"\" class=\"nav-link \">\r\n                            <i class=\"fa fa-genderless menu-item-icon\" aria-hidden=\"true\"></i>\r\n                            <span class=\"title\">Maintenance Place</span>\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a href=\"\" class=\"nav-link \">\r\n                            <i class=\"fa fa-genderless menu-item-icon\" aria-hidden=\"true\"></i>\r\n                            <span class=\"title\">Maintenance Quota</span>\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a href=\"\" class=\"nav-link \">\r\n                            <i class=\"fa fa-genderless menu-item-icon\" aria-hidden=\"true\"></i>\r\n                            <span class=\"title\">Vehicle need maintaining</span>\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a href=\"\" class=\"nav-link nav-toggle\">\r\n                            <i class=\"fa fa-genderless menu-item-icon\" aria-hidden=\"true\"></i>\r\n                            <span class=\"title\">Maintenance Request</span>\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a href=\"\" class=\"nav-link \">\r\n                            <i class=\"fa fa-genderless menu-item-icon\" aria-hidden=\"true\"></i>\r\n                            <span class=\"title\">Vehicle Maintenance</span>\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a href=\"\" class=\"nav-link \">\r\n                            <i class=\"fa fa-genderless menu-item-icon\" aria-hidden=\"true\"></i>\r\n                            <span class=\"title\">Close Maintenance Request</span>\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a href=\"\" class=\"nav-link \">\r\n                            <i class=\"fa fa-genderless menu-item-icon\" aria-hidden=\"true\"></i>\r\n                            <span class=\"title\">Maintenance Year Plan</span>\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a href=\"\" class=\"nav-link nav-toggle\">\r\n                            <i class=\"fa fa-genderless menu-item-icon\" aria-hidden=\"true\"></i>\r\n                            <span class=\"title\">Maintenance Cost Estimation</span>\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a href=\"\" class=\"nav-link \">\r\n                            <i class=\"fa fa-genderless menu-item-icon\" aria-hidden=\"true\"></i>\r\n                            <span class=\"title\">Maintenance Month Plan</span>\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a href=\"\" class=\"nav-link \">\r\n                            <i class=\"fa fa-genderless menu-item-icon\" aria-hidden=\"true\"></i>\r\n                            <span class=\"title\">Maintenance Report</span>\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n            <li class=\"nav-item li_include_submenu\">\r\n                <a href=\"javascript:;\" class=\"nav-link nav-toggle\">\r\n                    <i class=\"fa fa-object-group pull-left\"></i>\r\n                    <span class=\"title\">Accounting</span>\r\n                    <span class=\"arrow\"></span>\r\n                </a>\r\n                <ul class=\"sub-menu second\">\r\n                    <li class=\"nav-item\">\r\n                        <a href=\"\" class=\"nav-link nav-toggle\">\r\n                            <i class=\"fa fa-genderless menu-item-icon\" aria-hidden=\"true\"></i>\r\n                            <span class=\"title\">Payment Request</span>\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a href=\"\" class=\"nav-link \">\r\n                            <i class=\"fa fa-genderless menu-item-icon\" aria-hidden=\"true\"></i>\r\n                            <span class=\"title\">Reporting</span>\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a href=\"\" class=\"nav-link \">\r\n                            <i class=\"fa fa-genderless menu-item-icon\" aria-hidden=\"true\"></i>\r\n                            <span class=\"title\">Fuel Transaction</span>\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a href=\"\" class=\"nav-link \">\r\n                            <i class=\"fa fa-genderless menu-item-icon\" aria-hidden=\"true\"></i>\r\n                            <span class=\"title\">Create SOA</span>\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a href=\"\" class=\"nav-link nav-toggle\">\r\n                            <i class=\"fa fa-genderless menu-item-icon\" aria-hidden=\"true\"></i>\r\n                            <span class=\"title\">SOA List</span>\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a href=\"\" class=\"nav-link \">\r\n                            <i class=\"fa fa-genderless menu-item-icon\" aria-hidden=\"true\"></i>\r\n                            <span class=\"title\">Rejected Surcharge</span>\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a href=\"\" class=\"nav-link \">\r\n                            <i class=\"fa fa-genderless menu-item-icon\" aria-hidden=\"true\"></i>\r\n                            <span class=\"title\">Driver's Allowance</span>\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a href=\"\" class=\"nav-link \">\r\n                            <i class=\"fa fa-genderless menu-item-icon\" aria-hidden=\"true\"></i>\r\n                            <span class=\"title\">Hire Transport Request Approval</span>\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a href=\"\" class=\"nav-link nav-toggle\">\r\n                            <i class=\"fa fa-genderless menu-item-icon\" aria-hidden=\"true\"></i>\r\n                            <span class=\"title\">Parameter</span>\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a href=\"\" class=\"nav-link \">\r\n                            <i class=\"fa fa-genderless menu-item-icon\" aria-hidden=\"true\"></i>\r\n                            <span class=\"title\">Currency</span>\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a href=\"\" class=\"nav-link \">\r\n                            <i class=\"fa fa-genderless menu-item-icon\" aria-hidden=\"true\"></i>\r\n                            <span class=\"title\">Driver Allowance Parameter</span>\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a href=\"\" class=\"nav-link \">\r\n                            <i class=\"fa fa-genderless menu-item-icon\" aria-hidden=\"true\"></i>\r\n                            <span class=\"title\">Partner Debit</span>\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a href=\"\" class=\"nav-link \">\r\n                            <i class=\"fa fa-genderless menu-item-icon\" aria-hidden=\"true\"></i>\r\n                            <span class=\"title\">Payment Request Fuel</span>\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a href=\"\" class=\"nav-link \">\r\n                            <i class=\"fa fa-genderless menu-item-icon\" aria-hidden=\"true\"></i>\r\n                            <span class=\"title\">Rejected Fuel Payment Request</span>\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n            <li class=\"nav-item li_include_submenu\">\r\n                <a href=\"javascript:;\" class=\"nav-link nav-toggle\">\r\n                    <i class=\"fa fa-calculator pull-left\"></i>\r\n                    <span class=\"title\">Management</span>\r\n                    <span class=\"arrow\"></span>\r\n                </a>\r\n                <ul class=\"sub-menu second\">\r\n                    <li class=\"nav-item\">\r\n                        <a href=\"\" class=\"nav-link nav-toggle\">\r\n                            <i class=\"fa fa-genderless menu-item-icon\" aria-hidden=\"true\"></i>\r\n                            <span class=\"title\">Authorization</span>\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n            <li class=\"nav-item li_include_submenu\">\r\n                <a href=\"javascript:;\" class=\"nav-link nav-toggle\">\r\n                    <i class=\"icon-database pull-left\"></i>\r\n                    <span class=\"title\">System</span>\r\n                    <span class=\"arrow \"></span>\r\n                </a>\r\n                <ul class=\"sub-menu second\">\r\n                    <li class=\"nav-item \">\r\n                        <a routerLink=\"main/system/employee\" class=\"nav-link nav-toggle\">\r\n                            <i class=\"fa fa-genderless menu-item-icon\" aria-hidden=\"true\"></i>\r\n                            <span class=\"title\">Employee</span>\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"nav-item \">\r\n                        <a routerLink=\"main/system/menu\" class=\"nav-link \">\r\n                            <i class=\"fa fa-genderless menu-item-icon\" aria-hidden=\"true\"></i>\r\n                            <span class=\"title\">Menu</span>\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"nav-item \">\r\n                        <a routerLink=\"main/system/auto-update\" class=\"nav-link \">\r\n                            <i class=\"fa fa-genderless menu-item-icon\" aria-hidden=\"true\"></i>\r\n                            <span class=\"title\">Auto Update</span>\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"nav-item \">\r\n                        <a routerLink=\"main/system/role\" class=\"nav-link \">\r\n                            <i class=\"fa fa-genderless menu-item-icon\" aria-hidden=\"true\"></i>\r\n                            <span class=\"title\">Role</span>\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"nav-item \">\r\n                        <a routerLink=\"main/system/user-infor\" class=\"nav-link \">\r\n                            <i class=\"fa fa-genderless menu-item-icon\" aria-hidden=\"true\"></i>\r\n                            <span class=\"title\">User Info</span>\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"nav-item \">\r\n                        <a routerLink=\"main/system/user-log\" class=\"nav-link \">\r\n                            <i class=\"fa fa-genderless menu-item-icon\" aria-hidden=\"true\"></i>\r\n                            <span class=\"title\">User Log</span>\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"nav-item \">\r\n                        <a routerLink=\"main/system/permission-instruction\" class=\"nav-link \">\r\n                            <i class=\"fa fa-genderless menu-item-icon\" aria-hidden=\"true\"></i>\r\n                            <span class=\"title\">Permission Instruction</span>\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n        </ul>\r\n        <ul class=\"site-action\">\r\n            <li title=\"Logout\">\r\n                <a href=\"javascript:void(0);\" data-toggle=\"modal\" data-target=\"#logout-modal\">\r\n                    <i class=\"icon icon-logout\"></i>\r\n                </a>\r\n            </li>\r\n            <li title=\"Expend\" class=\"fullscreen\">\r\n                <a href=\"\">\r\n                    <i class=\"icon icon-full-screen\"></i>\r\n                </a>\r\n            </li>\r\n            <li title=\"Lowser\" class=\"exitfullscreen\" style=\"display: none;\">\r\n                <a href=\"\">\r\n                    <i class=\"icon icon-lowser-screen\"></i>\r\n                </a>\r\n            </li>\r\n            <li title=\"Clock screen\">\r\n                <a href=\"lock-screen.html\">\r\n                    <i class=\"icon icon-lock-screen\"></i>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/shared/layouts/sidebar-menu/sidebar-menu.component.ts":
/*!*******************************************************************!*\
  !*** ./src/shared/layouts/sidebar-menu/sidebar-menu.component.ts ***!
  \*******************************************************************/
/*! exports provided: SidebarMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarMenuComponent", function() { return SidebarMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarMenuComponent = /** @class */ (function () {
    function SidebarMenuComponent() {
    }
    SidebarMenuComponent.prototype.ngOnInit = function () {
    };
    SidebarMenuComponent.prototype.ngAfterViewChecked = function () {
        var resBreakpointMd = App.getResponsiveBreakpoint('md');
        var _calculateFixedSidebarViewportHeight = function () {
            var sidebarHeight = App.getViewPort().height - $('.page-header').outerHeight(true);
            if ($('body').hasClass("page-footer-fixed")) {
                sidebarHeight = sidebarHeight - $('.page-footer').outerHeight();
            }
            return sidebarHeight;
        };
        var handleSidebarAndContentHeight = function () {
            var content = $('.page-content');
            var sidebar = $('.page-sidebar');
            var body = $('body');
            var height;
            if (body.hasClass("page-footer-fixed") === true && body.hasClass("page-sidebar-fixed") === false) {
                var available_height = App.getViewPort().height - $('.page-footer').outerHeight() - $('.page-header').outerHeight();
                var sidebar_height = sidebar.outerHeight();
                if (sidebar_height > available_height) {
                    available_height = sidebar_height + $('.page-footer').outerHeight();
                }
                if (content.height() < available_height) {
                    content.css('min-height', available_height);
                }
            }
            else {
                if (body.hasClass('page-sidebar-fixed')) {
                    height = _calculateFixedSidebarViewportHeight();
                    if (body.hasClass('page-footer-fixed') === false) {
                        height = height - $('.page-footer').outerHeight();
                    }
                }
                else {
                    var headerHeight = $('.page-header').outerHeight();
                    var footerHeight = $('.page-footer').outerHeight();
                    if (App.getViewPort().width < resBreakpointMd) {
                        height = App.getViewPort().height - headerHeight - footerHeight;
                    }
                    else {
                        height = sidebar.height() + 20;
                    }
                    if ((height + headerHeight + footerHeight) <= App.getViewPort().height) {
                        height = App.getViewPort().height - headerHeight - footerHeight;
                    }
                }
                content.css('min-height', height);
            }
        };
        // handle sidebar link click
        $('.page-sidebar-menu').off('click').on('click', 'li > a.nav-toggle, li > a > span.nav-toggle', function (e) {
            var that = $(this).closest('.nav-item').children('.nav-link');
            if (App.getViewPort().width >= resBreakpointMd && !$('.page-sidebar-menu').attr("data-initialized") && $('body').hasClass('page-sidebar-closed') && that.parent('li').parent('.page-sidebar-menu').size() === 1) {
                return;
            }
            var hasSubMenu = that.next().hasClass('sub-menu');
            if (App.getViewPort().width >= resBreakpointMd && that.parents('.page-sidebar-menu-hover-submenu').size() === 1) {
                return;
            }
            if (hasSubMenu === false) {
                if (App.getViewPort().width < resBreakpointMd && $('.page-sidebar').hasClass("in")) {
                    $('.page-header .responsive-toggler').click();
                }
                return;
            }
            var parent = that.parent().parent();
            var the = that;
            var menu;
            menu = $('.page-sidebar-menu');
            var sub = that.next();
            var autoScroll = menu.data("auto-scroll");
            var slideSpeed = parseInt(menu.data("slide-speed"));
            var keepExpand = menu.data("keep-expanded");
            if (!keepExpand) {
                parent.children('li.open').children('a').children('.arrow').removeClass('open');
                parent.children('li.open').children('.sub-menu:not(.always-open)').slideUp(slideSpeed);
                parent.children('li.open').removeClass('open');
            }
            var slideOffeset = -200;
            if (sub.is(":visible")) {
                $('.arrow', the).removeClass("open");
                the.parent().removeClass("open");
                sub.slideUp(slideSpeed, function () {
                    if (autoScroll === true && $('body').hasClass('page-sidebar-closed') === false) {
                        if ($('body').hasClass('page-sidebar-fixed')) {
                            menu.slimScroll({
                                'scrollTo': (the.position()).top
                            });
                        }
                        else {
                            App.scrollTo(the, slideOffeset);
                        }
                    }
                    handleSidebarAndContentHeight();
                });
            }
            else if (hasSubMenu) {
                $('.arrow', the).addClass("open");
                the.parent().addClass("open");
                sub.slideDown(slideSpeed, function () {
                    if (autoScroll === true && $('body').hasClass('page-sidebar-closed') === false) {
                        if ($('body').hasClass('page-sidebar-fixed')) {
                            menu.slimScroll({
                                'scrollTo': (the.position()).top
                            });
                        }
                        else {
                            App.scrollTo(the, slideOffeset);
                        }
                    }
                    handleSidebarAndContentHeight();
                });
            }
            e.preventDefault();
        });
    };
    SidebarMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar-menu',
            template: __webpack_require__(/*! ./sidebar-menu.component.html */ "./src/shared/layouts/sidebar-menu/sidebar-menu.component.html"),
            styles: [__webpack_require__(/*! ./sidebar-menu.component.css */ "./src/shared/layouts/sidebar-menu/sidebar-menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarMenuComponent);
    return SidebarMenuComponent;
}());



/***/ }),

/***/ "./src/shared/layouts/top-menu/top-menu.component.css":
/*!************************************************************!*\
  !*** ./src/shared/layouts/top-menu/top-menu.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/shared/layouts/top-menu/top-menu.component.html":
/*!*************************************************************!*\
  !*** ./src/shared/layouts/top-menu/top-menu.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a href=\"javascript:;\" class=\"menu-toggler responsive-toggler\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\r\n    <span></span>\r\n</a>\r\n<div class=\"top-menu\">\r\n    <ul class=\"nav navbar-nav pull-right\">\r\n        <li class=\"dropdown dropdown-lang\">\r\n            <a class=\"dropdown-toggle\" data-close-others=\"true\" data-hover=\"dropdown\" data-toggle=\"dropdown\" href=\"javascript:;\">\r\n                <div class=\"wrap-img-icon\">\r\n                    <img class=\"img-circle\" src=\"./assets/assets_Desgin/assets/ftl-style/images/icons/en.png\" alt=\"ftl\">\r\n                </div>\r\n                <span class=\"hidden-xs hidden-sm\">EN/ English</span>\r\n            </a>\r\n            <ul class=\"dropdown-menu lang-dropdown-menu\">\r\n                <li class=\"lang-item\">\r\n                    <a href=\"#\">\r\n                        <span class=\"menu-icon viet-icon\">\r\n                            <img src=\"./assets/assets_Desgin/assets/ftl-style/images/icons/vi.png\" alt=\"\">\r\n                        </span>\r\n                        <span>Vn/ Vietnamese</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"lang-item active\">\r\n                    <a href=\"#\">\r\n                        <span class=\"menu-icon lang-icon\">\r\n                            <img src=\"./assets/assets_Desgin/assets/ftl-style/images/icons/en.png\" alt=\"\">\r\n                        </span>\r\n                        <span>En/ English</span>\r\n                        <i class=\"fas fa-check lang-check\"></i>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </li>\r\n        <li class=\"dropdown dropdown-user\">\r\n            <a href=\"javascript:;\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" data-hover=\"dropdown\" data-close-others=\"true\">\r\n                <div class=\"wrap-img-icon\">\r\n                    <img class=\"img-circle\" src=\"./assets/assets_Desgin/assets/ftl-style/images/icons/user-avt.png\" alt=\"ftl\">\r\n                </div>\r\n                <span class=\"username username-hide-on-mobile hidden-sm\">Stella Trinh</span>\r\n            </a>\r\n        </li>\r\n        <li class=\"dropdown dropdown-logout\">\r\n            <a  href=\"javascript:void(0);\" data-toggle=\"modal\" data-target=\"#logout-modal\" class=\"dropdown-toggle\">\r\n                <i class=\"icon-power\"></i>\r\n                <span class=\"hidden-xs hidden-sm\">Logout</span>\r\n            </a>\r\n        </li>\r\n    </ul>\r\n</div>"

/***/ }),

/***/ "./src/shared/layouts/top-menu/top-menu.component.ts":
/*!***********************************************************!*\
  !*** ./src/shared/layouts/top-menu/top-menu.component.ts ***!
  \***********************************************************/
/*! exports provided: TopMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopMenuComponent", function() { return TopMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TopMenuComponent = /** @class */ (function () {
    function TopMenuComponent() {
    }
    TopMenuComponent.prototype.ngOnInit = function () {
    };
    TopMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-top-menu',
            template: __webpack_require__(/*! ./top-menu.component.html */ "./src/shared/layouts/top-menu/top-menu.component.html"),
            styles: [__webpack_require__(/*! ./top-menu.component.css */ "./src/shared/layouts/top-menu/top-menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TopMenuComponent);
    return TopMenuComponent;
}());



/***/ }),

/***/ "./src/shared/services/authen.service.ts":
/*!***********************************************!*\
  !*** ./src/shared/services/authen.service.ts ***!
  \***********************************************/
/*! exports provided: AuthenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenService", function() { return AuthenService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _common_system_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/system.constants */ "./src/shared/common/system.constants.ts");
/* harmony import */ var _domain_loggedin_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../domain/loggedin.user */ "./src/shared/domain/loggedin.user.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthenService = /** @class */ (function () {
    function AuthenService(_http) {
        this._http = _http;
    }
    AuthenService.prototype.login = function (username, password) {
        var body = {
            UserName: username,
            Password: password,
            RememberMe: true
        };
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set("Content-Type", "application/json");
        return this._http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].API_URL + '/api/account/login', { responseType: 'text', headers: headers, body: body }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            console.log('res', res);
            return res;
        }));
    };
    AuthenService.prototype.logout = function () {
        localStorage.removeItem(_common_system_constants__WEBPACK_IMPORTED_MODULE_2__["SystemConstants"].CURRENT_USER);
    };
    AuthenService.prototype.isUserAuthenticated = function () {
        var user = localStorage.getItem(_common_system_constants__WEBPACK_IMPORTED_MODULE_2__["SystemConstants"].CURRENT_USER);
        if (user != null) {
            return true;
        }
        else
            return false;
    };
    AuthenService.prototype.getLoggedInUser = function () {
        var user;
        if (this.isUserAuthenticated()) {
            var userData = JSON.parse(localStorage.getItem(_common_system_constants__WEBPACK_IMPORTED_MODULE_2__["SystemConstants"].CURRENT_USER));
            user = new _domain_loggedin_user__WEBPACK_IMPORTED_MODULE_3__["LoggedInUser"](userData.access_token, userData.username, userData.fullName, userData.email, userData.avatar, userData.roles, userData.permissions);
        }
        else
            user = null;
        return user;
    };
    AuthenService.prototype.checkAccess = function (functionId) {
        var user = this.getLoggedInUser();
        var result = false;
        var permission = JSON.parse(user.permissions);
        var roles = JSON.parse(user.roles);
        var hasPermission = permission.findIndex(function (x) { return x.FunctionId == functionId && x.CanRead == true; });
        if (hasPermission != -1 || roles.findIndex(function (x) { return x == "Admin"; }) != -1) {
            return true;
        }
        else
            return false;
    };
    AuthenService.prototype.hasPermission = function (functionId, action) {
        var user = this.getLoggedInUser();
        var result = false;
        var permission = JSON.parse(user.permissions);
        var roles = JSON.parse(user.roles);
        switch (action) {
            case 'create':
                var hasPermission = permission.findIndex(function (x) { return x.FunctionId == functionId && x.CanCreate == true; });
                if (hasPermission != -1 || roles.findIndex(function (x) { return x == "Admin"; }) != -1)
                    result = true;
                break;
            case 'update':
                var hasPermission = permission.findIndex(function (x) { return x.FunctionId == functionId && x.CanUpdate == true; });
                if (hasPermission != -1 || roles.findIndex(function (x) { return x == "Admin"; }) != -1)
                    result = true;
                break;
            case 'delete':
                var hasPermission = permission.findIndex(function (x) { return x.FunctionId == functionId && x.CanDelete == true; });
                if (hasPermission != -1 || roles.findIndex(function (x) { return x == "Admin"; }) != -1)
                    result = true;
                break;
        }
        return result;
    };
    AuthenService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthenService);
    return AuthenService;
}());



/***/ }),

/***/ "./src/shared/services/data.service.ts":
/*!*********************************************!*\
  !*** ./src/shared/services/data.service.ts ***!
  \*********************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_system_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/system.constants */ "./src/shared/common/system.constants.ts");
/* harmony import */ var _services_authen_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/authen.service */ "./src/shared/services/authen.service.ts");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/notification.service */ "./src/shared/services/notification.service.ts");
/* harmony import */ var _services_utility_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/utility.service */ "./src/shared/services/utility.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _common_message_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/message.constants */ "./src/shared/common/message.constants.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var DataService = /** @class */ (function () {
    function DataService(_http, _router, _authenService, _notificationService, _utilityService) {
        this._http = _http;
        this._router = _router;
        this._authenService = _authenService;
        this._notificationService = _notificationService;
        this._utilityService = _utilityService;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.headers.delete('Authorization');
        this.headers.append('Content-Type', 'application/json');
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].API_URL;
        this.showError = _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].showError;
    }
    //#region auten services  
    // get(uri: string) {
    //   this.headers.delete("Authorization");
    //   this.headers.append("Authorization", "Bearer " + this._authenService.getLoggedInUser().access_token);
    //   return this._http.get(SystemConstants.BASE_API + uri, { headers: this.headers }).map(this.extractData);
    // }
    // post(uri: string, data?: any) {
    //   this.headers.delete("Authorization");
    //   this.headers.append("Authorization", "Bearer " + this._authenService.getLoggedInUser().access_token);
    //   return this._http.post(SystemConstants.BASE_API + uri, data, { headers: this.headers }).map(this.extractData);
    // }
    // put(uri: string, data?: any) {
    //   this.headers.delete("Authorization");
    //   this.headers.append("Authorization", "Bearer " + this._authenService.getLoggedInUser().access_token);
    //   return this._http.put(SystemConstants.BASE_API + uri, data, { headers: this.headers }).map(this.extractData);
    // }
    // delete(uri: string, key: string, id: string) {
    //   this.headers.delete("Authorization");
    //   this.headers.append("Authorization", "Bearer " + this._authenService.getLoggedInUser().access_token);
    //   return this._http.delete(SystemConstants.BASE_API + uri + "/?" + key + "=" + id, { headers: this.headers })
    //     .map(this.extractData);
    // }
    // deleteWithMultiParams(uri: string, params) {
    //   this.headers.delete('Authorization');
    //   this.headers.append("Authorization", "Bearer " + this._authenService.getLoggedInUser().access_token);
    //   var paramStr: string = '';
    //   for (let param in params) {
    //     paramStr += param + "=" + params[param] + '&';
    //   }
    //   return this._http.delete(SystemConstants.BASE_API + uri + "/?" + paramStr, { headers: this.headers })
    //     .map(this.extractData);
    // }
    // postFile(uri: string, data?: any) {
    //   let newHeader = new Headers();
    //   newHeader.append("Authorization", "Bearer " + this._authenService.getLoggedInUser().access_token);
    //   return this._http.post(SystemConstants.BASE_API + uri, data, { headers: newHeader })
    //     .map(this.extractData);
    // }
    // private extractData(res: Response) {
    //   let body = res.json();
    //   return body || {};
    // }
    // public handleError(error: any) {
    //   if (error.status == 401) {
    //     localStorage.removeItem(SystemConstants.CURRENT_USER);
    //     this._notificationService.printErrorMessage(MessageContstants.LOGIN_AGAIN_MSG);
    //     this._utilityService.navigateToLogin();
    //   }
    //   else if (error.status == 403) {
    //     localStorage.removeItem(SystemConstants.CURRENT_USER);
    //     this._notificationService.printErrorMessage(MessageContstants.FORBIDDEN);
    //     this._utilityService.navigateToLogin();
    //   }
    //   else {
    //     let errMsg = JSON.parse(error._body).Message;
    //     this._notificationService.printErrorMessage(errMsg);
    //     return Observable.throw(errMsg);
    //   }
    // }
    //#endregion
    // get2(uri: string) {
    //   return this._http.get(this.baseUrl+ uri, { headers: this.headers }).pipe(map();
    // }
    DataService.prototype.GetList = function (url) {
        return this._http.get(this.baseUrl + url).map(function (response) { return response.json(); });
    };
    DataService.prototype.get = function (url) {
        return this._http.get(this.baseUrl + url, { headers: this.headers });
    };
    DataService.prototype.post = function (url, data) {
        return this._http.post(this.baseUrl + url, data, {
            headers: this.headers
        });
    };
    DataService.prototype.put = function (url, data) {
        return this._http.put(this.baseUrl + url, data, {
            headers: this.headers
        });
    };
    DataService.prototype.delete = function (url) {
        return this._http.delete(this.baseUrl + url, {
            headers: this.headers
        });
    };
    DataService.prototype.deleteOption = function (url, key, id) {
        return this._http.delete(this.baseUrl + url + "/?" + key + "=" + id, {
            headers: this.headers
        });
    };
    DataService.prototype.deleteWithMultiParams = function (url, params) {
        var paramStr = '';
        for (var param in params) {
            paramStr += param + "=" + params[param] + '&';
        }
        return this._http.delete(this.baseUrl + url + "/?" + paramStr, {
            headers: this.headers
        });
    };
    DataService.prototype.postFile = function (url, data) {
        this.headers.delete('Content-Type');
        return this._http.post(this.baseUrl + url, data, {
            headers: this.headers
        });
    };
    DataService.prototype.extractData = function (res) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        var body = res.json();
        return body.data || {};
    };
    DataService.prototype.handleError = function (error) {
        if (error.status == 401) {
            localStorage.removeItem(_common_system_constants__WEBPACK_IMPORTED_MODULE_3__["SystemConstants"].CURRENT_USER);
            this._notificationService.printErrorMessage(_common_message_constants__WEBPACK_IMPORTED_MODULE_8__["MessageContstants"].LOGIN_AGAIN_MSG);
            this._utilityService.navigateToLogin();
        }
        else if (error.status == 403) {
            localStorage.removeItem(_common_system_constants__WEBPACK_IMPORTED_MODULE_3__["SystemConstants"].CURRENT_USER);
            this._notificationService.printErrorMessage(_common_message_constants__WEBPACK_IMPORTED_MODULE_8__["MessageContstants"].FORBIDDEN);
            this._utilityService.navigateToLogin();
        }
        else {
            try {
                var errMsg = JSON.parse(error._body).Message;
                this._notificationService.printErrorMessage(errMsg);
                return rxjs__WEBPACK_IMPORTED_MODULE_7__["Observable"].throw(errMsg);
            }
            catch (error) {
                if (this.showError)
                    console.log(error);
            }
        }
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_authen_service__WEBPACK_IMPORTED_MODULE_4__["AuthenService"],
            _services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"],
            _services_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/shared/services/notification.service.ts":
/*!*****************************************************!*\
  !*** ./src/shared/services/notification.service.ts ***!
  \*****************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotificationService = /** @class */ (function () {
    function NotificationService() {
        this._notifier = alertify;
        alertify.defaults = {
            // dialogs defaults
            autoReset: true,
            basic: false,
            closable: true,
            closableByDimmer: true,
            frameless: false,
            maintainFocus: true,
            maximizable: true,
            modal: true,
            movable: true,
            moveBounded: false,
            overflow: true,
            padding: true,
            pinnable: true,
            pinned: true,
            preventBodyShift: false,
            resizable: true,
            startMaximized: false,
            transition: 'pulse',
            // notifier defaults
            notifier: {
                // auto-dismiss wait time (in seconds)  
                delay: 5,
                // default position
                position: 'top-right',
                // adds a close button to notifier messages
                closeButton: false
            },
            // language resources 
            glossary: {
                // dialogs default title
                title: 'Xác nhận',
                // ok button text
                ok: 'Đồng ý',
                // cancel button text
                cancel: 'Hủy'
            },
            // theme settings
            theme: {
                // class name attached to prompt dialog input textbox.
                input: 'ajs-input',
                // class name attached to ok button
                ok: 'ajs-ok',
                // class name attached to cancel button 
                cancel: 'ajs-cancel'
            }
        };
    }
    NotificationService.prototype.printSuccessMessage = function (message) {
        this._notifier.success(message);
    };
    NotificationService.prototype.printErrorMessage = function (message) {
        this._notifier.error(message);
    };
    NotificationService.prototype.printConfirmationDialog = function (message, okCallback) {
        this._notifier.confirm(message, function (e) {
            if (e) {
                okCallback();
            }
            else {
            }
        });
    };
    NotificationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], NotificationService);
    return NotificationService;
}());



/***/ }),

/***/ "./src/shared/services/utility.service.ts":
/*!************************************************!*\
  !*** ./src/shared/services/utility.service.ts ***!
  \************************************************/
/*! exports provided: UtilityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilityService", function() { return UtilityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _common_url_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/url.constants */ "./src/shared/common/url.constants.ts");
/* harmony import */ var _authen_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authen.service */ "./src/shared/services/authen.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UtilityService = /** @class */ (function () {
    function UtilityService(router, http, authenService) {
        this.http = http;
        this.authenService = authenService;
        this.Unflatten = function (arr) {
            var map = {};
            var roots = [];
            for (var i = 0; i < arr.length; i += 1) {
                var node = arr[i];
                node.children = [];
                map[node.ID] = i; // use map to look-up the parents
                if (node.ParentId !== null) {
                    arr[map[node.ParentId]].children.push(node);
                }
                else {
                    roots.push(node);
                }
            }
            return roots;
        };
        this.Unflatten2 = function (arr) {
            var map = {};
            var roots = [];
            for (var i = 0; i < arr.length; i += 1) {
                var node = arr[i];
                node.children = [];
                map[node.ID] = i; // use map to look-up the parents
                if (node.ParentID !== null) {
                    arr[map[node.ParentID]].children.push(node);
                }
                else {
                    roots.push(node);
                }
            }
            return roots;
        };
        this._router = router;
    }
    UtilityService.prototype.convertDateTime = function (date) {
        var _formattedDate = new Date(date.toString());
        return _formattedDate.toDateString();
    };
    UtilityService.prototype.navigate = function (path) {
        this._router.navigate([path]);
    };
    UtilityService.prototype.navigateToLogin = function () {
        this._router.navigate([_common_url_constants__WEBPACK_IMPORTED_MODULE_3__["UrlConstants"].LOGIN]);
    };
    UtilityService.prototype.MakeSeoTitle = function (input) {
        if (input == undefined || input == '')
            return '';
        //Đổi chữ hoa thành chữ thường
        var slug = input.toLowerCase();
        //Đổi ký tự có dấu thành không dấu
        slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a');
        slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e');
        slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i');
        slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o');
        slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u');
        slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y');
        slug = slug.replace(/đ/gi, 'd');
        //Xóa các ký tự đặt biệt
        slug = slug.replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi, '');
        //Đổi khoảng trắng thành ký tự gạch ngang
        slug = slug.replace(/ /gi, "-");
        //Đổi nhiều ký tự gạch ngang liên tiếp thành 1 ký tự gạch ngang
        //Phòng trường hợp người nhập vào quá nhiều ký tự trắng
        slug = slug.replace(/\-\-\-\-\-/gi, '-');
        slug = slug.replace(/\-\-\-\-/gi, '-');
        slug = slug.replace(/\-\-\-/gi, '-');
        slug = slug.replace(/\-\-/gi, '-');
        //Xóa các ký tự gạch ngang ở đầu và cuối
        slug = '@' + slug + '@';
        slug = slug.replace(/\@\-|\-\@|\@/gi, '');
        return slug;
    };
    UtilityService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _authen_service__WEBPACK_IMPORTED_MODULE_4__["AuthenService"]])
    ], UtilityService);
    return UtilityService;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\WORKS\[1]E_TMS\etms\WebApp\SourceCode\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map