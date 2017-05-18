var express = require('express')
var router = express.Router()

router.post('/', function(req, res, next) {
    console.log('haha');
    res.render('manbook', function(){
        console.log('rendered here.');
    })
})

module.exports = router
