const express = require('express');
const PORT = 3000;
const app = express();
require('../database/mongodb/index')
const routers =require('./Router/route')
app.use(express.json())
app.use(express.static(__dirname + '/../client/dist'));
app.use("/api/car",routers)

// app.get('/', (req, res) => {
//   res.send('Hello from the server!');
// })

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});

