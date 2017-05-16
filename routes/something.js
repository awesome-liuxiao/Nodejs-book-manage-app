var express = require('express')
var router = express.Router()

router.get('/', function(req, res, next) {
    res.render('something', {
        title: 'Something'
    })
})

module.exports = router;
