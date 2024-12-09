import React from "react";
import { Stack } from "expo-router";

export default function TabLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "orange" },
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="user" options={{ title: "User" }} />
      <Stack.Screen name="[day]" options={{ title: "day" }} />
    </Stack>
  );
}
