const express = require('express');
const app = express();

app.get('/', function (req, res) {
    console.log('Hola mundo')
    res.send('Hola');
});

app.get('/prueba', function (req, res) {
    console.log('express prueba')
    res.send('Prueba');
});

app.get('/docker', function (req, res) {
    console.log('express docker')
    res.send('Docker');
});

app.get('/node', function (req, res) {
    console.log('express node')
    res.send('Node');
});

app.listen(3000, function () {
    console.log('Escuchando por el puerto 3000');
});