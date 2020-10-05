var express = require('express'); // use node require function to use express
var router = express.Router(); // allow URI to respond to client requests via methods of express (get, post, put, delete)

// '/' is a route
// callback function has 3 parameters: req, res, next (to pass on to next handler)
router.get('/', function(req, res, next) {  /* GET users listing. */
  res.send('respond with a resource'); //respond with 'respond with a resource'
});

module.exports = router; // allows all the logic in mypage.js file to be exported
