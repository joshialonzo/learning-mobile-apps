import { View, Text } from "react-native";
import { Link } from "expo-router";

/**
 * Sign-up screen for creating a new account, with a link to the sign-in screen.
 */
export default function SignUp() {
  return (
    <View>
      <Text>SignUp</Text>
      <Link href="/(auth)/sign-up">Sign In</Link>
    </View>
  )
}