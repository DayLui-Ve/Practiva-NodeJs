const express = require('express');
const mongoose = require('mongoose')
const app = express();

mongoose.connect('mongodb://docker:123456@mongo-database:27017/project-docker',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err) => {

        console.log('Database wait');
        if (err) throw err;
        console.log('Database ONLINE!!');

    });

const jobSchema = new mongoose.Schema({
    name: String,
    job: String,
});

const Job = mongoose.model('jobs', jobSchema);

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

app.get('/jobs', function (req, res) {
    console.log('express job')

    Job.find({}, (err, jobs) => {

        if (err) return console.error(err)

        res.send(JSON.stringify(jobs))

    })
})

app.listen(3000, function () {
    console.log('Escuchando por el puerto 3000');
});