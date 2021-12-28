import React from "react";
import { View, Text } from "react-native";
import CoinDetailHeader from "./components/CoinDetailHeader";
import Coin from "../../../assets/data/crypto.json";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";

const CoinDetailScreen = () => {
  let {
    image: { small },
    name,
    symbol,
    market_data: {
      market_cap_rank,
      current_price,
      price_change_percentage_24h,
    },
  } = Coin;

  let percentageColor = price_change_percentage_24h < 0 ? "#ea3943" : "#16c784";

  return (
    <View style={{ padding: 10 }}>
      <CoinDetailHeader
        image={small}
        symbol={symbol}
        marketCapRank={market_cap_rank}
      />
      <View style={styles.priceContainer}>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.currentPrice}>${current_price.usd}</Text>
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
    </View>
  );
};

export default CoinDetailScreen;
