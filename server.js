const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://hehe:hehe@cluster0.6squrle.mongodb.net/<pokemon>?retryWrites=true&w=majority"
const dbName = 'pokemon';
const collectionName = 'users';
const bodyParser = require('body-parser');
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
// Configure the middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Serve the login page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/login.html');
});

// Handle login form submissions
app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // Connect to the MongoDB database
  MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
    if (err) {
      console.log(err);
      return res.status(500).send();
    }

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Find the user with the specified credentials
    collection.findOne({ username, password }, (err, user) => {
      if (err) {
        console.log(err);
        return res.status(500).send();
      }

      if (!user) {
        return res.status(401).send();
      }

      // Redirect to the index page
      res.redirect('/index.html');
    });
  });
});

// Serve the index page
app.get('/index.html', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});