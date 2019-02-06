const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
//for windows "set DEBUG=app & nodemon app.js"
//for debian "DEBUG=app nodemon app.js"
const port = process.env.PORT || 3000;
const app = express();

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));
app.set('views', './src/views');
app.set('view engine', 'ejs');




const nav = [
  {link : '/books', title: 'Books'},
  {link: '/authors',title: 'Author'}
];

const bookRouter = require('./src/routes/bookRoutes')(nav);

app.use('/books', bookRouter);
app.get('/', (req, res) => {
  res.render(
    'index',
  {
    nav: [{link : '/books', title: 'Books'},
          {link: '/authors',title: 'Author'}],
    title: 'Library'
  });
});

app.listen(port, () => {
  debug(`listening to server:  ${chalk.green(port)}`);
});