const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/movies-app'));

app.set('port', process.env.PORT || 3000);

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/movies-app/index.html'));
});

app.listen(app.get('port'), () => {
    console.log('Server on Port ' + app.get('port'));
});