import { View, Text, StyleSheet } from "react-native";
import React from "react";

interface StepIndicatorProps {
  step: number;
  currentStep: number;
}
const StepIndicator = ({ step, currentStep }: StepIndicatorProps) => {
  return (
    <View style={styles.container}>
      {Array.from(Array(step).keys()).map((item, index) => (
        <View
          key={index}
          style={{
            width: index === currentStep ? 35 : 15,
            height: 3,
            borderRadius: 10,
            backgroundColor: index === currentStep ? "white" : "#6b6b6b",
          }}
        />
      ))}
    </View>
  );
};

export default StepIndicator;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
    // padding: 5,
  },
});
