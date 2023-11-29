const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const createError = require('http-errors');
const bodyParser = require('body-parser'); // Correct import statement
const app = express();


//middleware
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.status(200).send({
        message: 'get: welcome to my server'
    })
})


app.get('/api/user', (req, res) => {
    console.log('user profile');
    console.log(req.body.id);
    res.status(200).send({
        message: 'user profile is returned'
    })
})


//client error handling
app.use((req, res, next) => {
    res.status(400).json({ message: 'route not find' });
    createError(400, 'route not find')
    next('')
})
//server error handling-all error handling
app.use((err, req, res, next) => {
   return res.status(err.status||500).json({
    success:false,
    message:err.message
   })
})
module.exports = app;