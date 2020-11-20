const { connect, connection } = require('mongoose');
const uri = process.env.PORT || 'mongodb://mongo/db_testmongo';
connect(uri, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

connection.once('open', () => console.log('DB is connected', uri));

connection.on('error', (error) => console.error(error));
