const fetch = require("node-fetch2");

it("Should get [Hello Logan]",async ()=>{

    const response = await fetch('http://localhost:3000/logan');

    const reply = await response.text();
    expect(reply).toBe("Hello Logan");
})