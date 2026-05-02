import { Stack } from "expo-router";
import "@/global.css";

/**
 * Navigation layout for the authentication flow.
 * Renders a header-less stack navigator for the sign-in and sign-up screens.
 */
export default function RootLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}
