const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ mes: "app is hosted on vercel test" });
});

module.exports = app;
