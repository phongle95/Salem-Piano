(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["trang-khac-trang-khac-module"],{

/***/ "./src/app/user/trang-khac/chi-tiet-san-pham/chi-tiet-san-pham.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/user/trang-khac/chi-tiet-san-pham/chi-tiet-san-pham.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img class=\"custom-slide\" src=\"https://vietthuong.vn//upload/images/slider/slide.png\" alt=\"piano\">\n<div class=\"container\">\n  <br>\n  <br>\n  <h3 class=\"text-center text-black\" style=\"font-weight: 500\">CHI TIẾT SẢN PHẨM</h3>\n  <hr>\n  <br>\n\n  <div class=\"row\">\n    <div class=\"col-lg-4 col-md-6 mb-lg-0 mb-5\">\n      <img class=\"d-block w-100 custom-image\" src=\"{{data.hinhAnh}}\" alt=\"{{data.tuKhoa}}\">\n    </div>\n    <div class=\"col-lg-4 col-md-6 mb-lg-0 mb-5\">\n      <a title=\"piano\" routerLink=\"#\">\n        <h4 class=\"custom-title \">{{data.tenSP}} <img class=\"img-fluid\" src=\"http://caytrongduoclieu.com/asset/image/hot.gif\" alt=\"Sample image\"></h4>\n      </a>\n      <h6 class=\"custom-price \">Giá: {{data.gia}} vnđ</h6>\n      <h6 class=\"custom-description\">\n        {{data.tomTat}}\n      </h6>\n\n      <!-- Button trigger modal -->\n      <div class=\"row\">\n        <div class=\"col-\">\n          <div class=\"text-center\">\n            <a href=\"\" class=\"btn btn-primary btn-rounded\" data-toggle=\"modal\" data-target=\"#centralModalSuccess\">Đặt hàng\n              <i class=\"fa  fa-cart-plus fa-1x yellow-text pr-1\"></i>\n            </a>\n          </div>\n        </div>\n        <!-- <div class=\"col-5\">\n\n          <a href=\"tel:0394690998\" class=\"btn-floating btn-large color waves-light\" mdbWavesEffect (click)=\"fixed.toggle($event)\">\n            <i class=\"fa fa-phone\"></i>\n          </a>\n         \n        </div> -->\n      </div>\n\n    </div>\n    <div class=\"col-lg-4 col-md-6 mb-lg-0 mb-5\">\n      <h4 class=\"custom-title\">Địa chỉ Cửa Hàng</h4>\n      <p class=\"custom-description\">\n        <li>\n          Showroom Salem Piano H14/32 Đường Phan Tứ Quận Sơn trà , Thành Phố Đà Nẵng\n        </li>\n        <br>\n        <li>\n          Showroom Salem Music 386 CMT8386 Cách Mạng Tháng 8, Phường 10, Quận 3, Tp. HCM, Quận 3, Hồ Chí Minh\n        </li>\n\n      </p>\n    </div>\n  </div>\n\n  <hr>\n\n  <!-- thông số kỹ thuật -->\n  <div class=\"row\">\n    <button type=\"button\" class=\"btn btn-unique\" (click)=\"onBtnMoTaClick()\">MÔ TẢ SẢN PHẨM</button>\n    <button type=\"button\" class=\"btn btn-amber\" (click)=\"onBtnKyThuatClick()\">THÔNG SỐ KỸ THUẬT</button>\n\n  </div>\n  <br>\n  <div *ngIf=\"moTa\" class=\"row common\">\n    <div style=\"font-weight:400\" innerHTML=\"{{data.moTaSP}}\"></div>\n  </div>\n  <div *ngIf=\"!moTa\" class=\"row common\">\n    <div style=\"font-weight:400\" innerHTML=\"{{data.thongSoKT}}\"></div>\n\n  </div>\n  <div class=\"row\">\n    <!-- sản phẩm liên quan -->\n    <app-san-pham-lien-quan></app-san-pham-lien-quan>\n  </div>\n\n</div>\n\n\n\n\n<!-- Central Modal Medium Success -->\n<div class=\"modal fade\" id=\"centralModalSuccess\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-notify modal-success\" role=\"document\">\n    <!--Content-->\n    <div class=\"modal-content\">\n      <!--Header-->\n      <div class=\"modal-header\">\n        <h3 class=\"white-text font-weight-bold text-center\">Đặt hàng</h3>\n\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\" class=\"white-text\">&times;</span>\n        </button>\n      </div>\n\n      <!--Body-->\n      <div class=\"modal-body\">\n        <div class=\"text-center\">\n          <i class=\"fa  fa-shopping-cart fa-5x red-text pr-1\"></i>\n        </div>\n        <div class=\"md-form mb-2\">\n          <i class=\"fa  fa-street-view fa-1x blue-text pr-1\"></i>\n          <input type=\"text\" id=\"defaultForm-email\" class=\"form-control validate\" placeholder=\"Tên bạn\">\n        </div>\n\n        <div class=\"md-form mb-2\">\n          <i class=\"fa  fa-music fa-1x yellow-text pr-1\"></i>\n          <input type=\"text\" id=\"defaultForm-pass\" class=\"form-control validate\" placeholder=\"Tên sản phẩm\">\n        </div>\n        <div class=\"md-form mb-2\">\n          <i class=\"fa  fa-phone-square fa-1x green-text pr-1\"></i>\n          <input type=\"number\" id=\"defaultForm-pass\" class=\"form-control validate\" placeholder=\"Số điện thoại\">\n        </div>\n      </div>\n\n\n      <!--Footer-->\n      <div class=\"modal-footer justify-content-center\">\n        <button type=\"button\" class=\"btn btn-sm btn-rounded btn-amber\">\n          <i class=\"fa  fa-cart-plus fa-1x amber-text pr-1\"></i>Đặt hàng</button>\n        <!-- <button type=\"button\" class=\"btn btn-indigo btn-md\" data-dismiss=\"modal\">Hủy bỏ<i class=\"fas fa-thumbs-up ml-2\" aria-hidden=\"true\"></i></button> -->\n        <button type=\"button\" class=\"btn btn-sm btn-outline-default btn-rounded waves-effect \" data-dismiss=\"modal\">\n          <i class=\"fa  fa-times-circle fa-1x amber-text pr-1\"></i>Hủy bỏ</button>\n      </div>\n    </div>\n    <!--/.Content-->\n  </div>\n</div>\n<!-- Central Modal Medium Success-->"

/***/ }),

/***/ "./src/app/user/trang-khac/chi-tiet-san-pham/chi-tiet-san-pham.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/user/trang-khac/chi-tiet-san-pham/chi-tiet-san-pham.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-image {\n  height: 300px; }\n\n.custom-title {\n  text-align: left;\n  font-weight: 600;\n  color: #000;\n  font-size: 110%;\n  font-family: \"Helvetica\", Times, serif;\n  text-transform: uppercase; }\n\n.custom-price {\n  text-align: left;\n  font-weight: 600;\n  color: #ff4444;\n  font-size: 100%;\n  font-family: \"Helvetica\", Times, serif;\n  text-transform: uppercase; }\n\n.custom-description {\n  text-align: left;\n  font-weight: 300;\n  color: #37474F;\n  font-size: 110%;\n  font-family: \"time news roman\", Times, serif; }\n\n.common {\n  padding-left: 5px;\n  padding-right: 5px; }\n\n@media (max-width: 1199.98px) {\n  .custom-slide {\n    height: 200px;\n    width: 100%; } }\n\n.color {\n  background-color: #32CD32; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci90cmFuZy1raGFjL2NoaS10aWV0LXNhbi1waGFtL0M6XFx4YW1wcFxcaHRkb2NzXFxhcHBfcGlhbm8vc3JjXFxhcHBcXHVzZXJcXHRyYW5nLWtoYWNcXGNoaS10aWV0LXNhbi1waGFtXFxjaGktdGlldC1zYW4tcGhhbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWEsRUFDaEI7O0FBRUQ7RUFDRyxpQkFBZ0I7RUFDaEIsaUJBQWdCO0VBQ2hCLFlBQVk7RUFDWixnQkFBZTtFQUNmLHVDQUFzQztFQUN0QywwQkFBeUIsRUFDM0I7O0FBRUQ7RUFDRyxpQkFBZ0I7RUFDaEIsaUJBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZTtFQUNmLHVDQUFzQztFQUN0QywwQkFBeUIsRUFDM0I7O0FBRUQ7RUFDRyxpQkFBZ0I7RUFDaEIsaUJBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZTtFQUNmLDZDQUE0QyxFQUM5Qzs7QUFDRDtFQUNJLGtCQUFpQjtFQUNqQixtQkFBa0IsRUFDckI7O0FBR0Q7RUFFSTtJQUNFLGNBQWE7SUFDYixZQUFXLEVBQ1osRUFBQTs7QUFHSDtFQUNFLDBCQUF5QixFQUM1QiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdHJhbmcta2hhYy9jaGktdGlldC1zYW4tcGhhbS9jaGktdGlldC1zYW4tcGhhbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b20taW1hZ2V7IFxyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxufSBcclxuXHJcbi5jdXN0b20tdGl0bGV7XHJcbiAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgIGNvbG9yOiAjMDAwIDsgXHJcbiAgIGZvbnQtc2l6ZTogMTEwJTtcclxuICAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhXCIsIFRpbWVzLCBzZXJpZjtcclxuICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufSBcclxuXHJcbi5jdXN0b20tcHJpY2V7XHJcbiAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgIGNvbG9yOiAjZmY0NDQ0IDsgXHJcbiAgIGZvbnQtc2l6ZTogMTAwJTtcclxuICAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhXCIsIFRpbWVzLCBzZXJpZjtcclxuICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufSBcclxuXHJcbi5jdXN0b20tZGVzY3JpcHRpb257XHJcbiAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgIGNvbG9yOiAjMzc0NzRGIDsgXHJcbiAgIGZvbnQtc2l6ZTogMTEwJTtcclxuICAgZm9udC1mYW1pbHk6IFwidGltZSBuZXdzIHJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcclxufVxyXG4uY29tbW9ue1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTE5OS45OHB4KSB7XHJcblxyXG4gICAgLmN1c3RvbS1zbGlkZXtcclxuICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY29sb3J7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzJDRDMyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/user/trang-khac/chi-tiet-san-pham/chi-tiet-san-pham.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/user/trang-khac/chi-tiet-san-pham/chi-tiet-san-pham.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ChiTietSanPhamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChiTietSanPhamComponent", function() { return ChiTietSanPhamComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_piano_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../api/piano.service */ "./src/app/api/piano.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChiTietSanPhamComponent = /** @class */ (function () {
    function ChiTietSanPhamComponent(pianoService, route, router) {
        var _this = this;
        this.pianoService = pianoService;
        this.route = route;
        this.router = router;
        this.moTa = true;
        this.router.events.subscribe(function () {
            _this.id = _this.route.snapshot.params['id'];
            _this.getPianoById();
            _this.onActivate();
        });
    }
    ChiTietSanPhamComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.params['id'];
        this.getPianoById();
    };
    //lay chi tiet piano
    ChiTietSanPhamComponent.prototype.getPianoById = function () {
        var _this = this;
        this.pianoService.excuteAllByWhat({ id: this.id }, '24')
            .subscribe(function (data) {
            _this.data = data[0];
            _this.data.moTaSP = _this.data.moTaSP.replace(/"/g, '');
            _this.data.moTaSP = _this.data.moTaSP.replace(/xxxxxxxx/g, '\"');
            _this.data.moTaSP = _this.data.moTaSP.replace(/xxxx/g, "'");
            _this.data.thongSoKT = _this.data.thongSoKT.replace(/"/g, '');
            _this.data.thongSoKT = _this.data.thongSoKT.replace(/xxxxxxxx/g, '\"');
            _this.data.thongSoKT = _this.data.thongSoKT.replace(/xxxx/g, "'");
            // console.log('data',this.data);
        });
    };
    /**
     * onBtnMoTaClick
     */
    ChiTietSanPhamComponent.prototype.onBtnMoTaClick = function () {
        this.moTa = true;
    };
    /**
     * onBtnKyThuatClick
     */
    ChiTietSanPhamComponent.prototype.onBtnKyThuatClick = function () {
        this.moTa = false;
    };
    //ham  len dau trang
    ChiTietSanPhamComponent.prototype.onActivate = function () {
        window.scrollTo(0, 0);
    };
    ChiTietSanPhamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-chi-tiet-san-pham',
            template: __webpack_require__(/*! ./chi-tiet-san-pham.component.html */ "./src/app/user/trang-khac/chi-tiet-san-pham/chi-tiet-san-pham.component.html"),
            styles: [__webpack_require__(/*! ./chi-tiet-san-pham.component.scss */ "./src/app/user/trang-khac/chi-tiet-san-pham/chi-tiet-san-pham.component.scss")]
        }),
        __metadata("design:paramtypes", [_api_piano_service__WEBPACK_IMPORTED_MODULE_1__["PianoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], ChiTietSanPhamComponent);
    return ChiTietSanPhamComponent;
}());



/***/ }),

/***/ "./src/app/user/trang-khac/chi-tiet-tin-tuc/chi-tiet-tin-tuc.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/user/trang-khac/chi-tiet-tin-tuc/chi-tiet-tin-tuc.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"container\">\n    <div class=\"col\">\n        <div class=\"row\">\n            <div class=\"col-lg-7\">\n                <br>\n                <br>\n                <div style=\"font-weight:400\" innerHTML=\"{{data.noiDung}}\"></div>\n            </div>\n            <div class=\"col-lg-5\">\n                <h4 class=\" custom-new mt-5\">Tiêu điểm</h4>\n                <hr>\n\n                <div *ngFor=\"let tin of tieuDiem\">\n                    <div class=\"row\">\n                        <!-- Grid column -->\n                        <div class=\"col-lg-4\">\n                            <!-- Featured image -->\n                            <div class=\"view overlay rounded  mb-lg-0 mb-4\">\n                                <img class=\"img-fluid img\" src=\"{{tin.hinhAnh}}\" alt=\"{{tin.tuKhoa}}\">\n                                <a routerLink=\"/user/trang-khac/chi-tiet-tin-tuc/{{tin.id}}\">\n                                    <div class=\"mask rgba-white-slight\"></div>\n                                </a>\n                            </div>\n\n                        </div>\n                        <!-- Grid column -->\n                        <!-- Grid column -->\n                        <div class=\"col-lg-8\">\n                            <!-- Category -->\n                            <p>\n                                <a routerLink=\"/user/trang-khac/chi-tiet-tin-tuc/{{tin.id}}\" class=\"custom-description \">{{tin.tieuDe}}</a>\n                            </p>\n\n                            <p class=\"font-weight-bold dark-grey-text text-center\">\n                            </p>\n                        </div>\n                        <!-- Grid column -->\n                    </div>\n                    <hr>\n\n\n                </div>\n                <br>\n                <iframe src=\"https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fpianonhapkhaudanang&tabs=timeline&width=340&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId\"\n                    width=\"340\" height=\"600\" style=\"border:none;overflow:hidden\" scrolling=\"no\" frameborder=\"0\"\n                    allowTransparency=\"true\" allow=\"encrypted-media\"></iframe>\n\n            </div>\n        </div>\n        <br>\n        <br>\n        <br>\n\n        <h4 class=\"custom-new \">Bài viết liên quan</h4>\n\n        <hr>\n        <br>\n        <div class=\"row\">\n            <!-- Card deck -->\n            <div class=\"card-deck\">\n                <!-- Card -->\n                <div class=\"card mb-4\" *ngFor=\"let tin of tinMoi\">\n                    <!--Card image-->\n                    <div class=\"view overlay\">\n                        <img class=\"card-img-top imghinh\" src=\"{{tin.hinhAnh}}\" alt=\"Card image cap\">\n                        <a title=\"piano\" routerLink=\"/user/trang-khac/chi-tiet-tin-tuc/{{tin.id}}\">\n                            <div class=\"mask rgba-white-slight\"></div>\n                        </a>\n                    </div>\n                    <!--Card content-->\n                    <div class=\"card-body custom-body\">\n                        <!--Title-->\n\n                        <!--Text-->\n                        <a title=\"piano\" class=\"custom-description\" routerLink=\"/user/trang-khac/chi-tiet-tin-tuc/{{tin.id}}\">\n                            {{tin.tieuDe}}\n                        </a>\n                        <div class=\"color\">\n                            <i class=\"fa fa-star\"> </i>\n                            <i class=\"fa fa-star\"> </i>\n                            <i class=\"fa fa-star\"> </i>\n                            <i class=\"fa fa-star\"> </i>\n                            <i class=\"fa fa-star\"> </i>\n                        </div>\n                    </div>\n                </div>\n                <!-- Card -->\n\n            </div>\n            <!-- Card deck -->\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/user/trang-khac/chi-tiet-tin-tuc/chi-tiet-tin-tuc.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/user/trang-khac/chi-tiet-tin-tuc/chi-tiet-tin-tuc.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".imghinh {\n  height: 220px; }\n\n.custom-image {\n  height: 200px; }\n\n.custom-title {\n  text-align: left;\n  font-weight: 350;\n  color: #37474F;\n  font-size: 152%;\n  font-family: \"Helvetica\", Times, serif; }\n\n.custom-new {\n  text-align: left;\n  font-weight: 350;\n  color: #004d40;\n  font-size: 152%;\n  font-family: \"Helvetica\", Times, serif; }\n\n.custom-price {\n  text-align: center;\n  font-weight: 500;\n  color: #ff4444;\n  font-size: 90%;\n  font-family: \"Helvetica\", Times, serif;\n  text-transform: uppercase; }\n\n.custom-description {\n  text-align: left;\n  font-weight: 300;\n  color: #37474F;\n  font-size: 115%;\n  font-family: Times, serif; }\n\n@media (max-width: 1199.98px) {\n  .custom-slide {\n    height: 200px;\n    width: 100%; }\n  .img {\n    height: 100%;\n    width: 100%; }\n  .imgtin {\n    height: 100%;\n    width: 100%; } }\n\n@media (min-width: 1199.98px) {\n  .custom-img {\n    height: 300px;\n    width: 100%; }\n  .img {\n    height: 80px;\n    width: 90px; }\n  .imgtin {\n    height: 190px;\n    width: 400px; } }\n\n.custom-body {\n  background-color: #e0e0e0; }\n\n.color {\n  color: #ffca28; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci90cmFuZy1raGFjL2NoaS10aWV0LXRpbi10dWMvQzpcXHhhbXBwXFxodGRvY3NcXGFwcF9waWFuby9zcmNcXGFwcFxcdXNlclxcdHJhbmcta2hhY1xcY2hpLXRpZXQtdGluLXR1Y1xcY2hpLXRpZXQtdGluLXR1Yy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLGNBQWEsRUFFaEI7O0FBR0Q7RUFDSSxjQUFhLEVBQ2hCOztBQUVEO0VBQ0csaUJBQWdCO0VBQ2hCLGlCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWU7RUFDZix1Q0FBc0MsRUFFeEM7O0FBRUQ7RUFDSSxpQkFBZ0I7RUFDaEIsaUJBQWdCO0VBQ2hCLGVBQWdCO0VBQ2hCLGdCQUFlO0VBQ2YsdUNBQXNDLEVBRXhDOztBQUdGO0VBQ0csbUJBQWtCO0VBQ2xCLGlCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZUFBYztFQUNkLHVDQUFzQztFQUN0QywwQkFBeUIsRUFDM0I7O0FBRUQ7RUFDSSxpQkFBZ0I7RUFDaEIsaUJBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZTtFQUNmLDBCQUF5QixFQUMzQjs7QUFHRDtFQUVHO0lBQ0UsY0FBYTtJQUNiLFlBQVcsRUFDWjtFQUNEO0lBQ0ksYUFBVztJQUNYLFlBQVcsRUFDZDtFQUVEO0lBQ0ksYUFBVztJQUNYLFlBQVcsRUFDZCxFQUFBOztBQUdIO0VBRUU7SUFDRSxjQUFhO0lBQ2IsWUFBVyxFQUNaO0VBQ0Q7SUFDSSxhQUFZO0lBQ1osWUFBVyxFQUNkO0VBRUQ7SUFDSSxjQUFhO0lBQ2IsYUFBWSxFQUNmLEVBQUE7O0FBS0w7RUFDSSwwQkFBMkIsRUFDOUI7O0FBR0Q7RUFDRyxlQUFlLEVBQ2pCIiwiZmlsZSI6InNyYy9hcHAvdXNlci90cmFuZy1raGFjL2NoaS10aWV0LXRpbi10dWMvY2hpLXRpZXQtdGluLXR1Yy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcbi5pbWdoaW5oe1xyXG4gICAgaGVpZ2h0OiAyMjBweDtcclxuICAgIC8vIHdpZHRoOiAzNTBweDtcclxufVxyXG5cclxuXHJcbi5jdXN0b20taW1hZ2V7IFxyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxufSBcclxuXHJcbi5jdXN0b20tdGl0bGV7XHJcbiAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgIGZvbnQtd2VpZ2h0OiAzNTA7XHJcbiAgIGNvbG9yOiAjMzc0NzRGIDsgXHJcbiAgIGZvbnQtc2l6ZTogMTUyJTtcclxuICAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhXCIsIFRpbWVzLCBzZXJpZjtcclxuLy8gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufSBcclxuXHJcbi5jdXN0b20tbmV3e1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzNTA7XHJcbiAgICBjb2xvcjogIzAwNGQ0MCAgOyBcclxuICAgIGZvbnQtc2l6ZTogMTUyJTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYVwiLCBUaW1lcywgc2VyaWY7XHJcbiAvLyAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gfSBcclxuIFxyXG5cclxuLmN1c3RvbS1wcmljZXtcclxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICBmb250LXdlaWdodDogNTAwO1xyXG4gICBjb2xvcjogI2ZmNDQ0NCA7IFxyXG4gICBmb250LXNpemU6IDkwJTtcclxuICAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhXCIsIFRpbWVzLCBzZXJpZjtcclxuICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufSBcclxuXHJcbi5jdXN0b20tZGVzY3JpcHRpb257XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGNvbG9yOiAjMzc0NzRGIDsgXHJcbiAgICBmb250LXNpemU6IDExNSU7XHJcbiAgICBmb250LWZhbWlseTogVGltZXMsIHNlcmlmO1xyXG4gfVxyXG5cclxuIFxyXG4gQG1lZGlhIChtYXgtd2lkdGg6IDExOTkuOThweCkge1xyXG5cclxuICAgIC5jdXN0b20tc2xpZGV7XHJcbiAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmltZ3tcclxuICAgICAgICBoZWlnaHQ6MTAwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmltZ3RpbntcclxuICAgICAgICBoZWlnaHQ6MTAwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMTk5Ljk4cHgpIHtcclxuXHJcbiAgICAuY3VzdG9tLWltZ3tcclxuICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuaW1ne1xyXG4gICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICB3aWR0aDogOTBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmltZ3RpbntcclxuICAgICAgICBoZWlnaHQ6IDE5MHB4O1xyXG4gICAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcblxyXG4gIFxyXG4uY3VzdG9tLWJvZHl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwICA7XHJcbn1cclxuXHJcblxyXG4uY29sb3J7XHJcbiAgIGNvbG9yOiAgI2ZmY2EyODtcclxufVxyXG4gIl19 */"

/***/ }),

