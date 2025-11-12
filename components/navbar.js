import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../theme/global";

export default function NavBar({ page, setPage }) {
  
  const { colors, u } = useTheme();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={u.navItem}
        onPress={() => setPage("Discover")}
      >
        <Ionicons
          name={page === "Discover" ? "home" : "home-outline"}
          size={26}
          color={page === "Discover" ? "#044468" : "#8e8e8e"}
        />
        <Text
          style={[
            u.navLabel,
            page === "Discover" && u.navLabelActive,
          ]}
        >
          Home
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={u.navItem}
        onPress={() => setPage("Explore")}
      >
        <Ionicons
          name={page === "Explore" ? "search" : "search-outline"}
          size={26}
          color={page === "Explore" ? "#044468" : "#8e8e8e"}
        />
        <Text
          style={[u.navLabel, page === "Explore" && u.navLabelActive]}
        >
          Search
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={u.navItem} onPress={() => setPage("Saved")}>
        <Ionicons
          name={page === "Saved" ? "heart" : "heart-outline"}
          size={26}
          color={page === "Saved" ? "#044468" : "#8e8e8e"}
        />
        <Text
          style={[u.navLabel, page === "Saved" && u.navLabelActive]}
        >
          Saved
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={u.navItem}
        onPress={() => setPage("Profile")}
      >
        <Ionicons
          name={page === "Profile" ? "person" : "person-outline"}
          size={26}
          color={page === "Profile" ? "#044468" : "#8e8e8e"}
        />
        <Text
          style={[u.navLabel, page === "Profile" && u.navLabelActive]}
        >
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
    backgroundColor: "#fff",
    paddingVertical: 14,
    paddingBottom: 30,
    borderTopWidth: 1,
    borderTopColor: "#e5e5e5",
  },
});
