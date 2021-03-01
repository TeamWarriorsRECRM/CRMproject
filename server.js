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

// app.get('/', async function(req, res){
//     res.sendFile(path.join(__dirname + '/index.html'))
// });

// app.post('/api/clientdb', async function(req, res){
//     const savedClients = await orm.getClients();
//     res.send(savedClients)
// });



app.listen(PORT, () => {
    console.log('Server is running', PORT)
});