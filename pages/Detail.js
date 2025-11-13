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
import { Ionicons, Feather } from "@expo/vector-icons";
import { useTheme } from "../theme/global";
import { u } from "../theme/utility";
import Renter from "./Renter";

const facilities = [
  { label: "Temple", icon: "🏛️" },
  { label: "Railway Station", icon: "🚆" },
  { label: "Restaurant", icon: "🍽️" },
  { label: "School", icon: "🏫" },
  { label: "Bus Stand", icon: "🚌" },
  { label: "Hospital", icon: "🏥" },
];
const { width: screenWidth } = Dimensions.get("window");

const photos = [
  require("../assets/scroll/pic1.jpg"),
  require("../assets/scroll/pic2.jpg"),
  require("../assets/scroll/pic3.jpg"),
];

export default function Detail(setPage, close) {
  const { colors } = useTheme();
  const [selected, setSelected] = useState(null);
  const scrollViewRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);

  if (selected) return <Renter onPress={() => setSelected(null)} />;

  const scrollNext = () => {
    if (activeIndex < photos.length - 1) {
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
        message: "Classical House\n₹ 18,000/Month\nLudhiana, Punjab",
      });
    } catch {}
  };

  return (
    <View style={u.flex1}>
      {/* Top Nav */}
      <View style={s.sectionNav}>
        <View style={s.topButtons}>
          <TouchableOpacity style={s.iconBtn} onPress={close}>
            <Ionicons name="chevron-back" size={26} color="#fff" />
          </TouchableOpacity>
          <View style={s.rightIcons}>
            <TouchableOpacity style={[s.iconBtn, u.m5]}>
              <Ionicons name="heart-outline" size={26} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={[s.iconBtn, u.m5]} onPress={handleShare}>
              <Feather name="share-2" size={26} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView style={u.flex1}>
        {/* Image Carousel */}
        <View style={s.carouselSection}>
          <ScrollView
            ref={scrollViewRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={onScroll}
            scrollEventThrottle={16}
            style={{ width: screenWidth, height: 330 }}
          >
            {photos.map((img, index) => (
              <View key={index}>
                <Image
                  source={img}
                  style={{ width: screenWidth, height: 330 }}
                />
              </View>
            ))}
          </ScrollView>
          <View style={s.rentTag}>
            <Text style={u.rentText}>Rent</Text>
            <Text style={u.rentPrice}>₹ 18,000/ Month</Text>
          </View>
          {activeIndex > 0 && (
            <TouchableOpacity
              style={[s.scrollButton, { left: 10 }]}
              onPress={scrollPrev}
            >
              <Ionicons name="chevron-back" size={38} color={colors.txtw} />
            </TouchableOpacity>
          )}
          {activeIndex < photos.length - 1 && (
            <TouchableOpacity
              style={[s.scrollButton, { right: 10 }]}
              onPress={scrollNext}
            >
              <Ionicons name="chevron-forward" size={38} color={colors.txtw} />
            </TouchableOpacity>
          )}
        </View>
        <View style={u.px20}>
          <Text style={u.propertyTitle}>
            Classical House <Text style={u.rating}>⭐ 4.0</Text>
          </Text>
          <Text style={[u.textMd, u.textMuted]}>Ludhiana, Punjab</Text>
          <Text style={[u.textMd, u.mb10, u.mt10]}>
            Nestled among rolling hills picturesque...
          </Text>

          {/* Photos Row */}
          <Text style={u.textBold}>Photos</Text>
          <ScrollView horizontal style={u.mb20}>
            {photos.map((photo, idx) => (
              <Image
                source={photo}
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 12,
                  marginRight: 10,
                }}
                key={idx}
              />
            ))}
          </ScrollView>

          {/* Facilities */}
          <Text style={u.textBold}>Public Facilities</Text>
          <View style={[u.row, { flexWrap: "wrap", marginBottom: 12 }]}>
            {facilities.map((item, idx) => (
              <View
                key={idx}
                style={{
                  alignItems: "center",
                  marginRight: 18,
                  marginBottom: 12,
                }}
              >
                <Text style={u.facilityIcon}>{item.icon}</Text>
                <Text style={u.facilityLabel}>{item.label}</Text>
              </View>
            ))}
          </View>

          {/* Property Details */}
          <Text style={u.textBold}>Property Details</Text>
          <View style={[u.row, u.mb10, { justifyContent: "space-between" }]}>
            <Text style={u.textSm}>
              <Text style={u.detailIcon}>🛏</Text> 3 Bedrooms
            </Text>
            <Text style={u.textSm}>
              <Text style={u.detailIcon}>🛁</Text> 2 Bathrooms
            </Text>
            <Text style={u.textSm}>
              <Text style={u.detailIcon}>📏</Text> 1550 sqft
            </Text>
          </View>
          <View style={[u.row, u.mb20, { justifyContent: "space-between" }]}>
            <Text style={u.textSm}>
              <Text style={u.detailIcon}>🗓</Text> 2019 Built
            </Text>
            <Text style={u.textSm}>
              <Text style={u.detailIcon}>🛋</Text> 2 Living Rooms
            </Text>
            <Text style={u.textSm}>
              <Text style={u.detailIcon}>🚗</Text> 2 Cars Parking
            </Text>
          </View>

          {/* Profile/Header */}
          <View style={[u.row, u.mb20]}>
            <Image
              source={{ uri: "https://randomuser.me/api/portraits/men/44.jpg" }}
              style={u.avatar}
            />
            <View style={[u.col, u.ml10]}>
              <Text style={u.textBold}>Aman Dhingra</Text>
              <Text style={u.textGray}>Real Estate Agent</Text>
            </View>
            <View style={[u.row, u.ml10]}>
              <Text style={{ fontSize: 22, marginHorizontal: 5 }}>📞</Text>
              <Text style={{ fontSize: 22, marginHorizontal: 5 }}>💬</Text>
            </View>
          </View>
          {/* Location */}
          <Text style={u.textBold}>Location</Text>
          <Image
            style={{
              width: "100%",
              height: 130,
              borderRadius: 16,
              marginBottom: 12,
            }}
            source={{
              uri: "https://maps.googleapis.com/maps/api/staticmap?center=Washington,DC&zoom=7&size=400x200&key=YOUR_API_KEY",
            }}
          />
        </View>
      </ScrollView>
      {/* Rent Now Button */}
      <View style={[u.p15, u.borderTop ]}>
        <TouchableOpacity style={[u.btn,{backgroundColor: colors.primary}]} onPress={() => setSelected(null)}>
          <Text style={u.btnText}>Rent Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  sectionNav: { position: "relative", top: 0, left: 0, right: 0, zIndex: 10 },
  topButtons: {
    position: "absolute",
    top: 40,
    left: 15,
    right: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rightIcons: { flexDirection: "row" },
  iconBtn: {
    backgroundColor: "rgba(0,0,0,0.45)",
    padding: 8,
    borderRadius: 30,
  },
  carouselSection: { position: "relative", marginBottom: 20 },
  rentTag: {
    position: "absolute",
    bottom: 16,
    left: 15,
    backgroundColor: "rgba(34,34,34,0.7)",
    borderRadius: 8,
    padding: 9,
  },
  scrollButton: {
    position: "absolute",
    top: "50%",
    zIndex: 10,
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: "rgba(0,0,0,0.4)",
    padding: 4,
    justifyContent: "center",
    alignItems: "center",
  },
});
