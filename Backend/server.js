const express = require('express')
const dotenv = require('dotenv')
const mongoose = require("mongoose");
const connectDB = require("./Database/Db.js");
const path = require('path');

const Pizza = require("./Database/Models/pizzaModel.js");

// Config Env

require('dotenv').config({ path: 'process.env' });
const PORT = process.env.PORT || 5000



const app = express();

// Database
connectDB();

app.get('/', (req, res) => {
    res.send('API is running....')
})

app.get('/getpizzas', (req, res) => {
    Pizza.find({}, (err, docs) => {
        if (err) {
            console.log(err);
        } else {
            res.send(docs);
        }
    });
});




app.listen(process.env.PORT || 5000, function () {
    console.log("this server is running");
});


