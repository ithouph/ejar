import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Switch,
  FlatList,
  Alert,
} from "react-native";

import * as ImagePicker from "expo-image-picker";

import { useTheme } from "../theme/global";
// Styles are applied using the useTheme hook and utility styles (u)

export default function Profile() {
  const { colors, u, styles, isDark, setForceTheme } = useTheme();

  const [profilePic, setProfilePic] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("+222-276-0418");
  const [reviews, setReviews] = useState([
    {
      id: "1",
      name: "Alice Zhang",
      comment: "Amazing apartment with a beautiful view!",
      avatar: "https://randomuser.me/api/portraits/women/10.jpg",
    },
    {
      id: "2",
      name: "Mohammed Ali",
      comment: "Host was responsive and place was super clean.",
      avatar: "https://randomuser.me/api/portraits/men/11.jpg",
    },
    {
      id: "3",
      name: "Priya Singh",
      comment: "Felt just like home—highly recommend!",
      avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    },
    {
      id: "4",
      name: "Carlos Diaz",
      comment: "Location is perfect for exploring the city.",
      avatar: "https://randomuser.me/api/portraits/men/13.jpg",
    },
    {
      id: "5",
      name: "Olga Petrova",
      comment: "Found everything just as described.",
      avatar: "https://randomuser.me/api/portraits/women/14.jpg",
    },
    {
      id: "6",
      name: "James Lee",
      comment: "Smooth check-in and excellent service.",
      avatar: "https://randomuser.me/api/portraits/men/15.jpg",
    },
    {
      id: "7",
      name: "Sara Kim",
      comment: "Loved the amenities and nearby cafes.",
      avatar: "https://randomuser.me/api/portraits/women/16.jpg",
    },
    {
      id: "8",
      name: "Daniel Müller",
      comment: "Will book again for my next visit.",
      avatar: "https://randomuser.me/api/portraits/men/17.jpg",
    },
    {
      id: "9",
      name: "Fatima Alvi",
      comment: "Spacious, bright, and well-equipped.",
      avatar: "https://randomuser.me/api/portraits/women/18.jpg",
    },
  ]);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setForceTheme(isDark ? "light" : "dark");
  };

  // Change profile picture
  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert(
        "Permission required",
        "Permission to access media library is required!"
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setProfilePic(result.assets[0].uri);
    }
  };

  const renderReview = ({ item }) => (
    <View style={[u.p10, styles.card]}>
      <Text style={[u.textBold, styles.txt]}>{item.name}</Text>
      <Text style={styles.txt}>{item.comment}</Text>
    </View>
  );

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={[styles.container, u.p0]}>
        {/* Header */}
        <Text
          style={[
            u.textXl,
            u.textBold,
            u.mb0,
            u.p20,
            u.pt80,
            u.borderColor,
            u.border,
            { color: colors.txt },
          ]}
        >
          Profile
        </Text>

        {/* Profile Picture */}
        <TouchableOpacity onPress={pickImage} style={[u.center, u.m20]}>
          <Image
            source={
              profilePic
                ? { uri: profilePic }
                : require("../assets/default-avatar.jpg")
            }
            style={{ width: 100, height: 100, borderRadius: 50 }}
          />
          <Text style={[styles.txt, u.mt5, { color: colors.primary }]}>
            Change Photo
          </Text>
        </TouchableOpacity>
        {/* Phone Number */}
        <View style={u.px20}>
          <Text style={[styles.txt, u.textBold, u.mb5]}>Phone Number</Text>
          <TextInput
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            style={[u.inp, styles.inp]}
            placeholder="+222 27 600 418"
            placeholderTextColor={colors.placeholder}
          />
        </View>

        {/* Dark/Light Mode Switch */}
        <View style={[u.row, u.alignEnd, u.px20, u.mt20, u.mb20]}>
          <Text style={[styles.txt, u.flex1, u.textBold]}>Dark Mode</Text>
          <Switch
            style={[u.flex1]}
            value={isDark}
            onValueChange={toggleDarkMode}
          />
        </View>

        {/* Reviews Section */}
        <View style={u.flex1}>
          <Text style={[styles.txt, u.px20, u.mb10]}>Reviews</Text>
          <FlatList
            data={reviews}
            renderItem={renderReview}
            keyExtractor={(item) => item.id}
            contentContainerStyle={u.px20}
          />
        </View>
      </View>
    </ScrollView>
  );
}
