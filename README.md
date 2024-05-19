# mern-auth
Secure Authentication Service for MERN Stack using ReactJs and NestJs

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">

# [React](https://react.dev/) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/facebook/react/blob/main/LICENSE) [![npm version](https://img.shields.io/npm/v/react.svg?style=flat)](https://www.npmjs.com/package/react) [![CircleCI Status](https://circleci.com/gh/facebook/react.svg?style=shield)](https://circleci.com/gh/facebook/react) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://legacy.reactjs.org/docs/how-to-contribute.html#your-first-pull-request)

React is a JavaScript library for building user interfaces.


<h1 align="center">Simple & Basic MERN AUTH APP </h1>
This is a very basic example of signIn and signUp in Node.js and NestJs framework . I have applied REST based API recommendations  .

From front-end i have used ReactJs starter setup . Check images in docs.

Database Used : Mongodb And ORM as Mongoose .

Have used eslint | prettier modules for finding and fixing problems/linting issues in my code .

For Authentication I have used Passport jwt strategy.

For validation : Express validation

As per business needs i have used winston logger for logs.



Test cases will be written in Upcoming days using testing framework Jest https://jestjs.io/ .


### Built With :

NodeJs , NestJs , winston, Postman, ReactJs, Typescript, Javascript, PassportJs, MongoDb, Mongoose, Eslint, etc


Getting Started :

i have use node version v16.15.0  & npm verion 8.5.5 .

### Prerequisites:

npm, MongoDb

Clone the repo take git pull .(Master branch is the final one)

Install NPM packages

npm install ( npm i ) for both modules separately (We can move modules in different cloud services)

For Backend :

```bash
#cd ./nest-js-auth/ then 
npm i 

#type in terminal
 npm run start:dev 
```

open your postman(preferred) 

And type: 

```bash
localhost:8000
```

My Postman API collection public link below : 
https://www.postman.com/gladiator-dev/workspace/anzar-dev/collection/5511458-04cfd33b-d038-4b42-85a7-9b4226dece26?action=share&creator=5511458


### API's :
Below is a list of the required API's for the application.


1. **_POST_** `/auth/signup` - for Sign up

2. **_POST_** `/auth/signin` - for sign In

3. **_GET_** `/auth-dev-testing` - It was just to check working of JWT authentication .


For UI front-end :


```bash
#cd ./react-js-auth/
#type in terminal
npm i
npm start
```


if you want to change environment variables <here i have pushed my .env file too>

