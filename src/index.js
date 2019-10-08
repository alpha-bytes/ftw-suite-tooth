"use strict";
var SuiteTooth = /** @class */ (function () {
    function SuiteTooth() {
    }
    SuiteTooth.prototype.callOnMe = function (name) {
        console.log("Hello, " + name);
    };
    return SuiteTooth;
}());
module.exports = new SuiteTooth();
