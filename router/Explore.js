import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";

import { useTheme } from "../theme/global";

export default function Explore() {
  const scheme = useColorScheme();

  const { colors, u, styles } = useTheme();
  const [query, setQuery] = useState("");

  return (
    <View
      style={[
        u.col,
        { flex: 1, backgroundColor: colors.background, paddingTop: 55 },
      ]}
    >
      {/* Search Bar */}
      <View style={[u.border, u.mt10, u.px20, u.mb20]}>
        <View
          style={[
            u.row,
            u.center,
            u.mb10,
            {
              backgroundColor: colors.inputBackground,
              paddingHorizontal: 12,
              paddingVertical: 10,
              borderRadius: 12,
            },
          ]}
        >
          <Ionicons name="search" size={20} color={colors.icon} />

          <TextInput
            placeholder="Search by city"
            placeholderTextColor={colors.placeholder}
            value={query}
            onChangeText={setQuery}
            style={[u.flex, u.textMd, { color: colors.text, marginLeft: 8 }]}
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="default"
          />

          {query.length > 0 ? (
            <TouchableOpacity onPress={() => setQuery("")}>
              <Feather name="x-circle" size={18} color={colors.icon} />
            </TouchableOpacity>
          ) : (
            <Feather name="send" size={18} color={colors.icon} />
          )}
        </View>
      </View>

      {/* Center Info */}
      <View style={[u.flex, u.center]}>
        <Text
          style={[
            u.text,
            u.textBold,
            u.justifyContent,
            { color: colors.textSecondary },
          ]}
        >
          Start typing to search properties
        </Text>
      </View>
    </View>
  );
}
