const router = require('express').Router();
const bookRoutes = require('./book.routes');

module.exports = router.use('/books', bookRoutes);
