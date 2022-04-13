
var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var book_controller = require('../controllers/books'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/resource', api_controller.api); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a Costume.  
router.post('/resource/books', book_controller.book_create_post); 
 
// DELETE request to delete Costume. 
router.delete('/resource/books/:id', book_controller.book_delete); 
 
// PUT request to update Costume. 
router.put('/resource/books/:id', 
book_controller.book_update_put); 
 
// GET request for one Costume. 
router.get('/resource/books/:id', book_controller.book_detail); 
 
// GET request for list of all Costume items. 
router.get('/resource/books', book_controller.book_list); 

module.exports = router; 