var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Deposit} = require('./models/deposit');

var app = express();

app.use(bodyParser.json());

app.post('/deposits', (req, res) => {
    var deposit = new Deposit({
        phone: req.body.phone,
        amount: req.body.amount,
        currency: req.body.currency
    });

    deposit.save().then((doc) => {
      res.send(doc);
    }, (err) => {
        res
            .status(400)
            .send(err);
    });
});

app.listen(3000, () => {
    console.log('Started on port 3000');
});

module.exports = {app};