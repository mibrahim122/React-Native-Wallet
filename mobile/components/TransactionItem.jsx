import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export function TransactionItem({ transaction, onDelete }) {
  const isIncome = transaction.type === "income";
  
  const handleDelete = () => {
    Alert.alert("Delete", "Are you sure you want to delete this transaction?", [
      { text: "Cancel", style: "cancel" },
      { text: "Delete", style: "destructive", onPress: () => onDelete(transaction._id) },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.title}>{transaction.title}</Text>
        <Text style={styles.date}>{new Date(transaction.date).toLocaleDateString()}</Text>
      </View>
      <View style={styles.actions}>
        <Text style={[styles.amount, { color: isIncome ? "#16a34a" : "#ef4444" }]}>
          {isIncome ? "+" : "-"}${Math.abs(transaction.amount).toFixed(2)}
        </Text>
        <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
          <Ionicons name="trash-outline" size={20} color="#6b7280" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f9fafb",
    padding: 16,
    borderRadius: 12,
    marginBottom: 8,
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
  },
  date: {
    fontSize: 14,
    color: "#6b7280",
    marginTop: 4,
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
  },
  amount: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 12,
  },
  deleteButton: {
    padding: 4,
  },
});
