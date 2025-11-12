import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { useTheme } from "../theme/global";
import { u } from "../theme/utility";
import { Ionicons } from '@expo/vector-icons';

export default function Renter() {
  const { colors } = useTheme();

  const phoneNumber = '+1234567890';
  const whatsappNumber = '+1234567890'; // Use international format with +

  // Open phone dialer
  const onCallPress = () => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  // Open WhatsApp chat
  const onWhatsAppPress = () => {
    Linking.openURL(`whatsapp://send?phone=${whatsappNumber}`);
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <ScrollView style={styles.container}>
        {/* Profile Section */}
        <View style={styles.profileSection}>
          <Image
            source={{ uri: 'https://randomuser.me/api/portraits/men/45.jpg' }}
            style={styles.profileImage}
          />
          <View style={styles.profileInfo}>
            <Text style={[styles.profileName, { color: colors.text }]}>John Doe</Text>
            <View style={styles.starsRow}>
              {[...Array(5)].map((_, i) => (
                <Ionicons key={i} name="star" size={18} color="#FFD700" />
              ))}
              <Text style={[styles.starCount, { color: colors.text }]}>4.5 (120 reviews)</Text>
            </View>
          </View>
        </View>

        {/* Reviews Section - add your own dynamic reviews here */}
        <View style={styles.reviewsContainer}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Reviews</Text>
          {/* Example Review */}
          <View style={styles.reviewCard}>
            <Image
              source={{ uri: 'https://randomuser.me/api/portraits/women/68.jpg' }}
              style={styles.reviewAvatar}
            />
            <View style={styles.reviewContent}>
              <Text style={[styles.reviewerName, { color: colors.text }]}>Jane Smith</Text>
              <View style={styles.starsRow}>
                {[...Array(4)].map((_, i) => (
                  <Ionicons key={i} name="star" size={14} color="#FFD700" />
                ))}
                <Ionicons name="star-outline" size={14} color="#FFD700" />
              </View>
              <Text style={[styles.reviewText, { color: colors.text }]}>
                John was a great renter! Very responsible and easy to communicate with.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Sticky Bottom Buttons */}
      <View style={[
          u.rowBetween,
          styles.stickyBar,
          { backgroundColor: colors.card, borderColor: colors.border }
      ]}>
        <TouchableOpacity
          style={[styles.stickyBtn, { borderColor: colors.border, backgroundColor: "#fff" }]}
          onPress={onCallPress}
          activeOpacity={0.85}
        >
          <Ionicons name="call-outline" size={24} color={colors.text} />
          <Text style={[styles.btnLabel, { color: colors.text }]}>Call</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.stickyBtn, { backgroundColor: "#25D366", borderColor: "#25D366" }]}
          onPress={onWhatsAppPress}
          activeOpacity={0.85}
        >
          <Ionicons name="logo-whatsapp" size={24} color="#fff" />
          <Text style={[styles.btnLabel, { color: "#fff" }]}>WhatsApp</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  profileSection: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  profileImage: { width: 70, height: 70, borderRadius: 35 },
  profileInfo: { marginLeft: 15 },
  profileName: { fontSize: 24, fontWeight: 'bold' },
  starsRow: { flexDirection: 'row', alignItems: 'center', marginTop: 4 },
  starCount: { marginLeft: 8, fontSize: 14 },

  reviewsContainer: { marginBottom: 120 }, // leave room for sticky buttons
  sectionTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 12 },

  reviewCard: { flexDirection: 'row', marginBottom: 16, backgroundColor: '#f6f6f6', padding: 12, borderRadius: 10 },
  reviewAvatar: { width: 50, height: 50, borderRadius: 25 },
  reviewContent: { marginLeft: 12, flex: 1 },
  reviewerName: { fontSize: 16, fontWeight: '600' },
  reviewText: { marginTop: 6, fontSize: 14 },

  stickyBar: {
    position: 'absolute',
    bottom: 28,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderTopWidth: 0,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 20,
    elevation: 15,
    zIndex: 99,
  },
  stickyBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 32,
    borderWidth: 2,
    marginHorizontal: 5,
  },
  btnLabel: {
    fontSize: 19,
    fontWeight: '700',
    marginLeft: 14,
    letterSpacing: 0.3,
  },
});
