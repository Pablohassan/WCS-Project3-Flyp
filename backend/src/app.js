const express = require("express");
const path = require("path");
const cors = require("cors");
const session = require("express-session");
const router = require("./router");
// on créé express app
const app = express();

// modif session Rusmir
// maintien de la sessions
app.use(
  session({
    name: "flypa1556204",
    secret: "malclequidechire!",

    resave: true,
    saveUninitialized: true,
    cookie: {
      secure: false,
      // durée de la session
      maxAge: 24 * 60 * 60 * 1000,
    },
  })
);

// use some application-level middlewares
app.use(
  cors({
    origin: process.env.FRONTEND_URL ?? "http://localhost:3000",
    optionsSuccessStatus: 200,
    // ajout necessaire  pour la session
    credentials: true,
    //
  })
);

app.use(express.json());

// Serve the public folder for public resources
app.use(express.static(path.join(__dirname, "../public")));

// Serve REACT APP
app.use(express.static(path.join(__dirname, "..", "..", "frontend", "dist")));

// API routes
app.use("/api", router);

// Redirect all requests to the REACT app
app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "..", "frontend", "dist", "index.html")
  );
});

// ready to export
module.exports = app;
