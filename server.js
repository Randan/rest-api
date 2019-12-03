require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

const subscribersRouter = require('./routes/subscribers');
const logging = require('./middlewares/logging');

mongoose.connect(
    process.env.DATABASE_URL,
    { useNewUrlParser: true, useUnifiedTopology: true }
);
const db = mongoose.connection;

db.on('error', error => console.log(error));
db.once('open', () => console.log('connected to database'));

app.use(express.json());
app.use(logging);

app.use('/subscribers', subscribersRouter);

app.listen(3000, () => console.log('server started'));