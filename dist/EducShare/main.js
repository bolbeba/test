(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
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

module.exports = "<app-home></app-home>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'EducShare';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<body id=\"body\" class=\"body-wrapper boxed-menu\" >\n  <!-- <div class=\"page-loader\" style=\"background: url(/assets/images/preloader.gif) center no-repeat #fff;\"></div> -->\n  <!-- Preloader -->\n  <div id=\"preloader\" class=\"smooth-loader-wrapper\">\n    <div class=\"smooth-loader\">\n      <div class=\"loader1\">\n      <div class=\"loader-target\">\n        <div class=\"loader-target-main\"></div>\n        <div class=\"loader-target-inner\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"main-wrapper\">\n    <!-- HEADER -->\n    <header id=\"pageTop\" class=\"header\">\n\n      <!-- TOP INFO BAR -->\n\n      <div class=\"nav-wrapper\">\n        <!-- NAVBAR -->\n        <nav id=\"menuBar\" class=\"navbar navbar-default transparent-navbar\" role=\"navigation\">\n          <div class=\"container\">\n\n            <!-- Brand and toggle get grouped for better mobile display -->\n            <div class=\"navbar-header\">\n              <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-ex1-collapse\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n              </button>\n              <a class=\"navbar-brand\" href=\"index.html\">\n                <svg class=\"logo-svg\" version=\"1\" xmlns=\"http://www.w3.org/2000/svg\" width=\"140\" height=\"44\">\n                  <path class=\"path-1\" fill=\"\" d=\"M0 44V0h139.813v44H0zM137.346 2.467H2.467v39.065h134.879V2.467z\"/>\n                  <path class=\"path-1\" fill=\"\" d=\"M120.927 22.389v11.095h-4.566V22.389a371.288 371.288 0 0 0-2.086-2.888 347.047 347.047 0 0 1-2.2-3.053 386.86 386.86 0 0 0-2.201-3.053c-.7-.959-1.395-1.922-2.086-2.888h5.617l5.255 7.287 5.222-7.287h5.649c.002 0-8.604 11.882-8.604 11.882zM98.034 33.484h-4.565V15.069h-6.372v-4.562h17.244v4.562h-6.306v18.415zm-21.908 0H71.56V15.069h-6.372v-4.562h17.244v4.562h-6.306v18.415zm-17.425-1.789c-.69.623-1.511 1.116-2.463 1.477-.953.361-1.987.542-3.104.542-1.007 0-1.982-.143-2.923-.427a10.814 10.814 0 0 1-2.661-1.214h.033a9.928 9.928 0 0 1-1.577-1.215 18.73 18.73 0 0 1-.953-.952l3.416-3.151c.153.197.399.432.739.706.339.274.728.537 1.166.788.44.253.902.467 1.38.64.481.175.941.262 1.379.262.372 0 .744-.044 1.117-.131.359-.082.703-.22 1.018-.41.305-.185.564-.437.755-.739.197-.306.296-.689.296-1.149 0-.175-.06-.366-.181-.574-.12-.208-.329-.432-.624-.673-.296-.241-.706-.498-1.232-.771a20.567 20.567 0 0 0-1.971-.87 25.42 25.42 0 0 1-2.562-1.132 8.896 8.896 0 0 1-2.053-1.428 5.903 5.903 0 0 1-1.347-1.871c-.317-.7-.476-1.51-.476-2.429 0-.94.175-1.822.526-2.642a6.21 6.21 0 0 1 1.494-2.133c.646-.602 1.423-1.072 2.332-1.412.908-.339 1.911-.509 3.006-.509.591 0 1.22.077 1.889.23.668.153 1.319.35 1.954.591a12.95 12.95 0 0 1 1.79.837c.558.317 1.023.64 1.396.968l-2.825 3.545a15.71 15.71 0 0 0-1.281-.788 10.316 10.316 0 0 0-1.281-.558 4.311 4.311 0 0 0-1.478-.263c-.919 0-1.637.181-2.151.542-.515.361-.772.881-.772 1.559 0 .307.093.586.279.837.186.252.438.482.756.689.348.225.717.417 1.1.574.416.176.854.34 1.314.492 1.314.504 2.42 1.013 3.318 1.526.898.514 1.62 1.062 2.168 1.642s.936 1.204 1.166 1.871c.23.668.345 1.395.345 2.183 0 .963-.197 1.871-.591 2.724a6.803 6.803 0 0 1-1.626 2.216zM34.839 10.507h4.532v22.977h-4.532V10.507zm-20.036 0h4.566v18.415h9.263v4.563H14.803V10.507z\"/>\n                </svg>\n              </a>\n            </div>\n\n            <!-- Collect the nav links, forms, and other content for toggling -->\n            <div class=\"collapse navbar-collapse navbar-ex1-collapse\">\n              <ul class=\"nav navbar-nav navbar-right\">\n                  <li class=\"active dropdown singleDrop\">\n                      <a href=\"\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">home <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i></a>\n                  <ul class=\"dropdown-menu dropdown-menu-left\">\n                    <li><a class=\"\" href=\"index.html\">Home Map</a></li>\n                    <li><a class=\"active\" href=\"index-2.html\">Home Travel</a></li>\n                    <li><a class=\"\" href=\"index-3.html\">Home Automobile</a></li>\n                    <li><a class=\"\" href=\"index-4.html\">Home City</a></li>\n                  </ul>\n                </li>\n                <li class=\" dropdown megaDropMenu\">\n                  <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Listing <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i></a>\n                  <ul class=\"row dropdown-menu\">\n                    <li class=\"col-sm-4 col-xs-12\">\n                      <ul class=\"list-unstyled\">\n                          <li><h5>listing Grids</h5></li>\n                          <li><a href=\"category-grid.html\">Listing Grid Left</a></li>\n                          <li><a href=\"category-grid-right.html\">Listing Grid Right</a></li>\n                          <li><a href=\"category-grid-full.html\">Listing Grid Fullwidth</a></li>\n                          <li><h5>listing lists</h5></li>\n                          <li><a href=\"category-list-left.html\">Listing list Left</a></li>\n                          <li><a href=\"category-list-right.html\">Listing list Right</a></li>\n                          <li><a href=\"category-list-full.html\">Listing list Full</a></li>\n                      </ul>\n                    </li>\n                    <li class=\"col-sm-4 col-xs-12\">\n                      <ul class=\"list-unstyled\">\n                          <li><h5>listing Sidebar Map</h5></li>\n                          <li><a href=\"listing-sidebar-map-left.html\">Listing Sidebar Map left</a></li>\n                          <li><a href=\"listing-sidebar-map-right.html\">Listing Sidebar Map right</a></li>\n                          <li><a href=\"listing-sidebar-map-full.html\">Listing Sidebar Map Full</a></li>\n                          <li><h5>listing Details</h5></li>\n                          <li><a href=\"listing-details-left.html\">Listing Details Left</a></li>\n                          <li><a href=\"listing-details-right.html\">Listing Details Right</a></li>\n                          <li><a href=\"listing-details-full.html\">Listing Details Full</a></li>\n                      </ul>\n                    </li>\n                    <li class=\"col-sm-4 col-xs-12\">\n                      <ul class=\"list-unstyled\">\n                          <li class=\"mega-img\">\n                              <a href=\"\"><img src=\"/assets/images/works/works-big-3.png\" alt=\"\"></a>\n                          </li>\n                      </ul>\n                    </li>\n                  </ul>\n\n                </li>\n                <li class=\" dropdown singleDrop\">\n                  <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">pages <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i></a>\n                  <ul class=\"dropdown-menu dropdown-menu-left\">\n                      <li><a href=\"contact-us.html\">Contact Us</a></li>\n                      <li><a href=\"terms-of-services.html\">Terms and Conditions</a></li>\n                      <li><a href=\"sign-up.html\">Create Account</a></li>\n                      <li><a href=\"login.html\">Login</a></li>\n                      <li><a href=\"pricing-table.html\">Pricing</a></li>\n                      <li><a href=\"payment-process.html\">Payment</a></li>\n                      <li><a href=\"how-it-works.html\">How It Works</a></li>\n                      <li><a href=\"user-profile.html\">User Profile</a></li>\n                      <li><a href=\"comming-soon.html\">Coming Soon</a></li>\n                      <li><a href=\"404-page.html\">404 Page</a></li>\n                  </ul>\n                </li>\n                <li class=\"\"><a href=\"blog.html\">blog </a></li>\n                <li class=\" dropdown singleDrop\">\n                  <a href=\"javascript:void(0)\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">admin <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i></a>\n                  <ul class=\"dropdown-menu dropdown-menu-left\">\n                    <li><a href=\"dashboard.html\">Dashboard</a></li>\n                    <li><a href=\"add-listings.html\">Add Listing</a></li>\n                    <li><a href=\"edit-listings.html\">Edit Listing</a></li>\n                    <li><a href=\"booking-list.html\">Booking List</a></li>\n                    <li><a href=\"dashboard-reviews.html\">Reviews</a></li>\n                    <li><a href=\"listings.html\">My Listings</a></li>\n                    <li><a href=\"profile.html\">My Profile</a></li>\n                    <li><a href=\"oders.html\">My Orders</a></li>\n                    <li><a href=\"sign-up.html\">Create Account</a></li>\n                    <li><a href=\"login.html\">Login</a></li>\n                  </ul>\n                </li>\n              </ul>\n            </div>\n            <a class=\"btn btn-default navbar-btn\" href=\"add-listings.html\"> + <span>Add Listing</span></a>\n          </div>\n        </nav>\n      </div>\n    </header>\n\n\n<!-- BANNER SECTION -->\n<section class=\"clearfix homeBanner\" style=\"background-image: url(/assets/images/banner/banner1.jpg);\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t<div class=\"banerInfo\">\n\t\t\t\t\t<h1>Explore. Discover. Share</h1>\n\t\t\t\t\t<p>Listty helps to find out great things arround you</p>\n\t\t\t\t\t<form class=\"form-inline\" action=\"listing-sidebar-map-left.html\" method=\"\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t<div class=\"input-group-addon\">Find</div>\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"findItem\" placeholder=\"What are you looking for?\">\n\t\t\t\t\t\t\t\t<div class=\"input-group-addon addon-right\"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t<div class=\"input-group-addon\">Near</div>\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"nearLocation\" placeholder=\"Location\">\n\t\t\t\t\t\t\t\t<div class=\"input-group-addon addon-right\"><i class=\"icon-listy icon-target\" aria-hidden=\"true\"></i></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\">Search <i class=\"fa fa-search\" aria-hidden=\"true\"></i></button>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n\n<!-- INTEREST SECTION -->\n<section class=\"clearfix interestArea\">\n\t<div class=\"container\">\n\t\t<div class=\"page-header text-center\">\n\t\t\t<h2>What are You Interested in? <small>Explore and connect with great local businesses</small></h2>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-3 col-xs-12\">\n\t\t\t\t<a href=\"category-grid-full.html\" class=\"interestContent\">\n\t\t\t\t\t<span>\n\t\t\t\t\t\t<i class=\"icon-listy icon-tea-cup-1\"></i>\n\t\t\t\t\t\tRestaurant\n\t\t\t\t\t</span>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-3 col-xs-12\">\n\t\t\t\t<a href=\"category-list-full.html\" class=\"interestContent\">\n\t\t\t\t\t<span>\n\t\t\t\t\t\t<i class=\"icon-listy icon-building\"></i>\n\t\t\t\t\t\tHotels\n\t\t\t\t\t</span>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-3 col-xs-12\">\n\t\t\t\t<a href=\"category-grid.html\" class=\"interestContent\">\n\t\t\t\t\t<span>\n\t\t\t\t\t\t<i class=\"icon-listy icon-martini\"></i>\n\t\t\t\t\t\tNightclubs\n\t\t\t\t\t</span>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-3 col-xs-12\">\n\t\t\t\t<a href=\"category-list-left.html\" class=\"interestContent\">\n\t\t\t\t\t<span>\n\t\t\t\t\t\t<i class=\"icon-listy icon-car-1\"></i>\n\t\t\t\t\t\tAuto Motive\n\t\t\t\t\t</span>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-3 col-xs-12\">\n\t\t\t\t<a href=\"category-grid-right.html\" class=\"interestContent\">\n\t\t\t\t\t<span>\n\t\t\t\t\t\t<i class=\"icon-listy icon-castle\"></i>\n\t\t\t\t\t\tMuseums\n\t\t\t\t\t</span>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-3 col-xs-12\">\n\t\t\t\t<a href=\"category-list-right.html\" class=\"interestContent\">\n\t\t\t\t\t<span>\n\t\t\t\t\t\t<i class=\"icon-listy icon-television\"></i>\n\t\t\t\t\t\tMovie Theaters\n\t\t\t\t\t</span>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-3 col-xs-12\">\n\t\t\t\t<a href=\"category-grid-full.html\" class=\"interestContent\">\n\t\t\t\t\t<span>\n\t\t\t\t\t\t<i class=\"icon-listy icon-mall-1\"></i>\n\t\t\t\t\t\tShopping\n\t\t\t\t\t</span>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-3 col-xs-12\">\n\t\t\t\t<a href=\"all-business.html\" class=\"interestContent\">\n\t\t\t\t\t<span>\n\t\t\t\t\t\t<i class=\"icon-listy icon-more\"></i>\n\t\t\t\t\t\tView All\n\t\t\t\t\t</span>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n\n<!-- THINGS SECTION -->\n<section class=\"clearfix thingsArea\">\n\t<div class=\"container\">\n\t\t<div class=\"page-header text-center\">\n\t\t\t<h2>Popular Things Near You <small>This are some of most popular listing</small></h2>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t<div id=\"thubmnailSlider\" class=\"carousel slide thumbnailCarousel\">\n\n\t\t\t\t\t<ol class=\"carousel-indicators\">\n\t\t\t\t\t\t<li data-target=\"#thubmnailSlider\" data-slide-to=\"0\" class=\"active\"></li>\n\t\t\t\t\t\t<li data-target=\"#thubmnailSlider\" data-slide-to=\"1\"></li>\n\t\t\t\t\t\t<li data-target=\"#thubmnailSlider\" data-slide-to=\"2\"></li>\n\t\t\t\t\t\t<li data-target=\"#thubmnailSlider\" data-slide-to=\"3\"></li>\n\t\t\t\t\t\t<li data-target=\"#thubmnailSlider\" data-slide-to=\"4\"></li>\n\t\t\t\t\t\t<li data-target=\"#thubmnailSlider\" data-slide-to=\"5\"></li>\n\t\t\t\t\t\t<li data-target=\"#thubmnailSlider\" data-slide-to=\"6\"></li>\n\t\t\t\t\t\t<li data-target=\"#thubmnailSlider\" data-slide-to=\"7\"></li>\n\t\t\t\t\t</ol>\n\n\t\t\t\t\t<!-- Carousel items -->\n\t\t\t\t\t<div class=\"carousel-inner\">\n\t\t\t\t\t\t<div class=\"item row active\">\n\t\t\t\t\t\t\t<div class=\"col-md-4 col-sm-6 col-xs-12\">\n\t\t\t\t\t\t\t\t<div class=\"thingsBox\">\n\t\t\t\t\t\t\t\t\t<div class=\"thingsImage\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/images/things/things-4.jpg\" alt=\"Image things\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"thingsMask\">\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"list-inline rating\">\n\t\t\t\t\t\t\t\t\t\t\t\t<li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"listing-details-left.html\"><h2>Think Coffee <i class=\"fa fa-check-circle\" aria-hidden=\"true\"></i></h2></a>\n\t\t\t\t\t\t\t\t\t\t\t<p>215 Terry Lane, New York</p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"thingsCaption \">\n\t\t\t\t\t\t\t\t\t\t<ul class=\"list-inline captionItem\">\n\t\t\t\t\t\t\t\t\t\t\t<li><i class=\"fa fa-heart-o\" aria-hidden=\"true\"></i> 8 k</li>\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"category-list-full.html\">Eat & Drink</a></li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"item row\">\n\t\t\t\t\t\t\t<div class=\"col-md-4 col-sm-6 col-xs-12\">\n\t\t\t\t\t\t\t\t<div class=\"thingsBox\">\n\t\t\t\t\t\t\t\t\t<div class=\"thingsImage\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/images/things/things-5.jpg\" alt=\"Image things\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"thingsMask\">\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"list-inline rating\">\n\t\t\t\t\t\t\t\t\t\t\t\t<li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li><i class=\"fa fa-star-o\" aria-hidden=\"true\"></i></li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"listing-details-left.html\"><h2>Burger House</h2></a>\n\t\t\t\t\t\t\t\t\t\t\t<p>2726 Shinn Street, New York</p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"thingsCaption \">\n\t\t\t\t\t\t\t\t\t\t<ul class=\"list-inline captionItem\">\n\t\t\t\t\t\t\t\t\t\t\t<li><i class=\"fa fa-heart-o\" aria-hidden=\"true\"></i> 9.2 k</li>\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"category-grid-full.html\">Eat & Drink</a></li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"item row\">\n\t\t\t\t\t\t\t<div class=\"col-md-4 col-sm-6 col-xs-12\">\n\t\t\t\t\t\t\t\t<div class=\"thingsBox\">\n\t\t\t\t\t\t\t\t\t<div class=\"thingsImage\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/images/things/things-8.jpg\" alt=\"Image things\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"thingsMask\">\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"list-inline rating\">\n\t\t\t\t\t\t\t\t\t\t\t\t<li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"listing-details-left.html\"><h2>Hotel Govendor <i class=\"fa fa-check-circle\" aria-hidden=\"true\"></i></h2></a>\n\t\t\t\t\t\t\t\t\t\t\t<p>778 Country Street, New York</p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"thingsCaption \">\n\t\t\t\t\t\t\t\t\t\t<ul class=\"list-inline captionItem\">\n\t\t\t\t\t\t\t\t\t\t\t<li><i class=\"fa fa-heart-o\" aria-hidden=\"true\"></i> 5k</li>\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"category-grid-full.html\">Hotels</a></li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"item row\">\n\t\t\t\t\t\t\t<div class=\"col-md-4 col-sm-6 col-xs-12\">\n\t\t\t\t\t\t\t\t<div class=\"thingsBox\">\n\t\t\t\t\t\t\t\t\t<div class=\"thingsImage\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/images/things/things-10.jpg\" alt=\"Image things\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"thingsMask\">\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"list-inline rating\">\n\t\t\t\t\t\t\t\t\t\t\t\t<li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"listing-details-left.html\"><h2>Water Grill</h2></a>\n\t\t\t\t\t\t\t\t\t\t\t<p>31 Union Square, New York</p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"thingsCaption \">\n\t\t\t\t\t\t\t\t\t\t<ul class=\"list-inline captionItem\">\n\t\t\t\t\t\t\t\t\t\t\t<li><i class=\"fa fa-heart-o\" aria-hidden=\"true\"></i> 10 k</li>\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"category-grid.html\"> Eat & Drink</a></li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"item row\">\n\t\t\t\t\t\t\t<div class=\"col-md-4 col-sm-6 col-xs-12\">\n\t\t\t\t\t\t\t\t<div class=\"thingsBox \">\n\t\t\t\t\t\t\t\t\t<div class=\"thingsImage\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/images/things/things-11.jpg\" alt=\"Image things\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"thingsMask\">\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"list-inline rating\">\n\t\t\t\t\t\t\t\t\t\t\t\t<li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"listing-details-left.html\"><h2>John F. Kennedy Airport <i class=\"fa fa-check-circle\" aria-hidden=\"true\"></i></h2></a>\n\t\t\t\t\t\t\t\t\t\t\t<p>Queens, NY 11430, new York</p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"thingsCaption \">\n\t\t\t\t\t\t\t\t\t\t<ul class=\"list-inline captionItem\">\n\t\t\t\t\t\t\t\t\t\t\t<li><i class=\"fa fa-heart-o\" aria-hidden=\"true\"></i> 15 k</li>\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"category-list-full.html\">Others</a></li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<a class=\"left carousel-control\" href=\"#thubmnailSlider\" data-slide=\"prev\"><i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i></a>\n\t\t\t\t\t<a class=\"right carousel-control\" href=\"#thubmnailSlider\" data-slide=\"next\"><i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i></a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n\n\n<!-- COUNT UP SECTION -->\n<section class=\"clearfix countUpSection\">\n\t<div class=\"container\">\n\t\t<div class=\"page-header text-center\">\n\t\t\t<h2>Why Listy?</h2>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-3 col-xs-12\">\n\t\t\t\t<div class=\"text-center countItem\">\n\t\t\t\t\t<div class=\"counter\">140</div>\n\t\t\t\t\t<div class=\"counterInfo bg-color-1\">Color Variations</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-3 col-xs-12\">\n\t\t\t\t<div class=\"text-center countItem\">\n\t\t\t\t\t<div class=\"counter\">120</div>\n\t\t\t\t\t<div class=\"counterInfo bg-color-2\">Layouts</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-3 col-xs-12\">\n\t\t\t\t<div class=\"text-center countItem\">\n\t\t\t\t\t<div class=\"counter\">180</div>\n\t\t\t\t\t<div class=\"counterInfo bg-color-3\">Inner Pages</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-3 col-xs-12\">\n\t\t\t\t<div class=\"text-center countItem\">\n\t\t\t\t\t<div class=\"counter\">220</div>\n\t\t\t\t\t<div class=\"counterInfo bg-color-4\">Admin Pages</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t<div class=\"btnArea text-center\">\n\t\t\t\t\t<a href=\"#\" class=\"btn btn-primary\">Get it now</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n\n<!-- WORKS SECTION -->\n<section class=\"clearfix worksArea\">\n\t<div class=\"container\">\n\t\t<div class=\"page-header text-center\">\n\t\t\t<h2>How it Works? <small>This are some of most popular listing</small></h2>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-4 col-xs-12\">\n\t\t\t\t<div class=\"thumbnail text-center worksContent\">\n\t\t\t\t\t<img src=\"/assets/images/works/works-1.png\" alt=\"Image works\">\n\t\t\t\t\t<div class=\"caption\">\n\t\t\t\t\t\t<a href=\"how-it-works.html\"><h3>Find what you want</h3></a>\n\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt  labore et dolore magna aliqua.</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-4 col-xs-12\">\n\t\t\t\t<div class=\"thumbnail text-center worksContent\">\n\t\t\t\t\t<img src=\"/assets/images/works/works-2.png\" alt=\"Image works\">\n\t\t\t\t\t<div class=\"caption\">\n\t\t\t\t\t\t<a href=\"how-it-works.html\"><h3>Review & Plan your day</h3></a>\n\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt  labore et dolore magna aliqua.</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-4 col-xs-12\">\n\t\t\t\t<div class=\"thumbnail text-center worksContent\">\n\t\t\t\t\t<img src=\"/assets/images/works/works-3.png\" alt=\"Image works\">\n\t\t\t\t\t<div class=\"caption\">\n\t\t\t\t\t\t<a href=\"how-it-works.html\"><h3>Explore Location</h3></a>\n\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt  labore et dolore magna aliqua.</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t<div class=\"btnArea text-center\"><a href=\"#\" class=\"btn btn-primary\">Watch it now <i class=\"fa fa-play-circle\" aria-hidden=\"true\"></i></a></div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n\n<!-- ARTICLES SECTION-->\n<section class=\"clearfix articlesArea\">\n\t<div class=\"container\">\n\t\t<div class=\"page-header text-center\">\n\t\t\t<h2>Articles <small>Brouse latest tips from our blog </small></h2>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-4 col-xs-12\">\n\t\t\t\t<div class=\"thumbnail articleContent\">\n\t\t\t\t\t<a href=\"blog-details.html\"><img src=\"/assets/images/articles/article-1.jpg\" alt=\"Image articles\" class=\"img-responsive\"></a>\n\t\t\t\t\t<div class=\"caption\">\n\t\t\t\t\t\t<h4>Jan 22, 2018 by <a href=\"#\">Jno Deo</a></h4>\n\t\t\t\t\t\t<h3><a href=\"blog-details.html\">Lorem ipsum dolor sit amet</a></h3>\n\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt  labore et dolore magna aliqua.</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-4 col-xs-12\">\n\t\t\t\t<div class=\"thumbnail articleContent\">\n\t\t\t\t\t<a href=\"blog-details.html\"><img src=\"/assets/images/articles/article-2.jpg\" alt=\"Image articles\" class=\"img-responsive\"></a>\n\t\t\t\t\t<div class=\"caption\">\n\t\t\t\t\t\t<h4>jan 20, 2018 by <a href=\"#\">Adam Smith</a></h4>\n\t\t\t\t\t\t<h3><a href=\"blog-details.html\">Ut enim ad minim veniam.</a></h3>\n\t\t\t\t\t\t<p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-4 col-xs-12\">\n\t\t\t\t<div class=\"thumbnail articleContent\">\n\t\t\t\t\t<a href=\"blog-details.html\"><img src=\"/assets/images/articles/article-3.jpg\" alt=\"Image articles\" class=\"img-responsive\"></a>\n\t\t\t\t\t<div class=\"caption\">\n\t\t\t\t\t\t<h4>Jan 10, 2018 by <a href=\"#\">Kathy Brown</a></h4>\n\t\t\t\t\t\t<h3><a href=\"blog-details.html\">velit esse cillum dolore eu fugiat</a></h3>\n\t\t\t\t\t\t<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n\n\n<!-- CALL TO ACTION SECTION -->\n<section class=\"clearfix callAction\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-10 col-sm-9 col-xs-12\">\n\t\t\t\t<div class=\"callInfo\">\n\t\t\t\t\t<h4><span>Listty</span> is the <span>best way</span> <br>to find great local business</h4>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-2 col-sm-3 col-xs-12\">\n\t\t\t\t<div class=\"btnArea\">\n\t\t\t\t\t<a href=\"sign-up.html\" class=\"btn btn-primary btn-block\">Get Started</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n\n    <!-- FOOTER -->\n    <footer style=\"background-image: url(/assets/images/background/bg-footer.jpg);\">\n      <!-- FOOTER INFO -->\n      <div class=\"clearfix footerInfo\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-sm-7 col-xs-12\">\n              <div class=\"footerText\">\n                <a href=\"index.html\" class=\"footerLogo\">\n                  <svg class=\"logo-svg white\" version=\"1\" xmlns=\"http://www.w3.org/2000/svg\" width=\"140\" height=\"44\">\n                    <path class=\"path-1\" fill=\"\" d=\"M0 44V0h139.813v44H0zM137.346 2.467H2.467v39.065h134.879V2.467z\"/>\n                    <path class=\"path-1\" fill=\"\" d=\"M120.927 22.389v11.095h-4.566V22.389a371.288 371.288 0 0 0-2.086-2.888 347.047 347.047 0 0 1-2.2-3.053 386.86 386.86 0 0 0-2.201-3.053c-.7-.959-1.395-1.922-2.086-2.888h5.617l5.255 7.287 5.222-7.287h5.649c.002 0-8.604 11.882-8.604 11.882zM98.034 33.484h-4.565V15.069h-6.372v-4.562h17.244v4.562h-6.306v18.415zm-21.908 0H71.56V15.069h-6.372v-4.562h17.244v4.562h-6.306v18.415zm-17.425-1.789c-.69.623-1.511 1.116-2.463 1.477-.953.361-1.987.542-3.104.542-1.007 0-1.982-.143-2.923-.427a10.814 10.814 0 0 1-2.661-1.214h.033a9.928 9.928 0 0 1-1.577-1.215 18.73 18.73 0 0 1-.953-.952l3.416-3.151c.153.197.399.432.739.706.339.274.728.537 1.166.788.44.253.902.467 1.38.64.481.175.941.262 1.379.262.372 0 .744-.044 1.117-.131.359-.082.703-.22 1.018-.41.305-.185.564-.437.755-.739.197-.306.296-.689.296-1.149 0-.175-.06-.366-.181-.574-.12-.208-.329-.432-.624-.673-.296-.241-.706-.498-1.232-.771a20.567 20.567 0 0 0-1.971-.87 25.42 25.42 0 0 1-2.562-1.132 8.896 8.896 0 0 1-2.053-1.428 5.903 5.903 0 0 1-1.347-1.871c-.317-.7-.476-1.51-.476-2.429 0-.94.175-1.822.526-2.642a6.21 6.21 0 0 1 1.494-2.133c.646-.602 1.423-1.072 2.332-1.412.908-.339 1.911-.509 3.006-.509.591 0 1.22.077 1.889.23.668.153 1.319.35 1.954.591a12.95 12.95 0 0 1 1.79.837c.558.317 1.023.64 1.396.968l-2.825 3.545a15.71 15.71 0 0 0-1.281-.788 10.316 10.316 0 0 0-1.281-.558 4.311 4.311 0 0 0-1.478-.263c-.919 0-1.637.181-2.151.542-.515.361-.772.881-.772 1.559 0 .307.093.586.279.837.186.252.438.482.756.689.348.225.717.417 1.1.574.416.176.854.34 1.314.492 1.314.504 2.42 1.013 3.318 1.526.898.514 1.62 1.062 2.168 1.642s.936 1.204 1.166 1.871c.23.668.345 1.395.345 2.183 0 .963-.197 1.871-.591 2.724a6.803 6.803 0 0 1-1.626 2.216zM34.839 10.507h4.532v22.977h-4.532V10.507zm-20.036 0h4.566v18.415h9.263v4.563H14.803V10.507z\"/>\n                  </svg>\n                </a>\n                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor</p>\n                <ul class=\"list-styled list-contact\">\n                  <li><i class=\"fa fa-phone\" aria-hidden=\"true\"></i>[88] 657 524 332</li>\n                  <li><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i><a href=\"#\">info@listy.com</a></li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"col-sm-3 col-xs-12\">\n              <div class=\"footerInfoTitle\">\n                <h4>Links</h4>\n              </div>\n              <div class=\"useLink\">\n                <ul class=\"list-unstyled\">\n                  <li><a href=\"dashboard.html\">Dashboard</a></li>\n                  <li><a href=\"sign-up.html\">Create Account</a></li>\n                  <li><a href=\"login.html\">Login</a></li>\n                  <li><a href=\"add-listings.html\">Add Listing</a></li>\n                  <li><a href=\"edit-listings.html\">Edit Listing</a></li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"col-sm-2 col-xs-12\">\n              <div class=\"footerInfoTitle\">\n                <h4>Company</h4>\n              </div>\n              <div class=\"useLink\">\n                <ul class=\"list-unstyled\">\n                  <li><a href=\"contact-us.html\">Contact Us</a></li>\n                  <li><a href=\"terms-of-services.html\">Terms and Conditions</a></li>\n                  <li><a href=\"how-it-works.html\">How It Works</a></li>\n                  <li><a href=\"payment-process.html\">Payment</a></li>\n                  <li><a href=\"pricing-table.html\">Pricing</a></li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <!-- COPY RIGHT -->\n      <div class=\"clearfix copyRight\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-xs-12\">\n              <div class=\"copyRightWrapper\">\n                <div class=\"row\">\n                  <div class=\"col-sm-5 col-sm-push-7 col-xs-12\">\n                    <ul class=\"list-inline socialLink\">\n                      <li><a href=\"#\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a></li>\n                      <li><a href=\"#\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a></li>\n                      <li><a href=\"#\"><i class=\"fa fa-pinterest-p\" aria-hidden=\"true\"></i></a></li>\n                      <li><a href=\"#\"><i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i></a></li>\n                    </ul>\n                  </div>\n                  <div class=\"col-sm-7 col-sm-pull-5 col-xs-12\">\n                    <div class=\"copyRightText\">\n                      <p>Copyright &copy; 2017. All Rights Reserved by <a href=\"#\">Abdus</a></p>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </footer>\n  </div>\n\n  <!-- LOGIN  MODAL -->\n  <div id=\"loginModal\" tabindex=\"-1\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n      <!-- Modal content-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h4 class=\"modal-title\">Log In to your Account</h4>\n        </div>\n        <div class=\"modal-body\">\n          <form class=\"loginForm\">\n            <div class=\"form-group\">\n              <i class=\"fa fa-envelope\" aria-hidden=\"true\"></i>\n              <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Email\">\n            </div>\n            <div class=\"form-group\">\n              <i class=\"fa fa-lock\" aria-hidden=\"true\"></i>\n              <input type=\"password\" class=\"form-control\" id=\"pwd\" placeholder=\"Password\">\n            </div>\n            <div class=\"form-group\">\n              <button type=\"submit\" class=\"btn btn-primary btn-block\">Log In</button>\n            </div>\n            <div class=\"checkbox\">\n              <label><input type=\"checkbox\"> Remember me</label>\n              <a href=\"#\" class=\"pull-right link\">Fogot Password?</a>\n            </div>\n\n          </form>\n        </div>\n        <div class=\"modal-footer\">\n          <p>Don’t have an Account? <a href=\"#\" class=\"link\">Sign up</a></p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
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
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Asus\Desktop\AngularProjects\EducShare\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map