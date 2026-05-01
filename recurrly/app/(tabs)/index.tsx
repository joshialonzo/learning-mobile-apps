import dayjs from "dayjs";
import { useState } from "react";
import { FlatList, Image, Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { styled } from "nativewind";

import "@/global.css"
import { HOME_BALANCE, HOME_SUBSCRIPTIONS, HOME_USER, UPCOMING_SUBSCRIPTIONS } from "@/constants/data";
import { icons } from "@/constants/icons";
import images from "@/constants/images";
import { formatCurrency } from "@/constants/lib/utils";
import ListHeading from "@/components/ListHeading";
import SubscriptionCard from "@/components/SubscriptionCard";
import UpcomingSubscriptionCard from "@/components/UpcomingSubscriptionCard";


const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <View className="home-header">
        <View className="home-user">
          <Image source={images.avatar} className="home-avatar" />
          <Text className="home-user-name">{HOME_USER.name}</Text>
        </View>

        <Image source={icons.add} className="home-add-icon" />
      </View>

      <View className="home-balance-card">
        <Text className="home-balance-label">Balance</Text>

        <View className="home-balance-row">
          <Text className="home-balance-amount">{ formatCurrency(HOME_BALANCE.amount) }</Text>
          <Text className="home-balance-date">
            { dayjs(HOME_BALANCE.nextRenewalDate).format("MM/DD, YYYY") }
          </Text>
        </View>
      </View>

      <View>
        <ListHeading title="Upcoming" />
        
        <FlatList
          data={UPCOMING_SUBSCRIPTIONS}
          renderItem={
            ({ item }) => <UpcomingSubscriptionCard { ...item } />
          }
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={<Text className="home-empty-state">No upcoming subscriptions</Text>}
        />
      </View>
      <View>
        <ListHeading title="All Subscriptions" />
        <SubscriptionCard
            { ...HOME_SUBSCRIPTIONS[0] }
            expanded={expandedId === HOME_SUBSCRIPTIONS[0].id}
            onPress={() => setExpandedId(prev => (
              prev === HOME_SUBSCRIPTIONS[0].id ? null : HOME_SUBSCRIPTIONS[0].id)
            )}
          />
      </View>
    </SafeAreaView>
  );
}