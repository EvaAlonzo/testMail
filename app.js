const express = require('express');
const app = express();
const hbs = require('hbs')

hbs.registerPartials(__dirname + '/views/partials', function (err){});
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

app.use(express.static(__dirname, + '/public'));

app.get("/",(req,res,next) =>{
    let data ={}
    res.render("index", data)
});


app.use((req, res, next) =>{
    res.status(404).render("404", {
        title: "404",
        description:"Page not found"
    })
})

app.listen(3000,()=>{
    console.log('port runing')
});