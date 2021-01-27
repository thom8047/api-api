const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const app = express();

//use cors to allow cross origin resource sharing
app.use(
  cors({
    origin: 'https://portfolio-api-reg.herokuapp.com/',
    credentials: true,
  })
);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let contacts = [];

app.get('/home', function(req, res) {
  console.log('Inside Home Login');
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });
  console.log('Contacts : ', JSON.stringify(contacts));
  res.end(JSON.stringify(contacts));
});

app.post('/create', function(req, res) {
  const newContact = {
    Name: req.body.name,
    Email: req.body.email,
    Description: req.body.body,
  };

  contacts.push(newContact);
  console.log(contacts);
});

//start your server on port 3001
app.listen(3001, () => {
  console.log('Server Listening on port 3001');
});