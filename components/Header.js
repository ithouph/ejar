import React from "react";
import { View, Text } from "react-native";
import { useTheme } from "../theme/global";

export default function Header({ title }) {
  const { colors, u } = useTheme();

  return (
    <View
      style={[
        u.header,
        {
          backgroundColor: colors.cardBg,
          borderBottomColor: colors.border,
          borderBottomWidth: 1,
        },
      ]}
    >
      <Text
        style={[
          u.textXl,
          u.textBold,
          u.mb0,
          u.border,
          u.p20,
          u.pt80,
          u.borderColor,
          { color: colors.txt },
        ]}
      >
        {title}
      </Text>
    </View>
  );
}
