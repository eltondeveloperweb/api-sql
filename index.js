const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const helmet = require('helmet');
const port = process.env.PORT || 9000;
require('dotenv').config() 
const cors = require('cors')


app.use(cors())

const cursoRoute = require('./src/routes/integration-route');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(helmet());

app.use('/', cursoRoute);

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});