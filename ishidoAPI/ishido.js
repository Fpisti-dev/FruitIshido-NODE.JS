const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('ishidoDB.db');

const multer = require('multer');
const upload = multer();

const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

const express = require('express');
const restapi = express();

const fs = require('fs');

restapi.use(bodyParser.json({limit: '1mb'}));
restapi.use(bodyParser.urlencoded({extended : true}));

//add a table and some test data
db.serialize(function() {
 db.run("CREATE TABLE IF NOT EXISTS TOP10 (id INTEGER PRIMARY KEY AUTOINCREMENT, NickName TEXT, Score INTEGER)"); 
});

restapi.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
   
//default
restapi.get('/', function(req, res){
  res.send('HELLO WORLD');
});

//add score to DB
restapi.post('/addTop10', upload.array(), function(req, res, next){
  console.log(req.body.nickname);
  db.run("INSERT INTO TOP10 (NickName, Score) VALUES (?,?)", req.body.nickname, req.body.score,
  function(error){
    if (error){        
      console.err(error);        
      res.status(500);      
    } 
    else {        
      res.status(202);
    } res.end();    
  }); 
});

 //display top 10 score rows in the table and return as json
restapi.get('/top10', function(req, res){
  db.all("SELECT * FROM TOP10 ORDER BY Score DESC LIMIT 10", function(err, rows){
    //console.log(rows);
    res.json(rows);
  });
});

//display all rows in the table and return as json
restapi.get('/allmanuals', function(req, res){
  db.all("select * from Manual", function(err, rows){
  res.json(rows);
  });
});

restapi.listen(3000);

console.log("Up and running..");