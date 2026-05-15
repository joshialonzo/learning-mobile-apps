import { StyleSheet, Text, View } from "react-native";

type MacroCardProps = {
  label: string;
  value: string;
  goal: string;
  color: string;
};

/**
 * Displays a single macro-nutrient card showing the current value, daily goal,
 * and a left-side color accent border.
 * @param label - The nutrient name (e.g. "Calories", "Protein").
 * @param value - The current consumed amount as a display string.
 * @param goal - The daily goal as a display string.
 * @param color - The CSS color used for the left border accent.
 */
export default function MacroCard({
  label,
  value,
  goal,
  color,
}: MacroCardProps) {
  return (
    <View style={[styles.card, { borderLeftColor: color }]}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.goal}>/ {goal}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#16213e",
    borderRadius: 12,
    padding: 16,
    width: "47%",
    borderLeftWidth: 4,
  },
  label: {
    fontSize: 14,
    color: "#a0a0b0",
  },
  value: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ffffff",
    marginTop: 4,
  },
  goal: {
    fontSize: 14,
    color: "#a0a0b0",
    marginTop: 2,
  },
});