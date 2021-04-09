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
app.use("/api/pila", require("./routes"));

module.exports = app;
