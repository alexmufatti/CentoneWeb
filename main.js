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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-cell {\n  float: left;\n}\n\n.cell-container {\n  width: 301px;\n  margin: auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtY2VsbCB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4uY2VsbC1jb250YWluZXIge1xuICB3aWR0aDogMzAxcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"container-fluid\">\n  <div class=\"row justify-content-center\">\n    <h1 class=\"col-6 text-center\">\n      Welcome to {{ title }}! </h1>\n  </div>\n  <div class=\"row justify-content-center\">\n    <div class=\"cell-container\" [style.width.px]=\"side*32\">\n      <app-cell [x]=\"cell.x\" [y]=\"cell.y\" [selected]=\"cell.selected\" [canBeSelected]=\"suggest && cell.canBeSelected\" [side]=\"side\" [number]=\"cell.number\" *ngFor=\"let cell of cells\"\n                (click)=\"onSelect(cell)\"></app-cell>\n    </div>\n  </div>\n  <div class=\"row justify-content-center\">\n    <div class=\"col-4\" ></div><div class=\"col-4\">Show possible moves: <input type=\"checkbox\" [checked]=\"suggest\" (change)=\"suggest = !suggest\"/></div><div class=\"col-4\" ></div>\n    <div class=\"col-4\" ></div><div class=\"col-4\"[hidden]=\"running\"><button (click)=\"resolveAsync()\">Resolve Async!</button></div>\n    <div class=\"col-4\" [hidden]=\"!running\"><button (click)=\"stop()\">Stop!</button></div><div class=\"col-4\" ></div>\n    <div class=\"col-4\" ></div><div class=\"col-4\" ></div>\n  </div>\n</div>\n\n"

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
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models */ "./src/app/models.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Centone Web';
        this.cells = [];
        this.moves = [
            { dx: 2, dy: 2 },
            { dx: 2, dy: -2 },
            { dx: -2, dy: 2 },
            { dx: -2, dy: -2 },
            { dx: 3, dy: 0 },
            { dx: 0, dy: 3 },
            { dx: -3, dy: 0 },
            { dx: 0, dy: -3 }
        ];
        this.side = 5;
        this.numberOfSelected = 1;
        this.timeout = 1;
        this.suggest = false;
        this.running = false;
        for (var x = 0; x < this.side; x++) {
            for (var y = 0; y < this.side; y++) {
                this.cells.push(new _models__WEBPACK_IMPORTED_MODULE_1__["Cell"](x, y, x === 0 && y === 0 ? true : false, false, x === 0 && y === 0 ? '1' : ''));
            }
        }
        this.calculatedPossibleMoves(this.cells[0]);
    }
    AppComponent.prototype.onSelect = function (cell) {
        if (cell.canBeSelected) {
            cell.selected = true;
            this.numberOfSelected++;
            cell.number = this.numberOfSelected.toString();
            this.calculatedPossibleMoves(cell);
        }
    };
    AppComponent.prototype.calculatedPossibleMoves = function (cell) {
        for (var _i = 0, _a = this.cells; _i < _a.length; _i++) {
            var c = _a[_i];
            c.canBeSelected = false;
        }
        for (var _b = 0, _c = this.moves; _b < _c.length; _b++) {
            var move = _c[_b];
            console.log('X: ' + (cell.x + move.dx) + ' Y:' + (cell.y + move.dy));
            if (cell.x + move.dx < this.side && cell.y + move.dy < this.side && cell.x + move.dx > -1 && cell.y + move.dy > -1 && this.cells[this.getPosition(cell.x + move.dx, cell.y + move.dy)] && !this.cells[this.getPosition(cell.x + move.dx, cell.y + move.dy)].selected) {
                this.cells[this.getPosition(cell.x + move.dx, cell.y + move.dy)].canBeSelected = true;
            }
        }
    };
    AppComponent.prototype.getPosition = function (x, y) {
        return x * this.side + y;
    };
    AppComponent.prototype.resolveAsync = function () {
        this.running = true;
        window.setTimeout(this.nextStep, 10, this.cells[0], 0, new Array(), this);
    };
    AppComponent.prototype.stop = function () {
        this.running = false;
    };
    AppComponent.prototype.reset = function () {
        this.numberOfSelected = 1;
        this.cells = new Array();
        for (var x = 0; x < this.side; x++) {
            for (var y = 0; y < this.side; y++) {
                var cell = new _models__WEBPACK_IMPORTED_MODULE_1__["Cell"](x, y, x === 0 && y === 0 ? true : false, false, x === 0 && y === 0 ? '1' : '');
                this.cells.push(cell);
            }
        }
        this.calculatedPossibleMoves(this.cells[0]);
    };
    AppComponent.prototype.nextStep = function (cell, moveIdx, indexList, me) {
        if (!me.running) {
            me.reset();
            return;
        }
        console.log('Cell:' + cell.x + ',' + cell.y + ' Move:' + moveIdx);
        if (indexList.length + 1 === me.side * me.side) {
            console.log('END');
            return;
        }
        if (moveIdx >= me.moves.length) {
            console.log(indexList.length);
            var LastCell = indexList.pop();
            LastCell.cell.selected = false;
            LastCell.cell.number = '';
            var nextCell = lodash__WEBPACK_IMPORTED_MODULE_2__["last"](indexList);
            nextCell.moveIdx++;
            window.setTimeout(me.nextStep, this.timeout, nextCell.cell, nextCell.moveIdx, indexList, me);
        }
        else {
            var move = me.moves[moveIdx];
            console.log('X: ' + (cell.x + move.dx) + ' Y:' + (cell.y + move.dy));
            if (cell.x + move.dx < me.side && cell.y + move.dy < me.side && cell.x + move.dx > -1 &&
                cell.y + move.dy > -1 && me.cells[me.getPosition(cell.x + move.dx, cell.y + move.dy)] &&
                !me.cells[me.getPosition(cell.x + move.dx, cell.y + move.dy)].selected) {
                var nextCell = me.cells[me.getPosition(cell.x + move.dx, cell.y + move.dy)];
                nextCell.selected = true;
                indexList.push({ cell: nextCell, moveIdx: 0 });
                nextCell.number = indexList.length + 1;
                window.setTimeout(me.nextStep, this.timeout, nextCell, 0, indexList, me);
            }
            else {
                var lastCell = indexList.pop();
                lastCell.moveIdx++;
                indexList.push(lastCell);
                window.setTimeout(me.nextStep, this.timeout, cell, moveIdx + 1, indexList, me);
            }
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _cell_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cell.component */ "./src/app/cell.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _cell_component__WEBPACK_IMPORTED_MODULE_3__["CellComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cell.component.css":
/*!************************************!*\
  !*** ./src/app/cell.component.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cell {\n  width: 30px;\n  height: 30px;\n  dispaly: inline;\n  text-align: center;\n  vertical-align: center;\n  line-height: 30px;\n  border: 1px solid #666;\n}\n\n.selected {\n  background-color: aqua;\n}\n\n.can-be-selected {\n  background-color: antiquewhite;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2VsbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDIiwiZmlsZSI6InNyYy9hcHAvY2VsbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbGwge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBkaXNwYWx5OiBpbmxpbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM2NjY7XG59XG5cbi5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XG59XG5cbi5jYW4tYmUtc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/cell.component.html":
/*!*************************************!*\
  !*** ./src/app/cell.component.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cell\" id=\"{{index}}\" [class.selected]=\"selected === true\" [class.can-be-selected]=\"canBeSelected === true\">{{number}}</div>\n\n"

/***/ }),

