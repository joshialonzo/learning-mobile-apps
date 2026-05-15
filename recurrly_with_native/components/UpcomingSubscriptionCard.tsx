import { Image, View, Text } from "react-native";
import React from "react";
import { formatCurrency } from "@/constants/lib/utils";

/**
 * Renders a compact card for a subscription that is due to renew soon,
 * showing the service icon, price, name, and days remaining until renewal.
 * @param name - Service display name.
 * @param price - Subscription cost.
 * @param daysLeft - Number of days remaining before the next renewal.
 * @param icon - Image source for the service icon.
 * @param currency - ISO 4217 currency code for formatting the price.
 */
const UpcomingSubscriptionCard = ({ name, price, daysLeft, icon, currency }: UpcomingSubscription) => {
  return (
    <View className="upcoming-card">
      <View className="upcoming-row">
        <Image source={icon} className="upcoming-icon" />
        <View className="upcoming-info">
          <Text className="upcoming-price">{ formatCurrency(price, currency) }</Text>
          <Text className="upcoming-meta" numberOfLines={1}>
            { daysLeft > 1 ? `${daysLeft} days left` : 'Last day' }
          </Text>
        </View>
      </View>

      <Text className="upcoming-name" numberOfLines={1}>{name}</Text>
    </View>
  )
}

export default UpcomingSubscriptionCard;