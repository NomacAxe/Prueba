const express = require('express');
const cors = require('cors');
const db = require('./config/db');
const app = express();
const port = 3000;

const {login} = require('./app/routes/routes-users');
const registerRouter = require('./app/routes/routes-register');

app.get('/prueba', (req, res) => {
  res.send('Hola Mundo')
})

app.use(registerRouter)
app.use(login)

app.listen(port, () => {
  console.log(`App escuchando por localhost:${port}`);
});