const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '../public')));

app.listen(3030, ()=>{
    console.log('Servidor funcionando en http://localhost:3030');    
});

/* app.get('/', (req, res) => {
    res.send("Todo funcionando")
}); */

const mainRoutes = require("./routes/main.js");
app.use("/", mainRoutes);

const aboutRoutes = require("./routes/about.js");
app.use("/about", aboutRoutes);

/* app.get('/patos/sonido', (req, res) => {
    res.send("Cuack cuack!")
});

app.get('/patos/descripcion', (req, res) => {
    res.send("Bonitos y gorditos")
}); */

/*const patosRoutes = require("./routes/patos.js");
app.use("/patos", patosRoutes);  */

