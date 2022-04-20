// API for our resources 
exports.api = function(req, res) { 
    res.write('['); 
    res.write('{"resource":"books", '); 
    res.write('  "verbs":["GET","PUT", "DELETE"] '); 
    res.write('}'); 
    res.write(']') 
    res.send(); 
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