/***/ "./src/app/user/trang-khac/chi-tiet-tin-tuc/chi-tiet-tin-tuc.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/user/trang-khac/chi-tiet-tin-tuc/chi-tiet-tin-tuc.component.ts ***!
  \********************************************************************************/
/*! exports provided: ChiTietTinTucComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChiTietTinTucComponent", function() { return ChiTietTinTucComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_api_piano_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/api/piano.service */ "./src/app/api/piano.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChiTietTinTucComponent = /** @class */ (function () {
    function ChiTietTinTucComponent(pianoService, route, router) {
        var _this = this;
        this.pianoService = pianoService;
        this.route = route;
        this.router = router;
        //ham check thay doi de load trang
        this.router.events.subscribe(function () {
            _this.id = _this.route.snapshot.params['id'];
            _this.getNewById();
        });
    }
    ChiTietTinTucComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.params['id'];
        this.getNewById();
        this.getTinMoi();
        this.getTieuDiem();
    };
    //lay tieu diem
    ChiTietTinTucComponent.prototype.getTieuDiem = function () {
        var _this = this;
        this.pianoService.excuteAllByWhat({}, '16')
            .subscribe(function (data) {
            _this.tieuDiem = data;
        });
    };
    // lay tin by id
    ChiTietTinTucComponent.prototype.getNewById = function () {
        var _this = this;
        this.pianoService.excuteAllByWhat({ id: this.id }, '14')
            .subscribe(function (data) {
            _this.data = data[0];
            _this.data.noiDung = _this.data.noiDung.replace(/"/g, '');
            _this.data.noiDung = _this.data.noiDung.replace(/xxxxxxxx/g, '\"');
            _this.data.noiDung = _this.data.noiDung.replace(/xxxx/g, "'");
            _this.onActivate();
        });
    };
    //lay tin moi
    ChiTietTinTucComponent.prototype.getTinMoi = function () {
        var _this = this;
        this.pianoService.excuteAllByWhat({}, '17')
            .subscribe(function (data) {
            _this.tinMoi = data;
        });
    };
    //ham  len dau trang
    ChiTietTinTucComponent.prototype.onActivate = function () {
        window.scrollTo(0, 0);
    };
    ChiTietTinTucComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-chi-tiet-tin-tuc',
            template: __webpack_require__(/*! ./chi-tiet-tin-tuc.component.html */ "./src/app/user/trang-khac/chi-tiet-tin-tuc/chi-tiet-tin-tuc.component.html"),
            styles: [__webpack_require__(/*! ./chi-tiet-tin-tuc.component.scss */ "./src/app/user/trang-khac/chi-tiet-tin-tuc/chi-tiet-tin-tuc.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_api_piano_service__WEBPACK_IMPORTED_MODULE_1__["PianoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], ChiTietTinTucComponent);
    return ChiTietTinTucComponent;
}());



/***/ }),

/***/ "./src/app/user/trang-khac/cho-thue/cho-thue.component.html":
/*!******************************************************************!*\
  !*** ./src/app/user/trang-khac/cho-thue/cho-thue.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <br> <br>\n\n  <div class=\"row\">\n    <div class=\"col-lg-12 col-md-6 mb-lg-0 mb-5\">\n      <h3 class=\"text-center font-weight-bold\">DỊCH VỤ CHO THUÊ NHẠC CỤ</h3>\n      <br>\n      <p class=\"font-weight-normal text-center\">\n        Bạn đang cần một nhạc cụ để biểu diễn show ca nhạc, show đám cưới, đệm nhạc trong trong events, hội nghị, trưng\n        bày triển lãm trong thời gian có hạn hay cần thuê đàn để học, luyện tập trong thời gian dài? Hãy liên hệ với\n        dịch vụ cho thuê piano cao cấp của Việt Thương Music để chọn được sản phẩm ưng ý.\n      </p>\n\n      <p class=\"font-weight-bold text-left\">\n        <br>\n        Nhạc cụ biểu diễn.\n      </p>\n      <p class=\"font-weight-normal text-left\">\n        <i class=\"fa fa-asterisk fa-1x black-text\"></i>\n        Đàn Piano, Organ, Guitar Thùng, Guitar Điện, Trống…\n\n      </p>\n      <img class=\"custom-img img-fluid\" src=\"https://pianovietthanh.vn/wp-content/uploads/2017/07/1-61.jpg\">\n      <p class=\"font-weight-bold text-left\">\n        <br>\n        Salem Piano tại đây dịch vụ thuê nhạc cụ rẻ nhất Đà Nẵng chúng tôi sẽ hổ trợ bạn khi gặp khó khăn\n      </p>\n      <img class=\"custom-img img-fluid\" src=\"https://vietthuong.vn/images/news/09_2017/pcho_thue_dan_piano_vietthuong_music_4.jpg\">\n      <h4 class=\"text-center font-weight-bold\">\n        <br> CÔNG TY CHÚNG TÔI RẤT MONG NHẬN ĐƯỢC SỰ QUAN TÂM VÀ HỢP TÁC CỦA QUÝ\n        KHÁCH HÀNG !\n        <br><br><br></h4>\n\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/user/trang-khac/cho-thue/cho-thue.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/user/trang-khac/cho-thue/cho-thue.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdHJhbmcta2hhYy9jaG8tdGh1ZS9jaG8tdGh1ZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/user/trang-khac/cho-thue/cho-thue.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/user/trang-khac/cho-thue/cho-thue.component.ts ***!
  \****************************************************************/
/*! exports provided: ChoThueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChoThueComponent", function() { return ChoThueComponent; });
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

var ChoThueComponent = /** @class */ (function () {
    function ChoThueComponent() {
    }
    ChoThueComponent.prototype.ngOnInit = function () {
    };
    ChoThueComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cho-thue',
            template: __webpack_require__(/*! ./cho-thue.component.html */ "./src/app/user/trang-khac/cho-thue/cho-thue.component.html"),
            styles: [__webpack_require__(/*! ./cho-thue.component.scss */ "./src/app/user/trang-khac/cho-thue/cho-thue.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ChoThueComponent);
    return ChoThueComponent;
}());



/***/ }),

/***/ "./src/app/user/trang-khac/event/event.component.html":
/*!************************************************************!*\
  !*** ./src/app/user/trang-khac/event/event.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <br> <br>\n\n  <div class=\"row\">\n    <div class=\"col-lg-12 col-md-6 mb-lg-0 mb-5\">\n      <h3 class=\"text-center font-weight-bold\">DỊCH VỤ TỔ CHỨC SỰ KIỆN</h3>\n      <br>\n      <p class=\"font-weight-normal text-left\">\n        Công ty SALEM PIANO với nhiều năm kinh nghiệm trong lĩnh vực Tổ Chức Sự Kiện cho thuê Nhạc cụ m Thanh - biểu\n        diễn\n      </p>\n\n      <br>\n\n      <p class=\"font-weight-bold text-left\">\n        1. Âm thanh:\n      </p>\n\n      <p class=\"font-weight-normal text-left\">\n        <i class=\"fa fa-asterisk fa-1x black-text\"></i>\n        Âm thanh hội thảo, hội chợ\n\n      </p>\n      <img class=\"custom-img img-fluid\" src=\"https://www.thongtincongnghe.com/sites/default/files/images/2013/10/9/img_3281.jpg\">\n\n      <p class=\"font-weight-normal text-left\">\n        <br>\n        <i class=\"fa fa-asterisk fa-1x black-text\"></i>\n        Âm thanh sân khấu ca nhạc trong nhà và hội trường\n      </p>\n      <img class=\"custom-img img-fluid\" src=\"http://thietkegianhangtrienlam.com/wp-content/uploads/2016/06/IMG_06191.jpg\">\n\n      <p class=\"font-weight-normal text-left\">\n        <br>\n        <i class=\"fa fa-asterisk fa-1x black-text\"></i>\n        Âm thanh sân khấu ca nhạc, liveshow ngoài trời\n      </p>\n      <img class=\"custom-img img-fluid\" src=\"https://amthanhanhsangviet.com/wp-content/uploads/2017/09/san-khau-anh-sang.jpg\">\n      <p class=\"font-weight-bold text-left\">\n        <br>\n        2.PG, dẫn chương trình, ca sĩ, nhạc công, band nhạc\n      </p>\n      <img class=\"custom-img img-fluid\" src=\"https://znews-photo.zadn.vn/w860/Uploaded/wyhktpu/2018_05_08/image009_1.jpg\">\n      <p class=\"font-weight-bold text-left\">\n        <br>\n        3.Nhạc cụ biểu diễn.\n      </p>\n      <p class=\"font-weight-normal text-left\">\n        <i class=\"fa fa-asterisk fa-1x black-text\"></i>\n        Đàn Piano, Organ, Guitar Thùng, Guitar Điện, Trống…\n\n      </p>\n      <img class=\"custom-img img-fluid\" src=\"https://pianovietthanh.vn/wp-content/uploads/2017/07/1-61.jpg\">\n    </div>\n    <h4 class=\"text-center font-weight-bold\">\n      <br> CÔNG TY CHÚNG TÔI RẤT MONG NHẬN ĐƯỢC SỰ QUAN TÂM VÀ HỢP TÁC CỦA QUÝ\n      KHÁCH HÀNG !\n      <br><br><br></h4>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/user/trang-khac/event/event.component.scss":
/*!************************************************************!*\
  !*** ./src/app/user/trang-khac/event/event.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdHJhbmcta2hhYy9ldmVudC9ldmVudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/user/trang-khac/event/event.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/user/trang-khac/event/event.component.ts ***!
  \**********************************************************/
/*! exports provided: EventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventComponent", function() { return EventComponent; });
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

var EventComponent = /** @class */ (function () {
    function EventComponent() {
    }
    EventComponent.prototype.ngOnInit = function () {
    };
    EventComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event',
            template: __webpack_require__(/*! ./event.component.html */ "./src/app/user/trang-khac/event/event.component.html"),
            styles: [__webpack_require__(/*! ./event.component.scss */ "./src/app/user/trang-khac/event/event.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EventComponent);
    return EventComponent;
}());



/***/ }),

/***/ "./src/app/user/trang-khac/gioi-thieu/gioi-thieu.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/user/trang-khac/gioi-thieu/gioi-thieu.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <br>\n    <!-- <div class=\"row\">\n        <div class=\"col  wow bounceInLeft\" data-wow-delay=\"0.1s\">\n            <img class=\"custom-img img-fluid\" src=\"http://mediaold.tiin.vn:8080/media_old_2016//medias12//2015/08/19/2bb501cc-21fb-4782-b178-e352a1b0accc.jpg\">\n        </div>\n        <div class=\"col wow  bounceInRight\" data-wow-delay=\"0.1s\">\n            <img class=\"custom-img img-fluid\" src=\"https://png.pngtree.com/png_detail/18/09/10/pngtree-black-piano-model-png-clipart_3110087.jpg\">\n        </div>\n    </div>\n    <br> -->\n    <div class=\"row\">\n        <div class=\"col-lg-12 col-md-6 mb-lg-0 mb-5\">\n            <h3 class=\"text-center font-weight-bold\">GIỚI THIỆU</h3>\n            <br>\n            <p class=\"font-weight-normal text-left\">\n                Salem Piano là công ty chuyên nhập khẩu đàn piano trực tiếp từ Nhật Bản. Chúng tôi có cửa hàng lớn nhất\n                tại Đà Nẵng. Các sản phẩm đàn piano và các nhạc cụ được kiểm định chất lượng tại Nhật trước khi vận\n                chuyển và được đóng gói cẩn thận giữ nguyên hiện trạng khi về đến kho. Tất cả những cây đàn piano đều\n                có giấy chứng nhận xuất xứ và kiểm định chất lượng do bên Nhật bản cung cấp. Do vậy, khách hàng mua đàn\n                piano ở Salem Piano hoàn toàn yên tâm về sản phẩm chất lượng và xuất xứ chính hãng.\n            </p>\n\n\n            <img class=\"custom-img img-fluid\" src=\"https://scontent.fdad1-1.fna.fbcdn.net/v/t1.0-9/47681675_974914839370064_3756747047009517568_o.jpg?_nc_cat=106&_nc_ht=scontent.fdad1-1.fna&oh=3ed0cfbdd611b44c8d78aad7eb120396&oe=5C8BF54C\">\n\n\n            <p class=\"font-weight-normal text-left\"><br>\n                Công ty bán nhiều hãng đàn piano nổi tiếng của Nhật từ cổ điển đến những phiên bản mới nhất. Nếu bạn là\n                nhạc công hay am hiểu về đàn piano, bạn có thể đến trực tiếp cửa hàng để trải nghiệm và lựa chọn loại\n                nhạc cụ phù hợp nhất. Nếu bạn là người mới bắt đầu, bạn băn khoăn sản phẩm có phù hợp với mình hay\n                không, hãy để nhạc công chuyên nghiệp của chúng tôi tư vấn cho bạn\n            </p>\n\n            <p class=\"font-weight-normal text-left\">\n                Bên cạnh bán những cây đàn piano chất lượng, chúng tôi có trung tâm Đào Tạo m Nhạc uy tín tại Đà Nẵng -\n                nơi ươm mầm và thách thức những tài năng âm nhạc. Chúng tôi dạy chơi nhạc cụ, luyện thanh, đào tạo thi\n                nhạc viện.\n            </p>\n            <img class=\"custom-img img-fluid\" src=\"https://scontent.fdad1-1.fna.fbcdn.net/v/t1.0-9/33902502_1998818950338629_3964288508226437120_o.jpg?_nc_cat=106&_nc_ht=scontent.fdad1-1.fna&oh=bad32205426d1ce26ff6a1ce304a2dda&oe=5CA12870\">\n\n            <p class=\"font-weight-normal text-left\">\n                <br> Với phương châm “chất lượng sản phẩm và dịch vụ song hành” chúng tôi cam kết đem lại chất lượng\n                dịch vụ tốt nhất cho khách hàng khi sử dụng sản phẩm của chúng tôi. Tất cả các cây đàn mua tại công ty\n                Salem Piano sẽ được bảo hành trọn đời.\n            </p>\n            <img class=\"custom-img img-fluid\" src=\"https://scontent.fdad1-1.fna.fbcdn.net/v/t1.0-9/17553863_1799245863629273_4933453990315646529_n.jpg?_nc_cat=105&_nc_ht=scontent.fdad1-1.fna&oh=a87eebbef4d531c04e2879d5e0736b4e&oe=5CD62315\">\n\n            <p class=\"font-weight-normal text-left\">\n                <br> Quý khách hãy ghé thăm cửa hàng chúng tôi để tận mắt thấy sản phẩm, trải nghiệm dịch vụ và được tư\n                vấn để mua được cây đàn piano ưng ý nhất.\n            </p>\n            <img class=\"custom-img img-fluid\" src=\"https://scontent.fdad2-1.fna.fbcdn.net/v/t1.0-9/40797690_922850404576508_6521566706903547904_o.jpg?_nc_cat=107&_nc_ht=scontent.fdad2-1.fna&oh=2f35f059b95d3497d975a74b53a78a07&oe=5CCBAA80\">\n\n\n            <p class=\"font-weight-bold text-left\">\n                <br> Cửa hàng Salem Piano cam kết đem đến cho khách hàng:\n            </p>\n            <p class=\"font-weight-normal text-left\">\n                <i class=\"fa fa-angle-double-right fa-1x blue-text\"></i>\n                Hàng hóa chính hãng, đảm bảo chất lượng\n            </p>\n\n            <p class=\"font-weight-normal text-left\">\n                <i class=\"fa fa-angle-double-right fa-1x blue-text\"></i>\n                Giá hàng hoá phải chăng\n            </p>\n\n            <p class=\"font-weight-normal text-left\">\n                <i class=\"fa fa-angle-double-right fa-1x blue-text\"></i>\n                Giao hàng nhanh chóng, thuận tiện\n            </p>\n\n            <p class=\"font-weight-normal text-left\">\n                <i class=\"fa fa-angle-double-right fa-1x blue-text\"></i>\n                Đội ngũ nhân viên giàu chuyên nghiệp, giàu kinh nghiệm sẽ tư vấn những giải pháp hợp lý, tối ưu, phù\n                hợp nhu cầu của khách\n                hàng\n            </p>\n\n            <p class=\"font-weight-normal text-left\">\n                <i class=\"fa fa-angle-double-right fa-1x blue-text\"></i>\n                Chế độ bảo trì, bảo hành tiện lợi\n            </p>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/user/trang-khac/gioi-thieu/gioi-thieu.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/user/trang-khac/gioi-thieu/gioi-thieu.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custum-body {\n  background-color: #2E2E2E;\n  height: 100px; }\n\n.abc {\n  height: 100px;\n  width: 100px;\n  background-color: rgba(62, 69, 81, 0.1); }\n\n@media (min-width: 1199.98px) {\n  .custom-img {\n    height: 550px;\n    width: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci90cmFuZy1raGFjL2dpb2ktdGhpZXUvQzpcXHhhbXBwXFxodGRvY3NcXGFwcF9waWFuby9zcmNcXGFwcFxcdXNlclxcdHJhbmcta2hhY1xcZ2lvaS10aGlldVxcZ2lvaS10aGlldS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUF5QjtFQUN6QixjQUFhLEVBQ2hCOztBQUVEO0VBQ0ksY0FBYTtFQUNiLGFBQVk7RUFDWix3Q0FBc0MsRUFDekM7O0FBR0Q7RUFFSTtJQUNFLGNBQWE7SUFDYixZQUFXLEVBQ1osRUFBQSIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdHJhbmcta2hhYy9naW9pLXRoaWV1L2dpb2ktdGhpZXUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdHVtLWJvZHl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkUyRTJFO1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxufVxyXG5cclxuLmFiY3tcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoNjIsIDY5LCA4MSwgMC4xKTtcclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMTk5Ljk4cHgpIHtcclxuXHJcbiAgICAuY3VzdG9tLWltZ3tcclxuICAgICAgaGVpZ2h0OiA1NTBweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/user/trang-khac/gioi-thieu/gioi-thieu.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/user/trang-khac/gioi-thieu/gioi-thieu.component.ts ***!
  \********************************************************************/
