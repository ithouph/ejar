// components/PropertyCard.js
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../theme/global";
import { u } from "../theme/utility"; // <-- if your utilities are exported from utilit.js

export default function Card({ item, onPress }) {
  const { colors, styles } = useTheme();

  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          backgroundColor: colors.cardBg,
          overflow: "hidden",
          borderBottomWidth: 1,
          borderBottomColor: colors.border,
        }}
      >
        {/* Image */}
        <Image source={item.image} style={{ width: "100%", height: 200 }} />

        {/* Favorite/Like Button */}
        <TouchableOpacity
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            backgroundColor: "rgba(0,0,0,0.45)",
            padding: 6,
            borderRadius: 20,
          }}
        >
          <Ionicons name="heart-outline" size={22} color="#fff" />
        </TouchableOpacity>

        {/* Info */}
        <View style={u.p15}>
          <Text style={[u.textMd, u.textBold, { color: colors.text }]}>
            {item.price}
          </Text>

          <Text style={[u.textMd, { color: colors.text }]}>
            {item.name}
          </Text>

          <Text style={{ color: colors.textSecondary, marginTop: 2 }}>
            {item.address}
          </Text>

          <Text style={{ color: colors.textSecondary, marginTop: 4 }}>
            {item.details[0]} • {item.details[1]}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
