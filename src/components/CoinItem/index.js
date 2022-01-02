import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./style";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";



const CoinItem = ({ marketCoin }) => {

  
  let {
    current_price,
    name,
    market_cap_rank,
    price_change_percentage_24h,
    symbol,
    market_cap,
    image,
    id,
  } = marketCoin;

  let percentageColor = price_change_percentage_24h < 0 ? "#ea3943" : "#16c784";

  let normalizeCap = (marketCap) => {
    if (marketCap > 1_000_000_000_000) {
      return `${Math.floor(marketCap / 1_000_000_000_000)} T`;
    } else if (marketCap > 1_000_000_000) {
      return `${Math.floor(marketCap / 1_000_000_000)} B`;
    } else if (marketCap > 1_000_000) {
      return `${Math.floor(marketCap / 1_000_000)} M`;
    } else if (marketCap > 1_000) {
      return `${Math.floor(marketCap / 1_000)} K`;
    }
    return marketCap;
  };

  let navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.coinContainer}
      onPress={() => navigation.navigate('CoinDetailScreen', {coinId: id})}
    >
      <Image
        source={{
          uri: image,
        }}
        style={{ width: 30, height: 30, marginRight: 10, alignSelf: "center" }}
      />
      <View style={{ marginLeft: 10 }}>
        <Text style={styles.title}>{name}</Text>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.rankContainer}>
            <Text style={styles.rank}>{market_cap_rank}</Text>
          </View>
          <Text style={styles.text}>{symbol.toUpperCase()}</Text>

          <AntDesign
            name={price_change_percentage_24h < 0 ? "caretdown" : "caretup"}
            size={12}
            color={percentageColor}
            style={{ alignSelf: "center", marginRight: 5 }}
          />
          <Text style={{ color: percentageColor }}>
            {price_change_percentage_24h.toFixed(3)}%
          </Text>
        </View>
      </View>
      <View style={{ marginLeft: "auto", alignItems: "flex-end" }}>
        <Text style={styles.title}>{current_price}</Text>
        <Text style={{ color: "white" }}>MCap {normalizeCap(market_cap)}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CoinItem;
