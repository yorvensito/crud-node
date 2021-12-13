const express = require('express');

const app = express();
const path = require('path');

// home

app.use('/static', express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(3000, () => {
  console.log(`server is running on port`, 3000);
});
