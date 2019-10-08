import { AssertionSuite, SimpleAssertion } from 'sfdx-ftw-assertions'; 

class SuiteTooth extends AssertionSuite{
    dependencies = ['dependency1', 'dependency2']; 
    getAssertions(){
        return [ 
            simple
        ];
    }   
}

const simple: SimpleAssertion = {
    apexAssertion: 'system.assert(true)', 
    description: 'Assert true', 
    failureCallback: globalCb
}

function globalCb(result: string): void{
    console.log(result); 
}

module.exports = new SuiteTooth(); 