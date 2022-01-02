import axios from "axios";

export let getDetailedCoinData = async (coinId) => {
  try {
    let response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=true`
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export let getCoinMarketChart = async (coinId) => {
  try {
    let response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=1&interval=hourly`
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export let getMarketData = async (pageNumber = 1) => {
  try {
    let response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=${pageNumber}&sparkline=false&price_change_percentage=24h`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
