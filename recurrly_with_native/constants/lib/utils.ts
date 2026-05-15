import dayjs from "dayjs";

/**
 * Formats a numeric value as a localized currency string.
 * Falls back to a fixed two-decimal representation if the currency code is invalid.
 * @param value - The numeric amount to format.
 * @param currency - The ISO 4217 currency code (default: `"USD"`).
 * @returns The formatted currency string, e.g. `"$9.99"`.
 */
export const formatCurrency = (value: number, currency = "USD"): string => {
  try {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  } catch {
    return value.toFixed(2);
  }
};

/**
 * Formats an ISO date string into `MM/DD/YYYY` format using Day.js.
 * Returns `"Not provided"` when the input is absent or invalid.
 * @param value - An optional ISO 8601 date string.
 * @returns The formatted date string or `"Not provided"`.
 */
export const formatSubscriptionDateTime = (value?: string): string => {
  if (!value) return "Not provided";
  const parsedDate = dayjs(value);
  return parsedDate.isValid() ? parsedDate.format("MM/DD/YYYY") : "Not provided";
};

/**
 * Capitalizes the first letter of a status string.
 * Returns `"Unknown"` when the input is absent.
 * @param value - An optional status string (e.g. `"active"`).
 * @returns The capitalized status label or `"Unknown"`.
 */
export const formatStatusLabel = (value?: string): string => {
  if (!value) return "Unknown";
  return value.charAt(0).toUpperCase() + value.slice(1);
};

