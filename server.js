const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors') 
const jobs = require('./jobs-routes');

app.use('/', jobs);
  
app.use(express.json());
 
app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});




