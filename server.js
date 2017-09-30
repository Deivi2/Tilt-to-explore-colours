"use strict";
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('Main'));


app.get('*' , function (req,res) {
    res.sendFile(path.resolve(__dirname, 'Main', 'index.html'))
});


const PORT = 80;
app.listen(PORT, function(){
    console.log('Listening on port ' + PORT);
});