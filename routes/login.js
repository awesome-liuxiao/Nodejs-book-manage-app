var express = require('express')
var router = express.Router()

router.post('/', function(req, res, next) {
    console.log('haha');
    console.log(req.body.textID);
    console.log(req.body.textPS);
    res.render('manbook', function(){
        console.log('rendered here.');
    })
    res.redirect('/manbook')
})

module.exports = router
