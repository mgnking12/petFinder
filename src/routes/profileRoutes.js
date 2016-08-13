var express = require('express');
var profileRouter = express.Router();
var models = require('../../models/');

var router = function(nav) {
    var Upets = [{
        'name': 'GIRLY GIRL',
        'type': 'Dog',
        'breed': 'Labrador Retriever',
        'img_url': 'http://photos.petfinder.com/photos/pets/35602514/1/?bust=1467931633&width=500&-x.jpg',
        'description': ''
    }, {
        'name': 'OSO',
        'type': 'Dog',
        'breed': 'Rottweiler',
        'img_url': 'http://photos.petfinder.com/photos/pets/35602515/1/?bust=1467931593&width=500&-x.jpg',
        'description': 'Bacon ipsum dolor amet filet mignon turducken sirloin pork prosciutto, porchetta frankfurter pork belly pig ball tip drumstick.'
    }, {
        'name': 'LOUIE',
        'type': 'Cat',
        'img_url': 'http://photos.petfinder.com/photos/pets/35695709/1/?bust=1469400328&width=500&-x.jpg',
        'description': 'I have my own webpage!   I adore being petted and love belly rubs!'
    }, {
        'name': 'BIA',
        'type': 'Labrador Retriever',
        'img_url': 'http://photos.petfinder.com/photos/pets/35695723/1/?bust=1468785460&width=500&-x.jpg',
        'description': ''
    }];

    profileRouter.route('/')
        .get(function(req, res) {
            res.render('profile', {
                title: 'Profile',
                nav: nav,
                pets: Upets
            });
        });

    profileRouter.route('/:id')
        .get(function(req, res) {
            var id = req.params.id;
            res.render('petView', {
                title: Upets[id].name,
                nav: nav,
                pet: Upets[id]
            });

        });

    return profileRouter;
};

module.exports = router;