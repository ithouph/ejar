import React from "react";
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";

const rentalItems = [
  {
    id: "1",
    image: "https://source.unsplash.com/900x900/?house",
    title: "Cozy Apartment for Rent",
    price: "$1200/month",
    location: "Downtown",
    description: "A comfortable 2-bedroom apartment.",
  },
  {
    id: "2",
    image: "https://source.unsplash.com/900x900/?studio",
    title: "Modern Studio",
    price: "$900/month",
    location: "City Center",
    description: "Perfect for singles or couples.",
  },
  // Add your posted items here
];

export default function Poster() {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>{item.price}</Text>
        <Text style={styles.location}>{item.location}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={rentalItems}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.listContainer}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    padding: 16,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    marginBottom: 16,
    overflow: "hidden",
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 180,
  },
  content: {
    padding: 12,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 4,
  },
  price: {
    fontSize: 16,
    color: "#4CAF50",
    marginBottom: 4,
  },
  location: {
    color: "#555",
    marginBottom: 8,
  },
  description: {
    color: "#777",
  },
});
