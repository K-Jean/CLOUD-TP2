const express = require('express');
const book = require('./routes/book');
const author = require('./routes/author');
const router = express.Router();

module.exports = () => {
    router.use('/book',book());
    router.use('/author',author());

    return router;
};