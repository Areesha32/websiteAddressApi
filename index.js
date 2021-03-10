const express = require('express');
const exphbs = require('express-handlebars');

const address = require('./Addresses');

const app = express();

// Handlebars Middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// To parse json objects as prsing of json is not enabled in express
// A middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Address App',
    address,
  });
});

app.get('/api/books', (req, res) => {
  res.send(books);
});

app.get('/I/want/title/', (req, res) => {
  var arr = [];
  if (Array.isArray(req.query.address)) {
    req.query.address.forEach((element) => {
      const add = address.find((b) => b.address === element);
      if (!add) {
        arr.push(element + a);
      } else {
        arr.push(add);
      }
    });
  } else {
    const add = address.find((b) => b.address === req.query.address);
    if (!add) {
      const element = req.query.address;
      res.render('index', {
        main: 'Website Addresses',
        element,
      });
    } else {
      arr.push(add);
    }
  }
  res.render('address', {
    main: 'Website Addresses',
    arr,
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
