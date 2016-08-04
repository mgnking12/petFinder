var express = require('express');
var petRouter = express.Router();
var router = function(nav) {
    var pets = [{
        'name': 'Organa',
        'age': '1',
        'type': 'Dog'
    }, {
        'name': 'Kevin',
        'age': '5',
        'type': 'Cat'
    }, {
        'name': 'Max',
        'age': '14n',
        'type': 'Dog'
    }, {
        'name': 'Otto',
        'age': '2',
        'type': 'Dog'
    }];
    petRouter.route('/')
        .get(function(req, res) {
            res.render('pets', {
                title: 'Pets',
                nav: nav,
                pets: pets
            });
        });
    petRouter.route('/:id')
        .get(function(req, res) {
            var id = req.params.id;
            res.render('petView', {
                title: pets[id].name,
                nav: nav,
                pet: pets[id]
            });

        });

    return petRouter;
};

module.exports = router;