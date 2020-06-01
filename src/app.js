const fs = require('fs');
const path = require('path');

const express = require('express');
const app = express();

// bind the view with the Server
app.set('views', path.join(__dirname, 'views')); 
app.set('view engine', 'ejs');

// bind the Public (CSS, Js) with the Server
app.use(express.static(path.join(__dirname, '/public/')));

fs.readFileSync('src/json/accounts.json', {encoding: 'ut8'});


// first Route '/'
app.get('/', (req, res) => res.render('index', {title: 'Index'}));

// bind the Server with the Port
app.listen(3000, () => console.log('PS Project Running on Port 3000!'));