import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Review() {
  const [rating, setRating] = useState(0); // selected stars
  const [comment, setComment] = useState("");

  const stars = [1, 2, 3, 4, 5];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rate & Review</Text>

      <View style={styles.starsContainer}>
        {stars.map((star) => (
          <TouchableOpacity key={star} onPress={() => setRating(star)}>
            <Ionicons
              name={star <= rating ? "star" : "star-outline"}
              size={36}
              color="#FFD700"
              style={styles.star}
            />
          </TouchableOpacity>
        ))}
      </View>

      <TextInput
        style={styles.textInput}
        placeholder="Write your comment here..."
        multiline
        value={comment}
        onChangeText={setComment}
      />

      <TouchableOpacity
        style={[styles.button, rating === 0 && { backgroundColor: "#ccc" }]}
        disabled={rating === 0}
        onPress={() => {
          // Handle submit review logic here
          alert(`Rating: ${rating} stars\nComment: ${comment}`);
        }}
      >
        <Text style={styles.buttonText}>Submit Review</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
  },
  starsContainer: {
    flexDirection: "row",
    marginBottom: 16,
  },
  star: {
    marginHorizontal: 4,
  },
  textInput: {
    height: 100,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    textAlignVertical: "top",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
