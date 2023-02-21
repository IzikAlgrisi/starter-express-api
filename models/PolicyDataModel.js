"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var PolicyDataModel = /** @class */ (function () {
    function PolicyDataModel() {
        this._id = '';
        this.offeringNumber = '';
        this.age = 0;
        this.avarageMonth = 0;
        this.LE = 0;
        this.multiplier = 0;
        this.paymentTable = [];
        this.NAV_per_unit = 0;
        this.DB_per_unit = 0;
        this.DB = 0;
        this.NAV = 0;
        this.units = 0;
        this.selected = false;
        this.IRR = 0;
        this.runTimeCalcData = {};
    }
    return PolicyDataModel;
}());
exports.PolicyDataModel = PolicyDataModel;
var AnnualData = /** @class */ (function () {
    function AnnualData() {
    }
    return AnnualData;
}());
exports.AnnualData = AnnualData;
var QuarterlyData = /** @class */ (function () {
    function QuarterlyData() {
    }
    return QuarterlyData;
}());
exports.QuarterlyData = QuarterlyData;
var StaticData = /** @class */ (function () {
    function StaticData() {
        this.multiplier = NaN;
    }
    return StaticData;
}());
exports.StaticData = StaticData;
var dataCalculated = /** @class */ (function (_super) {
    __extends(dataCalculated, _super);
    function dataCalculated() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return dataCalculated;
}(StaticData));
exports.dataCalculated = dataCalculated;
var LifeExpectancyResult = /** @class */ (function () {
    function LifeExpectancyResult() {
    }
    return LifeExpectancyResult;
}());
exports.LifeExpectancyResult = LifeExpectancyResult;
var MonthlyDistrabution = /** @class */ (function () {
    function MonthlyDistrabution() {
    }
    return MonthlyDistrabution;
}());
exports.MonthlyDistrabution = MonthlyDistrabution;
var MonthlyData = /** @class */ (function () {
    function MonthlyData() {
    }
    return MonthlyData;
}());
exports.MonthlyData = MonthlyData;
var GenericData = /** @class */ (function () {
    function GenericData() {
        this.maturityFee = 0;
        this.irr = 0.13;
        this.ongoing = 0;
        this.onboarding = 0;
    }
    return GenericData;
}());
exports.GenericData = GenericData;
var BaseDataCaculation = /** @class */ (function () {
    function BaseDataCaculation() {
    }
    return BaseDataCaculation;
}());
exports.BaseDataCaculation = BaseDataCaculation;
// function exportSchema() {
//     var vw = new PolicyDataModel();
//     let v: any = {};
//     for (const key in vw) {
//         if (Object.prototype.hasOwnProperty.call(vw, key)) {
//             const element = vw[key];
//             v[key] = {
//                 type: typeof
//             }
//         }
//     }
// }
