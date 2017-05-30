var express = require('express')
var router = express.Router()
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://localhost:27017/books'
var sess = require('express-session')
// var loginUser = sess.loginUser
var app = express()

router.get('/', function(req, res, next) {
    //console.log('loginUser is '+loginUser);
    var allBookList = []
    MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
        console.log("Connected!");
        console.log("session: ", req.session.id);
        var cursor = db.collection('booklist').find();
        cursor.forEach(function(doc, err) {
            assert.equal(null, err);
            //console.log(err);
            if (doc !== null) {
                allBookList.push(doc)
            }
        }, function() {
            db.close();
            res.render('manbook', {
                allBookList: allBookList,
                title: 'Book management site'
            })
            //console.log(allBookList);
        })
    })
})

router.get('/login', function(req, res, next) {
    res.render('login', function(){
        console.log("login here");
    })
})

module.exports = router;
