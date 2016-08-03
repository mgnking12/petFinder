var express = require('express');
var app = express();
var port = process.env.PORT || 5000;
var nav = [{
    Link: '/Dogs',
    Text: 'Dogs'
}, {
    Link: '/Cats',
    Text: 'Cats'
}];
var bookRouter = express.Router();
app.use(express.static('public'));
// app.use(express.static('src/views'));
app.set('views', './src/views');

// you only need the two things below if you are using handlebars
// var handlebars = require('express-handlebars')
// app.engine('.hbs', handlebars({
//     extname: '.hbs'
// }));

// change .hbs to jade, or ejs if you'd rather use jade or ejs and vice versa
app.set('view engine', 'ejs');
var dogs = [];
bookRouter.route('/Dogs')
    .get(function(req, res) {
        res.render('dogs', {
            title: 'Dogs',
            nav: [{
                Link: '/Dogs',
                Text: 'Dogs'
            }, {
                Link: '/Cats',
                Text: 'Cats'
            }]
        });
    });
app.use('/', bookRouter);
bookRouter.route('/Cats')
    .get(function(req, res) {
        res.render('cats', {
            title: 'Cats',
            nav: [{
                Link: '/Dogs',
                Text: 'Dogs'
            }, {
                Link: '/Cats',
                Text: 'Cats'
            }]
        });
    });
bookRouter.route('/single')
    .get(function(req, res) {
        res.send('hello single dogs from bookRouter');
    });


app.get('/', function(req, res) {
    res.render('index', {
        title: 'hello from render',
    });
});
// app.get('/dogs', function(req, res) {
//     res.send('hello dogs');
// });
app.listen(port, function(err) {
    console.log('running on port ' + port);
});