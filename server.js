var express = require('express');
var url = require('url');
var validUrl = require('valid-url');
var app = express();

var url_list = [];

var addUrl = function (url) {
    url_list.push(url);
    return url_list.length - 1;
}

app.get('/(\\d+)', function (req, res) {
    res.end(req.url);
});

app.get('/new/*', function (req, res) {
    var urlObj = url.parse(req.url, true);
    var originalUrl = urlObj.pathname.substring(5); // remove '/new/'
    var result = {}
    if (validUrl.isUri(originalUrl) || urlObj.query['allow'] === "true"){
        result.original_url = originalUrl;
        result.short_url = '';
    } else {
        result = {error: 'Invalid Url'};
    }
    res.end(JSON.stringify(result));
});

//app.listen(process.env.PORT || 5000);
app.listen(8080);