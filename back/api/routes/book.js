const express = require('express');
const router = express.Router();
const models = require('../../models');

module.exports = () => {

    router.get('/', (req, res) => {
        models.Books.findAll({ include: models.Authors }).then((books) => {
            res.send(books);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
    });

    router.get('/:id', (req, res) => {
        models.Books.findByPk(req.params.id).then((book) => {
            res.send(book);
        }).catch((error) => {
            res.sendStatus(500);
        });
    });

    router.delete('/:id', (req, res) => {
        models.Books.destroy({
            where: {
                id: req.params.id
            }
        }).then((book) => {
            res.status(200).send(true);
        }).catch((error) => {
            res.sendStatus(500);
        });
    });

    router.post('/', (req, res) => {
        models.Books.create(req.body);
    });

    router.put('/:id', (req, res) => {
        delete req.body.title;
        models.Books.update(req.body, {
            where: {
                id: req.body.id
            }
        });
    });

    router.put('/:id/author', (req, res) => {
        models.Books.findByPk(req.params.id).then(book => {
            book.addAuthors(req.body.id);
            book.save();
        })
    });

    return router;
};
