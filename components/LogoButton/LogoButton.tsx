import React, { ReactNode, useState } from "react";
import { Pressable, StyleSheet } from "react-native";

interface LogoButtonProps {
  children: ReactNode;
  dropDown?: boolean;
  dropDownComponent?: ReactNode;
  onPress? : () => void;
  closeDropDown? : boolean
}

const LogoButton: React.FC<LogoButtonProps> = ({
  children,
  dropDown = false,
  dropDownComponent,
  closeDropDown,
  onPress
}) => {
  if (dropDown) {
    return (
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles.logoButton,
          pressed ? styles.logoButtonPressed : null,
        ]}
      >
        {children}
        {closeDropDown && dropDownComponent}
      </Pressable>
    );
  }
  
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.logoButton,
        pressed ? styles.logoButtonPressed : null,
      ]}
    >
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  logoButton: {
    position: "relative",
    width: 30,
    height: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // borderWidth : 1,
    borderStyle: "solid",
    borderColor: "#EEEEEE",
    borderRadius: 50,
  },
  logoButtonPressed: {
    backgroundColor: "gray",
  },
});

export default LogoButton;
