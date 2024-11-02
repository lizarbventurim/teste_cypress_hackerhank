const express = require('express');

const app = express();
const port = 8000;

app.use(express.static('app'));

app.get('/', (req, res) => {
  res.send('index');
});

app.listen(port, () => console.log(`Server listening on port: ${port}`));
