require('dotenv').config(); // Se usa porque al subirlo en un hosting va a declarar el puerto en las variables de puerto
const express = require('express')
const app = express()
const hbs = require('hbs');
const port = process.env.PORT; 


//Handlebars
app.set('view engine', 'hbs'); // Por defecto Handlebars usa la carpeta views para buscar los templates
hbs.registerPartials(__dirname + '/views/partials');

//Middleware de Express
//Para servir contenido Estatico: 
app.use(express.static('Public'));

app.get('/', (req, res) => { 
    res.render('home',{
        nombre: 'Stiven',
        titulo: 'Curso de Node'
    }); // se esta renderizando la vista con hbs 
});

app.get('/elements', (req, res) => { 
    res.render('elements',{
        nombre: 'Stiven',
        titulo: 'Curso de Node'
    }); // se esta renderizando la vista con hbs 
});

app.get('/generic', (req, res) => { 
    res.render('generic',{
        nombre: 'Stiven',
        titulo: 'Curso de Node'
    }); // se esta renderizando la vista con hbs 
});

app.get('/hola-mundo', (req, res) => {
    res.send('Hola Mundo en su respectiva ruta');
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/Public/back/template/404.html');
});

app.listen(port);