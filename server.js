const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const morgan = require("morgan");
require("dotenv").config();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("URL Shortener Microservice Api is running");
});

const urlDatabase = {};
const id = 1;

function isValidUrl(url) {
  try {
    const validUrl = new URL(url);
    return validUrl.protocol === "http:" || validUrl.protocol === "https:";
  } catch (e) {
    return false;
  }
}

app.post("/api/shorturl", (req, res) => {
  const { url } = req.body;
  if (!isValidUrl(url)) {
    return res.json({ error: "invalid url" });
  }
  const shortUrl = id++;
  urlDatabase[shortUrl] = url;
  res.json({ original_url: url, short_utl: shortUrl });
});

app.get("/api/shorturl/:short_url", (req, res) => {
  const shortUrl = req.params.short_url;
  const originalUrl = urlDatabase[shortUrl];

  if (!originalUrl) {
    return res.json({ error: "No short URL found" });
  }

  res.redirect(originalUrl);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, (req, res) => {
  console.log("App is running on localhost:" + PORT);
});
