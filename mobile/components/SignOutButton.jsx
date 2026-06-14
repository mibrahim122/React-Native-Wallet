import { useAuth } from "@clerk/clerk-expo";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export function SignOutButton() {
  const { signOut } = useAuth();
  
  return (
    <TouchableOpacity onPress={() => signOut()} style={styles.button}>
      <Ionicons name="log-out-outline" size={24} color="#f43f5e" />
      <Text style={styles.text}>Sign Out</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  text: {
    marginLeft: 8,
    color: "#f43f5e",
    fontWeight: "bold",
  },
});
