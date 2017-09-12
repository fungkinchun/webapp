
var express = require('express')
var app = express()
var path = require('path');


var myLogger = function (req, res, next) {
  //console.log(req)
  next()
}

app.use(myLogger)
app.use(express.static('static'))
app.use(express.static('files'))
app.use('/static', express.static('static'))


// GET method route
app.get('/', function (req, res) {
     res.sendFile(path.join(__dirname + '/index.html'));
})

app.get('/css', function (req, res) {
  console.log(req.query.titles)
})

app.get('/getbookbyuser/users/:userId/books/:bookId', function (req, res) {
  res.header("Access-Control-Allow-Origin", "http://localhost"); 
  res.header("Access-Control-Allow-Methods", "GET, POST");
  
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
