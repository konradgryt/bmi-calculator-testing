var express = require("express");

// create express app
var app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use("/public", express.static("public"));

app.get("/", (req, res) => {
    res.render("pages/landing");
});

app.get("/result", (req, res) => {
    var m = (parseInt(req.query.cm, 10) / 100);
    var kg = req.query.kg;

    if(m == 0 || isNaN(m)){
        res.redirect("/");
    }else {
        var bmi = (kg / (m * m));
        res.render("pages/result", {
            bmi: bmi
        });
    }
});

app.get("/result2", (req, res) => {
    var sex = req.query.sex;
    var hip = req.query.hip;
    var waist = req.query.waist;
 
    if (sex == "female" && hip !=0 || sex == "male" && hip !=0){
        var waistToHip = waist/hip;
        res.render("pages/result2", {
            waistToHip: waistToHip,
            sex: sex
        });
 
    }
    else{
        res.redirect("/");
    }
});

var port = 8080;
console.log("App is running on http://localhost:"+port)
app.listen(port);
