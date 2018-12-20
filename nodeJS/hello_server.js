/*
the follow code is from w3school
 node.js  the following code print hellow world if anyone tries to access your computer on port 8080
 your computer is now a server
*/

// run url - http://localhost:8080 to print the hello world
// require() is to include the module
var http = require('http'); // a module is like a js libraries
var dt = require('./myfirstmodule');// date module we create
var url = require('url');

http.createServer(function (req, res) {
  //the following line is for displayed content in a html
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently: \n"+ dt.myDateTime());
    res.write(req.url);

    /*
http://localhost:8080/?year=2017&month=July
use for print txt
    */
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.write(txt);
    res.end('Hello World!');
}).listen(8080);

// http.createServer() method, will be executed when someone tries to access the computer on port 8080.
//without listen() the program will still run but it donot listen to the client
