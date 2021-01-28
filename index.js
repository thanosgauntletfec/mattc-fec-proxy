const express = require('express');
const { createProxyMiddleware }  = require('http-proxy-middleware');
const path = require('path')
const cors = require('cors')

const app = express();

const PORT = 3080;
const HOST = "localhost";

app.use(cors({
  origin: 'http://ec2-54-183-180-104.us-west-1.compute.amazonaws.com:2080/',
  optionsSuccessStatus: 200
}))
app.use(express.static('./public'));



app.listen(PORT, "localhost", () => {
  console.log(`starting proxy at ${HOST}:${PORT}`)
})

