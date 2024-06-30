const express = require('express');
const cors = require('cors');
const pgp = require('pg-promise')();
const db = pgp('postgres://postgres:k7331OW4@localhost:5432/Life_Database');
const app = express();
app.use(cors());
app.use(express.json());
const port = 3001;

app.get('/logs', (req, res) => {
  db.any('SELECT * FROM logs ORDER BY createdat DESC').then((data) => res.send(data));
});

app.post('/logs_push', (req, res) => {
  if (!req.body.title) return console.error('No body');
  const title = req.body.title;
  const description = req.body.description;
  const createdat = new Date().toDateString().slice(4);

  db.none(
    `INSERT INTO logs (TITLE, DESCRIPTION, CREATEDAT) VALUES ('${title}', '${description}', '${createdat}')`
  );
  db.any('SELECT * FROM logs ORDER BY createdat DESC').then((data) => {
    res.send(data);
  });
});

app.get('/full', (req, res) => {
  db.any('SELECT * FROM full_table ORDER BY title').then((data) => res.send(data));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
