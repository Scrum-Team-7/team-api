const fetch = require("node-fetch2");

it("Should get [Hello Makai]",async ()=>{

    const response = await fetch('http://localhost:3000/makai');

    const reply = await response.text();
    expect(reply).toBe("Hello Makai");
})