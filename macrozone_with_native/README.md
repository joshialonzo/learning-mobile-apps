# MacroZone

MacroZone is a nutrition tracking prototype built with Expo Router. The app is designed to let users log meals, view daily macro totals, and manage meal reminders.

## Documentation entrypoint

The main documentation content lives in the `docs/` folder.

- [Documentation index](docs/index.md)
- [Business logic overview](docs/business-logic.md)

## Business logic summary

MacroZone models the following workflow:

- log meals with calories, protein, carbs, and fat
- persist meals locally in AsyncStorage
- compute aggregated macro totals for the current session
- display recent meals and the full meal history
- share or copy a summary of daily macros
- enable daily meal reminders at lunch and dinner

## Project structure

- `src/app/` — Expo Router routes and screens.
- `src/components/` — reusable UI components for macro cards, meal list items, and controls.
- `src/storage/` — meal persistence utilities.
- `src/utils/` — notification scheduling and permission helpers.
- `src/styles/` — global style definitions.

## Getting started

Install dependencies and start the app:

```bash
npm install
npx expo start
```

The app uses Expo file-based routing and AsyncStorage for local meal persistence.

## Next steps

- Update `docs/business-logic.md` with new features as the app evolves.
- Add `docs/app-flow.md` to document navigation between screens.
