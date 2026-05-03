# Recurly

`recurrly` is a subscription management prototype built with Expo Router. The app is designed to track recurring payments, upcoming renewals, and subscription status details.

## Documentation entrypoint

The main documentation content lives in the `docs/` folder.

- [Documentation index](docs/index.md)
- [Business logic overview](docs/business-logic.md)

## Business logic summary

The app models subscription tracking using static seed data defined in `constants/data.ts`.

Key features include:

- Home balance summary with total tracked amount and next renewal date.
- Upcoming renewals carousel for subscriptions due soon.
- Active subscription list with expandable cards for more details.
- Formatting helpers for currency and renewal dates.
- Placeholder screens for `Subscriptions`, `Insights`, and `Settings`.

## Project structure

- `app/` — Expo Router routes and presentation screens.
- `components/` — reusable UI components such as `SubscriptionCard` and `UpcomingSubscriptionCard`.
- `constants/` — app data definitions, icons, and formatting utilities.
- `docs/` — project documentation and business logic details.

## Getting started

Install dependencies and start the app:

```bash
npm install
npx expo start
```

The app uses Expo and file-based routing with static data for the current implementation.
