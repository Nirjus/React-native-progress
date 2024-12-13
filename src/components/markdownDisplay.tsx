import { View, Text, StyleSheet } from "react-native";
import React, { PropsWithChildren } from "react";
import Markdown from "react-native-markdown-display";

const MarkdownDisplay = ({ children }: PropsWithChildren) => {
  return (
    <View style={styles.container}>
      <Markdown style={markdownStyle}>{children}</Markdown>
    </View>
  );
};

export default MarkdownDisplay;
const markdownStyle = StyleSheet.create({
  body: {
    fontFamily: "SpaceMono",
  },
  heading1: {
    fontWeight: "bold",
  },
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
});
