import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function NoTransactionsFound() {
  return (
    <View style={styles.container}>
      <Ionicons name="receipt-outline" size={64} color="#d1d5db" />
      <Text style={styles.text}>No transactions yet.</Text>
      <Text style={styles.subtext}>Tap the + button to add one.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginTop: 16,
    fontSize: 18,
    color: "#4b5563",
    fontWeight: "600",
  },
  subtext: {
    marginTop: 8,
    fontSize: 14,
    color: "#6b7280",
  },
});
