let express = require("express");
let mongoose = require("mongoose");
let routes = require("./routes");
let app = express();
let PORT = process.env.PORT || 3001;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(routes);
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
