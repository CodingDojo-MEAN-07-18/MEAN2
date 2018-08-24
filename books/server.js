const express = require('express');
const parser = require('body-parser');
const path = require('path');

const port = process.env.PORT || 8000;
const app = express();

require('./server/config/database');
const routes = require('./server/routes');

app
  .use(parser.urlencoded({ extended: true }))
  .use(parser.json())
  .use(express.static(path.resolve('dist/public')))
  .use('/api', routes)
  .use(require('./server/routes/catch-all.route'))
  .listen(port, () => console.log(`Express server listening on port ${port}`));
