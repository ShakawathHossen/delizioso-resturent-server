const express= require('express');
const app = express();
const cors = require('cors');
const port= process.env.PORT || 5000;
const chiefs= require('./data/chiefs.json')

app.use(cors());

app.get('/', (req, res) => {
  res.send('DELIZIOSO running Now')
})

app.get('/chiefs',(req, res) => {
    res.send(chiefs);
});

app.listen(port, () => {
  console.log(`Delizioso API is Running on port ${port}`)
})