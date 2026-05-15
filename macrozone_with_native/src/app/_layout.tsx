import { Stack } from "expo-router";

/**
 * Root navigation layout for the MacroZone app.
 * Sets up a stack navigator with the tab group as the only screen
 * and hides the header globally.
 */
export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
