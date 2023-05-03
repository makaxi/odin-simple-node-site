const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile("public/index.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/public/about.html");
});

app.get("/contact-me", (req, res) => {
  res.sendFile(__dirname + "/public/contact-me.html");
});

app.get("*", (req, res) => {
  res.status(404);
  res.sendFile(__dirname + "/public/404.html");
})

app.listen(port, () =>{
  console.log(`example app listening on port ${port}!`);
});
