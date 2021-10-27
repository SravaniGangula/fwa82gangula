var express = require('express');
const url = require('url');
var router = express.Router();
const querystring = require('querystring');


/* GET computation page. */
router.get('/', function(req, res, next) {
    var arg = req.query.value;
    console.log(arg)
    res.send('Cbrt applied to: '+arg +' is  ' + Math.cbrt(arg));
});


module.exports=router