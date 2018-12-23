const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');

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
 * PASSPORT
 */
//Passport middleware
app.use(passport.initialize());
//passport config
require('./config/passport')(passport);

/**
 * ROUTES
 */
//Basic routes
app.use ('/api/users', users);
app.use ('/api/profile', profile);
app.use ('/api/posts', posts);

//Serve static assets if in production
if(process.env.NODE_ENV === 'production'){
    //Set Static folder
    app.use(express.static('client/build'));
    app.get('*', (req,res)=>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

/**
 * START AND LISTEN
 */
//Send to config
const port = process.env.PORT || 5000;
app.listen(port, ()=> console.log (`Server running on port ${port}`));