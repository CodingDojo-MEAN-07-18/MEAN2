const bookController = require('../controllers/book.controller');
const router = require('express').Router();

module.exports = router
  .get('/', bookController.index) // /api/books
  .get('/:book_id', bookController.show) // /books/alskdjfhalksjdhf
  .post('/', bookController.create) // /books
  .put('/:book_id', bookController.update) // /books/alskdjfhalksjdhf
  .delete('/:book_id', bookController.destroy); // /books/alskdjfhalksjdhf
