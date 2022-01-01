import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons, EvilIcons } from "@expo/vector-icons";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const CoinDetailHeader = ({ symbol, marketCapRank, image }) => {

  let navigation = useNavigation()

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity>
        <Ionicons
          name="chevron-back-sharp"
          size={30}
          color="white"
          onPress={() => navigation.goBack()}
        />
      </TouchableOpacity>
      <View style={styles.tickerContainer}>
        <Image source={{ uri: image }} style={{ width: 25, height: 25 }} />
        <Text style={styles.tickerTitle}>{symbol.toUpperCase()}</Text>
        <View style={styles.rankContainer}>
          <Text style={styles.rankText}>#{marketCapRank}</Text>
        </View>
      </View>
      <EvilIcons name="user" size={30} color="white" />
    </View>
  );
};

export default CoinDetailHeader;
