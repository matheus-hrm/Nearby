import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/font-family";
import { IconProps } from "@tabler/icons-react-native";
import React from "react";
import {
  ActivityIndicator,
  Text,
  TextProps,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";

type ButtonProps = TouchableOpacityProps & {
  isLoading?: boolean;
};

export function Button({
  children,
  style,
  isLoading = false,
  ...rest
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={{
        height: 56,
        maxHeight: 56,
        backgroundColor: colors.green.base,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        gap: 14,
        ...(style as object),
      }}
      activeOpacity={0.8}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? <ActivityIndicator color={colors.gray[100]} /> : children}
    </TouchableOpacity>
  );
}

function Title({ children }: TextProps) {
  return (
    <Text
      style={{
        color: colors.gray[100],
        fontFamily: fontFamily.semiBold,
        fontSize: 16,
      }}
    >
      {children}
    </Text>
  );
}

type CustomIconProps = {
  icon: React.ComponentType<IconProps>;
};

function Icon({ icon: Icon }: CustomIconProps) {
  return <Icon size={24} color={colors.gray[100]} />;
}

Button.Icon = Icon;
Button.Title = Title;
