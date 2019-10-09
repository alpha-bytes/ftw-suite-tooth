import { AssertionSuite, SimpleAssertion } from 'sfdx-ftw-assertions';
declare class SuiteTooth extends AssertionSuite {
    dependencies: string[];
    getAssertions(): SimpleAssertion[];
}
declare const _default: SuiteTooth;
export default _default;
