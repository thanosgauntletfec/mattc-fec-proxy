const express = require('express');
const cors = require('cors')
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

const PORT = process.env.PORT || 3080;


// app.use(cors({
//   origin: 'http://ec2-54-183-180-104.us-west-1.compute.amazonaws.com:2080/',
//   optionsSuccessStatus: 200
// }))
app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.listen(PORT, () => {
  console.log(`starting proxy at port ${PORT}`)
})

