import React, { useState } from "react";
import { View, Image, ActivityIndicator, StyleSheet } from "react-native";

export default function Placeholder({ source, style }) {
  const [loading, setLoading] = useState(true);
  // No error state needed; spinner keeps spinning on error

  return (
    <View style={[styles.container, style]}>
      {loading && (
        <ActivityIndicator
          size="small"
          color="#888"
          style={styles.activityIndicator}
        />
      )}
      <Image
        source={source}
        style={[style, loading ? { opacity: 0 } : { opacity: 1 }]}
        resizeMode="cover"
        onLoad={() => setLoading(false)}
        // NOTE: do not set loading to false on error - keeps the spinner running
        onError={() => {
          // optional: log error here
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
  },
  activityIndicator: {
    position: "absolute",
    zIndex: 10,
  },
});
