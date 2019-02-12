(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/admin/extral-admin/common/login-cookie.ts":
/*!***********************************************************!*\
  !*** ./src/app/admin/extral-admin/common/login-cookie.ts ***!
  \***********************************************************/
/*! exports provided: LoginCookie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginCookie", function() { return LoginCookie; });
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _model_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/user */ "./src/app/admin/extral-admin/model/user.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginCookie = /** @class */ (function () {
    function LoginCookie(cookieService, router, toastrService) {
        this.cookieService = cookieService;
        this.router = router;
        this.toastrService = toastrService;
        this.user = new _model_user__WEBPACK_IMPORTED_MODULE_1__["User"]();
    }
    /**
     * save info user when login
     * @param data
     */
    LoginCookie.prototype.saveInfoUserWhenLogin = function (data) {
        this.user = data[0];
        // save data to cookie
        this.cookieService.set('idUser', this.user.idUser);
        this.cookieService.set('username', this.user.username);
        this.cookieService.set('password', this.user.password);
        this.cookieService.set('typeUser', this.user.typeUser);
        this.cookieService.set('idTruong', this.user.idTruong);
        this.cookieService.set('idHS', this.user.idHS);
        this.cookieService.set('hoTen', this.user.hoTen);
        this.cookieService.set('gioiTinh', this.user.gioiTinh);
        this.cookieService.set('namSinh', this.user.namSinh);
        this.cookieService.set('sdt', this.user.sdt);
        this.cookieService.set('diaChi', this.user.diaChi);
        this.cookieService.set('email', this.user.email);
        // 1 is login 0 is logout
        this.cookieService.set('isLogin', '1');
    };
    /**
     * clear info user when logout
     * @param data
     */
    LoginCookie.prototype.clearInfoUserWhenLogout = function () {
        this.cookieService.deleteAll();
        // 1 is login 0 is logout
        this.cookieService.set('isLogin', '0');
    };
    /**
     * get info of user
     * @param data
     */
    LoginCookie.prototype.getInfoUser = function () {
        //user login 
        if (this.cookieService.get('isLogin') === '1') {
            this.user.idUser = this.cookieService.get('idUser');
            this.user.username = this.cookieService.get('username');
            this.user.password = this.cookieService.get('password');
            this.user.typeUser = this.cookieService.get('typeUser');
            this.user.idTruong = this.cookieService.get('idTruong');
            this.user.idHS = this.cookieService.get('idHS');
            this.user.hoTen = this.cookieService.get('hoTen');
            this.user.gioiTinh = this.cookieService.get('gioiTinh');
            this.user.namSinh = this.cookieService.get('namSinh');
            this.user.sdt = this.cookieService.get('sdt');
            this.user.diaChi = this.cookieService.get('diaChi');
            this.user.email = this.cookieService.get('email');
            this.user.isLogin = true;
        }
        else {
            this.user = new _model_user__WEBPACK_IMPORTED_MODULE_1__["User"]();
            this.user.isLogin = false;
        }
        return this.user;
    };
    /**
     * check is admin home
     * @param data
     */
    LoginCookie.prototype.checkIsAdminHome = function () {
        // check user is admin home
        if (!(this.user && this.user.isLogin && this.user.typeUser === '1')) {
            this.toastrService.error('Không Có Quyền Truy Cập!');
            this.router.navigate(['/admin/login/login']);
            return false;
        }
        return true;
    };
    /**
     * check is home admin school
     * @param data
     */
    LoginCookie.prototype.checkIsHomeAdminSchool = function () {
        // check user is home admin school
        if (!(this.user && this.user.isLogin && this.user.typeUser === '2')) {
            this.toastrService.error('Không Có Quyền Truy Cập!');
            this.router.navigate(['/admin/login/login']);
            return false;
        }
        return true;
    };
    /**
     * check is giao vien
     * @param data
     */
    LoginCookie.prototype.checkIsGiaoVien = function () {
        // check user is giao vien
        if (!(this.user && this.user.isLogin && this.user.typeUser === '3')) {
            this.toastrService.error('Không Có Quyền Truy Cập!');
            this.router.navigate(['/admin/login/login']);
            return false;
        }
        return true;
    };
    LoginCookie = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_0__["CookieService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], LoginCookie);
    return LoginCookie;
}());



/***/ }),

/***/ "./src/app/admin/extral-admin/model/user.ts":
/*!**************************************************!*\
  !*** ./src/app/admin/extral-admin/model/user.ts ***!
  \**************************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map