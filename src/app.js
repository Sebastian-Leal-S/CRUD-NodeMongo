const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// connecting to db
mongoose.connect("mongodb+srv://CRUDNodeMongo:CRUDNodeMongo@dbnode.azpjh.mongodb.net/CRUDNodeMongo?retryWrites=true&w=majority")
 .then(db => console.log('Db connected'))
 .catch(err => console.log(err));

// importing routes
const indexRoutes = require('./routes/index');

// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }))

// routes
app.use('/', indexRoutes);
app.use(express.urlencoded({extended: false}));

// star the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});