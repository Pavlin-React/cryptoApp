import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Dimensions,
  TextInput,
  ActivityIndicator,
} from "react-native";
import CoinDetailHeader from "./components/CoinDetailHeader";
import Coin from "../../../assets/data/crypto.json";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";
import {
  ChartDot,
  ChartPath,
  ChartPathProvider,
  ChartYLabel,
} from "@rainbow-me/animated-charts";
import { useRoute } from "@react-navigation/native";
import {
  getDetailedCoinData,
  getCoinMarketChart,
} from "../../services/requests";

const CoinDetailScreen = () => {
  let [coin, setCoin] = useState(null);
  let [coinMarketData, setCoinMarketData] = useState(null);
  let route = useRoute();
  let {
    params: { coinId },
  } = route;
  let [loading, setLoading] = useState(false);
  let [coinValue, setCoinValue] = useState("1");
  let [usdValue, setUsdValue] = useState('');

  let fetchCoinData = async () => {
    setLoading(true);
    let fetchedCoinData = await getDetailedCoinData(coinId);
    let fetchedCoinMarketData = await getCoinMarketChart(coinId);
    setUsdValue(fetchedCoinData.market_data.current_price.usd.toString())
    setCoin(fetchedCoinData);
    setCoinMarketData(fetchedCoinMarketData);
    setLoading(false);
  };
  useEffect(() => {
    fetchCoinData();
  }, []);


  if (loading || !coin || !coinMarketData) {
    return <ActivityIndicator size="large" />;
  }

  let {
    image: { small },
    name,
    symbol,
    market_data: {
      market_cap_rank,
      current_price,
      price_change_percentage_24h,
    },
  } = coin;
  let { prices } = coinMarketData;

  let screenWidth = Dimensions.get("window").width;

  let formatCurrency = (value) => {
    "worklet";
    if (value === "") {
      return `$${current_price.usd.toFixed(2)}`;
    }
    return `$${parseFloat(value).toFixed(2)}`;
  };

  let percentageColor = price_change_percentage_24h < 0 ? "#ea3943" : "#16c784";

  let changeCoinValue = (value) => {
    setCoinValue(value);
    setUsdValue(value * current_price.usd);
  };

  let changeUsdValue = (value) => {
    setUsdValue(value);
  };

  return (
    <View style={{ padding: 10 }}>
      <ChartPathProvider
        data={{
          points: prices.map(([x, y]) => ({ x, y })),
          smoothingStrategy: "bezier",
        }}
      >
        <CoinDetailHeader
          image={small}
          symbol={symbol}
          marketCapRank={market_cap_rank}
        />
        <View style={styles.priceContainer}>
          <View>
            <Text style={styles.name}>{name}</Text>
            <ChartYLabel format={formatCurrency} style={styles.currentPrice} />
          </View>
          <View
            style={{
              backgroundColor: percentageColor,
              borderRadius: 5,
              paddingHorizontal: 3,
              paddingVertical: 8,
              flexDirection: "row",
            }}
          >
            <AntDesign
              name={price_change_percentage_24h < 0 ? "caretdown" : "caretup"}
              size={12}
              color="white"
              style={{ alignSelf: "center", marginRight: 5 }}
            />
            <Text style={styles.priceChange}>
              {price_change_percentage_24h.toFixed(2)}%
            </Text>
          </View>
        </View>
        <View>
          <ChartPath
            strokeWidth={2}
            height={screenWidth / 2}
            stroke={current_price.usd > prices[0][1] ? "#16c784" : "#ea3943"}
            width={screenWidth}
          />
          <ChartDot
            style={{
              backgroundColor:
                current_price.usd > prices[0][1] ? "#16c784" : "#ea3943",
            }}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "row", flex: 1 }}>
            <Text style={{ color: "white", alignSelf: "center" }}>
              {symbol.toUpperCase()}
            </Text>
            <TextInput
              value={coinValue.toString()}
              style={styles.input}
              keyboardType="numeric"
              onChangeText={changeCoinValue}
            />
          </View>

          <View style={{ flexDirection: "row", flex: 1 }}>
            <Text style={{ color: "white", alignSelf: "center" }}>USD</Text>
            <TextInput
              value={usdValue.toString()}
              style={styles.input}
              keyboardType="numeric"
              onChangeText={changeUsdValue}
            />
          </View>
        </View>
      </ChartPathProvider>
    </View>
  );
};

export default CoinDetailScreen;