/*! exports provided: GioiThieuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GioiThieuComponent", function() { return GioiThieuComponent; });
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

var GioiThieuComponent = /** @class */ (function () {
    function GioiThieuComponent() {
    }
    GioiThieuComponent.prototype.ngOnInit = function () {
    };
    GioiThieuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gioi-thieu',
            template: __webpack_require__(/*! ./gioi-thieu.component.html */ "./src/app/user/trang-khac/gioi-thieu/gioi-thieu.component.html"),
            styles: [__webpack_require__(/*! ./gioi-thieu.component.scss */ "./src/app/user/trang-khac/gioi-thieu/gioi-thieu.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GioiThieuComponent);
    return GioiThieuComponent;
}());



/***/ }),

/***/ "./src/app/user/trang-khac/lean-piano/lean-piano.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/user/trang-khac/lean-piano/lean-piano.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <br>\n\n  <div class=\"row\">\n    <div class=\"col\">\n      <h3 class=\"text-center font-weight-bold\">KHÓA HỌC ĐÀN PIANO </h3>\n      <br>\n      <p class=\"font-weight-normal text-left\">\n        Khóa học piano chất lượng và hiệu quả nhất. Học đàn piano đang trở thành xu hướng khá phổ biến hiện nay, cùng với sự tăng\n        trưởng của nền kinh tế, con người đã dần quan tâm đến việc chăm lo đời sống tinh thần và học piano được xem là sự\n        khởi đầu tốt nhất để làm phong phú đời sống tinh thần. Và để đáp ứng nhu cầu học đàn piano của những người yêu nhạc,\n        nhiều khóa học piano được mở ra. Mặc dù số lượng các khóa học mở ra khá nhiều, song chất lượng và hiệu quả của từng\n        khóa học thì không ai có thể kiểm chứng được. Đây cũng chính là trở ngại lớn cho những người đã và đang tìm một khóa\n        học đàn piano. Nếu đang bị bế tắc ở đây thì bạn nên dành thời gian tìm hiểu thêm thông tin về các khóa học, tham\n        khảo các đánh giá của những người đã tham gia học và lựa chọn cho mình một khóa học phù hợp nhất, cả về thời gian\n        lẫn chi phí.\n      </p>\n      <img class=\"custom-img img-fluid\" src=\"https://scontent.fdad2-1.fna.fbcdn.net/v/t1.0-9/46384967_2125095051044351_8327041074035949568_o.jpg?_nc_cat=101&_nc_ht=scontent.fdad2-1.fna&oh=39d5843bbbb05151c9b168e4d20e44e2&oe=5C8DB5D3\">\n      <p class=\"font-weight-bold text-left\">\n        <br> Trường dạy nhạc Salem Piano – Địa điểm học đánh đàn PIANO tốt nhất\n      </p>\n      <p class=\"font-weight-normal text-left\">\n        Khóa học piano chất lượng và hiệu quả nhất. Học đàn piano đang trở thành xu hướng khá phổ biến hiện nay, cùng với Salem Piano\n        được xem là một gợi ý khá hay để bạn lựa chọn học piano. Các khóa học piano được mở liên tục, chương trình học bài\n        bản theo từng cấp độ và độ tuổi khác nhau. Giáo viên đứng lớp hầu hết đều là những nghệ sĩ piano nổi tiếng và có\n        bề dày kinh nghiệm trong giảng dạy. Không chỉ tập trung mang lại một hiệu quả học tập tốt nhất, Salem Piano còn đưa\n        ra một mức học phí ưu đãi, tạo điều kiện cho tất cả mọi người đều có thể tham gia các khóa học. Với những gì đem\n        lại, thì đây chính xác là một địa điểm học piano uy tín, chất lượng và hiệu quả.\n      </p>\n      <p class=\"font-weight-bold text-left\">\n        ĐỐI TƯỢNG HỌC\n      </p>\n      <p class=\"font-weight-normal text-left\">\n        <i class=\"fa fa-angle-double-right fa-1x blue-text\"></i>\n        Dành cho mọi đối tượng từ 3 tuổi trở lên, miễn là có niềm đam mê với bộ môn Piano\n      </p>\n\n      <p class=\"font-weight-normal text-left\">\n        <i class=\"fa fa-angle-double-right fa-1x blue-text\"></i>\n        Dành cho các bạn đang muốn nâng cao kỹ năng đánh đàn Piano\n      </p>\n\n      <p class=\"font-weight-normal text-left\">\n        <i class=\"fa fa-angle-double-right fa-1x blue-text\"></i>\n        Dành cho các bạn muốn học thêm 1 bộ môn nhạc cụ mới để trải nghiệm\n      </p>\n\n      <p class=\"font-weight-normal text-left\">\n        <i class=\"fa fa-angle-double-right fa-1x blue-text\"></i>\n        Học để luyện thi vào các trường Nhạc viện\n      </p>\n      <img class=\"custom-img img-fluid\" src=\"https://scontent.fdad2-1.fna.fbcdn.net/v/t1.0-9/44584979_2109690142584842_8126795267606315008_n.jpg?_nc_cat=107&_nc_ht=scontent.fdad2-1.fna&oh=6c8e102746a1d43a5d66f5d8a4147427&oe=5C8DB6CB\">\n      <p class=\"font-weight-bold text-left\">\n        <br>\n        CHẤT LƯỢNG ĐÀO TẠO TẠI SALEM PIANO\n      </p>\n      <p class=\"font-weight-normal text-left\">\n        <i class=\"fa fa-star fa-1x red-text\"></i>\n        Học viên được chọn khung giờ học cảm thấy thoải mái nhất cho bản thân\n      </p>\n\n      <p class=\"font-weight-normal text-left\">\n        <i class=\"fa fa-star fa-1x red-text\"></i>\n        Học theo yêu cầu: Học viên được quyền chọn lựa các khóa học như Đệm đàn Piano, Cơ bản, Cấp tốc, Các khóa học đàn Piano trẻ\n        em\n      </p>\n\n      <p class=\"font-weight-normal text-left\">\n        <i class=\"fa fa-star fa-1x red-text\"></i>\n        Đội ngũ giảng viên tận tâm, với hơn 2.000 giờ dạy tại Trung tâm\n      </p>\n\n      <p class=\"font-weight-normal text-left\">\n        <i class=\"fa fa-star fa-1x red-text\"></i>\n        Tối thiểu +4 năm kinh nghiệm sư phạm âm nhạc, nhạc viện kinh nghiệm +5 năm trình diễn Piano\n      </p>\n\n      <p class=\"font-weight-normal text-left\">\n        <i class=\"fa fa-star fa-1x red-text\"></i>\n        Chương trình học có lộ trình cụ thể, cam kết 100% lộ trình.\n      </p>\n\n      <p class=\"font-weight-normal text-left\">\n          <i class=\"fa fa-star fa-1x red-text\"></i>\n          SALEM PIANO là tự hào là đơn vị đã đào tạo trên +3.000 học viên\n        </p>\n\n        <p class=\"font-weight-normal text-left\">\n            <i class=\"fa fa-star fa-1x red-text\"></i>\n            Tư vấn và Đăng ký học đàn PIANO thông qua HOTLINE: 039 469 0998\n          </p>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/user/trang-khac/lean-piano/lean-piano.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/user/trang-khac/lean-piano/lean-piano.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdHJhbmcta2hhYy9sZWFuLXBpYW5vL2xlYW4tcGlhbm8uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/user/trang-khac/lean-piano/lean-piano.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/user/trang-khac/lean-piano/lean-piano.component.ts ***!
  \********************************************************************/
/*! exports provided: LeanPianoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeanPianoComponent", function() { return LeanPianoComponent; });
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

var LeanPianoComponent = /** @class */ (function () {
    function LeanPianoComponent() {
    }
    LeanPianoComponent.prototype.ngOnInit = function () {
    };
    LeanPianoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lean-piano',
            template: __webpack_require__(/*! ./lean-piano.component.html */ "./src/app/user/trang-khac/lean-piano/lean-piano.component.html"),
            styles: [__webpack_require__(/*! ./lean-piano.component.scss */ "./src/app/user/trang-khac/lean-piano/lean-piano.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LeanPianoComponent);
    return LeanPianoComponent;
}());



/***/ }),

/***/ "./src/app/user/trang-khac/lien-he/lien-he.component.html":
/*!****************************************************************!*\
  !*** ./src/app/user/trang-khac/lien-he/lien-he.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"container\">\n  <!-- Section: Contact v.1 -->\n  <section class=\"my-5\">\n\n    <!-- Section heading -->\n    <h2 class=\"h1-responsive font-weight-bold text-center my-5\">Liên hệ với chúng tôi</h2>\n    <!-- Section description -->\n    <p class=\"text-center w-responsive font-weight-normal mx-auto pb-5\">Salem Piano là một công ty hàng đầu tại Việt\n      Nam trong lĩnh vực phân phối nhạc cụ, thiết bị âm thanh ánh sáng chuyên\n      nghiệp và giáo dục đào tạo các bộ môn âm nhạc..</p>\n\n    <!-- Grid row -->\n    <div class=\"row\">\n\n      <!-- Grid column -->\n      <div class=\"col-lg-5 col-md-6 mb-lg-0 mb-5\">\n\n        <!-- Form with header -->\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <!-- Header -->\n            <div class=\"form-header blue accent-1\">\n              <h3 class=\"mt-2\">\n                <i class=\"fa fa-envelope\"></i> Viết cho chúng tôi</h3>\n            </div>\n            <!-- Body -->\n            <div class=\"md-form\">\n              <i class=\"fa fa-user prefix grey-text\"></i>\n              <input type=\"text\" id=\"form-name\" class=\"form-control\" placeholder=\"Tên bạn\">\n            </div>\n            <div class=\"md-form\">\n              <i class=\"fa fa-envelope prefix grey-text\"></i>\n              <input type=\"text\" id=\"form-email\" class=\"form-control\" placeholder=\"Địa chỉ email\">\n            </div>\n            <div class=\"md-form\">\n              <i class=\"fa fa-tag prefix grey-text\"></i>\n              <input type=\"text\" id=\"form-Subject\" class=\"form-control\" placeholder=\"Tiêu đề\">\n            </div>\n            <div class=\"md-form\">\n              <i class=\"fa fa-pencil prefix grey-text\"></i>\n              <textarea type=\"text\" id=\"form-text\" class=\"form-control md-textarea\" rows=\"3\" placeholder=\"Nội dung\"></textarea>\n            </div>\n            <div class=\"text-center\">\n              <button class=\"btn btn-light-blue\">Gởi</button>\n            </div>\n          </div>\n        </div>\n        <!-- Form with header -->\n\n      </div>\n      <!-- Grid column -->\n\n      <!-- Grid column -->\n      <div class=\"col-lg-7 col-md-6 mb-lg-0 mb-5\">\n\n        <!--Google map-->\n        <div id=\"map-container-section\" class=\"z-depth-1-half map-container-section mb-4\" style=\"height: 400px\">\n          <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6448.685085840588!2d108.24409578807325!3d16.04414336036018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314217643e6810cf%3A0xcb0036e66f5a93cd!2zSDE0LCAzMiBQaGFuIFThu6ksIE3hu7kgQW4sIE5nxakgSMOgbmggU8ahbiwgxJDDoCBO4bq1bmcgNTUwMDAwLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1546336295344\"\n            class=\"map\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>\n        </div>\n        <!-- Buttons-->\n        <div class=\"row text-center\">\n          <div class=\"col-md-4\">\n            <a class=\"btn-floating blue accent-1\">\n              <i class=\"fa fa-map-marker\"></i>\n            </a>\n            <p>H14/32 Đường Phan Tứ Tp.Đà Nẵng</p>\n          </div>\n          <div class=\"col-md-4\">\n            <a class=\"btn-floating blue accent-1\">\n              <i class=\"fa fa-phone\"></i>\n            </a>\n            <p>+ 039 469 0998</p>\n            <p class=\"mb-md-0\">Mon - Fri, 8:00-22:00</p>\n          </div>\n          <div class=\"col-md-4\">\n            <a class=\"btn-floating blue accent-1\">\n              <i class=\"fa fa-envelope\"></i>\n            </a>\n            <p>salem@gmail.com</p>\n          </div>\n        </div>\n\n      </div>\n      <!-- Grid column -->\n\n    </div>\n    <!-- Grid row -->\n\n  </section>\n  <!-- Section: Contact v.1 -->\n</div>"

/***/ }),

/***/ "./src/app/user/trang-khac/lien-he/lien-he.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/user/trang-khac/lien-he/lien-he.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".abc {\n  background-color: #ffca28; }\n\n@media (min-width: 1199.98px) {\n  .map {\n    width: 650px;\n    height: 400px; } }\n\n@media (max-width: 1199.98px) {\n  .map {\n    width: 330px;\n    height: 400px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci90cmFuZy1raGFjL2xpZW4taGUvQzpcXHhhbXBwXFxodGRvY3NcXGFwcF9waWFuby9zcmNcXGFwcFxcdXNlclxcdHJhbmcta2hhY1xcbGllbi1oZVxcbGllbi1oZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUEwQixFQUM3Qjs7QUFJRDtFQUNJO0lBQ0ksYUFBWTtJQUNaLGNBQWEsRUFDaEIsRUFBQTs7QUFHTDtFQUNJO0lBQ0csYUFBWTtJQUNaLGNBQWEsRUFDZixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdXNlci90cmFuZy1raGFjL2xpZW4taGUvbGllbi1oZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hYmN7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjYTI4IDtcclxufVxyXG5cclxuXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTE5OS45OHB4KSB7XHJcbiAgICAubWFwe1xyXG4gICAgICAgIHdpZHRoOiA2NTBweDtcclxuICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTE5OS45OHB4KSB7XHJcbiAgICAubWFwe1xyXG4gICAgICAgd2lkdGg6IDMzMHB4O1xyXG4gICAgICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/user/trang-khac/lien-he/lien-he.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/user/trang-khac/lien-he/lien-he.component.ts ***!
  \**************************************************************/
/*! exports provided: LienHeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LienHeComponent", function() { return LienHeComponent; });
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

var LienHeComponent = /** @class */ (function () {
    function LienHeComponent() {
    }
    LienHeComponent.prototype.ngOnInit = function () {
    };
    LienHeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lien-he',
            template: __webpack_require__(/*! ./lien-he.component.html */ "./src/app/user/trang-khac/lien-he/lien-he.component.html"),
            styles: [__webpack_require__(/*! ./lien-he.component.scss */ "./src/app/user/trang-khac/lien-he/lien-he.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LienHeComponent);
    return LienHeComponent;
}());



/***/ }),

/***/ "./src/app/user/trang-khac/san-pham-lien-quan/san-pham-lien-quan.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/user/trang-khac/san-pham-lien-quan/san-pham-lien-quan.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<hr>\n<h3 class=\"text-center text-black\" style=\"font-weight: 500\">SẢN PHẨM LIÊN QUAN</h3>\n<br>\n<div class=\"row\">\n    <div class=\"col-md-4\" *ngFor=\"let piano of listPiano\">\n        <div class=\"card my-1\">\n            <a title=\"piano\" routerLink=\"/user/trang-khac/chi-tiet-san-pham/{{piano.id}}\">\n                <img class=\"card-img-top img-fluid custom-image\" src=\"{{piano.hinhAnh}}\" alt=\"{{piano.tuKhoa}}\">\n            </a>\n            <div class=\"card-body custum-body\">\n                <div class=\"row\">\n\n                    <div class=\"col\">\n                        <a title=\"piano\" routerLink=\"/user/trang-khac/chi-tiet-san-pham/{{piano.id}}\">\n                            <p class=\"custom-title white-text\" style=\"font-size: 14px\">\n                                <i class=\"fa fa-angle-double-right fa-1x white-text\"></i> {{piano.tenSP}}</p>\n                            <p class=\"custom-title yellow-text\" style=\"font-size: 12px\"> Giá: {{piano.gia}} vnđ</p>\n                        </a>\n                    </div>\n                    <div class=\"col\">\n                        <a class=\"btn btn-sm btn-yellow \" routerLink=\"/user/trang-khac/chi-tiet-san-pham/{{piano.id}}\">\n                            <strong>Chi tiết</strong>\n                        </a>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<br>"

/***/ }),

