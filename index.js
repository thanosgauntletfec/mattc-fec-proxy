const express = require('express');
const cors = require('cors')
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

const PORT = process.env.PORT || 3080;



app.use(express.static('/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.listen(PORT, () => {
  console.log(`starting proxy at port ${PORT}`)
})

