var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var destinations = [
        {name: "Paris", image: "https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg"},
        {name: "Tokyo", image: "https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg"},
        {name: "London", image: "https://farm7.staticflickr.com/6057/6234565071_4d20668bbd.jpg"},
        {name: "Istanbul", image: "https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg"},
        {name: "Los Angeles", image: "https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg"}

        
];
    
app.get("/", function(req, res){
    res.render("landing");
});

app.get("/destinations", function(req, res){
    res.render("destinations",{destinations:destinations});
});

app.post("/destinations", function(req, res){
    // get data from form and add to destinations array
    var name = req.body.name;
    var image = req.body.image;
    var newDestination = {name: name, image: image}
    destinations.push(newDestination);
    //redirect back to destinations page
    res.redirect("/destinations");
});

app.get("/destinations/new", function(req, res){
   res.render("new.ejs"); 
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The Server Has Started!");
});
