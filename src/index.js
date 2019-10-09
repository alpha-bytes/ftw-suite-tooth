"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var sfdx_ftw_assertions_1 = require("sfdx-ftw-assertions");
var SuiteTooth = /** @class */ (function (_super) {
    __extends(SuiteTooth, _super);
    function SuiteTooth() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dependencies = ['dependency1', 'dependency2'];
        return _this;
    }
    SuiteTooth.prototype.getAssertions = function () {
        return [
            simple
        ];
    };
    return SuiteTooth;
}(sfdx_ftw_assertions_1.AssertionSuite));
var simple = {
    apexAssertion: 'system.assert(true)',
    description: 'Assert true',
    failureCallback: globalCb
};
function globalCb(result) {
    console.log(result);
}
exports = new SuiteTooth();
