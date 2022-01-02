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
