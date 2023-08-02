const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res ) => {
    res.send('Hello Kitty!')
});

app.post('/', (req, res) => {
    res.send('This is post request! haha')
});

app.listen(PORT, () => {
    console.log('App listening on port ' + PORT);
});