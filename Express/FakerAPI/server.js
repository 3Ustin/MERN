const express = require("express");
const app = express();
const port = 8000;

var faker = require('faker');
    
app.use(express.json());
app.use(express.urlencoded({extended:true}));

class Order{
    constructor(){
        const bases = ["dark roast", "medium roast", "light roast", "black tea", "green tea"]
        this.base = bases[Math.floor(Math.random()*bases.length)];
        this.barista = faker.name.findName();
    }
}

// req is shorthand for request
// res is shorthand for response
app.get("/api/test", (request, response) => {
    response.json({ message: "Hello World" });
});

app.get("/api/order", (request,response) => {
    response.json(new Order());
    response.json({message: 'coffee order'})
})

app.listen(port, () => console.log(`running on ${port}`));

