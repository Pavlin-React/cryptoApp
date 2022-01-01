import axios from "axios";

export let getDetailedCoinData = async (coinId) => {
  try {
    let response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${coinId}?tickers=false&market_data=false&community_data=false&developer_data=false`
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export let getCoinMarketChart = async (coinID) => {
  try {
    let response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=7`
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
