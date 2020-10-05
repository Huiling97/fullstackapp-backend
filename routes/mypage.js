const { routes } = require('../app'); // app.js file

var express = require('express'); // use node require function to use express
var router = express.Router(); // allow URI to responduse  to client requests via methods of express (get, post, put, delete)

var mystr = "I am sending this DATA from backend to Frontend"; //defines mystr

// '/' is a route
// callback function has 3 parameters: req, res, next (to pass on to next handler)
router.get('/', function(req,res,next){
    res.send(mystr); // respond with mystr
});

module.exports = router; // allows all the logic in mypage.js file to be exported