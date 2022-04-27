var express = require('express');
const book_controllers= require('../controllers/books'); 
var router = express.Router();



router.get('/', book_controllers.book_view_all_Page ); 
router.get('/books/:id', book_controllers.book_detail); 
router.get('/detail', book_controllers.book_view_one_Page); 
router.get('/create', book_controllers.book_create_Page); 
router.get('/update', secured,book_controllers.book_update_Page); 
router.get('/delete', book_controllers.book_delete_Page); 
module.exports = router; 