/***/ "./src/app/user/trang-khac/san-pham-lien-quan/san-pham-lien-quan.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/user/trang-khac/san-pham-lien-quan/san-pham-lien-quan.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-card {\n  margin-bottom: 15px; }\n\n.custom-image {\n  height: 260px; }\n\n.custom-title {\n  text-align: center;\n  font-weight: 500;\n  color: #000;\n  font-size: 110%;\n  font-family: \"Helvetica\", Times, serif;\n  text-transform: uppercase; }\n\n.custom-price {\n  text-align: center;\n  font-weight: 500;\n  color: #ff4444;\n  font-size: 90%;\n  font-family: \"Helvetica\", Times, serif;\n  text-transform: uppercase; }\n\n.custom-description {\n  text-align: center;\n  font-weight: 300;\n  color: #37474F;\n  font-size: 80%;\n  font-family: \"Helvetica\", Times, serif; }\n\n.custum-body {\n  background-color: #2E2E2E;\n  height: 100px; }\n\n.custom-hinh {\n  height: 300px;\n  width: 100%; }\n\n@media (max-width: 1199.98px) {\n  .custom-slide {\n    height: 200px;\n    width: 100%; } }\n\n@media (max-width: 1199.98px) {\n  .custum-body {\n    background-color: #2E2E2E;\n    height: 120px; }\n  .description {\n    padding-left: 7px;\n    padding-right: 7px;\n    font-size: 100%;\n    font-weight: 300;\n    font-family: \"Helvetica\", Times, serif; }\n  .tieude {\n    padding-top: 20px;\n    font-weight: 300;\n    font-family: \"Helvetica\", Times, serif; } }\n\n@media (min-width: 1199.98px) {\n  .custum-body {\n    background-color: #2E2E2E;\n    height: 100px; } }\n\n@media (min-width: 1199.98px) {\n  .container-fluida {\n    position: relative;\n    text-align: center;\n    color: white; }\n  /* Bottom left text */\n  .bottom-left {\n    position: absolute;\n    bottom: 80px;\n    left: 380px;\n    height: 200px;\n    font-weight: 300;\n    font-family: \"Helvetica\", Times, serif;\n    width: 355px;\n    background-color: rgba(62, 69, 81, 0.7); }\n  .description {\n    padding-left: 7px;\n    padding-right: 7px; }\n  .tieude {\n    padding-top: 20px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci90cmFuZy1raGFjL3Nhbi1waGFtLWxpZW4tcXVhbi9DOlxceGFtcHBcXGh0ZG9jc1xcYXBwX3BpYW5vL3NyY1xcYXBwXFx1c2VyXFx0cmFuZy1raGFjXFxzYW4tcGhhbS1saWVuLXF1YW5cXHNhbi1waGFtLWxpZW4tcXVhbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFtQixFQUN0Qjs7QUFFRDtFQUNJLGNBQWEsRUFDaEI7O0FBRUQ7RUFDRyxtQkFBa0I7RUFDbEIsaUJBQWdCO0VBQ2hCLFlBQVk7RUFDWixnQkFBZTtFQUNmLHVDQUFzQztFQUN0QywwQkFBeUIsRUFDM0I7O0FBRUQ7RUFDRyxtQkFBa0I7RUFDbEIsaUJBQWdCO0VBQ2hCLGVBQWU7RUFDZixlQUFjO0VBQ2QsdUNBQXNDO0VBQ3RDLDBCQUF5QixFQUMzQjs7QUFFRDtFQUNHLG1CQUFrQjtFQUNsQixpQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGVBQWM7RUFDZCx1Q0FBc0MsRUFDeEM7O0FBR0Q7RUFDSSwwQkFBeUI7RUFDekIsY0FBYSxFQUNoQjs7QUFFRDtFQUNJLGNBQWE7RUFDYixZQUFXLEVBQ2Q7O0FBR0Q7RUFFSTtJQUNFLGNBQWE7SUFDYixZQUFXLEVBQ1osRUFBQTs7QUFJTDtFQUdJO0lBQ0ksMEJBQXlCO0lBQ3pCLGNBQWEsRUFFaEI7RUFHQztJQUNJLGtCQUFpQjtJQUNqQixtQkFBa0I7SUFDbEIsZ0JBQWU7SUFDZixpQkFBZ0I7SUFDaEIsdUNBQXNDLEVBQ3pDO0VBQ0Q7SUFDSSxrQkFBaUI7SUFDakIsaUJBQWdCO0lBQ2hCLHVDQUFzQyxFQUV6QyxFQUFBOztBQUdQO0VBR0k7SUFDSSwwQkFBeUI7SUFDekIsY0FBYSxFQUNoQixFQUFBOztBQUtMO0VBSUE7SUFDSSxtQkFBa0I7SUFDbEIsbUJBQWtCO0lBQ2xCLGFBQVksRUFDYjtFQUdILHNCQUFzQjtFQUN0QjtJQUNJLG1CQUFrQjtJQUNsQixhQUFZO0lBQ1osWUFBVztJQUNYLGNBQWE7SUFDYixpQkFBZ0I7SUFDaEIsdUNBQXNDO0lBQ3RDLGFBQVk7SUFDWix3Q0FBc0MsRUFDdkM7RUFDRDtJQUNJLGtCQUFpQjtJQUNqQixtQkFBa0IsRUFFckI7RUFDRDtJQUNJLGtCQUFpQixFQUNwQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdXNlci90cmFuZy1raGFjL3Nhbi1waGFtLWxpZW4tcXVhbi9zYW4tcGhhbS1saWVuLXF1YW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tLWNhcmR7IFxyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufSBcclxuXHJcbi5jdXN0b20taW1hZ2V7IFxyXG4gICAgaGVpZ2h0OiAyNjBweDtcclxufSBcclxuXHJcbi5jdXN0b20tdGl0bGV7XHJcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgY29sb3I6ICMwMDAgOyBcclxuICAgZm9udC1zaXplOiAxMTAlO1xyXG4gICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2FcIiwgVGltZXMsIHNlcmlmO1xyXG4gICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59IFxyXG5cclxuLmN1c3RvbS1wcmljZXtcclxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICBmb250LXdlaWdodDogNTAwO1xyXG4gICBjb2xvcjogI2ZmNDQ0NCA7IFxyXG4gICBmb250LXNpemU6IDkwJTtcclxuICAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhXCIsIFRpbWVzLCBzZXJpZjtcclxuICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufSBcclxuXHJcbi5jdXN0b20tZGVzY3JpcHRpb257XHJcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgY29sb3I6ICMzNzQ3NEYgOyBcclxuICAgZm9udC1zaXplOiA4MCU7XHJcbiAgIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYVwiLCBUaW1lcywgc2VyaWY7XHJcbn1cclxuXHJcblxyXG4uY3VzdHVtLWJvZHl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkUyRTJFO1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxufVxyXG5cclxuLmN1c3RvbS1oaW5oe1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDExOTkuOThweCkge1xyXG5cclxuICAgIC5jdXN0b20tc2xpZGV7XHJcbiAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMTk5Ljk4cHgpIHtcclxuXHJcbiAgXHJcbiAgICAuY3VzdHVtLWJvZHl7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJFMkUyRTtcclxuICAgICAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgICAgLmRlc2NyaXB0aW9ue1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiA3cHg7XHJcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA3cHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEwMCU7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhXCIsIFRpbWVzLCBzZXJpZjtcclxuICAgICAgfVxyXG4gICAgICAudGlldWRle1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhXCIsIFRpbWVzLCBzZXJpZjtcclxuXHJcbiAgICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDExOTkuOThweCkge1xyXG5cclxuICBcclxuICAgIC5jdXN0dW0tYm9keXtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkUyRTJFO1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4gIFxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTE5OS45OHB4KSB7XHJcblxyXG4gIFxyXG5cclxuLmNvbnRhaW5lci1mbHVpZGEge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgXHJcbi8qIEJvdHRvbSBsZWZ0IHRleHQgKi9cclxuLmJvdHRvbS1sZWZ0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogODBweDtcclxuICAgIGxlZnQ6IDM4MHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2FcIiwgVGltZXMsIHNlcmlmO1xyXG4gICAgd2lkdGg6IDM1NXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDYyLCA2OSwgODEsIDAuNyk7XHJcbiAgfVxyXG4gIC5kZXNjcmlwdGlvbntcclxuICAgICAgcGFkZGluZy1sZWZ0OiA3cHg7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDdweDtcclxuICAgIFxyXG4gIH1cclxuICAudGlldWRle1xyXG4gICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICB9XHJcbn1cclxuICAiXX0= */"

/***/ }),

/***/ "./src/app/user/trang-khac/san-pham-lien-quan/san-pham-lien-quan.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/user/trang-khac/san-pham-lien-quan/san-pham-lien-quan.component.ts ***!
  \************************************************************************************/
/*! exports provided: SanPhamLienQuanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SanPhamLienQuanComponent", function() { return SanPhamLienQuanComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_piano_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../api/piano.service */ "./src/app/api/piano.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SanPhamLienQuanComponent = /** @class */ (function () {
    function SanPhamLienQuanComponent(pianoService) {
        this.pianoService = pianoService;
    }
    SanPhamLienQuanComponent.prototype.ngOnInit = function () {
        this.getPiano();
    };
    //getPiano
    SanPhamLienQuanComponent.prototype.getPiano = function () {
        var _this = this;
        this.pianoService.excuteAllByWhat({}, '266')
            .subscribe(function (data) {
            _this.listPiano = data;
            // this.slides = this.chunk(this.listPiano, 3);
        });
    };
    SanPhamLienQuanComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-san-pham-lien-quan',
            template: __webpack_require__(/*! ./san-pham-lien-quan.component.html */ "./src/app/user/trang-khac/san-pham-lien-quan/san-pham-lien-quan.component.html"),
            styles: [__webpack_require__(/*! ./san-pham-lien-quan.component.scss */ "./src/app/user/trang-khac/san-pham-lien-quan/san-pham-lien-quan.component.scss")]
        }),
        __metadata("design:paramtypes", [_api_piano_service__WEBPACK_IMPORTED_MODULE_1__["PianoService"]])
    ], SanPhamLienQuanComponent);
    return SanPhamLienQuanComponent;
}());



/***/ }),

