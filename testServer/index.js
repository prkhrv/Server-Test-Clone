var express = require('express');
var app = express();
var port = process.env.PORT || 80;


app.get('/',function(req,res){
    res.json({ok:true});

});

var server = app.listen(port,"0.0.0.0",function(){
	var host = server.address().address;
    var port = server.address().port;
    console.log('running at http://' + host + ':' + port)

});
