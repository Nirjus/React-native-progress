import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import {
  Directions,
  Gesture,
  GestureDetector,
} from "react-native-gesture-handler";
import Animated, {
  FadeIn,
  FadeOut,
  SlideInLeft,
  SlideInRight,
} from "react-native-reanimated";
import CustomButton from "@/src/components/ui/button";
import { onBoardingSteps } from "@/src/constants/onboardingSteps";
import StepIndicator from "@/src/components/ui/step-indicator";

export default function OnboardingScreen() {
  const router = useRouter();
  const [screenIndex, setScreenIndex] = useState(0);
  const onBoardingArray = onBoardingSteps[screenIndex];
  const handleNext = () => {
    if (screenIndex < onBoardingSteps.length - 1) {
      setScreenIndex((prev) => prev + 1);
    } else {
      router.push("/");
    }
  };
  const handlePrevious = () => {
    if (screenIndex > 0) {
      setScreenIndex((prev) => prev - 1);
    }
  };
  const handleSkip = () => {
    router.push("/");
  };
  const swipeForward = Gesture.Fling()
    .direction(Directions.LEFT)
    .onEnd(handleNext)
    .runOnJS(true);
  const swaipBack = Gesture.Fling()
    .direction(Directions.RIGHT)
    .onEnd(handlePrevious)
    .runOnJS(true);
  return (
    <SafeAreaView style={styles.safeContainer}>
      <TouchableOpacity activeOpacity={0.5} onPress={handleSkip}>
        <Text style={{ color: "white", textAlign: "right" }}>Skip</Text>
      </TouchableOpacity>
      <StepIndicator step={onBoardingSteps.length} currentStep={screenIndex} />
      <GestureDetector gesture={Gesture.Simultaneous(swipeForward, swaipBack)}>
        <Animated.View
          entering={FadeIn}
          exiting={FadeOut}
          key={screenIndex}
          style={styles.page}
        >
          <View style={{ flex: 1, justifyContent: "center" }}>
            <View
              style={[
                styles.header,
                { backgroundColor: onBoardingArray.imgBackground },
              ]}
            >
              <Image source={onBoardingArray.image} style={styles.image} />
            </View>
          </View>
          <View style={styles.footer}>
            <Animated.Text entering={SlideInLeft} style={styles.title}>
              {onBoardingArray.title}
            </Animated.Text>
            <Animated.Text entering={SlideInRight} style={styles.description}>
              {onBoardingArray.description}
            </Animated.Text>
          </View>
        </Animated.View>
      </GestureDetector>
      <CustomButton
        title={
          screenIndex === onBoardingSteps.length - 1 ? "Get Started" : "Next"
        }
        onPress={handleNext}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safeContainer: {
    padding: 20,
    flex: 1,
    backgroundColor: "#15141A",
  },
  page: {
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#15141A",
  },
  title: {
    fontSize: 30,
    color: "white",
    fontFamily: "SpaceMonoBold",
    marginBottom: 10,
  },
  description: {
    color: "gray",
    fontSize: 15,
    fontFamily: "SpaceMonoItalic",
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#23da82",
    width: 300,
    height: 300,
    borderRadius: 150,
    alignSelf: "center",
  },
  image: {
    alignSelf: "center",
    margin: 20,
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
  footer: {
    marginTop: "auto",
  },
});
