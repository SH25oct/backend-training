// practice
const express = require('express');
//express stores a function in itself that contains all the functionalities of express
const app = express();

app.get("/", function (req, res){
    res.send('This is the route for main page ');
})
app.get("/profile", function (req, res){
    res.send('this is the route for profile page ');
})

app.listen(3000)