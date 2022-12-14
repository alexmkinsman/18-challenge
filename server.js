const express = require('express');
const db = require('./config/connection.js');
// routes

const PORT = process.env.PORT || 3001
const app = express();


app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// app.routes

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on ${PORT}!`)
  });
});