const mongoose = require('mongoose');
const express = require('express');
const requireDir = require('require-dir');

//Iniciando o App
const app = express();

//Iniciando o DB
mongoose.connect("mongodb://localhost:27017/nodeapi", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

requireDir('./src/models');
const Product = mongoose.model('Product');

//Primeira rota
app.get('/', (req, res) => { //req=requisição -- res=resposta para a requisição 
    Product.create({
        title: 'React Native',
        description: 'Build native apps with React',
        url: 'https://github.com/l-hideki/'
    })
    return res.send('Opa');
});

app.listen(3001);