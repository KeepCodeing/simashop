const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(path.resolve(__dirname, './')));

app.listen(port, () => {
  console.log("port: " + port);
});

app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, './html/index.html'));
});
