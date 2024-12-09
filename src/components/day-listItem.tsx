import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Link } from "expo-router";
type DayItems = {
  item: number;
};
export default function DayList({ item }: DayItems) {
  return (
    <Link href={`./(tabs)/${item}`} asChild>
      <Pressable style={styles.box} key={item}>
        <Text style={styles.text}>{item}</Text>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#80f696bd",
    borderRadius: 20,
    flex: 1,
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#39d969",
  },
  text: {
    color: "#0bc562",
    fontSize: 70,
    fontFamily: "SpaceMono",
  },
});
