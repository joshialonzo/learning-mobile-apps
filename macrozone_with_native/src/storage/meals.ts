import AsyncStorage from "@react-native-async-storage/async-storage";

export type Meal = {
  id: string;
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  createdAt: string;
};

const MEALS_KEY = "meals";

/**
 * Retrieves all stored meals from AsyncStorage.
 * @returns A promise that resolves to an array of Meal objects.
 */
export const getMeals = async (): Promise<Meal[]> => {
  const data = await AsyncStorage.getItem(MEALS_KEY);
  return data ? JSON.parse(data) : [];
};

/**
 * Persists a new meal to AsyncStorage, prepending it to the existing list.
 * @param meal - The meal data excluding `id` and `createdAt`, which are generated automatically.
 * @returns A promise that resolves to the newly created Meal with its generated id and timestamp.
 */
export const addMeal = async (
  meal: Omit<Meal, "id" | "createdAt">,
): Promise<Meal> => {
  const meals = await getMeals();
  const newMeal: Meal = {
    ...meal,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
  };
  await AsyncStorage.setItem(MEALS_KEY, JSON.stringify([newMeal, ...meals]));
  return newMeal;
};

/**
 * Removes a single meal from AsyncStorage by its id.
 * @param id - The unique identifier of the meal to delete.
 */
export const deleteMeal = async (id: string): Promise<void> => {
  const meals = await getMeals();
  const filtered = meals.filter((meal) => meal.id !== id);
  await AsyncStorage.setItem(MEALS_KEY, JSON.stringify(filtered));
};

/**
 * Removes all meals from AsyncStorage.
 */
export const clearAllMeals = async (): Promise<void> => {
  await AsyncStorage.removeItem(MEALS_KEY);
};