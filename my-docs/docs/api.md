---
sidebar_position: 2
---

# API Integration Details

## How Data is Fetched

The app fetches cryptocurrency data from the [CoinGecko API](https://www.coingecko.com/en/api).

Example API endpoint:
```bash
GET https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=5