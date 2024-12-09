import { View, StyleSheet, FlatList } from "react-native";
import React from "react";
import DayList from "@/src/components/day-listItem";

export default function IndexScreen() {
  const day = Array.from(Array(10).keys());
  return (
    <View style={styles.container}>
      <FlatList
        data={day}
        renderItem={({ item }) => <DayList item={item} />}
        numColumns={2}
        // horizontal
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.column}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    gap: 10,
    padding: 10,
  },
  column: {
    gap: 10,
  },
});
