import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldShowBanner: true,
    shouldShowList: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

/**
 * Requests the user's permission to display local notifications.
 * @returns A promise that resolves to `true` if permission was granted, `false` otherwise.
 */
export const requestPermissions = async (): Promise<boolean> => {
  const { status } = await Notifications.requestPermissionsAsync();
  return status === "granted";
};

/**
 * Cancels any existing scheduled notifications and schedules daily meal reminders
 * at 12:00 (lunch) and 18:00 (dinner).
 */
export const scheduleMealReminders = async () => {
  await Notifications.cancelAllScheduledNotificationsAsync();

  await Notifications.scheduleNotificationAsync({
    content: {
      title: "MacroZone",
      body: "Don't forget to log your lunch!",
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.DAILY,
      hour: 12,
      minute: 0,
    },
  });

  await Notifications.scheduleNotificationAsync({
    content: {
      title: "MacroZone",
      body: "Time to log your dinner!",
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.DAILY,
      hour: 18,
      minute: 0,
    },
  });
};

/**
 * Cancels all scheduled meal reminder notifications.
 */
export const cancelMealReminders = async () => {
  await Notifications.cancelAllScheduledNotificationsAsync();
};