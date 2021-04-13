const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/movies-app'))

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/movies-app/index.html'));
});

app.listen(3000, () => {
    console.log('Server on Port 3000');
});