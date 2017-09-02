var express = require('express')
var app = express()

var myLogger = function (req, res, next) {
  console.log(req)
  next()
}

app.use(myLogger)

// GET method route
app.get('/', function (req, res) {
    res.send('GET request to the homepage')
})


app.get('/getbookbyuser/users/:userId/books/:bookId', function (req, res) {
    //res.send(req.params)
    // Use connect method to connect to the server
    MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
        console.log("Connected correctly to server");       
        findDocuments(db, function(docs) {
            res.send(docs);
        });
    });   
 })


// POST method route
app.post('/', function (req, res) {
    res.send('POST request to the homepage')
})


app.listen(3000)


var findDocuments = function(db, callback) {
    // Get the documents collection
    var collection = db.collection('book');
    // Find some documents
    collection.find().toArray(function(err, docs) {
      assert.equal(err, null);
      console.log("Found the following records");
      console.log(docs);
      callback(docs);
    });      
  }
  
  // use the findDocuments() function
  var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');
  
  // Connection URL
  var url = 'mongodb://localhost:27017/sean';
