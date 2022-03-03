const express = require("express");
const app = express();



app.get("/", (req, res) => {
  res.send('hello word')
})


app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});
