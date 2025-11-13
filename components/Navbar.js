import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../theme/global";

export default function NavBar({ page, setPage }) {
  const { colors, u } = useTheme();
  const defaultColor = "#165a4a"; // Your default icon/text color

  return (
    <View style={[styles.container, u.container, colors.background]}>
      <TouchableOpacity style={u.navItem} onPress={() => setPage("Discover")}>
        <Ionicons
          name={page === "Discover" ? "home" : "home-outline"}
          size={28}
          color={page === "Discover" ? colors.primary : defaultColor}
        />
        <Text style={[
          u.navLabel,u.px10,
          page === "Discover" && u.navLabelActive, 
          { color: page === "Discover" ? colors.primary : defaultColor }
        ]}>
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={u.navItem} onPress={() => setPage("Explore")}>
        <Ionicons
          name={page === "Explore" ? "search" : "search-outline"}
          size={28}
          color={page === "Explore" ? colors.primary : defaultColor}
        />
        <Text style={[
          u.navLabel,u.px10,
          page === "Explore" && u.navLabelActive, 
          { color: page === "Explore" ? colors.primary : defaultColor }
        ]}>
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={u.navItem} onPress={() => setPage("Saved")}>
        <Ionicons
          name={page === "Saved" ? "heart" : "heart-outline"}
          size={28}
          color={page === "Saved" ? colors.primary : defaultColor}
        />
        <Text style={[
          u.navLabel,u.px10, 
          page === "Saved" && u.navLabelActive, 
          { color: page === "Saved" ? colors.primary : defaultColor }
        ]}>
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={u.navItem} onPress={() => setPage("Settings")}>
        <Ionicons
          name={page === "Settings" ? "person" : "person-outline"}
          size={28}
          color={page === "Settings" ? colors.primary : defaultColor}
        />
        <Text style={[
          u.navLabel,u.px10, 
          page === "Settings" && u.navLabelActive, 
          { color: page === "Settings" ? colors.primary : defaultColor }
        ]}>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 14,
    paddingBottom: 20,
    borderTopWidth: 1,
    borderTopColor: "#e5e5e5",
  },
});
