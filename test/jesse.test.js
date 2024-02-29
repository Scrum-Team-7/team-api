const fetch = require("node-fetch2");

it("Should get [Hello Jesse]",async ()=>{

    const response = await fetch('http://localhost:3000/jesse');

    const reply = await response.text();
    expect(reply).toBe("Hello Jesse");
})