const fs = require('fs');
const path = require('path');

const express = require('express');
const app = express();

// bind the view with the Server
app.set('views', path.join(__dirname, 'views')); 
app.set('view engine', 'ejs');

// bind the Public (CSS, Js) with the Server
app.use(express.static(path.join(__dirname, '/public/')));

const accountData = fs.readFileSync('src/json/accounts.json', {encoding:'utf8', flag:'r'});
const accounts = JSON.parse(accountData);

const userData = fs.readFileSync('src/json/users.json', {encoding:'utf8', flag:'r'});
const users = JSON.parse(userData);

// first Route '/'
app.get('/', (req, res) => res.render('index', {title: 'Account Summary', accounts: accounts}));

// bind the Server with the Port
app.listen(3000, () => console.log('PS Project Running on Port 3000!'));