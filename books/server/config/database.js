const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
const reg = new RegExp('\\.js$', 'i');

const modelsPath = path.resolve('server/models');

mongoose.connect(
  'mongodb://localhost:27017/books_and_stuff',
  {
    useNewUrlParser: true,
  }
);

mongoose.connection.on('connected', () => console.log('Mongodb connected'));

// only required in 4<
// mongoose.Promise = global.Promise;

fs.readdirSync(modelsPath).forEach(file => {
  if (reg.test(file)) {
    require(path.join(modelsPath, file));
  }
});

// my-model.js.bak
// my-model.JS
