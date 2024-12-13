import { View, Text, Button, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Link, useLocalSearchParams } from "expo-router";
import MarkdownDisplay from "@/src/components/markdownDisplay";

const DayComp = () => {
  const { day } = useLocalSearchParams();
  const description = `
# Markdown Day 

This is the great day to learn ** React Native **
  `;
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontFamily: "SpaceMono", fontSize: 25 }}>
        This is the day of {day}
      </Text>
      <MarkdownDisplay>{description}</MarkdownDisplay>
      <Link href={"/(auth)/onboarding"} asChild>
        <Button title="Go to Onboarding" />
      </Link>
      <Link href={"/(auth)/editor"} asChild>
        <Pressable style={styles.btnStyle}>
          <Text style={styles.btnText}>Go to Editor</Text>
        </Pressable>
      </Link>
    </View>
  );
};

export default DayComp;

const styles = StyleSheet.create({
  btnStyle: {
    padding: 15,
    backgroundColor: "#363636",
    borderRadius: 20,
    alignItems: "center",
    marginVertical: 20,
    marginHorizontal: 20,
  },
  btnText: {
    color: "white",
    fontSize: 15,
    fontFamily: "SpaceMono",
  },
});
