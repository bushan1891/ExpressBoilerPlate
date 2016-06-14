var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


/*add your custom code here*/
router.get('/',function(req,res,next){

/*Custom behaviur here */

});

module.exports = router;
