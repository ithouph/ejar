import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function NavBar({ page, setPage }) {
  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.navItem} onPress={() => setPage("Discover")}>
        <Ionicons
          name={page === "Discover" ? "home" : "home-outline"}
          size={26}
          color={page === "Discover" ? "#044468" : "#8e8e8e"}
        />
        <Text style={[styles.navLabel, page === "Discover" && styles.navLabelActive]}>
          Home
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navItem} onPress={() => setPage("Explore")}>
        <Ionicons
          name={page === "Explore" ? "search" : "search-outline"}
          size={26}
          color={page === "Explore" ? "#044468" : "#8e8e8e"}
        />
        <Text style={[styles.navLabel, page === "Explore" && styles.navLabelActive]}>
          Search
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navItem} onPress={() => setPage("Saved")}>
        <Ionicons
          name={page === "Saved" ? "heart" : "heart-outline"}
          size={26}
          color={page === "Saved" ? "#044468" : "#8e8e8e"}
        />
        <Text style={[styles.navLabel, page === "Saved" && styles.navLabelActive]}>
          Saved
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => setPage("Profile")}>
        <Ionicons
          name={page === "Profile" ? "person" : "person-outline"}
          size={26}
          color={page === "Profile" ? "#044468" : "#8e8e8e"}
        />
        <Text style={[styles.navLabel, page === "Profile" && styles.navLabelActive]}>
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
  navItem: {
    alignItems: "center",
  },
  navLabel: {
    fontSize: 12,
    color: "#8e8e8e",
    marginTop: 3,
  },
  navLabelActive: {
    color: "#044468",
    fontWeight: "600",
  },
});
