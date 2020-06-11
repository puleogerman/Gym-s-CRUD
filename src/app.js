const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express();

//importing routes
const gymRoutes = require('./routes/gym');
const userRoutes = require('./routes/user');

//Settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

//Middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
  host: 'localhost',
  user: 'root',
  password: '',
  // database: 'gym-test',
  database: 'prueba_gym'

}, 'single'));
app.use(express.urlencoded({extended: false}));


//Routes
app.use('/', gymRoutes);
app.use('/users', userRoutes);

// static files in case
app.use(express.static(path.join(__dirname, 'public')));


app.listen(app.get('port'), () => {
  console.log('Server on port 3000')
})