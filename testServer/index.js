var express = require('express');
var app = express();
var port = process.env.PORT || 4000;


app.get('/',function(req,res){
    res.json({ok:true});

});

app.listen(port);
console.log(" REST API server 2 Stared on "  +port);
