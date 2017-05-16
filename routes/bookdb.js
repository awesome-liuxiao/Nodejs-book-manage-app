var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://localhost:27017/books'

exports.MongoClient = MongoClient
exports.assert = assert
exports.url = url;

var insertDocument1 = function(db, callback) {
    db.collection('booklist').insertOne({
        "bookName": "Discrete and Combinatorial Mathematics",
        "Authro": "Ralph P. Grimaldi",
        "Edition": "5th",
        "PublishYear": "2008"
    }, function(err, result) {
        assert.equal(err, null);
        console.log("Insert a doc into booklist");
        callback();
    })
}
var insertDocument2 = function(db, callback) {
    db.collection('booklist').insertOne({
        "bookName": "Cloud Application Architectures",
        "Authro": "George Reese",
        "Edition": "1st",
        "PublishYear": "2009"
    }, function(err, result) {
        assert.equal(err, null);
        console.log("Insert a doc into booklist");
        callback();
    })
}
var insertDocument3 = function(db, callback) {
    db.collection('booklist').insertOne({
        "bookName": "OpenStack Cloud Computing Cookbook",
        "Authro": "Kevin Jackson, Cody Bunch, Egle Sigler",
        "Edition": "3rd",
        "PublishYear": "2015"
    }, function(err, result) {
        assert.equal(err, null);
        console.log("Insert a doc into booklist");
        callback();
    })
}
var findAllDocument = function(db, callback) {
    var cursor = db.collection('booklist').find();
    cursor.each(function(err, doc) {
        assert.equal(err, null);
        if (doc !== null) {
            console.log(doc);
        } else {
            callback();
        }
    })
}
exports.findAllDocument = findAllDocument
// MongoClient.connect(url, function(err, db) {
//     assert.equal(null, err);
//     //console.log('Connected correctly to server.');
//     // insertDocument3(db, function(){
//     // db.close();
//     // })
//     findAllDocument(db, function() {
//         db.close();
//     })
// })
