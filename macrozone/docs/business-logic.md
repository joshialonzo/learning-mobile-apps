# MacroZone Business Logic

`macrozone` is a nutrition tracking prototype that helps users log meals and view macro-nutrient totals.

## Core Concepts

### Meal logging

Users can add meals through the `Add Meal` screen, which validates required fields and stores each entry in AsyncStorage.

Each meal record includes:

- `id` — unique identifier generated from `Date.now()`
- `name` — meal name
- `calories` — calorie amount
- `protein` — protein grams
- `carbs` — carbohydrate grams
- `fat` — fat grams
- `createdAt` — ISO timestamp when the meal was saved

### Persistent storage

Meal persistence is handled in `src/storage/meals.ts`:

- `getMeals()` — loads all saved meals
- `addMeal()` — prepends a new meal to storage
- `deleteMeal()` — removes a meal by id
- `clearAllMeals()` — removes all logged meals

### Macro aggregation

The `MacroGrid` component computes totals across all logged meals and displays them in four cards:

- Calories
- Protein
- Carbs
- Fat

Goals are hard-coded in the UI as `2,000` calories, `150g` protein, `250g` carbs, and `65g` fat.

### Recent meals and full meal history

The Home screen displays up to five recently logged meals using `RecentMeals`.

The `All Meals` screen shows the full saved meal list and supports clearing all entries.

### Share and copy summary actions

The app exposes two summary actions:

- `ShareButton` — opens the native share sheet with an aggregated daily macro summary.
- `CopyButton` — copies the same summary text to the clipboard and shows a success alert.

### Reminder notifications

`ReminderToggle` persists the reminder preference and schedules or cancels notifications via `src/utils/notifications.ts`.

When enabled, the app requests notification permissions and schedules two daily reminders:

- 12:00 — lunch reminder
- 18:00 — dinner reminder

If notifications are disabled, all scheduled reminders are canceled.

### Navigation and screen flow

Routes are defined in `src/app/` using Expo Router:

- `src/app/(tabs)/index.tsx` — Home dashboard
- `src/app/(tabs)/add-meal.tsx` — add meal form
- `src/app/(tabs)/meals.tsx` — full meal history and clear-all action

The Home dashboard reloads meal data whenever it gains focus using `useFocusEffect`.

## Current implementation state

- Meal data is persisted locally via AsyncStorage.
- Macro totals are computed from all stored meals.
- Reminder toggle controls local notification scheduling.
- Share and copy actions provide quick export of the daily summary.

## Recommended next docs additions

- `docs/app-flow.md` — user navigation and screen flow.
- `docs/data-model.md` — explicit schema and sample storage payloads.
