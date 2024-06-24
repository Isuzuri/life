const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
const port = 3001;

const logData = [];
const tableData = [
  {
    title: 'Hello',
    type: 'Doujinsi',
    source: 'Hanime.tv',
    link: 'https://google.com',
    tags: 'Ahegao'
  }
];

app.get('/table', (req, res) => {
  res.send({
    dataForTable: tableData
  });
});

app.get('/logs', (req, res) => {
  res.send({
    dataForLogs: logData
  });
});

app.post('/logs_push', (req, res) => {
  if (!req.body.title) return console.error('No body');

  console.log(req.body);

  const title = req.body.title;
  const description = req.body.description;
  const createTime = new Date(Date.now()).toLocaleString();
  const newPost = { title: title, description: description, createTime };
  logData.push(newPost);
  res.send(newPost);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
