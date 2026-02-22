// server.js
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const cheerio = require("cheerio");

// Import clause engine
const analyzePolicy = require("./clauseEngine");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("PolicyLens Backend Running 🚀");
});

const https = require("https");
// Analyze route
app.post("/analyze", async (req, res) => {
  const { url, text } = req.body;

  try {
    let policyText = text;

    // If URL is provided, fetch it
    if (url) {
      const agent = new https.Agent({ rejectUnauthorized: false });
      const response = await axios.get(url, { httpsAgent: agent });
      const $ = cheerio.load(response.data);
      policyText = $("body").text();
    }

    if (!policyText) {
      return res.status(400).json({ error: "URL or text is required" });
    }

    const result = analyzePolicy(policyText);

    res.json(result);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to analyze policy" });
  }
});

// Start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});