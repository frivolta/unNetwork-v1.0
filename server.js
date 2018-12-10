const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const users = require ('./routes/api/users');
const profile = require ('./routes/api/profile');
const posts = require ('./routes/api/posts');

const app = express();
/**
 * Middleware
 */
//Body Parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


/**
 * MONGO DB CONNECTION
 */
//DB Config
const db = require ('./config/keys').mongoURI;
//Connect to mongoDB
mongoose.connect(db)
    .then(()=>console.log('MongoDB Connected'))
    .catch((err)=>console.log(err));

/**
 * ROUTES
 */
//Basic routes
app.get ('/', (req, res)=> res.send('hello'));
app.use ('/api/users', users);
app.use ('/api/profile', profile);
app.use ('/api/posts', posts);

/**
 * START AND LISTEN
 */
//Send to config
const port = process.env.PORT || 5000;
app.listen(port, ()=> console.log (`Server running on port ${port}`));