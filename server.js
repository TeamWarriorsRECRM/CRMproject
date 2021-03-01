require('dotenv').config();

const orm = require('./app/models/orm');
const express = require('express');
const apiRouter = require('./app/router/router');
const { get } = require('http');
const app = express();
const path = require('path')

const PORT = process.env.PORT || 8080

app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.listen(PORT, () => {
    console.log('Server is running', PORT)
});