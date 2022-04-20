var express = require('express');
const book_controllers= require('../controllers/books'); 
var router = express.Router();



/* GET costumes */ 
router.get('/', book_controllers.book_view_all_Page ); 
router.get('/books/:id', book_controllers.book_detail); 
router.get('/detail', book_controllers.book_view_one_Page); 
router.get('/create', book_controllers.book_create_Page); 
module.exports = router; 
