import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { useTheme } from "../theme/global";

export default function SettingsScreen() {
  const { styles, colors, u } = useTheme();

  const settings = [
    { icon: "person-outline", label: "Profile", value: "Creative Jeff" },
    { icon: "mail-outline", label: "Account", value: "creativejh@gmail.com" },
    {
      icon: "notifications-outline",
      label: "Notifications",
      value: "2 blocked",
    },
    { icon: "server-outline", label: "Posts", value: "4 GB / 64 GB" },
    { icon: "stats-chart-outline", label: "Review", value: "2 form 4 start" },
    { icon: "help-circle-outline", label: "Help", value: "Questions?" },
  ];

  return (
    <ScrollView
      style={[
        colors.background,
        u.flex1,
        u.px15,
        { paddingTop: 60 },
      ]}
    >
      <Text style={{ fontSize: 26, fontWeight: "700", marginBottom: 20 }}>
        Settings
      </Text>

      <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 12 }}>
        {settings.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={{
              width: "47%",
              backgroundColor: "#fff",
              borderRadius: 16,
              padding: 18,
              shadowColor: colors.txt,
              shadowOpacity: 0.08,
              shadowRadius: 6,
              elevation: 2,
            }}
          >
            <Ionicons
              name={item.icon}
              size={30}
              color={colors.primary}
              style={{ marginBottom: 8 }}
            />
            <Text style={[colors.txt, u.textMd, u.textBold]}>
              {item.label}
            </Text>
            <Text color={colors.textSecondary}>{item.value}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}
