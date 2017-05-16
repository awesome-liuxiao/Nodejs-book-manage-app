var bookdb = require('./bookdb')

var getBookList = function() {
    bookdb.MongoClient.connect(bookdb.url, function(err, db){
        bookdb.assert.equal(null, err);
        bookdb.findAllDocument(db, function(){
            db.close()
        })
    })
}

getBookList();
