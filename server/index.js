const express = require("express");
// const itemRoutes = require('./routes/item.routes')

// TODO: Update this
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// const db = require('./database-mysql');
const db = require('./database-mongo');
const router = require('./routes/item.routes')
const app = express();
const cors=require('cors')
app.use(express.json());
const PORT = process.env.PORT || 3000
app.use(cors())

app.use('/api',router)
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));

// app.use("/api/items", itemRoutes);

app.listen(PORT, function () {
  console.log("----------------------------")
  console.log("listening on port 3000!");
  console.log("----------------------------")
});
