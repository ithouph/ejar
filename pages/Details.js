import React, { useRef, useState } from 'react';
import { View, Text, Image, ScrollView, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, Feather, FontAwesome } from "@expo/vector-icons";

import { useTheme } from "../theme/global";
import { u } from "../theme/utility";

import Renter from '../components/Renter'; // Your renter details component

const facilities = [
  { label: 'Temple', icon: '🏛️' },
  { label: 'Railway Station', icon: '🚆' },
  { label: 'Restaurant', icon: '🍽️' },
  { label: 'School', icon: '🏫' },
  { label: 'Bus Stand', icon: '🚌' },
  { label: 'Hospital', icon: '🏥' },
];
const { width: screenWidth } = Dimensions.get("window");
const reviews = [
  {
    name: 'Sanjeev Mehta',
    job: 'Software Engineer',
    rating: 4.0,
    text: 'I recently had the pleasure of staying in this charming apartment for a month, and it exceeded all my expectations...',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  // Add more reviews as needed
];

const photos = [
  require('../assets/scroll/pic1.jpg'),
  require('../assets/scroll/pic2.jpg'),
  require('../assets/scroll/pic3.jpg'),
];

export default function Detail(setPage, close) {
  const { colors, u } = useTheme();
  const [selected, setSelected] = useState(null);
  const scrollViewRef = useRef();
  const [reviewText, setReviewText] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);


  if (selected) return <Renter onPress={() => setSelected(null)} />;

  const scrollNext = () => {
    if (activeIndex < photos.length - 1) {
      scrollViewRef.current.scrollTo({ x: screenWidth * (activeIndex + 1), animated: true });
      setActiveIndex(activeIndex + 1);
    }
  };
  const handleShare = async () => {
    try {
      await Share.share({
        message: `${property.name}\n${property.price}\n${property.address}`,
      });
    } catch { }
  };

  const scrollPrev = () => {
    if (activeIndex > 0) {
      scrollViewRef.current.scrollTo({ x: screenWidth * (activeIndex - 1), animated: true });
      setActiveIndex(activeIndex - 1);
    }
  };

  const onScroll = (event) => {
    const newIndex = Math.round(event.nativeEvent.contentOffset.x / screenWidth);
    setActiveIndex(newIndex);
  };
  return (
    <View style={{ flex: 1 }}>
      {/* // Close Button and Main Contents */}
      <View style={styles.sectionNav}>
        <View style={styles.topButtons}>
          <TouchableOpacity style={styles.iconBtn} onPress={close}>
            <Ionicons name="chevron-back" size={26} color={styles.txtw} />
          </TouchableOpacity>

          <View style={styles.rightIcons}>
            <TouchableOpacity style={styles.iconBtn}>
              <Ionicons name="heart-outline" size={26} color={colors.txtw} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconBtn} onPress={handleShare}>
              <Feather name="share-2" size={26} color={colors.txtw} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView style={styles.container}>
        {/* Property Section */}
        <View style={{ position: 'relative', marginBottom: 20, }}>
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
              <View key={index} style={styles.imageWrapper }>
                <Image source={img} style={[styles.image, { width: screenWidth, height: 330 }]} />
              </View>
            ))}
          </ScrollView>
          <View style={styles.rentTag}>
            <Text style={styles.rentText}>Rent</Text>
            <Text style={styles.rentPrice}>₹ 18,000/ Month</Text>
          </View>
          {activeIndex > 0 && (
            <TouchableOpacity
              style={[styles.scrollButton, { left: 10, backgroundColor: colors.iconBackground }]}
              onPress={scrollPrev}
            >
              <Ionicons name="chevron-back" size={48} color={colors.text} />
            </TouchableOpacity>
          )}

          {activeIndex < photos.length - 1 && (
            <TouchableOpacity
              style={[styles.scrollButton, { right: 10, backgroundColor: colors.iconBackground }]}
              onPress={scrollNext}
            >
              <Ionicons name="chevron-forward" size={48} color={colors.text} />
            </TouchableOpacity>
          )}
        </View>

        <Text style={styles.propertyTitle}>
          Classical House <Text style={styles.rating}>⭐ 4.0</Text>
        </Text>
        <Text style={styles.propertyLocation}>4]=-, Punjab</Text>
        {/* Description */}
        <Text style={styles.description}>
          Nestled among rolling hills picturesque...
        </Text>
        {/* Photos Row */}
        <Text style={styles.sectionTitle}>Photos</Text>
        <ScrollView horizontal style={styles.photosRow}>
          {photos.map((photo, idx) => (
            <Image source={photo} style={styles.photoItem} key={idx} />
          ))}
        </ScrollView>

        {/* Facilities Section */}
        <Text style={styles.sectionTitle}>Public Facilities</Text>
        <View style={styles.facilitiesRow}>
          {facilities.map((item, idx) => (
            <View style={styles.facility} key={idx}>
              <Text style={styles.facilityIcon}>{item.icon}</Text>
              <Text style={styles.facilityLabel}>{item.label}</Text>
            </View>
          ))}
        </View>
        {/* Property Details */}
        <Text style={styles.sectionTitle}>Property Details</Text>
        <View style={styles.detailsRow}>
          <Text style={styles.detail}><Text style={styles.detailIcon}>🛏</Text> 3 Bedrooms</Text>
          <Text style={styles.detail}><Text style={styles.detailIcon}>🛁</Text> 2 Bathrooms</Text>
          <Text style={styles.detail}><Text style={styles.detailIcon}>📏</Text> 1550 sqft</Text>
        </View>
        <View style={styles.detailsRow}>
          <Text style={styles.detail}><Text style={styles.detailIcon}>🗓</Text> 2019 Built</Text>
          <Text style={styles.detail}><Text style={styles.detailIcon}>🛋</Text> 2 Living Rooms</Text>
          <Text style={styles.detail}><Text style={styles.detailIcon}>🚗</Text> 2 Cars Parking</Text>
        </View>
        {/* Profile/Header Section */}
        <View style={styles.profileRow}>
          <Image source={{ uri: 'https://randomuser.me/api/portraits/men/44.jpg' }} style={styles.avatar} />
          <View style={styles.profileText}>
            <Text style={styles.name}>Aman Dhingra</Text>
            <Text style={styles.subtitle}>Real Estate Agent</Text>
          </View>
          <View style={styles.headerIcons}>
            <Text style={styles.icon}>📞</Text>
            <Text style={styles.icon}>💬</Text>
          </View>
        </View>
        {/* Location Section */}
        <View>
          <Text style={styles.sectionTitle}>Location</Text>
          <Image style={styles.map} source={{ uri: 'https://maps.googleapis.com/maps/api/staticmap?center=Washington,DC&zoom=7&size=400x200&key=YOUR_API_KEY' }} />
        </View>
      </ScrollView>
      {/* Rent Now Button */}
      <View style={styles.section} >
        <TouchableOpacity style={styles.bookBtn} onPress={() => setSelected(null)}>
          <Text style={styles.bookBtnText}>Rent Now</Text>
        </TouchableOpacity>
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', },
  profileRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 24, marginTop: 24 },
  avatar: { width: 50, height: 50, borderRadius: 25 },
  profileText: { flex: 1, marginLeft: 10 },
  name: { fontWeight: 'bold', fontSize: 18 },
  subtitle: { color: '#9e9e9e' },
  headerIcons: { flexDirection: 'row' },
  icon: { fontSize: 22, marginHorizontal: 5 },
  section: { position: 'relative', backgroundColor: '#fff', padding: 12, borderTopColor: "#e5e5e5", borderTopWidth: 1 },

  sectionTitle: { fontWeight: 'bold', fontSize: 16, marginVertical: 12 },
  facilitiesRow: { flexDirection: 'row', flexWrap: 'wrap', marginBottom: 12 },
  facility: { alignItems: 'center', marginRight: 18, marginBottom: 12 },
  facilityIcon: { fontSize: 23 },
  facilityLabel: { fontSize: 12 },
  
  map: { width: '100%', height: 130, borderRadius: 16, marginBottom: 12 },

  reviewsRow: { marginBottom: 20 },
  reviewCard: { width: 220, backgroundColor: '#f6f6f6', borderRadius: 10, padding: 12, marginRight: 10 },
  reviewAvatar: { width: 36, height: 36, borderRadius: 18 },
  reviewInfo: { marginLeft: 6 },
  reviewName: { fontWeight: 'bold', fontSize: 13 },
  reviewJob: { fontSize: 11, color: '#888' },
  reviewRating: { color: '#FFD700', fontWeight: 'bold', fontSize: 13 },
  reviewText: { fontSize: 12 },

  bookBtn: {
    backgroundColor: '#222',
    borderRadius: 12,
    alignItems: 'center',
    padding: 15,
  },
  bookBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  propertyImageBox: { position: 'absolute', marginBottom: 18 },
  propertyImage: { width: '100%', height: 180, borderRadius: 8 },
  rentTag: { position: 'absolute', bottom: 16, left: 15, backgroundColor: 'rgba(34,34,34,0.7)', borderRadius: 8, padding: 9 },
  rentText: { color: '#fff', fontSize: 15 },
  rentPrice: { color: '#fff', fontWeight: 'bold', fontSize: 15 },

  propertyTitle: { fontWeight: 'bold', fontSize: 18, marginTop: 4 },
  rating: { color: '#FFD700', fontWeight: 'bold', fontSize: 16 },
  propertyLocation: { color: '#777', fontSize: 13, marginVertical: 4 },

  photosRow: { flexDirection: 'row', marginBottom: 18 },
  photoItem: { width: 70, height: 70, borderRadius: 12, marginRight: 10 },

  detailsRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  detail: { fontSize: 13, color: '#444' },
  detailIcon: { fontSize: 15 },

  description: { color: '#666', marginVertical: 18, fontSize: 14 },
  imageWrapper: { position: "relative" },
  image: { height: 330 },
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

  rightIcons: { flexDirection: "row", gap: 10 },

  iconBtn: {
    backgroundColor: "rgba(0,0,0,0.45)",
    padding: 8,
    borderRadius: 30,
  },

  content: { padding: 20 },
  price: { fontSize: 23, fontWeight: "800" },
  name: { fontSize: 20, fontWeight: "600", marginTop: 4 },
  address: { marginTop: 3 },

  detailRow: { flexDirection: "row", alignItems: "center", marginTop: 3 },
  details: { fontSize: 15 },

  ownerRow: { flexDirection: "row", alignItems: "center", marginTop: 18 },
  ownerName: { marginLeft: 8, fontSize: 16, fontWeight: "600" },
  ratingBox: { flexDirection: "row", alignItems: "center", marginLeft: 10 },
  ratingText: { marginLeft: 4, fontSize: 14 },

  btnRow: { flexDirection: "row", gap: 10, marginTop: 20 },
  actionBtn: { flexDirection: "row", alignItems: "center", gap: 8, padding: 12, borderRadius: 8, flex: 1 },
  actionBtnText: { color: "#fff", fontSize: 16, fontWeight: "600" },

  reviewForm: { marginTop: 20, paddingVertical: 10, borderTopWidth: 1, borderColor: "#ddd" },
  reviewLabel: { fontSize: 16, fontWeight: "600", marginBottom: 8 },
  starContainer: { flexDirection: "row", marginBottom: 12 },

  reviewInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 8,
    textAlignVertical: "top",
    fontSize: 16,
    backgroundColor: "#fafafa",
    marginBottom: 12,
  },

  submitReviewBtn: { backgroundColor: "#165a4a", padding: 14, borderRadius: 8, alignItems: "center" },
  submitReviewBtnText: { color: "#fff", fontSize: 16, fontWeight: "600" },

  reviewBtn: { flexDirection: "row", alignItems: "center", marginTop: 25 },
  reviewBtnText: { marginLeft: 6, fontSize: 15, color: "#555" },

  reportBtn: { flexDirection: "row", alignItems: "center", marginTop: 12 },
  reportBtnText: { marginLeft: 6, fontSize: 15, color: "#b33" },

  scrollButton: {
    position: "absolute",
    top: "45%",
    zIndex: 10,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "rgba(0,0,0,0.4)", // background circle
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
  },

  modeToggleContainer: {
    padding: 20,
    borderTopWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#f0f0f0",
    marginTop: 20,
  },
  modeToggleButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  modeToggleButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});
