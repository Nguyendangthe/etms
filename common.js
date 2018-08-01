(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/main/home/home.component.css":
/*!**********************************************!*\
  !*** ./src/app/main/home/home.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/home/home.component.html":
/*!***********************************************!*\
  !*** ./src/app/main/home/home.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-content-wrapper\">\r\n    <!-- BEGIN CONTENT BODY -->\r\n    <div class=\"page-content\">\r\n        <div class=\"page-bar\">\r\n            <ul class=\"page-breadcrumb\">\r\n                <li>\r\n                    <a href=\"index.html\">Dashboard</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n        <div class=\"page-bar\">\r\n            <!-- BEGIN PAGE TITLE-->\r\n            <h1 class=\"page-title\">Dashboard</h1>\r\n        </div>\r\n        <!-- END PAGE TITLE-->\r\n        <div class=\"wms-page-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-xs-12\">\r\n                    <div class=\"panel\">\r\n                        <div class=\"panel-body\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-3\">\r\n                                    <div class=\"dropdown dropdown-multi-select dropdown-custom\">\r\n                                        <button class=\"btn btn-default btn-block dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">Choose column hide</button>\r\n                                        <div class=\"dropdown-menu\">\r\n                                            <ul class=\" dropdown-scroll\">\r\n                                                <li>\r\n                                                    <a href=\"#\">\r\n                                                        <label class=\"rememberme check mt-checkbox mt-checkbox-outline m-b-0 tb-toggle\" data-column=\"0\">\r\n                                                            <input type=\"checkbox\" name=\"remember\" value=\"1\"> Code\r\n                                                            <span></span>\r\n                                                        </label>\r\n                                                    </a>\r\n                                                </li>\r\n                                                <li>\r\n                                                    <a href=\"#\">\r\n                                                        <label class=\"rememberme check mt-checkbox mt-checkbox-outline m-b-0 tb-toggle\" data-column=\"1\">\r\n                                                            <input type=\"checkbox\" name=\"remember\" value=\"1\"> Name (VI)\r\n                                                            <span></span>\r\n                                                        </label>\r\n                                                    </a>\r\n                                                </li>\r\n                                                <li>\r\n                                                    <a href=\"#\">\r\n                                                        <label class=\"rememberme check mt-checkbox mt-checkbox-outline m-b-0 tb-toggle\" data-column=\"2\">\r\n                                                            <input type=\"checkbox\" name=\"remember\" value=\"1\"> Name (EN)\r\n                                                            <span></span>\r\n                                                        </label>\r\n                                                    </a>\r\n                                                </li>\r\n                                                <li>\r\n                                                    <a href=\"#\">\r\n                                                        <label class=\"rememberme check mt-checkbox mt-checkbox-outline m-b-0 tb-toggle\" data-column=\"3\">\r\n                                                            <input type=\"checkbox\" name=\"remember\" value=\"1\"> Place Type\r\n                                                            <span></span>\r\n                                                        </label>\r\n                                                    </a>\r\n                                                </li>\r\n                                                <li>\r\n                                                    <a href=\"#\">\r\n                                                        <label class=\"rememberme check mt-checkbox mt-checkbox-outline m-b-0 tb-toggle\" data-column=\"4\">\r\n                                                            <input type=\"checkbox\" name=\"remember\" value=\"1\"> Branch\r\n                                                            <span></span>\r\n                                                        </label>\r\n                                                    </a>\r\n                                                </li>\r\n                                                <li>\r\n                                                    <a href=\"#\">\r\n                                                        <label class=\"rememberme check mt-checkbox mt-checkbox-outline m-b-0 tb-toggle\" data-column=\"5\">\r\n                                                            <input type=\"checkbox\" name=\"remember\" value=\"1\"> Pickup Zone\r\n                                                            <span></span>\r\n                                                        </label>\r\n                                                    </a>\r\n                                                </li>\r\n                                            </ul>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-12\">\r\n                                    <table class=\"table table-bordered table-hover tableDatatableWithoutSort\" id=\"\" style=\"width: 100%\">\r\n                                        <thead>\r\n                                            <tr>\r\n                                                <th></th>\r\n                                                <th>Name</th>\r\n                                                <th>Position</th>\r\n                                                <th>Office</th>\r\n                                                <th>Salary</th>\r\n                                            </tr>\r\n                                        </thead>\r\n                                    </table>\r\n                                </div>  \r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- END CONTENT BODY -->\r\n</div>"

/***/ }),

/***/ "./src/app/main/home/home.component.ts":
/*!*********************************************!*\
  !*** ./src/app/main/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/main/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/main/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map