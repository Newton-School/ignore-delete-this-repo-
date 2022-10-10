const express = require('express');
const app = express();
app.use(express.json());

app.get('/', function (req, res) {
    res.send('Hello Newton School');
   });
   
app.get('/header', function (req, res){
      res.send(res.headersSent);  
   });

module.exports = app;