/***/ "./src/app/user/trang-khac/san-pham/san-pham.component.html":
/*!******************************************************************!*\
  !*** ./src/app/user/trang-khac/san-pham/san-pham.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluida\">\n  <img class=\"custom-slide img-fluid\" src=\"https://vietthuong.vn/image/catalog/slider-trangchu-chothue-1.jpg\" alt=\"piano\">\n  <div class=\"bottom-left\">\n    <h3 class=\"text-center tieude\">SALEM PIANO</h3>\n    <p class=\"text-left description\">Tại đây có rất nhiều sản phẩm được nhập khẩu từ nước ngoài với giá rẻ và chất\n      lượng nhất với đa dạng mẩu mã sẽ mang đến\n      cho quý khách sự lựa chọn tốt nhất Salem Piano rất hân hạnh được phục vụ quý khách</p>\n  </div>\n</div>\n<br>\n<br>\n<div class=\"container\">\n  <div class=\"row\">\n\n    <!-- <div class=\"col\">\n\n      <div class=\"btn-group\">\n\n      </div>\n      <h3>\n        <span class=\"badge badge-primary\">Giá sản phẩm</span>\n      </h3>\n      <select class=\"browser-default custom-select\" [(ngModel)]=\"selectedGia\" (ngModelChange)=\"onChange($event)\">\n        <option *ngFor=\"let price of gia\" [ngValue]=\"price\">\n          <p class=\"font-weight-bold\">{{price.name}}</p>\n        </option>\n      </select>\n\n    </div> -->\n\n    <div class=\"col\">\n\n      <div class=\"btn-group\">\n\n      </div>\n      <h3>\n        <span class=\"badge badge-primary\">Tìm Kiếm </span>\n      </h3>\n      <!-- <select class=\"browser-default custom-select\" [(ngModel)]=\"selectedThuongHieu\" (ngModelChange)=\"onChange1($event)\">\n        <option selected *ngFor=\"let hang of thuongHieu\" [ngValue]=\"hang\">\n          <p class=\"font-weight-bold\">{{hang.name}}</p>\n        </option> -->\n      <!-- </select> -->\n      <!-- <input type=\"text\" [(ngModel)]=\"tenSP\">-->\n      <div class=\"md-form input-group mb-3\">\n        <input class=\"form-control mr-sm-1\" [(ngModel)]=\"tenSP\" type=\"text\" placeholder=\"Mời bạn nhập tên sản phẩm cần tìm ví dụ : 'Casio' \"\n          aria-label=\"Recipient's username\">\n        <div class=\"input-group-append\">\n          <button class=\"btn btn-md btn-warning m-0 px-3\" type=\"button\" id=\"MaterialButton-addon2\" (click)=\"serchPiano()\">Tìm Sản Phẩm</button>\n        </div>\n      </div>\n      <!-- <div class=\"row\">\n        <div class=\"col-8\">\n          <input class=\"form-control mr-sm-1\" [(ngModel)]=\"tenSP\" type=\"text\" placeholder=\"Nhập tên sản phẩm cần tìm\"\n            aria-label=\"Search\">\n        </div>\n        <div class=\"col-4\">\n          <a  class=\"btn btn-warning\" (click)=\"test()\">\n            <strong>Tìm </strong>\n          </a>\n        </div>\n      </div> -->\n    </div>\n  </div>\n\n\n  <div *ngIf=\"chon==='tatca'\">\n    <br>\n    <h4 class=\"text-left text-black\" style=\"font-weight: 500\">TẤT CẢ PIANO</h4>\n    <hr>\n    <div>\n      <div class=\"row\">\n        <div class=\"col-md-4\" *ngFor=\"let piano of listPiano\">\n          <div class=\"card my-1\">\n            <a title=\"piano\" routerLink=\"/user/trang-khac/chi-tiet-san-pham/{{piano.id}}\">\n              <img class=\"card-img-top img-fluid custom-image\" src=\"{{piano.hinhAnh}}\" alt=\"{{piano.tuKhoa}}\">\n            </a>\n            <div class=\"card-body custum-body\">\n              <div class=\"row\">\n\n                <div class=\"col\">\n                  <a title=\"piano\" routerLink=\"/user/trang-khac/chi-tiet-san-pham/{{piano.id}}\">\n                    <p class=\"custom-title white-text\" style=\"font-size: 14px\">\n                      <i class=\"fa fa-angle-double-right fa-1x white-text\"></i> {{piano.tenSP}}</p>\n                    <p class=\"custom-title yellow-text\" style=\"font-size: 12px\"> Giá: {{piano.gia}} vnđ</p>\n                  </a>\n                </div>\n                <div class=\"col\">\n                  <a class=\"btn btn-sm btn-yellow \" routerLink=\"/user/trang-khac/chi-tiet-san-pham/{{piano.id}}\">\n                    <strong>Chi tiết</strong>\n                  </a>\n\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <br>\n    <div>\n      <div class=\"row\">\n        <div class=\"col-md-4\" *ngFor=\"let piano of listPiano83\">\n          <div class=\"card my-1\">\n            <a title=\"piano\" routerLink=\"/user/trang-khac/chi-tiet-san-pham/{{piano.id}}\">\n              <img class=\"card-img-top img-fluid custom-image\" src=\"{{piano.hinhAnh}}\" alt=\"{{piano.tuKhoa}}\">\n            </a>\n            <div class=\"card-body custum-body\">\n              <div class=\"row\">\n\n                <div class=\"col\">\n                  <a title=\"piano\" routerLink=\"/user/trang-khac/chi-tiet-san-pham/{{piano.id}}\">\n                    <p class=\"custom-title white-text\" style=\"font-size: 14px\">\n                      <i class=\"fa fa-angle-double-right fa-1x white-text\"></i> {{piano.tenSP}}</p>\n                    <p class=\"custom-title yellow-text\" style=\"font-size: 12px\"> Giá: {{piano.gia}} vnđ</p>\n                  </a>\n                </div>\n                <div class=\"col\">\n                  <a class=\"btn btn-sm btn-yellow \" routerLink=\"/user/trang-khac/chi-tiet-san-pham/{{piano.id}}\">\n                    <strong>Chi tiết</strong>\n                  </a>\n\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <br>\n\n    <!-- pagination -->\n    <nav aria-label=\"Page navigation example\">\n      <ul class=\"pagination pagination-circle pg-blue justify-content-center\">\n\n        <li class=\"page-item disabled\">\n          <a class=\"page-link\" aria-label=\"Previous\" mdbWavesEffect>\n            <span aria-hidden=\"true\">&laquo;</span>\n            <span class=\"sr-only\">Previous</span>\n          </a>\n        </li>\n        <li class=\"page-item active\">\n          <a class=\"page-link\" mdbWavesEffect (click)=\"onBtnSanPham()\">1</a>\n        </li>\n        <li class=\"page-item\">\n          <a class=\"page-link\" mdbWavesEffect (click)=\"trang2()\">2</a>\n        </li>\n\n        <li class=\"page-item\">\n          <a class=\"page-link\" aria-label=\"Next\" mdbWavesEffect>\n            <span aria-hidden=\"true\">&raquo;</span>\n            <span class=\"sr-only\">Next</span>\n          </a>\n        </li>\n\n      </ul>\n    </nav>\n  </div>\n\n\n\n\n  <div *ngIf=\"chon==='trang2'\">\n    <br>\n    <h4 class=\"text-left text-black\" style=\"font-weight: 500\">TẤT CẢ PIANO</h4>\n    <hr>\n    <div>\n      <div class=\"row\">\n        <div class=\"col-md-4\" *ngFor=\"let piano of listPiano03\">\n          <div class=\"card my-1\">\n            <a title=\"piano\" routerLink=\"/user/trang-khac/chi-tiet-san-pham/{{piano.id}}\">\n              <img class=\"card-img-top img-fluid custom-image\" src=\"{{piano.hinhAnh}}\" alt=\"{{piano.tuKhoa}}\">\n            </a>\n            <div class=\"card-body custum-body\">\n              <div class=\"row\">\n\n                <div class=\"col\">\n                  <a title=\"piano\" routerLink=\"/user/trang-khac/chi-tiet-san-pham/{{piano.id}}\">\n                    <p class=\"custom-title white-text\" style=\"font-size: 14px\">\n                      <i class=\"fa fa-angle-double-right fa-1x white-text\"></i> {{piano.tenSP}}</p>\n                    <p class=\"custom-title yellow-text\" style=\"font-size: 12px\"> Giá: {{piano.gia}} vnđ</p>\n                  </a>\n                </div>\n                <div class=\"col\">\n                  <a class=\"btn btn-sm btn-yellow \" routerLink=\"/user/trang-khac/chi-tiet-san-pham/{{piano.id}}\">\n                    <strong>Chi tiết</strong>\n                  </a>\n\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <br>\n    <div>\n      <div class=\"row\">\n        <div class=\"col-md-4\" *ngFor=\"let piano of listPiano33\">\n          <div class=\"card my-1\">\n            <a title=\"piano\" routerLink=\"/user/trang-khac/chi-tiet-san-pham/{{piano.id}}\">\n              <img class=\"card-img-top img-fluid custom-image\" src=\"{{piano.hinhAnh}}\" alt=\"{{piano.tuKhoa}}\">\n            </a>\n            <div class=\"card-body custum-body\">\n              <div class=\"row\">\n\n                <div class=\"col\">\n                  <a title=\"piano\" routerLink=\"/user/trang-khac/chi-tiet-san-pham/{{piano.id}}\">\n                    <p class=\"custom-title white-text\" style=\"font-size: 14px\">\n                      <i class=\"fa fa-angle-double-right fa-1x white-text\"></i> {{piano.tenSP}}</p>\n                    <p class=\"custom-title yellow-text\" style=\"font-size: 12px\"> Giá: {{piano.gia}} vnđ</p>\n                  </a>\n                </div>\n                <div class=\"col\">\n                  <a class=\"btn btn-sm btn-yellow \" routerLink=\"/user/trang-khac/chi-tiet-san-pham/{{piano.id}}\">\n                    <strong>Chi tiết</strong>\n                  </a>\n\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <br>\n\n    <!-- pagination -->\n    <nav aria-label=\"Page navigation example\">\n      <ul class=\"pagination pagination-circle pg-blue justify-content-center\">\n\n        <li class=\"page-item disabled\">\n          <a class=\"page-link\" aria-label=\"Previous\" mdbWavesEffect>\n            <span aria-hidden=\"true\">&laquo;</span>\n            <span class=\"sr-only\">Previous</span>\n          </a>\n        </li>\n        <li class=\"page-item \">\n          <a class=\"page-link\" mdbWavesEffect (click)=\"onBtnSanPham()\">1</a>\n        </li>\n        <li class=\"page-item active\">\n          <a class=\"page-link\" mdbWavesEffect (click)=\"trang2()\">2</a>\n        </li>\n\n        <li class=\"page-item\">\n          <a class=\"page-link\" aria-label=\"Next\" mdbWavesEffect>\n            <span aria-hidden=\"true\">&raquo;</span>\n            <span class=\"sr-only\">Next</span>\n          </a>\n        </li>\n\n      </ul>\n    </nav>\n  </div>\n\n\n\n\n\n\n\n  <div *ngIf=\"chon===''\">\n    <!-- Section: Blog v.3 -->\n    <section class=\"my-5\">\n\n      <span class=\"badge badge-success\">{{price}}</span>\n      <!-- Section heading -->\n      <h2 class=\"h2-responsive font-weight-bold text-center my-5\">Kết quả</h2>\n\n      <div *ngFor=\"let piano of data\">\n        <!-- Grid row -->\n        <p class=\"font-weight-normal\"></p>\n\n        <hr>\n        <br>\n        <div class=\"row\">\n\n          <!-- Grid column -->\n          <div class=\"col-lg-5 col-xl-4\">\n\n            <!-- Featured image -->\n            <div class=\"view overlay rounded z-depth-1-half mb-lg-0 mb-4\">\n              <img class=\"img-fluid\" src=\"{{piano.hinhAnh}}\" alt=\"{{piano.tuKhoa}}\">\n              <a routerLink=\"/user/trang-khac/chi-tiet-san-pham/{{piano.id}}\">\n                <div class=\"mask rgba-white-slight\"></div>\n              </a>\n            </div>\n\n          </div>\n          <!-- Grid column -->\n\n          <!-- Grid column -->\n          <div class=\"col-lg-7 col-xl-8\">\n\n            <!-- Post title -->\n            <h3 class=\"font-weight-bold mb-3\">\n              <strong>{{piano.tenSP}}</strong>\n            </h3>\n            <!-- Excerpt -->\n            <p class=\"font-weight-bold red-text\">Giá : {{piano.gia}} vnđ</p>\n            <div class=\"color text-left\">\n              <i class=\"fa fa-star\"> </i>\n              <i class=\"fa fa-star\"> </i>\n              <i class=\"fa fa-star\"> </i>\n              <i class=\"fa fa-star\"> </i>\n              <i class=\"fa fa-star\"> </i>\n            </div>\n            <p class=\"font-weight-normal\">{{piano.tomTat}}.</p>\n            <!-- Post data -->\n\n            <!-- Read more button -->\n            <a class=\"btn btn-primary btn-md \" routerLink=\"/user/trang-khac/chi-tiet-san-pham/{{piano.id}}\">Chi tiết</a>\n\n          </div>\n          <!-- Grid column -->\n          <hr class=\"my-5\">\n\n        </div>\n        <!-- Grid row -->\n\n      </div>\n      <hr class=\"my-5\">\n\n      <!-- pagination -->\n      <!-- <nav aria-label=\"Page navigation example\">\n        <ul class=\"pagination pagination-circle pg-blue justify-content-center\">\n\n          <li class=\"page-item disabled\">\n            <a class=\"page-link\" aria-label=\"Previous\" mdbWavesEffect>\n              <span aria-hidden=\"true\">&laquo;</span>\n              <span class=\"sr-only\">Previous</span>\n            </a>\n          </li>\n          <li class=\"page-item active\">\n            <a class=\"page-link\" mdbWavesEffect>1</a>\n          </li>\n          <li class=\"page-item\">\n            <a class=\"page-link\" mdbWavesEffect>2</a>\n          </li>\n          <li class=\"page-item\">\n            <a class=\"page-link\" mdbWavesEffect>3</a>\n          </li>\n          <li class=\"page-item\">\n            <a class=\"page-link\" mdbWavesEffect>4</a>\n          </li>\n\n          <li class=\"page-item\">\n            <a class=\"page-link\" aria-label=\"Next\" mdbWavesEffect>\n              <span aria-hidden=\"true\">&raquo;</span>\n              <span class=\"sr-only\">Next</span>\n            </a>\n          </li>\n\n        </ul>\n      </nav> -->\n\n    </section>\n\n    <!-- Section: Blog v.3 -->\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/user/trang-khac/san-pham/san-pham.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/user/trang-khac/san-pham/san-pham.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-card {\n  margin-bottom: 15px; }\n\n.custom-image {\n  height: 260px; }\n\n.custom-title {\n  text-align: center;\n  font-weight: 500;\n  color: #000;\n  font-size: 110%;\n  font-family: \"Helvetica\", Times, serif;\n  text-transform: uppercase; }\n\n.custom-price {\n  text-align: center;\n  font-weight: 500;\n  color: #ff4444;\n  font-size: 90%;\n  font-family: \"Helvetica\", Times, serif;\n  text-transform: uppercase; }\n\n.custom-description {\n  text-align: center;\n  font-weight: 300;\n  color: #37474F;\n  font-size: 80%;\n  font-family: \"Helvetica\", Times, serif; }\n\n.custum-body {\n  background-color: #2E2E2E;\n  height: 100px; }\n\n.custom-hinh {\n  height: 300px;\n  width: 100%; }\n\n@media (max-width: 1199.98px) {\n  .custom-slide {\n    height: 200px;\n    width: 100%; } }\n\n@media (max-width: 1199.98px) {\n  .custum-body {\n    background-color: #2E2E2E;\n    height: 120px; }\n  .description {\n    padding-left: 7px;\n    padding-right: 7px;\n    font-size: 100%;\n    font-weight: 300;\n    font-family: \"Helvetica\", Times, serif; }\n  .tieude {\n    padding-top: 20px;\n    font-weight: 300;\n    font-family: \"Helvetica\", Times, serif; } }\n\n@media (min-width: 1199.98px) {\n  .custum-body {\n    background-color: #2E2E2E;\n    height: 100px; } }\n\n@media (min-width: 1199.98px) {\n  .container-fluida {\n    position: relative;\n    text-align: center;\n    color: white; }\n  /* Bottom left text */\n  .bottom-left {\n    position: absolute;\n    bottom: 80px;\n    left: 380px;\n    height: 200px;\n    font-weight: 300;\n    font-family: \"Helvetica\", Times, serif;\n    width: 355px;\n    background-color: rgba(62, 69, 81, 0.7); }\n  .description {\n    padding-left: 7px;\n    padding-right: 7px; }\n  .tieude {\n    padding-top: 20px; } }\n\n.color {\n  color: #ffca28; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci90cmFuZy1raGFjL3Nhbi1waGFtL0M6XFx4YW1wcFxcaHRkb2NzXFxhcHBfcGlhbm8vc3JjXFxhcHBcXHVzZXJcXHRyYW5nLWtoYWNcXHNhbi1waGFtXFxzYW4tcGhhbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFtQixFQUN0Qjs7QUFFRDtFQUNJLGNBQWEsRUFDaEI7O0FBRUQ7RUFDRyxtQkFBa0I7RUFDbEIsaUJBQWdCO0VBQ2hCLFlBQVk7RUFDWixnQkFBZTtFQUNmLHVDQUFzQztFQUN0QywwQkFBeUIsRUFDM0I7O0FBRUQ7RUFDRyxtQkFBa0I7RUFDbEIsaUJBQWdCO0VBQ2hCLGVBQWU7RUFDZixlQUFjO0VBQ2QsdUNBQXNDO0VBQ3RDLDBCQUF5QixFQUMzQjs7QUFFRDtFQUNHLG1CQUFrQjtFQUNsQixpQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGVBQWM7RUFDZCx1Q0FBc0MsRUFDeEM7O0FBR0Q7RUFDSSwwQkFBeUI7RUFDekIsY0FBYSxFQUNoQjs7QUFFRDtFQUNJLGNBQWE7RUFDYixZQUFXLEVBQ2Q7O0FBR0Q7RUFFSTtJQUNFLGNBQWE7SUFDYixZQUFXLEVBQ1osRUFBQTs7QUFJTDtFQUdJO0lBQ0ksMEJBQXlCO0lBQ3pCLGNBQWEsRUFFaEI7RUFHQztJQUNJLGtCQUFpQjtJQUNqQixtQkFBa0I7SUFDbEIsZ0JBQWU7SUFDZixpQkFBZ0I7SUFDaEIsdUNBQXNDLEVBQ3pDO0VBQ0Q7SUFDSSxrQkFBaUI7SUFDakIsaUJBQWdCO0lBQ2hCLHVDQUFzQyxFQUV6QyxFQUFBOztBQUdQO0VBR0k7SUFDSSwwQkFBeUI7SUFDekIsY0FBYSxFQUNoQixFQUFBOztBQUtMO0VBSUE7SUFDSSxtQkFBa0I7SUFDbEIsbUJBQWtCO0lBQ2xCLGFBQVksRUFDYjtFQUdILHNCQUFzQjtFQUN0QjtJQUNJLG1CQUFrQjtJQUNsQixhQUFZO0lBQ1osWUFBVztJQUNYLGNBQWE7SUFDYixpQkFBZ0I7SUFDaEIsdUNBQXNDO0lBQ3RDLGFBQVk7SUFDWix3Q0FBc0MsRUFDdkM7RUFDRDtJQUNJLGtCQUFpQjtJQUNqQixtQkFBa0IsRUFFckI7RUFDRDtJQUNJLGtCQUFpQixFQUNwQixFQUFBOztBQUtIO0VBQ0ksZUFBZSxFQUNqQiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdHJhbmcta2hhYy9zYW4tcGhhbS9zYW4tcGhhbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b20tY2FyZHsgXHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59IFxyXG5cclxuLmN1c3RvbS1pbWFnZXsgXHJcbiAgICBoZWlnaHQ6IDI2MHB4O1xyXG59IFxyXG5cclxuLmN1c3RvbS10aXRsZXtcclxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICBmb250LXdlaWdodDogNTAwO1xyXG4gICBjb2xvcjogIzAwMCA7IFxyXG4gICBmb250LXNpemU6IDExMCU7XHJcbiAgIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYVwiLCBUaW1lcywgc2VyaWY7XHJcbiAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn0gXHJcblxyXG4uY3VzdG9tLXByaWNle1xyXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgIGNvbG9yOiAjZmY0NDQ0IDsgXHJcbiAgIGZvbnQtc2l6ZTogOTAlO1xyXG4gICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2FcIiwgVGltZXMsIHNlcmlmO1xyXG4gICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59IFxyXG5cclxuLmN1c3RvbS1kZXNjcmlwdGlvbntcclxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICBmb250LXdlaWdodDogMzAwO1xyXG4gICBjb2xvcjogIzM3NDc0RiA7IFxyXG4gICBmb250LXNpemU6IDgwJTtcclxuICAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhXCIsIFRpbWVzLCBzZXJpZjtcclxufVxyXG5cclxuXHJcbi5jdXN0dW0tYm9keXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyRTJFMkU7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG59XHJcblxyXG4uY3VzdG9tLWhpbmh7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTE5OS45OHB4KSB7XHJcblxyXG4gICAgLmN1c3RvbS1zbGlkZXtcclxuICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBcclxuQG1lZGlhIChtYXgtd2lkdGg6IDExOTkuOThweCkge1xyXG5cclxuICBcclxuICAgIC5jdXN0dW0tYm9keXtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkUyRTJFO1xyXG4gICAgICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgICAuZGVzY3JpcHRpb257XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDdweDtcclxuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDdweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTAwJTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2FcIiwgVGltZXMsIHNlcmlmO1xyXG4gICAgICB9XHJcbiAgICAgIC50aWV1ZGV7XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2FcIiwgVGltZXMsIHNlcmlmO1xyXG5cclxuICAgICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTE5OS45OHB4KSB7XHJcblxyXG4gIFxyXG4gICAgLmN1c3R1bS1ib2R5e1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyRTJFMkU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiAgXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMTk5Ljk4cHgpIHtcclxuXHJcbiAgXHJcblxyXG4uY29udGFpbmVyLWZsdWlkYSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICBcclxuLyogQm90dG9tIGxlZnQgdGV4dCAqL1xyXG4uYm90dG9tLWxlZnQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiA4MHB4O1xyXG4gICAgbGVmdDogMzgwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYVwiLCBUaW1lcywgc2VyaWY7XHJcbiAgICB3aWR0aDogMzU1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoNjIsIDY5LCA4MSwgMC43KTtcclxuICB9XHJcbiAgLmRlc2NyaXB0aW9ue1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDdweDtcclxuICAgICAgcGFkZGluZy1yaWdodDogN3B4O1xyXG4gICAgXHJcbiAgfVxyXG4gIC50aWV1ZGV7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIH1cclxufVxyXG4gIFxyXG5cclxuXHJcbi5jb2xvcntcclxuICAgIGNvbG9yOiAgI2ZmY2EyODtcclxuIH1cclxuICBcclxuICJdfQ== */"

/***/ }),

/***/ "./src/app/user/trang-khac/san-pham/san-pham.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/user/trang-khac/san-pham/san-pham.component.ts ***!
  \****************************************************************/
/*! exports provided: SanPhamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SanPhamComponent", function() { return SanPhamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_piano_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../api/piano.service */ "./src/app/api/piano.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SanPhamComponent = /** @class */ (function () {
    // thuongHieu = [
    //   { 'name': 'Kawai', id: 1 },
    //   { 'name': 'Tất cả sản phẩm', id: 5 },
    //   { 'name': 'Casio', id: 2 },
    //   { 'name': 'Roland', id: 3 },
    //   { 'name': 'Essex', id: 4 }
    // ];
    // selectedThuongHieu = this.thuongHieu[1]
    function SanPhamComponent(pianoService) {
        this.pianoService = pianoService;
        this.sanPham = true;
        this.chon = 'tatca';
        this.gia = [
            { 'name': 'Từ 10 - 20 triệu', id: 1 },
            { 'name': 'Tất cả sản phẩm', id: 5 },
            { 'name': 'Dưới 50 triệu', id: 2 },
            { 'name': 'Dưới 100 triệu', id: 3 },
            { 'name': 'Dưới 300 triệu', id: 4 },
        ];
        this.selectedGia = this.gia[1];
    }
    SanPhamComponent.prototype.ngOnInit = function () {
        this.getPiano();
        this.getPiano83();
        this.getPiano03();
        this.getPiano33();
    };
    SanPhamComponent.prototype.serchPiano = function () {
        var _this = this;
        // console.log('phond',this.tenSP);
        if (this.tenSP == '') {
            this.pianoService.showError('Mời bạn nhập tên sản phẩm');
        }
        else {
            this.pianoService.excuteAllByWhat({ tenSP: this.tenSP }, '38')
                .subscribe(function (data) {
                if (data !== null) {
                    _this.data = data;
                    _this.thayDoi();
                    _this.pianoService.showSuccess('Đã tìm thấy kết quả');
                }
                else {
                    _this.pianoService.showError('Không tìm thấy kết quả');
                }
            });
        }
    };
    SanPhamComponent.prototype.onBtnSanPham = function () {
        this.chon = 'tatca';
    };
    SanPhamComponent.prototype.trang2 = function () {
        this.chon = 'trang2';
    };
    // ham chon option gia piano
    SanPhamComponent.prototype.onChange = function (gia) {
        switch (gia.id) {
            case 1:
                this.getPiano20();
                break;
            case 2:
                this.getPiano50();
                break;
            case 3:
                this.getPiano100();
                break;
            case 4:
                this.getPiano300();
                break;
            case 5:
                this.onBtnSanPham();
                break;
        }
    };
    // ham chon option gia piano
    SanPhamComponent.prototype.onChange1 = function (thuongHieu) {
        switch (thuongHieu.id) {
            case 1:
                this.getPianoByK();
                break;
            case 2:
                this.getPianoByC();
                break;
            case 3:
                this.getPianoByR();
                break;
            case 4:
                this.getPianoByE();
                break;
            case 5:
                this.onBtnSanPham();
                break;
        }
    };
    //getPiano
    SanPhamComponent.prototype.getPiano = function () {
        var _this = this;
        this.pianoService.excuteAllByWhat({}, '29')
            .subscribe(function (data) {
            _this.listPiano = data;
        });
    };
    //getPiano tu vi tri 0 lay 3
    SanPhamComponent.prototype.getPiano03 = function () {
        var _this = this;
        this.pianoService.excuteAllByWhat({}, '2999')
            .subscribe(function (data) {
            _this.listPiano03 = data;
        });
    };
    //getPiano tu vi tri 3 lay 3
    SanPhamComponent.prototype.getPiano33 = function () {
        var _this = this;
        this.pianoService.excuteAllByWhat({}, '29999')
            .subscribe(function (data) {
            _this.listPiano33 = data;
        });
    };
    //getPiano tu vi tri 8 lay 3
    SanPhamComponent.prototype.getPiano83 = function () {
        var _this = this;
        this.pianoService.excuteAllByWhat({}, '299')
            .subscribe(function (data) {
            _this.listPiano83 = data;
        });
    };
    //get piano gia 10 - 20 trieu
    SanPhamComponent.prototype.getPiano20 = function () {
        var _this = this;
        this.pianoService.excuteAllByWhat({}, '30')
            .subscribe(function (data) {
            if (data != null) {
                _this.data = data;
                _this.thayDoi();
                _this.price = "Sản phẩm từ 10 - 20 triệu";
            }
        });
    };
    //get piano gia duoi 50 trieu
    SanPhamComponent.prototype.getPiano50 = function () {
        var _this = this;
        this.pianoService.excuteAllByWhat({}, '31')
            .subscribe(function (data) {
            if (data != null) {
                _this.data = data;
                _this.thayDoi();
                _this.price = "Sản phẩm từ 20 - 50 triệu";
            }
        });
    };
    //get piano gia duoi 100 trieu
    SanPhamComponent.prototype.getPiano100 = function () {
        var _this = this;
        this.pianoService.excuteAllByWhat({}, '32')
            .subscribe(function (data) {
            if (data != null) {
                _this.data = data;
                _this.thayDoi();
                _this.price = "Sản phẩm từ 50 - 100 triệu";
            }
        });
    };
    //get piano gia duoi 300 trieu
    SanPhamComponent.prototype.getPiano300 = function () {
        var _this = this;
        this.pianoService.excuteAllByWhat({}, '33')
            .subscribe(function (data) {
            if (data != null) {
                _this.data = data;
                _this.thayDoi();
                _this.price = "Sản phẩm từ 100 - 300 triệu";
            }
        });
    };
    //get piano tenSP 'k'
    SanPhamComponent.prototype.getPianoByK = function () {
        var _this = this;
        this.pianoService.excuteAllByWhat({}, '34')
            .subscribe(function (data) {
            if (data != null) {
                _this.data = data;
                _this.thayDoi();
                _this.price = "Hãng : KAWAI";
            }
            else {
                _this.pianoService.showError("Sản phẩm không có");
            }
        });
    };
    //get piano tenSP 'k'
    SanPhamComponent.prototype.getPianoByC = function () {
        var _this = this;
        this.pianoService.excuteAllByWhat({}, '35')
            .subscribe(function (data) {
            if (data != null) {
                _this.data = data;
                _this.thayDoi();
                _this.price = "Hãng : Casio";
            }
            else {
                _this.pianoService.showError("Sản phẩm không có");
            }
        });
    };
    //get piano tenSP 'k'
    SanPhamComponent.prototype.getPianoByR = function () {
        var _this = this;
        this.pianoService.excuteAllByWhat({}, '36')
            .subscribe(function (data) {
            if (data != null) {
                _this.data = data;
                _this.thayDoi();
                _this.price = "Hãng : ROLAND";
            }
            else {
                _this.pianoService.showError("Sản phẩm không có");
            }
        });
    };
    //get piano tenSP 'k'
    SanPhamComponent.prototype.getPianoByE = function () {
        var _this = this;
        this.pianoService.excuteAllByWhat({}, '37')
            .subscribe(function (data) {
            if (data != null) {
                _this.data = data;
                _this.thayDoi();
                _this.price = "Hãng : ESSEX";
            }
            else {
                _this.pianoService.showError("Sản phẩm không có");
            }
        });
    };
    // san pham
    SanPhamComponent.prototype.thayDoi = function () {
        this.chon = '';
    };
    SanPhamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-san-pham',
            template: __webpack_require__(/*! ./san-pham.component.html */ "./src/app/user/trang-khac/san-pham/san-pham.component.html"),
            styles: [__webpack_require__(/*! ./san-pham.component.scss */ "./src/app/user/trang-khac/san-pham/san-pham.component.scss")]
        }),
        __metadata("design:paramtypes", [_api_piano_service__WEBPACK_IMPORTED_MODULE_1__["PianoService"]])
    ], SanPhamComponent);
    return SanPhamComponent;
}());



