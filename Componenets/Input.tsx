import { theme } from "@/constants/theme";
import { hp } from "@/helpers/common";
import React from "react";
import { StyleSheet, TextInput, View, ViewStyle } from "react-native";

interface InputProps {
  container?: ViewStyle;
  inputRef?: React.RefObject<TextInput>;
  Icon?: React.ReactNode;
  [key: string]: any;
}

const Input = (props: InputProps) => {
  return (
    <View style={[styles.container, props.container && props.container]}>
      {props.Icon && <View>{props.Icon}</View>}
      <TextInput
        style={{ flex: 1 }}
        placeholderTextColor={theme.colors.textLight}
        ref={props.inputRef && props.inputRef}
        {...props}
      ></TextInput>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: hp(7.2),
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.4,
    borderColor: theme.colors.text,
    borderRadius: theme.radius.xxl,
    borderCurve: "continuous",
    paddingHorizontal: 18,
    gap: 12,
  },
});
