import { View, Text } from "react-native";
import { Link } from "expo-router";

export default function SignIn() {
  return (
    <View>
      <Text>SignIn</Text>
      <Link href="/(auth)/sign-up">Create Account</Link>
    </View>
  )
}