const express = require("express");
const axios = require("axios");
const cors = require("cors");
const NodeCache = require("node-cache");


const app = express();
const port = process.env.PORT || 3000;

const cache = new NodeCache({ stdTTL: 60 });

app.use(cors());

app.get("/price/:id", async (req, res) => {
  const { id } = req.params;

  const cachedData = cache.get(id);
  if (cachedData) {
    return res.json({ source: "cache", ...cachedData });
  }

  try {
    const url = `https://api.coingecko.com/api/v3/coins/${id}`;
    const response = await axios.get(url);

    const data = {
      name: response.data.name,
      symbol: response.data.symbol,
      price: response.data.market_data.current_price.usd,
    };

    cache.set(id, data);

    res.json({ source: "api", ...data });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.listen(port, () => {
  console.log(`Crypto Price API running on http://localhost:${port}`);
});