const fs = require('fs');
const path = require('path');
const bodyParser = require("body-parser");

const express = require('express');
const app = express();

// bind the view with the Server
app.set('views', path.join(__dirname, 'views')); 
app.set('view engine', 'ejs');

// bind the Public (CSS, Js) with the Server
app.use(express.static(path.join(__dirname, '/public/')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const accountData = fs.readFileSync('src/json/accounts.json', {encoding:'utf8', flag:'r'});
const accounts = JSON.parse(accountData);

const userData = fs.readFileSync('src/json/users.json', {encoding:'utf8', flag:'r'});
const users = JSON.parse(userData);

// Index Route 
app.get('/', (req, res) => res.render('index', {title: 'Account Summary', accounts: accounts}));

// Savings Account Route 
app.get('/savings',(req, res) => res.render('account', {account: accounts.savings}));

// Checking Account Route 
app.get('/checking',(req, res) => res.render('account', {account: accounts.checking}));

// Credit Account Route 
app.get('/credit',(req, res) => res.render('account', {account: accounts.credit}));

// Credit Account Route 
app.get('/profile',(req, res) => res.render('profile', {user: users[0]}));

// Transfer Route
app.get('/transfer', (req, res) => res.render('transfer'));

// bind the Server with the Port
app.listen(3000, () => console.log('PS Project Running on Port 3000!'));