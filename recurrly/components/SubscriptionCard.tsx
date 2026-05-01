import { Image, Pressable, Text, View } from "react-native";
import React from "react";
import SubscriptionCardProps from "@/type.d";
import { formatCurrency, formatSubscriptionDateTime } from "@/constants/lib/utils";
import clsx from "clsx";

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
      style={color ? { backgroundColor: color } : {}}>
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
