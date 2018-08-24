const Book = require('mongoose').model('Book');

module.exports = {
  // get all of a resource (books)
  index(request, response) {
    console.log('requesting all books');
    Book.find({})
      .then(books => response.json(books))
      .catch(console.log);
  },

  // getting a single resource (book)
  show(request, response) {
    Book.findById(request.params.book_id)
      .then(book => response.json(book))
      .catch(console.log);
  },

  // creating a resource
  create(request, response) {
    Book.create(request.body)
      .then(book => response.json(book))
      .catch(error => {
        const errors = Object.keys(error.errors).forEach(
          key => error.errors[key].message
        );

        response.status(500).json(errors);
      });
  },

  // updating a resource
  update(request, response) {
    Book.findByIdAndUpdate(
      request.params.book_id,
      { $set: request.body },
      { new: true }
    )
      .then(book => response.json(book))
      .catch(error => {
        const errors = Object.keys(error.errors).forEach(
          key => error.errors[key].message
        );

        response.status(500).json(errors);
      });
  },

  // removing / destroying a resource
  destroy(request, response) {
    Book.findByIdAndRemove(request.params.book_id)
      .then(book => response.json(book))
      .catch(console.log);
  },
};
