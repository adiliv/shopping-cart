var express = require('express');
var app = express();
app.listen(9000);

// app.get(function(request, response){
//     response.send("Hello World");
//   });

app.use(express.static('public'));
app.use(express.static('node_modules'));

