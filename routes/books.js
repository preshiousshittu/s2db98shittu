var express = require('express');
const book_controllers= require('../controllers/books'); 
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('books', { title: 'Search Results books' });
});

/* GET costumes */ 
router.get('/', book_controllers.book_view_all_Page ); 
module.exports = router; 
