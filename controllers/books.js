const book = require('../models/book');
var Book = require('../models/book'); 
 
exports.book_list  = async function(req, res) { 
    try{ 
        theBooks = await Book.find(); 
        res.send(theBooks); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
exports.book_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Book.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
 
exports.book_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Book(); 
    document.name = req.body.name; 
    document.cost = req.body.cost; 
    document.size = req.body.size; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    } 
}; 
 
exports.book_delete = async function(req, res) { 
        console.log("delete "  + req.params.id) 
    try { 
        result = await Book.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
};
 
exports.book_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
    ${JSON.stringify(req.body)}`) 
        try { 
            let toUpdate = await book.findById( req.params.id) 
            // Do updates of properties 
            if(req.body.name)  
                   toUpdate.name = req.body.name; 
            if(req.body.cost) toUpdate.length = req.body.length; 
            if(req.body.size) toUpdate.author = req.body.author; 
            let result = await toUpdate.save(); 
            console.log("Sucess " + result) 
            res.send(result) 
        } catch (err) { 
            res.status(500) 
            res.send(`{"error": ${err}: Update for id ${req.params.id} 
    failed`); 
        } 
}; 

exports.book_view_all_Page = async function(req, res) { 
    try{ 
        theBooks = await Book.find(); 
        res.render('books', { title: 'books Search Results', results: theBooks }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

exports.book_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await Book.findById( req.query.id) 
        res.render('bookdetail',  
{ title: 'Book Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
exports.book_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('bookcreate', { title: 'Book Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

exports.book_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await Book.findById(req.query.id) 
        res.render('bookupdate', { title: 'Book Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle a delete one view with id from query 
exports.book_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await Book.findById(req.query.id) 
        res.render('bookdelete', { title: 'Book Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 