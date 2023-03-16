const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    // res.render('editor');
    const sales = {
        totalSales:"50000",
        totalOrders:"100",
        averageOrderAmount:"500",
    };
    res.render('topProducts-template.ejs', { sales });
});
app.get('/a', (req, res) => {
    // res.render('editor');
    const sales = {
        totalSales:"50000",
        totalOrders:"100",
        averageOrderAmount:"500",
    };
    res.render('totalSalesEmail.ejs', { sales });
});

// app.post('/preview', (req, res) => {
//     const code = ;
//     res.render('index.ejs', { code });
// });

app.listen(3000, () => {
    console.log('Server started on port 3000');
});