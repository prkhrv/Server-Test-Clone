var express = require('express');
var app = express();
var port = process.env.PORT || 4000;


app.get('/',function(req,res){
    res.json({ok:true});

});

var server = app.listen(port,"101.53.144.170",function(){
	var host = server.address().address;
    var port = server.address().port;
    console.log('running at http://' + host + ':' + port)

});
