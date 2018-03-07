const express = require('express');
const app = express();

const hostname = '127.0.0.1';
const port = 3000;


app.get('/', (request, response) => {
    // response.send('Hello World')
    response.sendFile(__dirname + '/views/templates/index.html')
})

app.post('/quotes', (request, response) => {
    console.log('Hellooooooooooooooooo!')
})

app.listen(port, hostname, () => {
  console.log(`Servidor iniciado en: http://${hostname}:${port}/`);
});