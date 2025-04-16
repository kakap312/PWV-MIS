const {isIdEmpty,isIdANumber} = require('../core/validations/idValidation.cjs')

test("test id is empty",()=>{
    expect(isIdEmpty("")).toBeTruthy();
})
test("test id is a number",()=>{
    expect(isIdANumber(12)).toBeTruthy();
})