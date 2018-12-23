# UnNetwork v1.0 [Live Demo](https://un-network.herokuapp.com)

MERN Stack (React, Express, Mongo, Node) simple Social Network. Connect developers with profile, bio, post, comment capabilities.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installing

A step by step series of examples that tell you how to get a development env running

This is a production ready version for Heroku. To start and run locally:

```
  npm run client-install
  npm install
  npm run dev
```

Be sure to setup your Mongo DB and setup a keys_dev.js file like keys.example.js with your dev credentials and jwt secret.

## Deployment

To deploy your app to heroku setup your MONGO_URI and SECRET_OR_KEY in development variables and deploy to Heroku with Heroku CLI

End with an example of getting some data out of the system or using it for a little demo


### Functionalities 

* User auth with Passport JWT
* User can manage Bio, Experiences and Education
* User can Post, Like and see other user feeds'


## @ToDO

* Add a server side controller and break down router js files
* Change promises into async await
* Add ES6 Babel support to server side
* Make a Digital Ocean production ready version

## Authors

* **Filippo Rivolta** - *Initial work* 

## License

This project is licensed under the MIT License