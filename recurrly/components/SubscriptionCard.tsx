import { Image, Pressable, Text, View } from "react-native";
import React from "react";
import SubscriptionCardProps from "@/type.d";
import { formatCurrency, formatSubscriptionDateTime } from "@/constants/lib/utils";
import clsx from "clsx";

/**
 * Renders a pressable subscription card showing the service name, icon, price,
 * and billing cycle. When `expanded` is true, additional details such as payment
 * method, status, and renewal date are revealed.
 * @param name - Service display name.
 * @param price - Subscription cost.
 * @param currency - ISO 4217 currency code for formatting the price.
 * @param icon - Image source for the service icon.
 * @param billing - Billing cycle label (e.g. "Monthly", "Yearly").
 * @param color - Optional background color override for the card.
 * @param category - Service category shown in the card subtitle.
 * @param plan - Plan name shown as a fallback subtitle.
 * @param renewalDate - ISO date string of the next renewal date.
 * @param onPress - Callback invoked when the card is pressed.
 * @param expanded - Whether the detailed section is visible.
 * @param paymentMethod - Payment method description shown when expanded.
 * @param status - Subscription status shown when expanded.
 */
const SubscriptionCard = ({
  name, price,
  currency, icon,
  billing, color,
  category, plan,
  renewalDate, onPress,
  expanded, paymentMethod, status,
}: SubscriptionCardProps) => {
  return (
    <Pressable onPress={onPress} className={ clsx("sub-card", "bg-card") }
      style={color ? { backgroundColor: color } : undefined}>
      <View className="sub-head">
        <View className="sub-main">
            <Image source={icon} className="sub-icon" />
            <View className="sub-copy">
                <Text numberOfLines={1} className="sub-title">{name}</Text>
                <Text numberOfLines={1} ellipsizeMode="tail" className="sub-meta">
                  { category?.trim() || plan?.trim() || (renewalDate ? formatSubscriptionDateTime(renewalDate): "") }
                </Text>
            </View>
        </View>

        <View className="sub-price-box">
            <Text className="sub-price">{ formatCurrency(price, currency) }</Text>
            <Text className="sub-billing">{ billing }</Text>
        </View>
      </View>

      {expanded && (
        <View className="sub-details">
          {paymentMethod ? <Text className="sub-detail-text">Payment: {paymentMethod}</Text> : null}
          {status ? <Text className="sub-detail-text">Status: {status}</Text> : null}
          {renewalDate ? <Text className="sub-detail-text">Renews: {formatSubscriptionDateTime(renewalDate)}</Text> : null}
        </View>
      )}
    </Pressable>
  )
};

export default SubscriptionCard;
