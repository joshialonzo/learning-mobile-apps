import { Ionicons } from "@expo/vector-icons";
import { Share, TouchableOpacity } from "react-native";
import { Meal } from "@/storage/meals";
import { colors } from "@/styles/global";

type ShareButtonProps = {
  meals: Meal[];
};

/**
 * Renders a share icon button that, when pressed, opens the native share sheet
 * with an aggregated daily macro summary.
 * @param meals - The list of today's logged meals used to compute totals.
 */
export default function ShareButton({ meals }: ShareButtonProps) {
  /**
   * Computes the total calories, protein, carbs, and fat across all meals,
   * then invokes the native share sheet with a formatted summary string.
   */
  const handleShare = async () => {
    const totals = meals.reduce(
      (acc, meal) => ({
        calories: acc.calories + meal.calories,
        protein: acc.protein + meal.protein,
        carbs: acc.carbs + meal.carbs,
        fat: acc.fat + meal.fat,
      }),
      { calories: 0, protein: 0, carbs: 0, fat: 0 },
    );

    await Share.share({
      message: `MacroZone Daily Summary\n\nCalories: ${totals.calories}\nProtein: ${totals.protein}g\nCarbs: ${totals.carbs}g\nFat: ${totals.fat}g\n\nMeals: ${meals.length} logged today`,
    });
  };

  return (
    <TouchableOpacity onPress={handleShare}>
      <Ionicons name="share-outline" size={24} color={colors.primary} />
    </TouchableOpacity>
  );
}