
var http = require('http');

var express = require('express'),
    bodyParser = require('body-parser'),
    app = express();

var avt = require('./routes/avtor');
var all = require('./routes/all');
var main = require('./routes/main');

var mongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/film";

var urlencodedParser = bodyParser.urlencoded({extended: false});

app.get(/\.(html|css|js|png|jpg|mp4|json)$/, function(request, response){
    all(request, response);
});

app.get("/", function(request, response){
    avt(request,response);
});

app.post("/main", urlencodedParser, function (request, response) {

    if(!request.body) return response.sendStatus(400);
    else {

        if (request.body.submit == 'Войти') {

            mongoClient.connect(url, function (err, db) {
                var collection = db.collection("users");

                if (err) return console.log(err);

                collection.find({email: request.body.email, password: request.body.password}).toArray(function (err, results) {
                    i = results.length;
                    if(i==0){}
                    else
                        return new main(request, response);
                });
                db.close();
            });
        }

        else {
            mongoClient.connect(url, function (err, db) {
                var collection = db.collection("users");
                var user = {first_name: request.body.first_name, last_name: request.body.last_name, email: request.body.email, password: request.body.password};

                if (request.body.password.length < 6) {
                }
                else {
                    collection.insertOne(user, function (err, result) {
                        if (err) {
                            return console.log(err);
                        }
                        return new main(request, response);
                    });
                    db.close();
                }
            });
        }
    }
});


app.listen(1000);
console.log('Server started on port 1000');

