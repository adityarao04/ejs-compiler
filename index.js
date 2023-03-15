const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    // res.render('editor');
    const code = "Shubham";
    res.render('test.ejs', { code });
});

// app.post('/preview', (req, res) => {
//     const code = ;
//     res.render('index.ejs', { code });
// });

app.listen(3000, () => {
    console.log('Server started on port 3000');
});