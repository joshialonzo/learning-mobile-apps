import { StyleSheet, Text, View } from 'react-native';
import { colors, globalStyles } from '@/styles/global';

/**
 * Displays the current date in a human-readable format (e.g. "Monday, January 1")
 * inside the page header.
 */
export default function HomeHeader() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });

  return (
    <View style={globalStyles.header}>
      <Text style={styles.date}>{currentDate}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  date: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 4,
    marginBottom: 30,
  },
});