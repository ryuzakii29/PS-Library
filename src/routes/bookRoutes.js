const express = require('express');
const bookRouter = express.Router();

function router(nav){
    const books = [{
      title: 'Book Title',
      genre: 'Book Genre',
      author: 'Book Author',
      read: false
    },
    {
      title: 'Book2 Title2',
      genre: 'Book2 Genre2',
      author: 'Book2 Author2',
      read: false
    }];
    
    bookRouter.route('/')
    .get((req, res)=>{
      res.render('booksList',
      {
        nav,
        title: 'Library',
        books
      });
    });

  bookRouter.route('/:id')
  .get((req, res)=>{
    const { id } = req.params;
    res.render(
      'bookView',
      {
        nav,
        title: 'Library',
        book: books[id]
      }
    )
  });
  return bookRouter;
}


  module.exports = router;