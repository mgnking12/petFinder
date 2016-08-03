var express = require('express');
var bookRouter = express.Router();
var router = function(nav) {
    var books = [{
        'cat': ['book', 'hardcover'],
        'name': 'The Lightning Thief',
        'author': 'Rick Riordan',
        'series_t': 'Percy Jackson and the Olympians',
        'sequence_i': 1,
        'genre_s': 'fantasy',
        'inStock': true,
        'price': 12.50,
        'pages_i': 384
    }, {
        'cat': ['book', 'paperback'],
        'name': 'The Sea of Monsters',
        'author': 'Rick Riordan',
        'series_t': 'Percy Jackson and the Olympians',
        'sequence_i': 2,
        'genre_s': 'fantasy',
        'inStock': true,
        'price': 6.49,
        'pages_i': 304
    }, {
        'cat': ['book', 'paperback'],
        'name': 'Sophie"s World : The Greek Philosophers',
        'author': 'Jostein Gaarder',
        'sequence_i': 1,
        'genre_s': 'fantasy',
        'inStock': true,
        'price': 3.07,
        'pages_i': 64
    }, {
        'cat': ['book', 'paperback'],
        'name': 'Lucene in Action, Second Edition',
        'author': 'Michael McCandless',
        'sequence_i': 1,
        'genre_s': 'IT',
        'inStock': true,
        'price': 30.50,
        'pages_i': 475
    }];
    bookRouter.route('/')
        .get(function(req, res) {
            res.render('booksListView', {
                title: 'Books',
                nav: nav,
                books: books
            });
        });
    bookRouter.route('/:id')
        .get(function(req, res) {
            var id = req.params.id;
            res.render('bookView', {
                title: 'Books',
                nav: nav,
                book: books[id]
            });

        });

    return bookRouter;
};

module.exports = router;