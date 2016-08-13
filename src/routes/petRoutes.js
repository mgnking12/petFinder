var express = require('express');
var petRouter = express.Router();
var models = require('../../models/');
var router = function(nav) {
    // petRouter.route('/')
    //     .get(function(req, res) {
    //         res.render('pets', {
    //             title: 'Pets',
    //             nav: nav,
    //             pets: pets
    //         });
    //     });
    petRouter.route('/').get(function(req, res) {
        models.pets.findAll().then(function(data) {
            // data should be all your pets
            res.render('pets', {
                title: 'Pets',
                nav: nav,
                pets: data
            });
            console.log(data);
        });
    });
    petRouter.route('/:id')
        .get(function(req, res) {
            models.pets.findById(req.params.id).then(function(data) {
                // var id = req.params.id;
                res.render('petView', {
                    title: data.name,
                    nav: nav,
                    pet: data
                });
            });
        });

    return petRouter;
};

module.exports = router;