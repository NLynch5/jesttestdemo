const { describe } = require("yargs")
const { add } = require("../app")


describe("add string here to describe your testing block", () => {
    //add test as per below here - all can be added into describe block 
})
    test("check if the add function is working", () => {
    expect(add(2, 2)).toBe(4)
    })

