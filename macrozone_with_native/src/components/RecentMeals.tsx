import { StyleSheet, Text, View } from "react-native";
import { Meal } from "@/storage/meals";
import MealItem from "@/components/MealItem";

type RecentMealsProps = {
  meals: Meal[];
  onDelete: () => void;
};

/**
 * Renders up to the five most recently logged meals or an empty-state message.
 * @param meals - The full list of logged meals; only the first five are displayed.
 * @param onDelete - Callback invoked after a meal has been successfully deleted,
 *   allowing the parent to refresh its meal list.
 */
export default function RecentMeals({ meals, onDelete }: RecentMealsProps) {
  return (
    <View style={{ marginTop: 30 }}>
      <Text style={styles.sectionTitle}>Recent Meals</Text>
      {meals.length === 0 ? (
        <Text style={styles.empty}>No meals logged yet.</Text>
      ) : (
        meals
          .slice(0, 5)
          .map((meal) => (
            <MealItem
              key={meal.id}
              id={meal.id}
              name={meal.name}
              calories={meal.calories}
              protein={meal.protein}
              carbs={meal.carbs}
              fat={meal.fat}
              onDelete={onDelete}
            />
          ))
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#ffffff",
    marginBottom: 16,
  },
  empty: {
    color: "#a0a0b0",
    fontSize: 14,
  },
});