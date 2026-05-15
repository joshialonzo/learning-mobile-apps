import { View, Text } from "react-native";
import { Link } from "expo-router";

/**
 * Sign-in screen that provides a link to navigate to the sign-up screen.
 */
export default function SignIn() {
  return (
    <View>
      <Text>SignIn</Text>
      <Link href="/(auth)/sign-up">Create Account</Link>
    </View>
  )
}