/***/ }),

/***/ "./src/app/user/trang-khac/sua-chua-dan/sua-chua-dan.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/user/trang-khac/sua-chua-dan/sua-chua-dan.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <br> <br>\n\n  <div class=\"row\">\n    <div class=\"col-lg-12 col-md-6 mb-lg-0 mb-5\">\n      <h3 class=\"text-center font-weight-bold\">DỊCH VỤ SỬA CHỬA ĐÀN</h3>\n      <br>\n      <p class=\"font-weight-normal text-left\">\n        Với các loại đàn thì dây đàn thường xuống cấp theo thời gian, đàn piano cũng vậy, các thiết bị khác của nó có\n        thể xảy ra lỗi, hỏng hóc do nhiều yếu tố khác nhau, có thể là khách quan hoặc chủ quan, có thể do quá trình sử\n        dụng cũng có thể do lỗi kỹ thuật của đàn. Vì thế chúng tôi cung cấp dịch vụ sửa chữa đàn piano tại nhà cho\n        khách hàng\n      </p>\n      <h4 class=\"font-weight-bold text-left\">\n        Các dịch vụ sửa chữa được Salem Piano cung cấp\n      </h4>\n      <br>\n\n      <p class=\"font-weight-bold text-left\">\n        1. Thay dây đàn piano:\n      </p>\n      <p class=\"font-weight-normal text-left\">\n        Đàn Piano gồm 232 sợi dây dùng cho cho 88 phím đàn, nếu bạn sử dụng nhiều hoặc bảo quản đàn không tốt sẽ khiến\n        cho dây đàn có thể sẽ bị rỉ, đứt hay bong tróc vỏ bọc đồng. Như thế âm thanh của đàn phát ra không hay và ảnh\n        hưởng trực tiếp đến tai nghe của người sử dụng. Với những lỗi này, thì bạn nên thay dây vì lên dây cũng sẽ\n        không hiệu quả. Chúng tôi cam kết các loại dây piano được thay vào đều nhập khẩu từ các hãng dây đàn piano của\n        Nhật Bản, đảm bảo chất lượng cũng như âm thanh cho đàn.\n      </p>\n\n\n      <img class=\"custom-img img-fluid\" src=\"https://pianohanoi.com/uploads/images/bai-tuan/dich-vu-bao-duong-piano-uy-tin-tai-ha-noi.jpg\">\n\n      <p class=\"font-weight-bold text-left\">\n        <br>\n        2. Vệ sinh bàn phím:\n      </p>\n      <p class=\"font-weight-normal text-left\">\n        Bàn phím có vấn đề là lỗi phổ biến nhất trong quá trình sử dụng đàn Piano. Đặc biệt với môi trường khí hậu\n        nhiệt đới gió mùa có độ ẩm rất cao, các chi tiết máy bị thẩm thấu khí, làm nở các chi tiết này đồng thời lượng\n        bụi bám trong các chi tiết máy làm kẹt cứng khiến cho người sử dụng gặp khó khăn trong việc chơi đàn. Để giải\n        quyết việc này nên đảm bảo giữ cho đàn luôn ở trong môi trường sạch sẽ, có độ ẩm khoảng 50-60%. Chúng tôi giới\n        thiệu đến bạn một số cách để phòng tránh lỗi này cho đàn piano.\n      </p>\n\n      <img class=\"custom-img img-fluid\" src=\"https://tongkhonhaccu.com/Data/upload/images/Tintuc/PianoOrgan/ve-sinh-dan-piano-tai-ha-noi-uy-tin.jpg\">\n\n\n      <p class=\"font-weight-normal text-left\">\n        <br>\n        <i class=\"fa fa-asterisk fa-1x black-text\"></i>\n        Bảo dưỡng, bảo trì đàn piano định kỳ ít nhất 1 năm 1 lần.\n      </p>\n\n      <p class=\"font-weight-normal text-left\">\n        <i class=\"fa fa-asterisk fa-1x black-text\"></i>\n        Bảo quản piano trong môi trường thoáng khí hoặc trong phòng có điều hòa\n      </p>\n\n      <p class=\"font-weight-normal text-left\">\n        <i class=\"fa fa-asterisk fa-1x black-text\"></i>\n        Không đặt piano sát tường mà nên để cách ra 5 – 10 cm để tránh ẩm.\n\n      </p>\n\n      <p class=\"font-weight-normal text-left\">\n        <i class=\"fa fa-asterisk fa-1x black-text\"></i>\n        Cắm ống sưởi cho đàn khi độ ẩm tăng cao, cụ thể là vào các ngày mưa, có sương mù hoặc vào mùa mưa xuân. Lưu ý\n        cắm ống sấy cũng nên đúng cách, các bạn không nên quá làm dụng điều này vì độ ẩm quá thấp cũng khiến gỗ bị khô,\n        các thớ gỗ mất liên kết cơ học và có thể gây nứt các chi tiết máy\n      </p>\n      <p class=\"font-weight-bold text-left\">\n        3. Cân chỉnh phím đàn:\n      </p>\n\n      <p class=\"font-weight-normal text-left\">\n        Bàn phím sau thời gian dài cũng mất đi sự chính xác vốn có của nó, thay vào đó là tình trạng lún, lắc và mất\n        chính xác khi chơi đàn. Mà bạn biết đấy Phím đàn rất quan trọng vì nó đóng vai trò chính giúp tạo cảm xúc cho\n        người nghệ sỹ. Vì vậy khi đàn có dấu hiệu hư hỏng phím bạn nên sửa chữa kịp thời để đánh những bản nhạc tuyệt\n        vời.\n\n      </p>\n      <img class=\"custom-img img-fluid\" src=\"https://ducthuong.com.vn/image/catalog/dich-vu/chinh-dan2.jpg\">\n      <p class=\"font-weight-bold text-left\">\n        <br>\n        4. Sửa chữa, thay thế búa đàn:\n      </p>\n      <p class=\"font-weight-normal text-left\">\n        Búa đàn được làm bằng lông cừu ép liên kết với trục gỗ và các chi tiết nhỏ. Do vậy sau một thời gian dài sử\n        dụng, búa đàn sẽ xảy ra các trường hợp sau:\n\n      </p>\n      <img class=\"custom-img img-fluid\" src=\"http://www.anzaipiano.com/wp-content/uploads/2014/08/Mr-Seiichi.jpg\">\n      <p class=\"font-weight-normal text-left\">\n        <br>\n        <i class=\"fa fa-asterisk fa-1x black-text\"></i>\n        Đầu búa bị chai: Búa đàn tạo ra âm thanh bằng cách đánh vào dây đàn. Tuy nhiên nó cần có độ xốp nhất định để\n        giữ cho âm thanh được trong và ấm. Sau một thời gian dài sử dụng, với tần suất lực đánh lớn, nhiều búa đàn sẽ\n        tạo ra các rãnh trên đầu búa và dần dần sẽ tạo ra sự chai ở các rãnh búa này. Chính vì thế sẽ làm cho búa mất\n        đi âm sắc ấm áp mà thay vào đó là âm thanh đanh tạo cảm giác khó chịu cho người chơi và không thể chơi đàn liên\n        tục trong thời gian dài.\n      </p>\n\n      <p class=\"font-weight-normal text-left\">\n        <i class=\"fa fa-asterisk fa-1x black-text\"></i>\n        Trục búa bị gãy: Việc này rất ít khi xảy ra, nhưng nếu đã xảy ra thì bạn nên khắc phục sớm, vì búa gãy rồi thì\n        phím đàn đó bạn sẽ không sử dụng được.\n\n      </p>\n\n      <p class=\"font-weight-normal text-left\">\n        <i class=\"fa fa-asterisk fa-1x black-text\"></i>\n        Đứt dây giật và dây hãm búa.\n\n      </p>\n\n      <p class=\"font-weight-normal text-left\">\n        <i class=\"fa fa-asterisk fa-1x black-text\"></i>\n        Chuột cắn\n\n      </p>\n      <p class=\"font-weight-bold text-left\">\n        5. Thay tấm nỉ giảm âm:\n      </p>\n      <p class=\"font-weight-normal text-left\">\n        Có nhiều tác nhân gây hỏng nỉ giảm âm:\n      </p>\n      <img class=\"custom-img img-fluid\" src=\"https://www.chuppspianos.com/wp-content/uploads/2014/06/Steinway-Grand-Piano-Strings-Copper-Wound-Bass-Strings.jpg\">\n      <p class=\"font-weight-normal text-left\">\n        <br>\n        <i class=\"fa fa-asterisk fa-1x black-text\"></i>\n        Quá trình sử dụng dài gây rách, mục\n      </p>\n      <p class=\"font-weight-normal text-left\">\n        <i class=\"fa fa-asterisk fa-1x black-text\"></i>\n        Chuột cắn.\n      </p>\n      <p class=\"font-weight-normal text-left\">\n        <i class=\"fa fa-asterisk fa-1x black-text\"></i>\n        Tác nhân khác.\n      </p>\n      <p class=\"font-weight-bold text-left\">\n        6. Căn chỉnh lại pedal:\n      </p>\n      <p class=\"font-weight-normal text-left\">\n        Quá trình chơi những bản nhạc do chủ ý của tác giả hoặc do cách chuyển hợp âm trong tác phẩm qua thời gian dài\n        liên tục làm các bulong bị trôi ngược khiến cho Pedal bị rung lắc. Điều này có thể dẫn đến gãy Pedal hoặc sự\n        khó chịu cho người chơi.\n      </p>\n\n      <p class=\"font-weight-bold text-left\">\n        7. Thay lò xo cho bộ máy của đàn piano :\n      </p>\n      <p class=\"font-weight-normal text-left\">\n        Một bộ máy đàn có lò xo tốt sẽ tạo ra sự bật nảy đảm bảo cho người nghệ sỹ thăng hoa trên cây đàn của họ\n      </p>\n\n      <p class=\"font-weight-bold text-left\">\n        8. Bảo dưỡng bộ máy:\n      </p>\n      <p class=\"font-weight-normal text-left\">\n        Bộ máy hoạt động lâu chắc chắn sẽ có vấn đề, bạn cần kiểm tra, bảo dưỡng để bộ máy có thể hoạt động tốt nhất\n      </p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/user/trang-khac/sua-chua-dan/sua-chua-dan.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/user/trang-khac/sua-chua-dan/sua-chua-dan.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdHJhbmcta2hhYy9zdWEtY2h1YS1kYW4vc3VhLWNodWEtZGFuLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/user/trang-khac/sua-chua-dan/sua-chua-dan.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/user/trang-khac/sua-chua-dan/sua-chua-dan.component.ts ***!
  \************************************************************************/
/*! exports provided: SuaChuaDanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuaChuaDanComponent", function() { return SuaChuaDanComponent; });
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

var SuaChuaDanComponent = /** @class */ (function () {
    function SuaChuaDanComponent() {
    }
    SuaChuaDanComponent.prototype.ngOnInit = function () {
    };
    SuaChuaDanComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sua-chua-dan',
            template: __webpack_require__(/*! ./sua-chua-dan.component.html */ "./src/app/user/trang-khac/sua-chua-dan/sua-chua-dan.component.html"),
            styles: [__webpack_require__(/*! ./sua-chua-dan.component.scss */ "./src/app/user/trang-khac/sua-chua-dan/sua-chua-dan.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SuaChuaDanComponent);
    return SuaChuaDanComponent;
}());



/***/ }),

/***/ "./src/app/user/trang-khac/tin-tuc/tin-tuc.component.html":
/*!****************************************************************!*\
  !*** ./src/app/user/trang-khac/tin-tuc/tin-tuc.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div>\n        <!-- begin line 1 -->\n        <div class=\"row\">\n            <!-- col 1 -->\n            <div class=\"col-lg-8\">\n                <mdb-carousel [animation]=\"'slide'\">\n                    <mdb-carousel-item>\n                        <img class=\"d-block w-100 custom-img custom-slide\" src=\"https://scontent.fdad1-1.fna.fbcdn.net/v/t1.0-9/17553863_1799245863629273_4933453990315646529_n.jpg?_nc_cat=105&_nc_ht=scontent.fdad1-1.fna&oh=a87eebbef4d531c04e2879d5e0736b4e&oe=5CD62315\"\n                            alt=\"First slide\">\n                    </mdb-carousel-item>\n                    <mdb-carousel-item>\n                        <img class=\"d-block w-100 custom-img custom-slide\" src=\"https://scontent.fdad1-1.fna.fbcdn.net/v/t1.0-9/47013847_2131594100394446_5578308407422615552_o.jpg?_nc_cat=105&_nc_ht=scontent.fdad1-1.fna&oh=393bb7499052725bcd007c1b306f3997&oe=5C95E044\"\n                            alt=\"Second slide\">\n                    </mdb-carousel-item>\n                    <mdb-carousel-item>\n                        <img class=\"d-block w-100 custom-img custom-slide\" src=\"https://scontent.fdad2-1.fna.fbcdn.net/v/t1.0-9/46384967_2125095051044351_8327041074035949568_o.jpg?_nc_cat=101&_nc_ht=scontent.fdad2-1.fna&oh=39d5843bbbb05151c9b168e4d20e44e2&oe=5C8DB5D3\"\n                            alt=\"Third slide\">\n                    </mdb-carousel-item>\n                </mdb-carousel>\n\n                <div *ngIf=\"tintuc==''\">\n                    <div *ngFor=\"let tin of listTin\">\n\n                        <div class=\"row\">\n                            <!-- Grid column -->\n                            <div class=\"col-lg-5 col-xl-4\">\n                                <br>\n                                <!-- Featured image -->\n                                <div class=\"view overlay rounded mb-lg-0 mb-4 \">\n                                    <img class=\"img-fluid imgtin\" src=\"{{tin.hinhAnh}}\" alt=\"{{tin.tuKhoa}}\">\n                                    <a routerLink=\"/user/trang-khac/chi-tiet-tin-tuc/{{tin.id}}\">\n                                        <div class=\"mask rgba-white-slight\"></div>\n                                    </a>\n                                </div>\n                            </div>\n                            <!-- Grid column -->\n                            <!-- Grid column -->\n                            <div class=\"col-lg-7 col-xl-8\">\n                                <br>\n                                <!-- Post title -->\n                                <a routerLink=\"/user/trang-khac/chi-tiet-tin-tuc/{{tin.id}}\" class=\"custom-title \">{{tin.tieuDe}}</a>\n                                <!-- Excerpt -->\n                                <p class=\"custom-description\">{{tin.tomTat}}\n                                </p>\n                                <!-- Post data -->\n                            </div>\n                            <!-- Grid column -->\n                        </div>\n                        <hr>\n\n                    </div>\n\n                    <!-- pagination -->\n                    <nav aria-label=\"Page navigation example\">\n                        <ul class=\"pagination pagination-circle pg-blue justify-content-center\">\n\n                            <li class=\"page-item disabled\">\n                                <a class=\"page-link\" aria-label=\"Previous\" mdbWavesEffect>\n                                    <span aria-hidden=\"true\">&laquo;</span>\n                                    <span class=\"sr-only\">Previous</span>\n                                </a>\n                            </li>\n                            <li class=\"page-item active\">\n                                <a class=\"page-link\" mdbWavesEffect (click)=\"onClickChange1()\">1</a>\n                            </li>\n                            <li class=\"page-item\">\n                                <a class=\"page-link\" mdbWavesEffect (click)=\"onClickChange2()\">2</a>\n                            </li>\n\n                            <li class=\"page-item\">\n                                <a class=\"page-link\" aria-label=\"Next\" mdbWavesEffect>\n                                    <span aria-hidden=\"true\">&raquo;</span>\n                                    <span class=\"sr-only\">Next</span>\n                                </a>\n                            </li>\n\n                        </ul>\n                    </nav>\n                </div>\n\n\n                <div *ngIf=\"tintuc=='trang2'\">\n                    <div *ngFor=\"let tin of listTin55\">\n\n                        <div class=\"row\">\n                            <!-- Grid column -->\n                            <div class=\"col-lg-5 col-xl-4\">\n                                <br>\n                                <!-- Featured image -->\n                                <div class=\"view overlay rounded mb-lg-0 mb-4 \">\n                                    <img class=\"img-fluid imgtin\" src=\"{{tin.hinhAnh}}\" alt=\"{{tin.tuKhoa}}\">\n                                    <a routerLink=\"/user/trang-khac/chi-tiet-tin-tuc/{{tin.id}}\">\n                                        <div class=\"mask rgba-white-slight\"></div>\n                                    </a>\n                                </div>\n                            </div>\n                            <!-- Grid column -->\n                            <!-- Grid column -->\n                            <div class=\"col-lg-7 col-xl-8\">\n                                <br>\n                                <!-- Post title -->\n                                <a routerLink=\"/user/trang-khac/chi-tiet-tin-tuc/{{tin.id}}\" class=\"custom-title \">{{tin.tieuDe}}</a>\n                                <!-- Excerpt -->\n                                <p class=\"custom-description\">{{tin.tomTat}}\n                                </p>\n                                <!-- Post data -->\n                            </div>\n                            <!-- Grid column -->\n                        </div>\n                        <hr>\n\n                    </div>\n\n                    <!-- pagination -->\n                    <nav aria-label=\"Page navigation example\">\n                        <ul class=\"pagination pagination-circle pg-blue justify-content-center\">\n\n                            <li class=\"page-item disabled\">\n                                <a class=\"page-link\" aria-label=\"Previous\" mdbWavesEffect>\n                                    <span aria-hidden=\"true\">&laquo;</span>\n                                    <span class=\"sr-only\">Previous</span>\n                                </a>\n                            </li>\n                            <li class=\"page-item \">\n                                <a class=\"page-link\" mdbWavesEffect (click)=\"onClickChange1()\">1</a>\n                            </li>\n                            <li class=\"page-item active\">\n                                <a class=\"page-link\" mdbWavesEffect (click)=\"onClickChange1()\">2</a>\n                            </li>\n\n                            <li class=\"page-item\">\n                                <a class=\"page-link\" aria-label=\"Next\" mdbWavesEffect>\n                                    <span aria-hidden=\"true\">&raquo;</span>\n                                    <span class=\"sr-only\">Next</span>\n                                </a>\n                            </li>\n\n                        </ul>\n                    </nav>\n                </div>\n\n\n            </div>\n            <!-- col 2 -->\n            <div class=\"col-lg-4\">\n                <h4 class=\" custom-new mt-5\">Tiêu điểm</h4>\n                <hr>\n\n                <div *ngFor=\"let tin of tieuDiem\">\n                    <div class=\"row\">\n                        <!-- Grid column -->\n                        <div class=\"col-lg-4\">\n                            <!-- Featured image -->\n                            <div class=\"view overlay rounded  mb-lg-0 mb-4\">\n                                <img class=\"img-fluid img\" src=\"{{tin.hinhAnh}}\" alt=\"{{tin.tuKhoa}}\">\n                                <a routerLink=\"/user/trang-khac/chi-tiet-tin-tuc/{{tin.id}}\">\n                                    <div class=\"mask rgba-white-slight\"></div>\n                                </a>\n                            </div>\n\n                        </div>\n                        <!-- Grid column -->\n                        <!-- Grid column -->\n                        <div class=\"col-lg-8\">\n                            <!-- Category -->\n                            <p>\n                                <a routerLink=\"/user/trang-khac/chi-tiet-tin-tuc/{{tin.id}}\" class=\"custom-description \">{{tin.tieuDe}}</a>\n                            </p>\n\n                            <p class=\"font-weight-bold dark-grey-text text-center\">\n                            </p>\n                        </div>\n                        <!-- Grid column -->\n                    </div>\n                    <hr>\n\n\n                </div>\n                <br>\n                <iframe src=\"https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fpianonhapkhaudanang&tabs=timeline&width=340&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId\"\n                    width=\"340\" height=\"600\" style=\"border:none;overflow:hidden\" scrolling=\"no\" frameborder=\"0\" allowTransparency=\"true\"\n                    allow=\"encrypted-media\"></iframe>\n\n            </div>\n        </div>\n        <br>\n        <br>\n\n        <!-- begin line 2 -->\n\n        <h4 class=\"custom-new \">Bài viết liên quan</h4>\n\n        <hr>\n        <br>\n        <div class=\"row\">\n            <!-- Card deck -->\n            <div class=\"card-deck\">\n                <!-- Card -->\n                <div class=\"card mb-4\" *ngFor=\"let tin of tinMoi\">\n                    <!--Card image-->\n                    <div class=\"view overlay\">\n                        <img class=\"card-img-top imghinh\" src=\"{{tin.hinhAnh}}\" alt=\"Card image cap\">\n                        <a routerLink=\"/user/trang-khac/chi-tiet-tin-tuc/{{tin.id}}\">\n                            <div class=\"mask rgba-white-slight\"></div>\n                        </a>\n                    </div>\n                    <!--Card content-->\n                    <div class=\"card-body custom-body\">\n                        <!--Title-->\n\n                        <!--Text-->\n                        <a class=\"custom-description\" routerLink=\"/user/trang-khac/chi-tiet-tin-tuc/{{tin.id}}\">\n                            {{tin.tieuDe}}\n                        </a>\n                        <div class=\"color\">\n                            <i class=\"fa fa-star\"> </i>\n                            <i class=\"fa fa-star\"> </i>\n                            <i class=\"fa fa-star\"> </i>\n                            <i class=\"fa fa-star\"> </i>\n                            <i class=\"fa fa-star\"> </i>\n                        </div>\n                    </div>\n                </div>\n                <!-- Card -->\n\n            </div>\n            <!-- Card deck -->\n        </div>\n    </div>"

/***/ }),

