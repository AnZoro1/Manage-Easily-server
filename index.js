const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const morgan = require('morgan');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use(require('./src/routes/owner.route'));
app.use(require('./src/routes/object.route'));

const { PORT, MONGO_DB } = process.env;

mongoose
    .connect(MONGO_DB)
    .then(() => {
        console.log('База данных подключена');
    })
    .catch((error) => {
        console.log(error.toString());
    });

const server = app.listen(PORT, (error) => {
    if (error) {
        return console.log(error.toString());
    }
    console.log(`Сервер запущен на порту ${PORT}`);
});
