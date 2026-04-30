export function formatCurrency(value: number, currency: string = "USD"): string {
  try {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  } catch (error) {
    const formattedValue = value.toFixed(2);
    return `$${formattedValue}`;
  }
}
