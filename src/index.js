"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sfdx_ftw_assertions_1 = require("sfdx-ftw-assertions");
class SuiteTooth extends sfdx_ftw_assertions_1.AssertionSuite {
    constructor() {
        super(...arguments);
        this.dependencies = ['dependency1', 'dependency2'];
    }
    getAssertions() {
        return [
            simple
        ];
    }
}
const simple = {
    apexAssertion: 'system.assert(true)',
    description: 'Assert true',
    failureCallback: globalCb
};
function globalCb(result) {
    console.log(result);
}
module.exports = new SuiteTooth();
