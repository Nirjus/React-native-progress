import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MarkdownDisplay from "@/src/components/markdownDisplay";
import CustomButton from "@/src/components/ui/button";
import { useRouter } from "expo-router";

export default function EditorScreen() {
  const router = useRouter();
  const copy = `
# Editor Screen

This is a screen for the mobile app. It allows users to view and edit content using rich text formatting. The editor supports various features such as:

- **Bold**: Highlight important text.
- *Italic*: Emphasize text with italics.
- [Links](https://example.com): Add hyperlinks for more information.
- Code blocks: Display code snippets with proper formatting.
- Lists:
  - Unordered lists for bullet points.
  - Ordered lists for enumerated points.

> Blockquotes: Add emphasis to quotes or important messages.

The editor is designed to be intuitive and user-friendly, providing a seamless editing experience on mobile devices.
`;
  const [content, setContent] = useState(copy);
  const [tab, setTab] = useState(0);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.tabContainer}>
        <Pressable
          style={[
            styles.tab,
            tab === 0 && { backgroundColor: "#bdfbd3", borderColor: "#39d969" },
          ]}
          onPress={() => setTab(0)}
        >
          <Text style={styles.tabText}>Edit</Text>
        </Pressable>
        <Pressable
          style={[
            styles.tab,
            tab === 1 && { backgroundColor: "#bdfbd3", borderColor: "#39d969" },
          ]}
          onPress={() => setTab(1)}
        >
          <Text style={styles.tabText}>Preview</Text>
        </Pressable>
      </View>
      {tab === 0 ? (
        <TextInput
          value={content}
          multiline
          onChangeText={setContent}
          style={styles.input}
        />
      ) : (
        <MarkdownDisplay>{content}</MarkdownDisplay>
      )}
      <CustomButton
        title="Go back"
        style={{ marginHorizontal: 10 }}
        activeOpacity={0.5}
        onPress={() => router.back()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  tabContainer: {
    flexDirection: "row",
    gap: 10,
    margin: 10,
  },
  tab: {
    flex: 1,
    padding: 10,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
  },
  tabText: {
    fontFamily: "SpaceMono",
    textAlign: "center",
  },
  input: {
    backgroundColor: "#dedede",
    padding: 10,
    margin: 10,
    borderRadius: 10,
    borderWidth: 1,
    color: "#575757",
  },
});
