const express = require("express");
const app = express();
const db = require("./models");
port = 3001;
const router = require("./routes");
app.use(express.json());

app.get("/", (req, res) => {
  res.send("OK");
});

app.use("/api/user", router);

db.sequelize.sync().then((req) => {
  app.listen(port, () => {
    console.log("server Running on port no :", port);
  });
});
