import React, { useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Share,
} from "react-native";

import Placeholder from "../components/Placeholder";

import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../theme/global";
import { u } from "../theme/utility";

const { width: screenWidth } = Dimensions.get("window");

export default function Card({ item, onPress }) {
  const { colors } = useTheme();
  const scrollViewRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollNext = () => {
    if (activeIndex < item.images.length - 1) {
      scrollViewRef.current.scrollTo({
        x: screenWidth * (activeIndex + 1),
        animated: true,
      });
      setActiveIndex(activeIndex + 1);
    }
  };
  const scrollPrev = () => {
    if (activeIndex > 0) {
      scrollViewRef.current.scrollTo({
        x: screenWidth * (activeIndex - 1),
        animated: true,
      });
      setActiveIndex(activeIndex - 1);
    }
  };
  const onScroll = (event) => {
    const newIndex = Math.round(
      event.nativeEvent.contentOffset.x / screenWidth
    );
    setActiveIndex(newIndex);
  };
  const handleShare = async () => {
    try {
      await Share.share({
        message: `${item.name}\n${item.price}\n${item.address}`,
      });
    } catch {}
  };

  return (
    <View style={[u.mb10, u.p10, u.border]}>
      {/* Multi-image carousel */}
      <View style={{ position: "relative" }}>
        <ScrollView
          ref={scrollViewRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={onScroll}
          scrollEventThrottle={16}
          style={{ width: screenWidth, height: 250 }}
        >
          {item.images.map((imgUrl, idx) => (
            <Placeholder
              key={idx}
              style={{ width: screenWidth, height: 250, borderRadius: 20 }}
              source={{ uri: imgUrl }}
            />
          ))}
        </ScrollView>

        {activeIndex > 0 && (
          <TouchableOpacity
            style={[s.scrollButton, { left: 10 }]}
            onPress={scrollPrev}
          >
            <Ionicons name="chevron-back" size={32} color="#fff" />
          </TouchableOpacity>
        )}
        {activeIndex < item.images.length - 1 && (
          <TouchableOpacity
            style={[s.scrollButton, { right: 10 }]}
            onPress={scrollNext}
          >
            <Ionicons name="chevron-forward" size={32} color="#fff" />
          </TouchableOpacity>
        )}
      </View>
      <TouchableOpacity onPress={onPress}>
        {/* Info */}
        <View style={u.p20}>
          {/* Favorite/Like & Share Button */}
          <View
            style={{
              position: "absolute",
              top: 10,
              right: 10,
              flexDirection: "row",
              gap: 10,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "rgba(0,0,0,0.45)",
                padding: 6,
                borderRadius: 8,
              }}
            >
              <Ionicons name="heart-outline" size={22} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "rgba(0,0,0,0.45)",
                padding: 6,
                borderRadius: 8,
              }}
              onPress={handleShare}
            >
              <Ionicons name="share-outline" size={22} color="#fff" />
            </TouchableOpacity>
          </View>
          <Text style={[u.textXl, u.textBold, u.mb10, { color: colors.text }]}>
            {item.price}
          </Text>
          <Text style={[u.textMd, u.textBold, u.mb10, { color: colors.text }]}>
            {item.name}
          </Text>
          <Text style={{ color: colors.textSecondary, marginTop: 2 }}>
            {item.address}
          </Text>
          <Text style={{ color: colors.textSecondary, marginTop: 4 }}>
            {item.details[0]} • {item.details[1]}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const s = StyleSheet.create({
  scrollButton: {
    position: "absolute",
    top: "45%",
    zIndex: 10,
    width: 45,
    height: 45,
    borderRadius: 30,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
});
