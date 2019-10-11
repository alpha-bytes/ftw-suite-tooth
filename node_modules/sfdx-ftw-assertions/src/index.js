"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Abstract class which all assertion suites must extend.
 */
class AssertionSuite {
    /**
     * User-defined typeguard for runtime check of a putative assertion, to determine if it is simple.
     * @param assertion The assertion to check as simple
     */
    static isSimpleAssertion(assertion) {
        let casted = assertion;
        return casted.apexAssertion !== undefined && typeof casted.apexAssertion === 'string';
    }
}
exports.AssertionSuite = AssertionSuite;
