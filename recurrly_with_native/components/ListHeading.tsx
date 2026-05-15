import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

/**
 * Renders a section heading row with a title on the left and a "View all"
 * action button on the right.
 * @param title - The heading text to display.
 */
const ListHeading = ({ title }: { title: string }) => {
  return (
    <View className="list-head">
      <Text className="list-title">{title}</Text>

      <TouchableOpacity className="list-action">
        <Text className="list-action-text">View all</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ListHeading;