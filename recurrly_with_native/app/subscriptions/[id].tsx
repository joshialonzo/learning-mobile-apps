import { Text, View } from "react-native";
import React from "react";
import { Link, useLocalSearchParams } from "expo-router";

/**
 * Detail screen for a single subscription, identified by the dynamic `id`
 * route parameter.
 */
const SubscriptionDetails = () => {
    const { id } = useLocalSearchParams<{id: string}>();
  return (
    <View>
      <Text>Subscription Details: {id}</Text>
      <Link href="/">Go back</Link>
    </View>
  )
}

export default SubscriptionDetails;
