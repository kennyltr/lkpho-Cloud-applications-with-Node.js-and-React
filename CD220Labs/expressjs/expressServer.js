const express = require('express');
const app = new express();

let loginDetails = [];
let monthlist = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

app.get("/",(req,res)=>{
    res.send("Welcome to the express server")
})

app.get("/loginDetails",(req,res)=>{
    res.send(JSON.stringify(loginDetails));
})

app.post("/login/:name",(req,res)=>{
    loginDetails.push({"name":req.params.name,"login_time":new Date()});
    res.send(req.params.name + ", You are logged in!")
})

app.get("/:name",(req,res)=>{
    res.send("Hello "+req.params.name)
})

app.get("/fetchMonth/:num",(req,res)=>{
    let nummonth = parseInt(req.params.num);
    if (nummonth > 12 || nummonth < 1) {
        res.send("Invalid month number!")
    }
    else if (isNaN(nummonth)) {
        res.send("Please input a number for the month!")
    }
    else {
        res.send("The month is "+ monthlist[(nummonth-1)])
    }
})

app.listen(3333, () => {
    console.log(`Listening at http://localhost:3333`)
})

