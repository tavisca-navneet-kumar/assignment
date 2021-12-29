var value = false


beforeEach(function(){
console.log("Before Each")
})
describe("Just for Testing Purpose",function(){
    it("TO test if lines execute after assertion failure",function(){
        console.log("Start of the test");
        expect(value).toBeTruthy();
    })
})

describe("Just for Testing Purpose 2 ",function(){
    before(function(){
        console.log("Before of It block")
        value = true;
    })
    it("TO test if lines execute after assertion failure",function(){
        console.log("Start of the test");
        expect(value).toBeTruthy();
    })
})