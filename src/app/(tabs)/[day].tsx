import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const DayComp = () => {
  const { day } = useLocalSearchParams();
  console.log(day);
  return (
    <View>
      <Text style={{ fontFamily: "SpaceMono", fontSize: 25 }}>
        This is the day of {day}
      </Text>
    </View>
  );
};

export default DayComp;
