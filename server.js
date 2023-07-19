const express = require("express");
const app = express();
const simpsons = require("./simpsons.json");

simpsons.forEach((item, index) => {
  item.id = index + 1;
});

app.use((req, res, next) => {
  console.log("new request");
  next();
});

app.use((req, res, next) => {
  req.simpsons = simpsons;
  next();
});

app.use(express.json());

// to bring in routes files
app.use("/get", require("./routes/get"));
app.use("/delete", require("./routes/delete"));
app.use("/add", require("./routes/add"))
app.use("/update", require("./routes/update"))

const port = process.env.PORT || 6001;
app.listen(port, () => {
  console.log("The server is running!");
});
