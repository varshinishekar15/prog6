const express=require('express');
const app=express();
app.get('/', (req, res) => res.send('{ "response": "hello from DSCE" }'));
app.get('/will', (req, res) => res.send('{ "response": "Hello World" }'));
app.get('/ready', (req, res) => res.send('{ "response": "great, it works!" }'));
module.exports = app;
