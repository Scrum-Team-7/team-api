const express =require('express');

const port = 3000;

const app = express();

app.get('/', (req,res) => {res.send("Hello Browser")});

app.get('/logan', (req,res) => {res.send("Hello Logan")});
app.get('/jesse', (req,res) => {res.send("Hello Jesse")});
app.get('/makai', (req,res) => {res.send("Hello Makai")}); 

app.listen(port, ()=>console.log("Listening"));
