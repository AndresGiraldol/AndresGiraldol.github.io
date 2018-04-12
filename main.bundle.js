webpackJsonp(["main"],{

/***/ "../../../../../src lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"globalContainer\">\r\n\r\n  <div class=\"divHeader\">\r\n    <h1 class=\"title\">Salary and Tax Calculator</h1>\r\n    <span class=\"subTitle\">Canada | Ontario | 2018 Tables</span>\r\n    <button class=\"addButton\"><img src=\"../assets/addIcon.png\"> Add to Compare</button>\r\n  </div>\r\n  <div class=\"childContainer\">\r\n    <div class=\"boxContainerWhite\">\r\n      <div class=\"incomeBox first\">\r\n        <h3 class=\"mdTitle\">TYPE YEARLY INCOME</h3>\r\n        <p class=\"blackNumber\">65,000</p>\r\n      </div>\r\n      <div class=\"incomeBox\">\r\n        <h3 class=\"mdTitle\">WHERE DO YOU WORK?</h3>\r\n        <p class=\"blackNumber\">Ontario, CA</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"boxContainerGrey\">\r\n      <h3 class=\"mdTitleBlack\">DEDUCTIONS</h3>\r\n      <div class=\"divDeductionsTable\">\r\n        <table class=\"deductionsTable\">\r\n          <tr>\r\n            <td class=\"deductionsTableTitle\">SALARY</td>\r\n            <td class=\"deductionsTableValue\">52 000,00 CAD</td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"deductionsTableTitle\">CPP</td>\r\n            <td class=\"deductionsTableValue\">-2 400,72 CAD</td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"deductionsTableTitle\">EI</td>\r\n            <td class=\"deductionsTableValue\">-930,60 CAD</td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"deductionsTableTitle\">FEDERAL TAX</td>\r\n            <td class=\"deductionsTableValue\">-5 940,32 CAD</td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"deductionsTableTitle\">PROVINCIAL TAX</td>\r\n            <td class=\"deductionsTableValue\">-3 013,64 CAD</td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n      <table class=\"totalDeductionsTable\">\r\n        <tr>\r\n          <td class=\"totalDeductionsTitle\">TOTAL TAX</td>\r\n          <td class=\"totalDeductionsValue\">- 12 285,28 CAD</td>\r\n        </tr>\r\n        <tr>\r\n          <td class=\"totalDeductionsTitleBold\">NET PAY</td>\r\n          <td class=\"totalDeductionsValue\">*39 714,72 CAD</td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n    <div class=\"boxContainerWhite\">\r\n      <h3 class=\"mdTitleBlack\">CHART</h3>\r\n      <app-line-chart-demo  pieChartheight=\"260px\" pieChartmargin=\"-30px\" [piechartOptions]=\"pieChartOptionsWithLegend\"></app-line-chart-demo>\r\n    </div>\r\n  </div>\r\n  <div class=\"divSubHeader\">\r\n    <h1 class=\"title\">Compare Locations</h1>\r\n    <nav class=\"subTitle\">\r\n      <ul>\r\n        <li><a href=\"#\">LOW TAXES</a></li>\r\n        <li><a href=\"#\">LIFE STANDART</a></li>\r\n        <li><a href=\"#\">OTHER</a></li>\r\n      </ul>\r\n    </nav>\r\n  </div>\r\n  <div class=\"childContainer2\">\r\n    <div class=\"FloatboxContainerWhite\">\r\n        <span class=\"closeIcon\">x</span>\r\n      <div class=\"comparationIncomeBox\">\r\n        <div class=\"comparationIncomeBoxLeft\">\r\n          <h6 class=\"mdTitle\">TYPE YEARLY INCOME</h6>\r\n          <p class=\"blackNumber\">120,000</p>\r\n        </div>\r\n        <div class=\"comparationIncomeBoxRight\">\r\n          <h6 class=\"mdTitle\">WHERE DO YOU WORK?</h6>\r\n          <p class=\"blackNumber\">Berlin, DE</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"comparationIncomeChart\">\r\n        <h6 class=\"mdTitle\">NET PAY</h6>\r\n        <p class=\"blackNumber\">102,850 EUR</p>\r\n        <app-line-chart-demo  pieChartheight=\"180px\" pieChartmargin=\"0px\" [piechartOptions]=\"pieChartOptions\"></app-line-chart-demo>\r\n      </div>\r\n    </div>\r\n    <div class=\"FloatboxContainerBlack\">\r\n      <span class=\"closeIcon\">x</span>\r\n      <h3 class=\"mdTitleBlack\">DEDUCTIONS</h3>\r\n      <div class=\"divDeductionsTable\">\r\n        <table class=\"deductionsTable\">\r\n          <tr>\r\n            <td class=\"deductionsTableTitle\">SALARY</td>\r\n            <td class=\"deductionsTableValue\">52 000,00 CAD</td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"deductionsTableTitle\">CPP</td>\r\n            <td class=\"deductionsTableValue\">-2 400,72 CAD</td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"deductionsTableTitle\">EI</td>\r\n            <td class=\"deductionsTableValue\">-930,60 CAD</td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"deductionsTableTitle\">FEDERAL TAX</td>\r\n            <td class=\"deductionsTableValue\">-5 940,32 CAD</td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"deductionsTableTitle\">PROVINCIAL TAX</td>\r\n            <td class=\"deductionsTableValue\">-3 013,64 CAD</td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n      <table class=\"totalDeductionsTable\">\r\n        <tr>\r\n          <td class=\"totalDeductionsTitle\">TOTAL TAX</td>\r\n          <td class=\"totalDeductionsValue\">- 12 285,28 CAD</td>\r\n        </tr>\r\n        <tr>\r\n          <td class=\"totalDeductionsTitleBold\">NET PAY</td>\r\n          <td class=\"totalDeductionsValue\">*39 714,72 CAD</td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n    <div class=\"FloatboxContainerWhite\">\r\n        <span class=\"closeIcon\">x</span>\r\n        <div class=\"comparationIncomeBox\">\r\n          <div class=\"comparationIncomeBoxLeft\">\r\n            <h6 class=\"mdTitle\">TYPE YEARLY INCOME</h6>\r\n            <p class=\"blackNumber\">80,000</p>\r\n          </div>\r\n          <div class=\"comparationIncomeBoxRight\">\r\n            <h6 class=\"mdTitle\">WHERE DO YOU WORK?</h6>\r\n            <p class=\"blackNumber\">Paris, FR</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"comparationIncomeChart\">\r\n          <h6 class=\"mdTitle\">NET PAY</h6>\r\n          <p class=\"blackNumber\">69,950 EUR</p>\r\n          <app-line-chart-demo  pieChartheight=\"180px\" pieChartmargin=\"0px\" [piechartOptions]=\"pieChartOptions\"></app-line-chart-demo>\r\n        </div>\r\n      </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".globalContainer {\n  margin-right: 60px;\n  margin-left: 60px;\n  margin-top: -8px;\n  background-color: #F6F7FB; }\n  .globalContainer .divHeader {\n    height: 180px; }\n    .globalContainer .divHeader .title {\n      font-family: 'Open Sans', sans-serif;\n      margin: 0px;\n      display: block;\n      margin-left: 20px;\n      padding-top: 20px;\n      padding-bottom: 20px;\n      font-weight: 600; }\n    .globalContainer .divHeader .subTitle {\n      font-family: 'Open Sans', sans-serif;\n      display: inline-block;\n      margin: 0px;\n      margin-left: 20px;\n      color: #89898C;\n      font-weight: 400; }\n    .globalContainer .divHeader .addButton {\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-pack: distribute;\n          justify-content: space-around;\n      float: right;\n      font-family: 'Open Sans', sans-serif;\n      background-color: #040404;\n      margin-right: 20px;\n      color: white;\n      border: none;\n      width: 170px;\n      height: 40px; }\n  .globalContainer .divSubHeader {\n    margin-bottom: 7px; }\n    .globalContainer .divSubHeader .title {\n      font-family: 'Open Sans', sans-serif;\n      margin: 0px;\n      display: inline-block;\n      margin-left: 20px;\n      padding-top: 20px;\n      padding-bottom: 20px;\n      font-weight: 600; }\n    .globalContainer .divSubHeader .subTitle {\n      display: inline-block;\n      float: right;\n      margin: 0px;\n      margin-left: 20px; }\n      .globalContainer .divSubHeader .subTitle ul {\n        list-style-type: none;\n        margin: 0;\n        margin-top: 25px; }\n        .globalContainer .divSubHeader .subTitle ul li {\n          display: inline-block;\n          text-align: center;\n          padding: 16px; }\n          .globalContainer .divSubHeader .subTitle ul li a {\n            font-family: 'Open Sans', sans-serif;\n            text-decoration: none;\n            color: #BFBFC1;\n            font-weight: 600;\n            font-size: 12px; }\n  .globalContainer .childContainer {\n    display: -ms-flexbox;\n    display: flex;\n    margin-right: 20px;\n    margin-left: 20px;\n    margin-bottom: 45px;\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12); }\n    .globalContainer .childContainer .boxContainerWhite {\n      width: 33%;\n      height: 391px;\n      text-align: center;\n      background-color: #FDFFFE; }\n      .globalContainer .childContainer .boxContainerWhite .mdTitleBlack {\n        color: #000000;\n        font-family: 'Open Sans', sans-serif;\n        font-weight: 800;\n        text-align: center;\n        margin: 45px 0 45px 0px; }\n      .globalContainer .childContainer .boxContainerWhite .incomeBox {\n        height: 50%;\n        margin: 0 20px 0 20px;\n        display: -ms-flexbox;\n        display: flex;\n        -ms-flex-flow: column;\n            flex-flow: column;\n        -ms-flex-align: center;\n            align-items: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n        .globalContainer .childContainer .boxContainerWhite .incomeBox .mdTitle {\n          color: #AEAEAE;\n          font-family: 'Open Sans', sans-serif;\n          font-weight: 400;\n          margin: 0px; }\n        .globalContainer .childContainer .boxContainerWhite .incomeBox .blackNumber {\n          display: block;\n          font-family: 'Open Sans', sans-serif;\n          color: black;\n          font-weight: 800;\n          font-size: 30px;\n          margin: 0px; }\n      .globalContainer .childContainer .boxContainerWhite .first {\n        border-bottom: 2.4px solid #ECF1F4; }\n    .globalContainer .childContainer .boxContainerGrey {\n      width: 34%;\n      height: 390px;\n      background-color: #F9FAFC; }\n      .globalContainer .childContainer .boxContainerGrey .mdTitleBlack {\n        color: #000000;\n        font-family: 'Open Sans', sans-serif;\n        font-weight: 800;\n        text-align: center;\n        margin: 45px 0 45px 0px; }\n      .globalContainer .childContainer .boxContainerGrey .divDeductionsTable {\n        height: 40%;\n        margin: 0 20px 0 20px;\n        border-bottom: 2.4px solid #ECF1F4; }\n        .globalContainer .childContainer .boxContainerGrey .divDeductionsTable .deductionsTable {\n          width: 100%; }\n          .globalContainer .childContainer .boxContainerGrey .divDeductionsTable .deductionsTable .deductionsTableTitle {\n            color: #949496;\n            font-family: 'Open Sans', sans-serif;\n            font-size: 12px;\n            font-weight: 600;\n            line-height: 2; }\n          .globalContainer .childContainer .boxContainerGrey .divDeductionsTable .deductionsTable .deductionsTableValue {\n            color: #949496;\n            font-family: 'Open Sans', sans-serif;\n            font-size: 12px;\n            text-align: right;\n            font-weight: 400; }\n      .globalContainer .childContainer .boxContainerGrey .totalDeductionsTable {\n        width: 90%;\n        margin: 20px 20px 0 20px; }\n        .globalContainer .childContainer .boxContainerGrey .totalDeductionsTable .totalDeductionsTitle {\n          color: #E4E4E6;\n          font-family: 'Open Sans', sans-serif;\n          font-size: 12px;\n          font-weight: 600;\n          line-height: 3; }\n        .globalContainer .childContainer .boxContainerGrey .totalDeductionsTable .totalDeductionsTitleBold {\n          color: #949496;\n          font-family: 'Open Sans', sans-serif;\n          font-size: 12px;\n          font-weight: 600;\n          line-height: 3; }\n        .globalContainer .childContainer .boxContainerGrey .totalDeductionsTable .totalDeductionsValue {\n          color: #9D9D9F;\n          font-family: 'Open Sans', sans-serif;\n          font-size: 18px;\n          text-align: right;\n          font-weight: 800; }\n  .globalContainer .childContainer2 {\n    display: -ms-flexbox;\n    display: flex;\n    margin-right: 20px;\n    margin-left: 20px;\n    margin-bottom: 50px; }\n    .globalContainer .childContainer2 .FloatboxContainerWhite {\n      width: 33%;\n      height: 385px;\n      margin-right: 12px;\n      background-color: #FDFFFE;\n      box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n      position: relative; }\n      .globalContainer .childContainer2 .FloatboxContainerWhite .closeIcon {\n        position: absolute;\n        color: #B8C4CC;\n        cursor: pointer;\n        top: 4px;\n        right: 7px;\n        font-family: monospace;\n        font-size: 20px;\n        font-weight: 600; }\n      .globalContainer .childContainer2 .FloatboxContainerWhite .mdTitle {\n        color: #ADADAD;\n        font-family: 'Open Sans', sans-serif;\n        font-weight: 600;\n        margin: 0px;\n        font-size: 11px;\n        text-align: center; }\n      .globalContainer .childContainer2 .FloatboxContainerWhite .blackNumber {\n        display: block;\n        font-family: 'Open Sans', sans-serif;\n        color: black;\n        font-weight: 800;\n        font-size: 20px;\n        margin: 0px;\n        text-align: center; }\n      .globalContainer .childContainer2 .FloatboxContainerWhite .comparationIncomeBox {\n        width: 100%;\n        height: 140px;\n        display: -ms-flexbox;\n        display: flex; }\n        .globalContainer .childContainer2 .FloatboxContainerWhite .comparationIncomeBox .comparationIncomeBoxLeft {\n          width: 50%;\n          display: -ms-flexbox;\n          display: flex;\n          -ms-flex-flow: column;\n              flex-flow: column;\n          -ms-flex-align: center;\n              align-items: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n          border-right: 1px solid #F1F2F4;\n          margin: 35px 0px 35px 0px; }\n        .globalContainer .childContainer2 .FloatboxContainerWhite .comparationIncomeBox .comparationIncomeBoxRight {\n          width: 50%;\n          display: -ms-flexbox;\n          display: flex;\n          -ms-flex-flow: column;\n              flex-flow: column;\n          -ms-flex-align: center;\n              align-items: center;\n          -ms-flex-pack: center;\n              justify-content: center; }\n      .globalContainer .childContainer2 .FloatboxContainerWhite .comparationIncomeChart {\n        text-align: center; }\n    .globalContainer .childContainer2 .FloatboxContainerBlack {\n      width: 34%;\n      height: 385px;\n      margin-right: 12px;\n      background-color: #040404;\n      box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n      position: relative; }\n      .globalContainer .childContainer2 .FloatboxContainerBlack .closeIcon {\n        position: absolute;\n        color: #fff;\n        top: 4px;\n        right: 7px;\n        cursor: pointer;\n        font-family: monospace;\n        font-size: 20px;\n        font-weight: 600; }\n      .globalContainer .childContainer2 .FloatboxContainerBlack .mdTitleBlack {\n        color: #ffffff;\n        font-family: 'Open Sans', sans-serif;\n        font-weight: 800;\n        text-align: center;\n        margin: 30px 0 45px 0px; }\n      .globalContainer .childContainer2 .FloatboxContainerBlack .divDeductionsTable {\n        height: 40%;\n        margin: 0 20px 0 20px;\n        border-bottom: 2.4px solid #ECF1F4; }\n        .globalContainer .childContainer2 .FloatboxContainerBlack .divDeductionsTable .deductionsTable {\n          width: 100%; }\n          .globalContainer .childContainer2 .FloatboxContainerBlack .divDeductionsTable .deductionsTable .deductionsTableTitle {\n            color: #ffffff;\n            font-family: 'Open Sans', sans-serif;\n            font-size: 12px;\n            font-weight: 600;\n            line-height: 2; }\n          .globalContainer .childContainer2 .FloatboxContainerBlack .divDeductionsTable .deductionsTable .deductionsTableValue {\n            color: #ffffff;\n            font-family: 'Open Sans', sans-serif;\n            font-size: 12px;\n            text-align: right;\n            font-weight: 400; }\n      .globalContainer .childContainer2 .FloatboxContainerBlack .totalDeductionsTable {\n        width: 90%;\n        margin: 20px 20px 0 20px; }\n        .globalContainer .childContainer2 .FloatboxContainerBlack .totalDeductionsTable .totalDeductionsTitle {\n          color: #ffffff;\n          font-family: 'Open Sans', sans-serif;\n          font-size: 12px;\n          font-weight: 600;\n          line-height: 3; }\n        .globalContainer .childContainer2 .FloatboxContainerBlack .totalDeductionsTable .totalDeductionsTitleBold {\n          color: #ffffff;\n          font-family: 'Open Sans', sans-serif;\n          font-size: 12px;\n          font-weight: 600;\n          line-height: 3; }\n        .globalContainer .childContainer2 .FloatboxContainerBlack .totalDeductionsTable .totalDeductionsValue {\n          color: #ffffff;\n          font-family: 'Open Sans', sans-serif;\n          font-size: 18px;\n          text-align: right;\n          font-weight: 800; }\n\n@media (max-width: 920px) {\n  .globalContainer {\n    margin: 0px;\n    margin-top: -8px;\n    margin-right: -8px;\n    margin-left: -8px; }\n  .globalContainer .childContainer, .globalContainer .childContainer2 {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap; }\n    .globalContainer .childContainer .FloatboxContainerWhite, .globalContainer .childContainer .boxContainerWhite, .globalContainer .childContainer .boxContainerGrey, .globalContainer .childContainer .FloatboxContainerBlack, .globalContainer .childContainer2 .FloatboxContainerWhite, .globalContainer .childContainer2 .boxContainerWhite, .globalContainer .childContainer2 .boxContainerGrey, .globalContainer .childContainer2 .FloatboxContainerBlack {\n      width: 100%; }\n    .globalContainer .childContainer .FloatboxContainerWhite, .globalContainer .childContainer .FloatboxContainerBlack, .globalContainer .childContainer2 .FloatboxContainerWhite, .globalContainer .childContainer2 .FloatboxContainerBlack {\n      margin-bottom: 10px; }\n  .globalContainer .divHeader {\n    height: auto;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-flow: column;\n        flex-flow: column;\n    -ms-flex-align: center;\n        align-items: center; }\n    .globalContainer .divHeader .addButton {\n      float: none;\n      margin: 10px 0 10px 20px; }\n  .globalContainer .divSubHeader .title {\n    padding-bottom: 0px;\n    padding-top: 0px; }\n  .globalContainer .divSubHeader .subTitle {\n    display: block;\n    float: none;\n    width: 100%;\n    text-align: right;\n    margin-left: -22px;\n    margin-top: 0px; }\n    .globalContainer .divSubHeader .subTitle ul {\n      margin-top: 0px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.pieChartOptions = {
            legend: {
                display: false,
                position: 'bottom',
                fontFamily: "'Open Sans',sans-serif",
                fontColor: '#ACACAC',
                padding: '10',
                usePointStyle: true,
            },
            pieceLabel: {
                render: 'value' + '%',
                fontColor: '#949494',
                fontFamily: "'Open Sans',sans-serif",
                fontSize: 16,
                position: 'outside'
            },
            responsive: true,
            maintainAspectRatio: false,
        };
        this.pieChartOptionsWithLegend = {
            legend: {
                display: true,
                position: 'bottom',
                fontFamily: "'Open Sans',sans-serif",
                fontColor: '#ACACAC',
                padding: '10',
                usePointStyle: true,
            },
            pieceLabel: {
                render: 'value' + '%',
                fontColor: '#949494',
                fontFamily: "'Open Sans',sans-serif",
                fontSize: 16,
                position: 'outside'
            },
            responsive: true,
            maintainAspectRatio: false,
        };
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_charts_ng2_charts__ = __webpack_require__("../../../../ng2-charts/ng2-charts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__line_chart_demo_line_chart_demo_component__ = __webpack_require__("../../../../../src/app/line-chart-demo/line-chart-demo.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__line_chart_demo_line_chart_demo_component__["a" /* LineChartDemoComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ng2_charts_ng2_charts__["ChartsModule"]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/line-chart-demo/line-chart-demo.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngStyle]=\"{'display': 'block','margin-top': pieChartmargin,'height': pieChartheight}\">\r\n  <canvas baseChart  \r\n          [data]=\"pieChartData\"\r\n          [colors]=\"pieChartColors\"\r\n          [options]=\"piechartOptions\"\r\n          [labels]=\"pieChartLabels\"\r\n          [chartType]=\"pieChartType\"></canvas>\r\n</div> "

/***/ }),

/***/ "../../../../../src/app/line-chart-demo/line-chart-demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LineChartDemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chart_piecelabel_js__ = __webpack_require__("../../../../chart.piecelabel.js/src/Chart.PieceLabel.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chart_piecelabel_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chart_piecelabel_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LineChartDemoComponent = (function () {
    function LineChartDemoComponent() {
        // Pie
        this.pieChartLabels = ['Total Tax', 'Net Pay'];
        this.pieChartData = [25, 75];
        this.pieChartType = 'pie';
        this.pieChartColors = [
            {
                backgroundColor: ["#040404", "#E6E9EE"],
                borderColor: ['#fff']
            }
        ];
        /*
     // lineChart
     public lineChartData: Array<any> = [
       {data: [65, 59, 80, 81, 56, 55, 40], label: 'Serie A'},
       {data: [28, 48, 40, 19, 86, 27, 90], label: 'Serie B'},
       {data: [18, 48, 77, 9, 100, 27, 40], label: 'Serie C'}
     ];
     public lineChartLabels: Array<any> = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
     public lineChartOptions: any = {
       responsive: true
     };
     public lineChartColors: Array<any> = [
       { // grey
         backgroundColor: 'rgba(148,159,177,0.2)',
         borderColor: 'rgba(148,159,177,1)',
         pointBackgroundColor: 'rgba(148,159,177,1)',
         pointBorderColor: '#fff',
         pointHoverBackgroundColor: '#fff',
         pointHoverBorderColor: 'rgba(148,159,177,0.8)'
       },
       { // dark grey
         backgroundColor: 'rgba(77,83,96,0.2)',
         borderColor: 'rgba(77,83,96,1)',
         pointBackgroundColor: 'rgba(77,83,96,1)',
         pointBorderColor: '#fff',
         pointHoverBackgroundColor: '#fff',
         pointHoverBorderColor: 'rgba(77,83,96,1)'
       },
       { // grey
         backgroundColor: 'rgba(148,159,177,0.2)',
         borderColor: 'rgba(148,159,177,1)',
         pointBackgroundColor: 'rgba(148,159,177,1)',
         pointBorderColor: '#fff',
         pointHoverBackgroundColor: '#fff',
         pointHoverBorderColor: 'rgba(148,159,177,0.8)'
       }
     ];
     public lineChartLegend = true;
     public lineChartType = 'pie';
   
     public randomize(): void {
       const _lineChartData: Array<any> = new Array(this.lineChartData.length);
       for (let i = 0; i < this.lineChartData.length; i++) {
         _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
         for (let j = 0; j < this.lineChartData[i].data.length; j++) {
           _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
         }
       }
       this.lineChartData = _lineChartData;
     }
   
     // events
     public chartClicked(e: any): void {
       console.log(e);
     }
   
     public chartHovered(e: any): void {
       console.log(e);
     }
     */
    }
    return LineChartDemoComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], LineChartDemoComponent.prototype, "pieChartheight", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], LineChartDemoComponent.prototype, "pieChartweight", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], LineChartDemoComponent.prototype, "piechartOptions", void 0);
LineChartDemoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-line-chart-demo',
        template: __webpack_require__("../../../../../src/app/line-chart-demo/line-chart-demo.component.html")
    })
], LineChartDemoComponent);

//# sourceMappingURL=line-chart-demo.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-il": "../../../../moment/locale/en-il.js",
	"./en-il.js": "../../../../moment/locale/en-il.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mn": "../../../../moment/locale/mn.js",
	"./mn.js": "../../../../moment/locale/mn.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./tg": "../../../../moment/locale/tg.js",
	"./tg.js": "../../../../moment/locale/tg.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./ug-cn": "../../../../moment/locale/ug-cn.js",
	"./ug-cn.js": "../../../../moment/locale/ug-cn.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map