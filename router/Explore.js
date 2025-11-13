import React, { useState, useEffect } from "react";
import { View, TextInput, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";

import { useTheme } from "../theme/global";

const typingGif = require("../assets/looking.gif"); // Place your GIF in assets folder

export default function Explore() {
  const { colors, u, isDark, setForceTheme } = useTheme();

  // Button to test theme switch:
  const [query, setQuery] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    let timeout;

    if (query.length > 0) {
      setIsTyping(true);
      // When the user stops typing for 1.5 seconds, hide the GIF
      timeout = setTimeout(() => setIsTyping(false), 1500);
    } else {
      setIsTyping(false);
    }

    return () => clearTimeout(timeout);
  }, [query]);

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
            placeholder="Search by City"
            placeholderTextColor={colors.placeholder}
            value={query}
            onChangeText={setQuery}
            style={[u.flex1, u.textMd, u.p8, { color: colors.text }]}
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
        {/* Typing animation GIF */}
        <Image
          source={typingGif}
          style={[u.p8, { width: 200, height: 200 }]}
          resizeMode="contain"
        />
        <Text
          style={[
            u.txt,
            u.textBold,
            u.textXl,
            u.justifyContent,
            u.mt10,
            { color: colors.textSecondary },
          ]}
        >
          Start typing to search properties
        </Text>
        <TouchableOpacity
          onPress={() => setForceTheme(isDark ? "light" : "dark")}
        >
          <Text>Toggle Dark/Light</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
