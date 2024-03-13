const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const rt = require("./Router");
const database = require("./Config/database");
const app = express();
const port = process.env.POST;

app.use(cookieParser());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
rt(app);
database.connect();

// app.use(methodOverride());
// app.use(logErrors);
// app.use(clientErrorHandler);
// app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
