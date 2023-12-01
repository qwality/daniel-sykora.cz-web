const express = require('express');
const app = express();
const port = 6000;

app.get('/', (req, res) => {
  res.send('daniel-sykora.cz -> NodeJS -> express -> endpoint\n');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});