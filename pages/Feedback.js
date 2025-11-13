import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Replace with any icon lib if you prefer
import { useTheme } from "../theme/global"; // Optional, if using custom theme

export default function Feedback({ onSubmit }) {
  const { colors, u } = useTheme(); // Optional
  const [rating, setRating] = useState(4); // Default to 4 stars shown in image
  const [review, setReview] = useState("");
  
  return (
    <View style={[styles.container, {backgroundColor: colors?.background || "#faf7f5"}]}>
      {/* Back Button Placeholder */}
      <TouchableOpacity style={styles.backButton}>
        <Ionicons name="chevron-back" size={28} color={colors?.text || "#253342"} />
      </TouchableOpacity>

      <Text style={[styles.header, {color: colors?.text || "#253342"}]}>
        Feedback
      </Text>

      <Text style={[styles.label, {color: colors?.textSecondary || "#253342"}]}>
        Tell us how you feel about our App
      </Text>

      {/* Star Rating */}
      <View style={styles.ratingRow}>
        {[1,2,3,4,5].map(num => (
          <TouchableOpacity key={num} onPress={() => setRating(num)}>
            <Ionicons 
              name={num <= rating ? "star" : "star-outline"}
              size={36}
              color={num <= rating ? "#FF947A" : "#DFDFDF"}
              style={{marginHorizontal: 4}}
            />
          </TouchableOpacity>
        ))}
      </View>

      {/* Review Input */}
      <TextInput
        style={[styles.input, {color: colors?.text || "#000"}]}
        placeholder="Write your review"
        placeholderTextColor={colors?.placeholder || "#aaa"}
        value={review}
        onChangeText={setReview}
        multiline={true}
        numberOfLines={4}
      />

      <Text style={styles.helpText}>
        * Please submit a review to let us know
      </Text>
      
      {/* Optionally add a submit button */}
      {/* 
      <TouchableOpacity 
        style={styles.submitBtn}
        onPress={() => onSubmit?.(rating, review)}
      >
        <Text style={{color:"#fff"}}>Submit</Text>
      </TouchableOpacity>
      */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  backButton: {
    position:"absolute", left:16, top:20, padding: 8, zIndex: 10,
  },
  header: {
    fontSize: 22,
    fontWeight: "700",
    marginTop: 12,
    marginBottom: 12,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 24,
    textAlign: "center",
  },
  ratingRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },
  input: {
    width: "100%",
    minHeight: 80,
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 16,
    textAlignVertical: "top",
    fontSize: 16,
    marginBottom: 16,
    borderWidth:1,
    borderColor: "#eee",
  },
  helpText: {
    fontSize: 12,
    color: "#C1C1C1",
    marginTop: 6,
    textAlign: "center",
  },
  submitBtn: {
    backgroundColor: "#FF947A",
    borderRadius: 12,
    marginTop: 16,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
  },
});
