require('dotenv').config();

const express = require('express');
const expresslayout = require('express-ejs-layouts');
const cookieParser = require('cookie-parser');
const MongoStore = require('connect-mongo');
const session = require('express-session');
const connectDB= require('./server/config/db')

 const app = express();
 const PORT= 5001|| process.env.PORT;

 connectDB();  

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());

app.use(session({
    secret:'keyboard cat',
    resave:false,
    saveUninitialized:true,
    store:MongoStore.create({
        mongoUrl:process.env.MONGODB_URL
    }),
}));


 app.use(express.static('public'));

 app.use(expresslayout);
 app.set('layout','./layouts/main');
 app.set('view engine','ejs');

 app.use('/',require('./server/routes/main'));
 app.use('/',require('./server/routes/admin'));


 app.listen(PORT, ()=>{
  console.log('app listening on PORT ${PORT}');
 });