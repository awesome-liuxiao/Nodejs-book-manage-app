var express = require('express')
var router = express.Router()
var session = require('express-session')
var app = express()

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://localhost:27017/books'

router.post('/', function(req, res, next) {
    var id = req.body.textID;
    var ps = req.body.textPS;
    MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
        var cursor = db.collection('users').find({
            "id": id
        });
        var tmp = cursor.hasNext();
        var tmpp;
        tmp.then(function(value) {
            console.log(tmpp = value);
            if (tmpp === true) {
                cursor.forEach(function(doc, err) {
                    assert.equal(null, err);
                    if (ps === doc.ps) {
                        console.log("welcome, admin!");
                    } else {
                        console.log("ps is incorrect");
                    }
                }, function() {
                    db.close();
                    app.use(session({secrete:'2314343412323123'}))
                    req.session.
                    console.log('went here.');
                    res.redirect('/manbook');
                })
            } else {
                db.close();
                console.log('invalid user');
                res.redirect('/manbook');
            }
        })
    })
})

module.exports = router
