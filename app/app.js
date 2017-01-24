/**
 * Created by avinashsrivastava on 1/22/17.
 */
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  console.log(__dirname);
  res.sendFile(__dirname + '/index.html');

});
app.get('/starter', function (req, res) {
  console.log(__dirname);
  res.sendFile(__dirname + '/starter.js');

});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
