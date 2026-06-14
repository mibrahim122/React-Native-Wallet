import { View, Text, StyleSheet } from "react-native";

export function BalanceCard({ summary }) {
  const balance = Number(summary?.balance || 0);
  
  return (
    <View style={styles.card}>
      <Text style={styles.label}>Total Balance</Text>
      <Text style={styles.amount}>${balance.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1e40af",
    padding: 20,
    borderRadius: 16,
    marginVertical: 16,
    alignItems: "center",
  },
  label: {
    color: "#bfdbfe",
    fontSize: 16,
    marginBottom: 8,
  },
  amount: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
  },
});
