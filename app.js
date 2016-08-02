var express = require('express');
var app = express();
var port = process.env.PORT || 5000;
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
var books = [];
bookRouter.route('/')
    .get(function(req, res) {
        res.render('books', {
            title: 'Books',
            nav: [{
                Link: '/Books',
                Text: 'Books'
            }, {
                Link: '/Authors',
                Text: 'Authors'
            }]
        })
    });
bookRouter.route('/single')
    .get(function(req, res) {
        res.send('hello single books from bookRouter')
    });
app.use('/Books', bookRouter);

app.get('/', function(req, res) {
    res.render('index', {
        title: 'hello from render',
        nav: [{
            Link: '/Books',
            Text: 'Books'
        }, {
            Link: '/Authors',
            Text: 'Authors'
        }]
    });
});
app.get('/books', function(req, res) {
    res.send('hello books');
});
app.listen(port, function(err) {
    console.log('running on port ' + port);
});