/***/ "./src/app/user/trang-khac/tin-tuc/tin-tuc.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/user/trang-khac/tin-tuc/tin-tuc.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".imghinh {\n  height: 220px; }\n\n.custom-image {\n  height: 200px; }\n\n.custom-title {\n  text-align: left;\n  font-weight: 350;\n  color: #37474F;\n  font-size: 152%;\n  font-family: \"Helvetica\", Times, serif; }\n\n.custom-new {\n  text-align: left;\n  font-weight: 350;\n  color: #004d40;\n  font-size: 152%;\n  font-family: \"Helvetica\", Times, serif; }\n\n.custom-price {\n  text-align: center;\n  font-weight: 500;\n  color: #ff4444;\n  font-size: 90%;\n  font-family: \"Helvetica\", Times, serif;\n  text-transform: uppercase; }\n\n.custom-description {\n  text-align: left;\n  font-weight: 300;\n  color: #37474F;\n  font-size: 115%;\n  font-family: Times, serif; }\n\n@media (max-width: 1199.98px) {\n  .custom-slide {\n    height: 200px;\n    width: 100%; }\n  .img {\n    height: 100%;\n    width: 100%; }\n  .imgtin {\n    height: 100%;\n    width: 100%; } }\n\n@media (min-width: 1199.98px) {\n  .custom-img {\n    height: 300px;\n    width: 100%; }\n  .img {\n    height: 80px;\n    width: 90px; }\n  .imgtin {\n    height: 190px;\n    width: 400px; } }\n\n.custom-body {\n  background-color: #e0e0e0; }\n\n.color {\n  color: #ffca28; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci90cmFuZy1raGFjL3Rpbi10dWMvQzpcXHhhbXBwXFxodGRvY3NcXGFwcF9waWFuby9zcmNcXGFwcFxcdXNlclxcdHJhbmcta2hhY1xcdGluLXR1Y1xcdGluLXR1Yy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLGNBQWEsRUFFaEI7O0FBR0Q7RUFDSSxjQUFhLEVBQ2hCOztBQUVEO0VBQ0csaUJBQWdCO0VBQ2hCLGlCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWU7RUFDZix1Q0FBc0MsRUFFeEM7O0FBRUQ7RUFDSSxpQkFBZ0I7RUFDaEIsaUJBQWdCO0VBQ2hCLGVBQWdCO0VBQ2hCLGdCQUFlO0VBQ2YsdUNBQXNDLEVBRXhDOztBQUdGO0VBQ0csbUJBQWtCO0VBQ2xCLGlCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZUFBYztFQUNkLHVDQUFzQztFQUN0QywwQkFBeUIsRUFDM0I7O0FBRUQ7RUFDSSxpQkFBZ0I7RUFDaEIsaUJBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZTtFQUNmLDBCQUF5QixFQUMzQjs7QUFHRDtFQUVHO0lBQ0UsY0FBYTtJQUNiLFlBQVcsRUFDWjtFQUNEO0lBQ0ksYUFBVztJQUNYLFlBQVcsRUFDZDtFQUVEO0lBQ0ksYUFBVztJQUNYLFlBQVcsRUFDZCxFQUFBOztBQUdIO0VBRUU7SUFDRSxjQUFhO0lBQ2IsWUFBVyxFQUNaO0VBQ0Q7SUFDSSxhQUFZO0lBQ1osWUFBVyxFQUNkO0VBRUQ7SUFDSSxjQUFhO0lBQ2IsYUFBWSxFQUNmLEVBQUE7O0FBS0w7RUFDSSwwQkFBMkIsRUFDOUI7O0FBR0Q7RUFDRyxlQUFlLEVBQ2pCIiwiZmlsZSI6InNyYy9hcHAvdXNlci90cmFuZy1raGFjL3Rpbi10dWMvdGluLXR1Yy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcbi5pbWdoaW5oe1xyXG4gICAgaGVpZ2h0OiAyMjBweDtcclxuICAgIC8vIHdpZHRoOiAzNTBweDtcclxufVxyXG5cclxuXHJcbi5jdXN0b20taW1hZ2V7IFxyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxufSBcclxuXHJcbi5jdXN0b20tdGl0bGV7XHJcbiAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgIGZvbnQtd2VpZ2h0OiAzNTA7XHJcbiAgIGNvbG9yOiAjMzc0NzRGIDsgXHJcbiAgIGZvbnQtc2l6ZTogMTUyJTtcclxuICAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhXCIsIFRpbWVzLCBzZXJpZjtcclxuLy8gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufSBcclxuXHJcbi5jdXN0b20tbmV3e1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzNTA7XHJcbiAgICBjb2xvcjogIzAwNGQ0MCAgOyBcclxuICAgIGZvbnQtc2l6ZTogMTUyJTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYVwiLCBUaW1lcywgc2VyaWY7XHJcbiAvLyAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gfSBcclxuIFxyXG5cclxuLmN1c3RvbS1wcmljZXtcclxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICBmb250LXdlaWdodDogNTAwO1xyXG4gICBjb2xvcjogI2ZmNDQ0NCA7IFxyXG4gICBmb250LXNpemU6IDkwJTtcclxuICAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhXCIsIFRpbWVzLCBzZXJpZjtcclxuICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufSBcclxuXHJcbi5jdXN0b20tZGVzY3JpcHRpb257XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGNvbG9yOiAjMzc0NzRGIDsgXHJcbiAgICBmb250LXNpemU6IDExNSU7XHJcbiAgICBmb250LWZhbWlseTogVGltZXMsIHNlcmlmO1xyXG4gfVxyXG5cclxuIFxyXG4gQG1lZGlhIChtYXgtd2lkdGg6IDExOTkuOThweCkge1xyXG5cclxuICAgIC5jdXN0b20tc2xpZGV7XHJcbiAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmltZ3tcclxuICAgICAgICBoZWlnaHQ6MTAwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmltZ3RpbntcclxuICAgICAgICBoZWlnaHQ6MTAwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMTk5Ljk4cHgpIHtcclxuXHJcbiAgICAuY3VzdG9tLWltZ3tcclxuICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuaW1ne1xyXG4gICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICB3aWR0aDogOTBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmltZ3RpbntcclxuICAgICAgICBoZWlnaHQ6IDE5MHB4O1xyXG4gICAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcblxyXG4gIFxyXG4uY3VzdG9tLWJvZHl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwICA7XHJcbn1cclxuXHJcblxyXG4uY29sb3J7XHJcbiAgIGNvbG9yOiAgI2ZmY2EyODtcclxufVxyXG4gIl19 */"

/***/ }),

/***/ "./src/app/user/trang-khac/tin-tuc/tin-tuc.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/user/trang-khac/tin-tuc/tin-tuc.component.ts ***!
  \**************************************************************/
/*! exports provided: TinTucComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TinTucComponent", function() { return TinTucComponent; });
/* harmony import */ var _api_piano_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../api/piano.service */ "./src/app/api/piano.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TinTucComponent = /** @class */ (function () {
    function TinTucComponent(pianoService) {
        this.pianoService = pianoService;
        this.tintuc = '';
    }
    TinTucComponent.prototype.ngOnInit = function () {
        this.getNews();
        this.getTieuDiem();
        this.getTinMoi();
        this.getNews55();
    };
    TinTucComponent.prototype.onClickChange1 = function () {
        this.tintuc = '';
    };
    TinTucComponent.prototype.onClickChange2 = function () {
        this.tintuc = 'trang2';
    };
    // lay tin moi nhat
    TinTucComponent.prototype.getNews = function () {
        var _this = this;
        this.pianoService.excuteAllByWhat({}, '15')
            .subscribe(function (data) {
            _this.listTin = data;
        });
    };
    // lay tin moi nhat vi tri thu 5 lay 5
    TinTucComponent.prototype.getNews55 = function () {
        var _this = this;
        this.pianoService.excuteAllByWhat({}, '18')
            .subscribe(function (data) {
            _this.listTin55 = data;
        });
    };
    //lay tieu diem
    TinTucComponent.prototype.getTieuDiem = function () {
        var _this = this;
        this.pianoService.excuteAllByWhat({}, '16')
            .subscribe(function (data) {
            _this.tieuDiem = data;
        });
    };
    //lay tin moi
    TinTucComponent.prototype.getTinMoi = function () {
        var _this = this;
        this.pianoService.excuteAllByWhat({}, '17')
            .subscribe(function (data) {
            _this.tinMoi = data;
        });
    };
    TinTucComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tin-tuc',
            template: __webpack_require__(/*! ./tin-tuc.component.html */ "./src/app/user/trang-khac/tin-tuc/tin-tuc.component.html"),
            styles: [__webpack_require__(/*! ./tin-tuc.component.scss */ "./src/app/user/trang-khac/tin-tuc/tin-tuc.component.scss")]
        }),
        __metadata("design:paramtypes", [_api_piano_service__WEBPACK_IMPORTED_MODULE_0__["PianoService"]])
    ], TinTucComponent);
    return TinTucComponent;
}());



/***/ }),

/***/ "./src/app/user/trang-khac/trang-khac.component.html":
/*!***********************************************************!*\
  !*** ./src/app/user/trang-khac/trang-khac.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet (activate)=\"onActivate()\"></router-outlet>"

/***/ }),

