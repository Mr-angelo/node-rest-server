//se importan los paquetes
require('./config/config');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//se indica el servicio que escuchara el servidor
app.get('/usuario', function(req, res) {
    res.json('get usuario')
});

app.post('/usuario', function(req, res) {

    let body = req.body;
    res.json({
        persona: body
    });
});

app.put('/usuario', function(req, res) {
    let id = req.params.id;
    res.json({
        id
    });
});

app.delete('/usuario', function(req, res) {
    res.json('delete usuario')
});


//se indica dónde escuchara el servidpr
app.listen(process.env.PORT, () => {
    console.log('SERVIDOR INICIADO!!');
});