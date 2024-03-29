const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, '../public')));

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use('/', (req, res) => res.json({ msg: 'Home' }));

app.listen(PORT, () => {
  console.log('Servidor escuchando en el puerto ' + PORT);
});