/***/ "./src/app/cell.component.ts":
/*!***********************************!*\
  !*** ./src/app/cell.component.ts ***!
  \***********************************/
/*! exports provided: CellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CellComponent", function() { return CellComponent; });
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

var CellComponent = /** @class */ (function () {
    function CellComponent() {
        this.selected = false;
        this.side = 10;
        this.number = '';
    }
    Object.defineProperty(CellComponent.prototype, "index", {
        get: function () {
            return (this.x * this.side + this.y) + 1;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CellComponent.prototype, "x", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CellComponent.prototype, "y", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CellComponent.prototype, "selected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CellComponent.prototype, "canBeSelected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CellComponent.prototype, "side", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CellComponent.prototype, "number", void 0);
    CellComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cell',
            template: __webpack_require__(/*! ./cell.component.html */ "./src/app/cell.component.html"),
            styles: [__webpack_require__(/*! ./cell.component.css */ "./src/app/cell.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CellComponent);
    return CellComponent;
}());



/***/ }),

/***/ "./src/app/models.ts":
/*!***************************!*\
  !*** ./src/app/models.ts ***!
  \***************************/
/*! exports provided: CellMove, Cell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CellMove", function() { return CellMove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cell", function() { return Cell; });
var CellMove = /** @class */ (function () {
    function CellMove() {
        this.cell = null;
        this.moveIdx = -1;
    }
    return CellMove;
}());

var Cell = /** @class */ (function () {
    function Cell(x, y, selected, canBeSelected, number) {
        this.x = 0;
        this.y = 0;
        this.selected = false;
        this.canBeSelected = false;
        this.number = '';
        this.selected = selected;
        this.canBeSelected = canBeSelected;
        this.number = number;
        this.x = x;
        this.y = y;
    }
    return Cell;
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
    production: false
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
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/mua/Projects/CentoneWeb/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map