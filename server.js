const express = require('express');
const app = express();
const path = require('path');

app.use('/public', express.static(path.join(__dirname, '/public')));

app.get('/' , function(req, res) {
var huongdanFile = path.join(__dirname, 'home.html');
res.sendFile(huongdanFile);
    });


app.listen(3000, function(){
});
