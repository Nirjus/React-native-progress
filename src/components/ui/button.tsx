import {
  View,
  Text,
  TouchableOpacityProps,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";

// create interface for button props
interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

const CustomButton = ({ title, style, ...props }: ButtonProps) => {
  return (
    <TouchableOpacity style={[styles.container, style]} {...props}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#363636",
    padding: 15,
    borderRadius: 20,
    alignItems: "center",
    marginVertical: 20,
  },
  text: {
    color: "white",
    fontSize: 15,
  },
});
