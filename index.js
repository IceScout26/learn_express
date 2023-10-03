var express = require('express');
var app = express();
var pool = require('./queries.js');

// var things = require('./things.js');

// app.use('/things', things);

pool.connect((err, res) => {
    console.log('ini error: ', err);
    console.log('ini success: ', res);
})

app.get('/', (req, res) => {
    pool.query('SELECT * FROM tools', (err, res) => {
        if (err) {
            // throw err;
            console.log('ini error:');
        }
        res.send('a');
    });
    // console.log('test');
    // res.send("test");
});

app.listen(5000);