/***/ "./src/app/user/trang-khac/trang-khac.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/user/trang-khac/trang-khac.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebar-fixed {\n  height: 100vh;\n  width: 270px;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n  z-index: 1050;\n  background-color: #fff;\n  padding: 1.5rem;\n  padding-top: 0; }\n\n.sidebar-fixed .list-group .active {\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n  border-radius: 5px; }\n\n.sidebar-fixed .logo-wrapper {\n  padding: 2.5rem; }\n\n.sidebar-fixed .logo-wrapper img {\n  max-height: 50px; }\n\n@media (min-width: 1200px) {\n  .navbar,\n  .page-footer,\n  main {\n    padding-left: 270px; } }\n\n@media (max-width: 1199.98px) {\n  .sidebar-fixed {\n    display: none; } }\n\n/* custom tree styles */\n\n.custom-card {\n  width: 300px;\n  float: left;\n  padding-bottom: 500px;\n  margin-right: 352px;\n  position: fixed; }\n\n/* custom tree styles */\n\n.custom-tree.wj-treeview {\n  color: #5c6bc0;\n  padding-top: 35px;\n  font-size: 75%;\n  font-family: \"Helvetica\", Times, serif;\n  font-weight: 600; }\n\n/* level 0 and deeper nodes */\n\n.custom-tree.wj-treeview .wj-nodelist > .wj-node {\n  font-size: 100%; }\n\n/* level 1 and deeper nodes (larger font, vertical line along the left) */\n\n.custom-tree.wj-treeview .wj-nodelist > .wj-nodelist > .wj-node,\n.custom-tree.wj-treeview .wj-nodelist > .wj-nodelist > .wj-nodelist {\n  font-size: 100%;\n  border-left: 4px solid rgba(128, 4, 77, 0.3); }\n\n/* level 2 and deeper nodes (smaller font, thinner border) */\n\n.custom-tree.wj-treeview .wj-nodelist > .wj-nodelist > .wj-nodelist > .wj-node,\n.custom-tree.wj-treeview .wj-nodelist > .wj-nodelist > .wj-nodelist > .wj-nodelist {\n  font-size: 100%;\n  border-left: 2px solid rgba(128, 4, 77, 0.3); }\n\n/* expanded node glyph */\n\n.custom-tree.wj-treeview .wj-nodelist .wj-node:before {\n  content: \"\\e114\";\n  font-family: 'Glyphicons Halflings';\n  top: 4px;\n  border: none;\n  opacity: .3;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }\n\n/* collapsed node glyph */\n\n.custom-tree.wj-treeview .wj-nodelist .wj-node.wj-state-collapsed:before,\n.custom-tree.wj-treeview .wj-nodelist .wj-node.wj-state-collapsing:before {\n  -webkit-transform: rotate(-180deg);\n      -ms-transform: rotate(-180deg);\n          transform: rotate(-180deg);\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci90cmFuZy1raGFjL0M6XFx4YW1wcFxcaHRkb2NzXFxhcHBfcGlhbm8vc3JjXFxhcHBcXHVzZXJcXHRyYW5nLWtoYWNcXHRyYW5nLWtoYWMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2IsYUFBWTtFQUVaLDhFQUE2RTtFQUM3RSxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLGdCQUFlO0VBQ2YsZUFBYyxFQUFHOztBQUNqQjtFQUVFLDhFQUE2RTtFQUU3RSxtQkFBa0IsRUFBRzs7QUFDdkI7RUFDRSxnQkFBZSxFQUFHOztBQUNsQjtFQUNFLGlCQUFnQixFQUFHOztBQUV6QjtFQUNFOzs7SUFHRSxvQkFBbUIsRUFBRyxFQUFBOztBQUUxQjtFQUNFO0lBQ0UsY0FBYSxFQUFHLEVBQUE7O0FBSXRCLHdCQUF3Qjs7QUFDeEI7RUFHSSxhQUFXO0VBQ1gsWUFBVztFQUNYLHNCQUFxQjtFQUNyQixvQkFBbUI7RUFDbkIsZ0JBQWUsRUFDbEI7O0FBRUQsd0JBQXdCOztBQUN4QjtFQUNJLGVBQWU7RUFDZixrQkFBaUI7RUFDakIsZUFBYztFQUNkLHVDQUFzQztFQUN0QyxpQkFBZ0IsRUFDbkI7O0FBRUQsOEJBQThCOztBQUM5QjtFQUNJLGdCQUFlLEVBQ2xCOztBQUVELDBFQUEwRTs7QUFDMUU7O0VBRUksZ0JBQWU7RUFDZiw2Q0FBNEMsRUFDL0M7O0FBRUQsNkRBQTZEOztBQUM3RDs7RUFFSSxnQkFBZTtFQUNmLDZDQUE0QyxFQUMvQzs7QUFFRCx5QkFBeUI7O0FBQ3pCO0VBQ0ksaUJBQWdCO0VBQ2hCLG9DQUFtQztFQUNuQyxTQUFRO0VBQ1IsYUFBWTtFQUNaLFlBQVc7RUFDWCxrREFBMkMsRUFDOUM7O0FBRUQsMEJBQTBCOztBQUMxQjs7RUFFSSxtQ0FBMEI7TUFBMUIsK0JBQTBCO1VBQTFCLDJCQUEwQjtFQUMxQixrREFBMkMsRUFDOUMiLCJmaWxlIjoic3JjL2FwcC91c2VyL3RyYW5nLWtoYWMvdHJhbmcta2hhYy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlYmFyLWZpeGVkIHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMjcwcHg7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgMnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAycHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgICB6LWluZGV4OiAxMDUwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuICAgIHBhZGRpbmctdG9wOiAwOyB9XHJcbiAgICAuc2lkZWJhci1maXhlZCAubGlzdC1ncm91cCAuYWN0aXZlIHtcclxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDJweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICAgICAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAycHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7IH1cclxuICAgIC5zaWRlYmFyLWZpeGVkIC5sb2dvLXdyYXBwZXIge1xyXG4gICAgICBwYWRkaW5nOiAyLjVyZW07IH1cclxuICAgICAgLnNpZGViYXItZml4ZWQgLmxvZ28td3JhcHBlciBpbWcge1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDUwcHg7IH1cclxuICBcclxuICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAubmF2YmFyLFxyXG4gICAgLnBhZ2UtZm9vdGVyLFxyXG4gICAgbWFpbiB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMjcwcHg7IH0gfVxyXG4gIFxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMTk5Ljk4cHgpIHtcclxuICAgIC5zaWRlYmFyLWZpeGVkIHtcclxuICAgICAgZGlzcGxheTogbm9uZTsgfSB9XHJcbiAgXHJcblxyXG4gXHJcbi8qIGN1c3RvbSB0cmVlIHN0eWxlcyAqL1xyXG4uY3VzdG9tLWNhcmQgIHtcclxuICAgIC8vIGNvbG9yOiAjODAwNDRkO1xyXG4gICAgLy8gbWFyZ2luLXRvcDogNTJweDtcclxuICAgIHdpZHRoOjMwMHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNTAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDM1MnB4O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG59XHJcblxyXG4vKiBjdXN0b20gdHJlZSBzdHlsZXMgKi9cclxuLmN1c3RvbS10cmVlLndqLXRyZWV2aWV3ICB7XHJcbiAgICBjb2xvcjogIzVjNmJjMCA7XHJcbiAgICBwYWRkaW5nLXRvcDogMzVweDsgXHJcbiAgICBmb250LXNpemU6IDc1JTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYVwiLCBUaW1lcywgc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4vKiBsZXZlbCAwIGFuZCBkZWVwZXIgbm9kZXMgKi9cclxuLmN1c3RvbS10cmVlLndqLXRyZWV2aWV3IC53ai1ub2RlbGlzdCA+IC53ai1ub2RlICB7XHJcbiAgICBmb250LXNpemU6IDEwMCU7XHJcbn1cclxuXHJcbi8qIGxldmVsIDEgYW5kIGRlZXBlciBub2RlcyAobGFyZ2VyIGZvbnQsIHZlcnRpY2FsIGxpbmUgYWxvbmcgdGhlIGxlZnQpICovXHJcbi5jdXN0b20tdHJlZS53ai10cmVldmlldyAud2otbm9kZWxpc3QgPiAud2otbm9kZWxpc3QgPiAud2otbm9kZSxcclxuLmN1c3RvbS10cmVlLndqLXRyZWV2aWV3IC53ai1ub2RlbGlzdCA+IC53ai1ub2RlbGlzdCA+IC53ai1ub2RlbGlzdCAge1xyXG4gICAgZm9udC1zaXplOiAxMDAlO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCByZ2JhKDEyOCwgNCwgNzcsIDAuMyk7XHJcbn1cclxuXHJcbi8qIGxldmVsIDIgYW5kIGRlZXBlciBub2RlcyAoc21hbGxlciBmb250LCB0aGlubmVyIGJvcmRlcikgKi9cclxuLmN1c3RvbS10cmVlLndqLXRyZWV2aWV3IC53ai1ub2RlbGlzdCA+IC53ai1ub2RlbGlzdCAgPiAud2otbm9kZWxpc3QgPiAud2otbm9kZSxcclxuLmN1c3RvbS10cmVlLndqLXRyZWV2aWV3IC53ai1ub2RlbGlzdCA+IC53ai1ub2RlbGlzdCAgPiAud2otbm9kZWxpc3QgPiAud2otbm9kZWxpc3QgIHtcclxuICAgIGZvbnQtc2l6ZTogMTAwJTtcclxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgcmdiYSgxMjgsIDQsIDc3LCAwLjMpO1xyXG59XHJcblxyXG4vKiBleHBhbmRlZCBub2RlIGdseXBoICovXHJcbi5jdXN0b20tdHJlZS53ai10cmVldmlldyAud2otbm9kZWxpc3QgLndqLW5vZGU6YmVmb3JlICB7IFxyXG4gICAgY29udGVudDogXCJcXGUxMTRcIjtcclxuICAgIGZvbnQtZmFtaWx5OiAnR2x5cGhpY29ucyBIYWxmbGluZ3MnO1xyXG4gICAgdG9wOiA0cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvcGFjaXR5OiAuMztcclxuICAgIHRyYW5zaXRpb246IGFsbCAuM3MgY3ViaWMtYmV6aWVyKC40LDAsLjIsMSk7XHJcbn1cclxuXHJcbi8qIGNvbGxhcHNlZCBub2RlIGdseXBoICovXHJcbi5jdXN0b20tdHJlZS53ai10cmVldmlldyAud2otbm9kZWxpc3QgLndqLW5vZGUud2otc3RhdGUtY29sbGFwc2VkOmJlZm9yZSxcclxuLmN1c3RvbS10cmVlLndqLXRyZWV2aWV3IC53ai1ub2RlbGlzdCAud2otbm9kZS53ai1zdGF0ZS1jb2xsYXBzaW5nOmJlZm9yZSAge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGN1YmljLWJlemllciguNCwwLC4yLDEpO1xyXG59XHJcbiAgICAiXX0= */"

/***/ }),

/***/ "./src/app/user/trang-khac/trang-khac.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/user/trang-khac/trang-khac.component.ts ***!
  \*********************************************************/
/*! exports provided: TrangKhacComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrangKhacComponent", function() { return TrangKhacComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_admin_extral_admin_common_login_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/admin/extral-admin/common/login-cookie */ "./src/app/admin/extral-admin/common/login-cookie.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { Router } from '@angular/router';
var TrangKhacComponent = /** @class */ (function () {
    function TrangKhacComponent(router, loginCookie) {
        this.router = router;
        this.loginCookie = loginCookie;
    }
    TrangKhacComponent.prototype.ngOnInit = function () {
    };
    TrangKhacComponent.prototype.onActivate = function () {
        window.scrollTo(0, 0);
    };
    TrangKhacComponent.prototype.ngAfterViewInit = function () {
    };
    TrangKhacComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trang-khac',
            template: __webpack_require__(/*! ./trang-khac.component.html */ "./src/app/user/trang-khac/trang-khac.component.html"),
            styles: [__webpack_require__(/*! ./trang-khac.component.scss */ "./src/app/user/trang-khac/trang-khac.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_admin_extral_admin_common_login_cookie__WEBPACK_IMPORTED_MODULE_2__["LoginCookie"]])
    ], TrangKhacComponent);
    return TrangKhacComponent;
}());



/***/ }),

/***/ "./src/app/user/trang-khac/trang-khac.module.ts":
/*!******************************************************!*\
  !*** ./src/app/user/trang-khac/trang-khac.module.ts ***!
  \******************************************************/
/*! exports provided: TrangKhacModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrangKhacModule", function() { return TrangKhacModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _trang_khac_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trang-khac.component */ "./src/app/user/trang-khac/trang-khac.component.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/esm5/angular-bootstrap-md.es5.js");
/* harmony import */ var _chi_tiet_san_pham_chi_tiet_san_pham_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chi-tiet-san-pham/chi-tiet-san-pham.component */ "./src/app/user/trang-khac/chi-tiet-san-pham/chi-tiet-san-pham.component.ts");
/* harmony import */ var _san_pham_lien_quan_san_pham_lien_quan_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./san-pham-lien-quan/san-pham-lien-quan.component */ "./src/app/user/trang-khac/san-pham-lien-quan/san-pham-lien-quan.component.ts");
/* harmony import */ var _tin_tuc_tin_tuc_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tin-tuc/tin-tuc.component */ "./src/app/user/trang-khac/tin-tuc/tin-tuc.component.ts");
/* harmony import */ var _chi_tiet_tin_tuc_chi_tiet_tin_tuc_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./chi-tiet-tin-tuc/chi-tiet-tin-tuc.component */ "./src/app/user/trang-khac/chi-tiet-tin-tuc/chi-tiet-tin-tuc.component.ts");
/* harmony import */ var _gioi_thieu_gioi_thieu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./gioi-thieu/gioi-thieu.component */ "./src/app/user/trang-khac/gioi-thieu/gioi-thieu.component.ts");
/* harmony import */ var _lien_he_lien_he_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lien-he/lien-he.component */ "./src/app/user/trang-khac/lien-he/lien-he.component.ts");
/* harmony import */ var _san_pham_san_pham_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./san-pham/san-pham.component */ "./src/app/user/trang-khac/san-pham/san-pham.component.ts");
/* harmony import */ var _lean_piano_lean_piano_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lean-piano/lean-piano.component */ "./src/app/user/trang-khac/lean-piano/lean-piano.component.ts");
/* harmony import */ var _video_video_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./video/video.component */ "./src/app/user/trang-khac/video/video.component.ts");
/* harmony import */ var _sua_chua_dan_sua_chua_dan_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./sua-chua-dan/sua-chua-dan.component */ "./src/app/user/trang-khac/sua-chua-dan/sua-chua-dan.component.ts");
/* harmony import */ var _event_event_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./event/event.component */ "./src/app/user/trang-khac/event/event.component.ts");
/* harmony import */ var _cho_thue_cho_thue_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./cho-thue/cho-thue.component */ "./src/app/user/trang-khac/cho-thue/cho-thue.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var routing = [{
        path: '', component: _trang_khac_component__WEBPACK_IMPORTED_MODULE_4__["TrangKhacComponent"],
        children: [
            {
                path: 'chi-tiet-san-pham/:id', component: _chi_tiet_san_pham_chi_tiet_san_pham_component__WEBPACK_IMPORTED_MODULE_6__["ChiTietSanPhamComponent"]
            },
            {
                path: 'tin-tuc', component: _tin_tuc_tin_tuc_component__WEBPACK_IMPORTED_MODULE_8__["TinTucComponent"]
            },
            {
                path: 'chi-tiet-tin-tuc/:id', component: _chi_tiet_tin_tuc_chi_tiet_tin_tuc_component__WEBPACK_IMPORTED_MODULE_9__["ChiTietTinTucComponent"]
            },
            {
                path: 'lien-he', component: _lien_he_lien_he_component__WEBPACK_IMPORTED_MODULE_11__["LienHeComponent"]
            },
            {
                path: 'gioi-thieu', component: _gioi_thieu_gioi_thieu_component__WEBPACK_IMPORTED_MODULE_10__["GioiThieuComponent"]
            },
            { path: 'san-pham', component: _san_pham_san_pham_component__WEBPACK_IMPORTED_MODULE_12__["SanPhamComponent"] },
            { path: 'hoc-piano', component: _lean_piano_lean_piano_component__WEBPACK_IMPORTED_MODULE_13__["LeanPianoComponent"] },
            { path: 'video', component: _video_video_component__WEBPACK_IMPORTED_MODULE_14__["VideoComponent"] },
            { path: 'sua-chua-dan', component: _sua_chua_dan_sua_chua_dan_component__WEBPACK_IMPORTED_MODULE_15__["SuaChuaDanComponent"] },
            { path: 'to-chuc-su-kien', component: _event_event_component__WEBPACK_IMPORTED_MODULE_16__["EventComponent"] },
            { path: 'cho-thue-nhac-cu', component: _cho_thue_cho_thue_component__WEBPACK_IMPORTED_MODULE_17__["ChoThueComponent"] }
        ]
    }];
var TrangKhacModule = /** @class */ (function () {
    function TrangKhacModule() {
    }
    TrangKhacModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _trang_khac_component__WEBPACK_IMPORTED_MODULE_4__["TrangKhacComponent"],
                _san_pham_lien_quan_san_pham_lien_quan_component__WEBPACK_IMPORTED_MODULE_7__["SanPhamLienQuanComponent"],
                _tin_tuc_tin_tuc_component__WEBPACK_IMPORTED_MODULE_8__["TinTucComponent"],
                _chi_tiet_tin_tuc_chi_tiet_tin_tuc_component__WEBPACK_IMPORTED_MODULE_9__["ChiTietTinTucComponent"],
                _gioi_thieu_gioi_thieu_component__WEBPACK_IMPORTED_MODULE_10__["GioiThieuComponent"],
                _lien_he_lien_he_component__WEBPACK_IMPORTED_MODULE_11__["LienHeComponent"],
                _chi_tiet_san_pham_chi_tiet_san_pham_component__WEBPACK_IMPORTED_MODULE_6__["ChiTietSanPhamComponent"],
                _san_pham_san_pham_component__WEBPACK_IMPORTED_MODULE_12__["SanPhamComponent"],
                _lean_piano_lean_piano_component__WEBPACK_IMPORTED_MODULE_13__["LeanPianoComponent"],
                _video_video_component__WEBPACK_IMPORTED_MODULE_14__["VideoComponent"],
                _sua_chua_dan_sua_chua_dan_component__WEBPACK_IMPORTED_MODULE_15__["SuaChuaDanComponent"],
                _event_event_component__WEBPACK_IMPORTED_MODULE_16__["EventComponent"],
                _cho_thue_cho_thue_component__WEBPACK_IMPORTED_MODULE_17__["ChoThueComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routing),
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["MDBBootstrapModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            ],
            entryComponents: [
                _trang_khac_component__WEBPACK_IMPORTED_MODULE_4__["TrangKhacComponent"]
            ],
            exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]
        })
    ], TrangKhacModule);
    return TrangKhacModule;
}());



/***/ }),

/***/ "./src/app/user/trang-khac/video/video.component.html":
/*!************************************************************!*\
  !*** ./src/app/user/trang-khac/video/video.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <br>\n  <br>\n  <h4>\n    <span class=\"badge badge-warning\">VIDEOS</span>\n  </h4>\n  <div class=\"row\">\n    <div class=\"col-lg-6 col-md-6 mb-lg-0 mb-5\" *ngFor=\"let salem of video\">\n      <iframe class=\"img-fluid iframe\" [src]='sanitizer.bypassSecurityTrustResourceUrl(salem.urlVideo)' frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n        allowfullscreen></iframe>\n      <h6 class=\"font-weight-normal\">\n        {{salem.tenVideo}}</h6>\n    </div>\n\n  </div>\n  <hr>\n  <div class=\"row\">\n    <div class=\"col-lg-6 col-md-6 mb-lg-0 mb-5\" *ngFor=\"let salem of video1\">\n      <iframe class=\"img-fluid iframe\" [src]='sanitizer.bypassSecurityTrustResourceUrl(salem.urlVideo)' frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n        allowfullscreen></iframe>\n      <h6 class=\"font-weight-normal\">\n        {{salem.tenVideo}}</h6>\n    </div>\n  </div>\n  <hr>\n  <div class=\"row\">\n    <div class=\"col-lg-6 col-md-6 mb-lg-0 mb-5\" *ngFor=\"let salem of video2\">\n      <iframe class=\"img-fluid iframe\" [src]='sanitizer.bypassSecurityTrustResourceUrl(salem.urlVideo)' frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n        allowfullscreen></iframe>\n      <h6 class=\"font-weight-normal\">\n        {{salem.tenVideo}}</h6>\n    </div>\n  </div>\n</div>\n<br>\n<br>"

/***/ }),

/***/ "./src/app/user/trang-khac/video/video.component.scss":
/*!************************************************************!*\
  !*** ./src/app/user/trang-khac/video/video.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (max-width: 1199.98px) {\n  .iframe {\n    height: 300px;\n    width: 100%; } }\n\n@media (min-width: 1199.98px) {\n  .iframe {\n    height: 300px;\n    width: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci90cmFuZy1raGFjL3ZpZGVvL0M6XFx4YW1wcFxcaHRkb2NzXFxhcHBfcGlhbm8vc3JjXFxhcHBcXHVzZXJcXHRyYW5nLWtoYWNcXHZpZGVvXFx2aWRlby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUlJO0lBQ0ksY0FBYTtJQUNiLFlBQVksRUFDZixFQUFBOztBQUdMO0VBSUk7SUFDSSxjQUFhO0lBQ2IsWUFBWSxFQUNmLEVBQUEiLCJmaWxlIjoic3JjL2FwcC91c2VyL3RyYW5nLWtoYWMvdmlkZW8vdmlkZW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMTk5Ljk4cHgpIHtcclxuXHJcbiAgXHJcblxyXG4gICAgLmlmcmFtZXtcclxuICAgICAgICBoZWlnaHQ6IDMwMHB4OyAgXHJcbiAgICAgICAgd2lkdGg6IDEwMCUgOyAgXHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMTk5Ljk4cHgpIHtcclxuXHJcbiAgXHJcblxyXG4gICAgLmlmcmFtZXtcclxuICAgICAgICBoZWlnaHQ6IDMwMHB4OyAgXHJcbiAgICAgICAgd2lkdGg6IDEwMCUgOyAgXHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/user/trang-khac/video/video.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/user/trang-khac/video/video.component.ts ***!
  \**********************************************************/
/*! exports provided: VideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoComponent", function() { return VideoComponent; });
/* harmony import */ var src_app_api_piano_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/api/piano.service */ "./src/app/api/piano.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VideoComponent = /** @class */ (function () {
    function VideoComponent(pianoService, sanitizer) {
        this.pianoService = pianoService;
        this.sanitizer = sanitizer;
    }
    VideoComponent.prototype.ngOnInit = function () {
        this.getVideo();
        this.getVideo1();
        this.getVideo2();
    };
    // lay video
    VideoComponent.prototype.getVideo = function () {
        var _this = this;
        this.pianoService.excuteAllByWhat({}, '45')
            .subscribe(function (data) {
            _this.video = data;
            console.log('phog', _this.video);
        });
    };
    // lay video
    VideoComponent.prototype.getVideo1 = function () {
        var _this = this;
        this.pianoService.excuteAllByWhat({}, '46')
            .subscribe(function (data) {
            _this.video1 = data;
        });
    };
    // lay video
    VideoComponent.prototype.getVideo2 = function () {
        var _this = this;
        this.pianoService.excuteAllByWhat({}, '47')
            .subscribe(function (data) {
            _this.video2 = data;
        });
    };
    VideoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-video',
            template: __webpack_require__(/*! ./video.component.html */ "./src/app/user/trang-khac/video/video.component.html"),
            styles: [__webpack_require__(/*! ./video.component.scss */ "./src/app/user/trang-khac/video/video.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_api_piano_service__WEBPACK_IMPORTED_MODULE_0__["PianoService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], VideoComponent);
    return VideoComponent;
}());



/***/ })

}]);
//# sourceMappingURL=trang-khac-trang-khac-module.js.map