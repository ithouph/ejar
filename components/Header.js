import React from "react";
import { View, Text, useColorScheme } from "react-native";
import { lightColors, darkColors } from "../theme/colors";
import { u } from "../theme/utility";

export default function Header({ title }) {
  const scheme = useColorScheme();
  const colors = scheme === "dark" ? darkColors : lightColors;

  return (
    <View style={[u.header, { backgroundColor: colors.cardBg, borderBottomColor: colors.border, borderBottomWidth: 1 }]}>
      <Text style={[u.text2Xl, u.textBold, { color: colors.text }]}>{title}</Text>
    </View>
  );
}
