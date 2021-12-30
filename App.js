import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import CoinDetailScreen from "./src/screens/CoinDetailScreen";
import HomeScreen from "./src/screens/HomeScreen";
import CoinDetailHeader from "./src/screens/CoinDetailScreen/components/CoinDetailHeader";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer theme={{ color: {} }} style={styles.container}>
      <HomeScreen />
      <StatusBar style="light" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingTop: 50,
  },
});
