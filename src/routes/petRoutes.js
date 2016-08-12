var express = require('express');
var petRouter = express.Router();
var models = require('../../models/');
var router = function(nav) {
    // var pets = [{
    //     'name': 'Organa',
    //     'age': '1',
    //     'type': 'Dog',
    //     'img': 'http://placehold.it/350x150',
    //     'description': 'Bacon ipsum dolor amet filet mignon turducken sirloin pork prosciutto, porchetta frankfurter pork belly pig ball tip drumstick.'
    // }, {
    //     'name': 'Kevin',
    //     'age': '5',
    //     'type': 'Cat',
    //     'img': 'http://placehold.it/350x150',
    //     'description': 'Bacon ipsum dolor amet filet mignon turducken sirloin pork prosciutto, porchetta frankfurter pork belly pig ball tip drumstick.'
    // }, {
    //     'name': 'Max',
    //     'age': '14',
    //     'type': 'Dog',
    //     'img': 'http://placehold.it/350x150',
    //     'description': 'Bacon ipsum dolor amet filet mignon turducken sirloin pork prosciutto, porchetta frankfurter pork belly pig ball tip drumstick.'
    // }, {
    //     'name': 'Otto',
    //     'age': '2',
    //     'type': 'Dog',
    //     'img': 'http://placehold.it/350x150',
    //     'description': 'Bacon ipsum dolor amet filet mignon turducken sirloin pork prosciutto, porchetta frankfurter pork belly pig ball tip drumstick.'
    // }];
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