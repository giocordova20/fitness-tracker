const express = require("express");
const mongoose = require("mongoose");
const compression = require("compression");


const app = express();
const PORT = process.env.PORT || 3500

app.use(compression());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/trackerDB", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});


app.listen(PORT, () => {
  console.log(`App running on port http://localhost:${PORT}!`);
});
