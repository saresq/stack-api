const express = require("express");
const injectStack = require("./middlewares/injectStack");
const app = express();

// Settings
app.set("port", 4000);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(injectStack);

// Routes
app.use("/api/stack", require("./routes"));

module.exports = app;
