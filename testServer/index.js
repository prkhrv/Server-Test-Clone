var express = require('express');
var app = express();
var port = process.env.PORT || 80;
var mongoose = require('mongoose');



mongoose.Promise = global.Promise;
const dbConfig = require('./config/database.config.js');
// Connecting to the database 
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useCreateIndex:true,
    useFindAndModify: false,
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});



app.get('/',function(req,res){
    res.json({ok:"no"});

});

var server = app.listen(port,"0.0.0.0",function(){
	var host = server.address().address;
    var port = server.address().port;
    console.log('running at http://' + host + ':' + port)

});
