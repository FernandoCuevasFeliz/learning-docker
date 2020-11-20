const express = require('express');
const routes = require('./routes');

require('./database');

const app = express();

// setting
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// route
app.use('/', routes);

app.listen(app.get('port'), () => {
  console.log('Server running on port', app.get('port'));
});
