const express = require ('express');
const { join } = require('path');
const app = express();
const path = require ('path');

const publicPath = path.resolve(__dirname,'./public');
// Esto indica que la carpeta public será un recurso de archivos estáticos
app.use (express.static(publicPath));

app.listen (3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
})

app.get ('/', (req, res) =>{
    res.sendFile(path.resolve(__dirname,'./views/home.html'));
})
