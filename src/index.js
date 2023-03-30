const express = require('express');
require('dotenv').config();

const port = process.env.PORT || 3000;
const app = express();

app.get('/', (req, res)=>{
  res.send('This is the Throu Backend')
});
app.listen(port, ()=>{
  console.log(`app listening on port ${port}`)
});
