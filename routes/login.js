var express = require('express')
var router = express.Router()

router.post('/', function(req, res, next) {
    console.log('haha');
    console.log('id: '+req.body.textID);
    console.log('ps: '+req.body.textPS);
    var id = req.body.textID;
    var ps = req.body.textPS;
    if (id === 'admin') {
        console.log('welcome, admin');
        if (ps === 'admin') {
            console.log('ps is correct');
        } else {
            console.log('ps is incorrect');
        }
    }else {
        console.log(`invalid user, get out`);
    }
    res.render('manbook', function(){
        console.log('rendered here.');
    })
    res.redirect('/manbook')
})

module.exports = router
