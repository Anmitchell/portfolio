require('dotenv').config()
const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 7000;

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});