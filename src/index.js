module.exports = {
    dependencies: ['dep1', 'dep2'], 
    getAssertions(){
        return[
            {
                description: 'Assert true', 
                apexAssertion: 'system.assert(true)',
                failureCallback(result){
                    console.log(result);
                }
            }
        ]
    }
}