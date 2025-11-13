import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../theme/global";

export default function NavBar({ page, setPage }) {
  const { colors, u } = useTheme();
  const defaultColor = "#165a4a"; // Your default icon/text color

  return (
    <View style={[styles.container, u.container]}>
      <TouchableOpacity style={u.navItem} onPress={() => setPage("Discover")}>
        <Ionicons
          name={page === "Discover" ? "home" : "home-outline"}
          size={26}
          color={page === "Discover" ? colors.primary : defaultColor}
        />
        <Text style={[
          u.navLabel, 
          page === "Discover" && u.navLabelActive, 
          { color: page === "Discover" ? colors.primary : defaultColor }
        ]}>
          Home
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={u.navItem} onPress={() => setPage("Explore")}>
        <Ionicons
          name={page === "Explore" ? "search" : "search-outline"}
          size={26}
          color={page === "Explore" ? colors.primary : defaultColor}
        />
        <Text style={[
          u.navLabel, 
          page === "Explore" && u.navLabelActive, 
          { color: page === "Explore" ? colors.primary : defaultColor }
        ]}>
          Search
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={u.navItem} onPress={() => setPage("Saved")}>
        <Ionicons
          name={page === "Saved" ? "heart" : "heart-outline"}
          size={26}
          color={page === "Saved" ? colors.primary : defaultColor}
        />
        <Text style={[
          u.navLabel, 
          page === "Saved" && u.navLabelActive, 
          { color: page === "Saved" ? colors.primary : defaultColor }
        ]}>
          Saved
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={u.navItem} onPress={() => setPage("Profile")}>
        <Ionicons
          name={page === "Profile" ? "person" : "person-outline"}
          size={26}
          color={page === "Profile" ? colors.primary : defaultColor}
        />
        <Text style={[
          u.navLabel, 
          page === "Profile" && u.navLabelActive, 
          { color: page === "Profile" ? colors.primary : defaultColor }
        ]}>
          Account
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
    paddingBottom: 30,
    borderTopWidth: 1,
    backgroundColor: "#fff",
    borderTopColor: "#e5e5e5",
  },
});
