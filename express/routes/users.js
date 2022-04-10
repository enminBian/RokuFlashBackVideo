var express = require('express');
var router = express.Router();

var request=require('request');

const mysql = require("mysql");
let connectInfo = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: 'root',
	database: 'movie'
})
connectInfo.connect();

router.get('/', function(req, res, next) {
  var username = req.query.username;
  var password = req.query.password;

  var sql = 'select * from users where username=' + username + ' and password=' + password;
  connectInfo.query(sql, function (err, result) {
    if (err) {
      console.log('[query]-:' + err);
    } else {
      if(result.length===0){
        //console.log(0);
        res.send({res:0});
      }else{
        res.send({res:1});
      }
      
    }
  })

})




/* GET users listing. */
/*
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
*/
module.exports = router;
