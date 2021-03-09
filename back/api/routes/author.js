const express = require('express');
const router = express.Router();
const models = require('../../models');

module.exports = () => {

    router.get('/', (req, res) => {
        models.Authors.findAll().then((authors) => {
            res.send(authors);
        }).catch((error) => {
            res.sendStatus(500);
        });
    });

    router.get('/:id', (req, res) => {
        models.Authors.findByPk(req.params.id).then((author) => {
            res.send(author);
        }).catch((error) => {
            res.sendStatus(500);
        });
    });

    router.delete('/:id', (req, res) => {
        models.Authors.destroy({
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
        models.Authors.create(req.body);
    });

    router.put('/:id', (req, res) => {
        models.Authors.update(req.body, {
            where: {
                id: req.body.id
            }
        });
    });

    return router;
};
