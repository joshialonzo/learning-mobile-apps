# Recurly Business Logic

The `recurrly` app is a subscription management prototype focused on displaying recurring payments, renewal timelines, and status details.

## Core Concepts

### Home balance summary

The Home screen shows a balance card containing:

- `HOME_BALANCE.amount` — current total amount tracked for subscriptions.
- `HOME_BALANCE.nextRenewalDate` — the next scheduled renewal date.

### Upcoming renewals

The `UPCOMING_SUBSCRIPTIONS` array contains subscription items that are due soon. Each item includes:

- `id`
- `name`
- `price`
- `currency`
- `daysLeft`
- `icon`

Upcoming renewals are displayed as a horizontal list on the Home screen with the number of days left until renewal.

### Active subscription list

The app uses `HOME_SUBSCRIPTIONS` to render the main active subscription list. Each subscription item includes:

- `id`
- `name`
- `plan`
- `category`
- `paymentMethod`
- `status`
- `startDate`
- `price`
- `currency`
- `billing`
- `renewalDate`
- `color`

### Expandable subscription cards

`SubscriptionCard` provides a pressable card UI that toggles expanded details when tapped. Expanded details can include:

- payment method
- status
- renewal date

The Home screen stores expansion state with `expandedId`.

## Formatting helpers

The app uses utility helpers in `constants/lib/utils.ts`:

- `formatCurrency()` — formats amounts as localized currency strings.
- `formatSubscriptionDateTime()` — formats ISO subscription dates to `MM/DD/YYYY`.

## Navigation and placeholders

The routing structure includes:

- `app/(tabs)/index.tsx` — Home.
- `app/(tabs)/subscriptions.tsx` — Subscriptions tab placeholder.
- `app/(tabs)/insights.tsx` — Insights tab placeholder.
- `app/(tabs)/settings.tsx` — Settings tab placeholder.
- `app/subscriptions/[id].tsx` — dynamic subscription detail route placeholder.

Auth and onboarding screens are also present in `app/(auth)/` and `app/onboarding.tsx`, but the current documentation focuses on the subscription management flow.

## Current implementation state

- Most subscription logic is driven by static seed data in `constants/data.ts`.
- The UI is wired to present the Home summary, upcoming renewals, and one active subscription card.
- Several screens remain placeholders for future implementation.

## Recommended next docs additions

- `docs/app-flow.md` — map user flows between tabs and authentication.
- `docs/data-model.md` — describe subscriptions, users, and payment objects in detail.
