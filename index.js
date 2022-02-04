const express = require('express');
const bodyParser = require('body-parser');
require('dotenv/config');

const Router = require('./controllers/routes');
const { domainError, serverError } = require('./controllers/middlewares');

const app = express();
app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', Router.userRouter);
app.use('/login', Router.loginRouter);
app.use('/categories', Router.categoryRouter);
app.use('/post', Router.blogPostRouter);

app.use(domainError);
app.use(serverError);

app.listen(3000, () => console.log('ouvindo porta 3000!'));
