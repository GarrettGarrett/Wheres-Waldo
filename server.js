// I.N.D.U.C.E.S (Index, New, Delete, Create, Edit, Show)

//Dependencies
const express = require('express');
require('dotenv').config(); 
const methodOverride = require('method-override');
const app = express();
const PORT = process.env.PORT || 3000;
const logger = require('morgan');
const rug = require('random-username-generator'); //random username generator
const random_user = rug.generate();

// Set default view engine
app.set('view engine', 'ejs' );

//  Configure Mongoose
const mongoose = require('mongoose');
const db = mongoose.connection;

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})

db.on('error', (err) => console.log(err.message + ' is mongod not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));

// Mount Middleware
app.use(express.urlencoded({ extended: false })); //this must be above the other controllers.  authorsController, etc.

app.use(methodOverride('_method'));
app.use(logger('dev'));
app.use(express.json());

// Mount controllers
const playersController = require('./controllers/players')
app.use('/', playersController);

//use public folder for static assets
app.use(express.static('public'));

// Listener
app.listen(PORT, () =>  console.log(`Express is listening on port: ${PORT}`));