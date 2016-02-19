var express = require('express');
var app = express();

app.get('/(\\d+)', function (req, res) {
    res.end(req.url);
});

app.get('/new/*', function (req, res) {
    res.end(req.url);
});

//app.listen(process.env.PORT || 5000);
app.listen(8080);