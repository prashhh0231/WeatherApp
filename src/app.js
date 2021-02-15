const express = require("express");
const app = express();
const path =require("path");
const hbs = require("hbs");

const port = process.env.PORT || 8000;

// PUBLIC STATIC PATH
const static_path=path.join(__dirname,"../public");

// hbs PATH
const temp_Path = path.join(__dirname,"../templates/views");

// PARTIAL PATH
const partialPath =path.join(__dirname,"../templates/partials");

//VIEW ENGINE 
app.set("view engine","hbs");
app.set("views",temp_Path);
hbs.registerPartials(partialPath);
// TO USE STATIC WEBSITE
app.use(express.static(static_path));

// ROUTING
app.get("/",(req,res)=>{
    res.render("index");

});


app.get("/about",(req,res)=>{
    res.render("about");

});

app.get("/weather",(req,res)=>{
    res.render("weather");

});

app.get("*",(req,res)=>{
    res.send("404");

});

app.listen(port,(req,res)=>{
    console.log(`Listining ${port}`);
});