import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Switch,
  FlatList,
  Alert,
} from "react-native";

import * as ImagePicker from "expo-image-picker";
import { useTheme } from "../theme/global";

export default function Profile() {
  const { colors, u, styles } = useTheme();

  const [profilePic, setProfilePic] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("+222-276-0418");

  const [reviews, setReviews] = useState([
    { id: "1", name: "Alice", comment: "Great experience!" },
    { id: "2", name: "Bob", comment: "Very helpful!" },
  ]);


  
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
        />
      </View>

      {/* Dark/Light Mode Switch */}
      <View style={[u.row, u.alignEnd, u.px20, u.mt20, u.mb20]}>
        <Text style={[styles.txt, u.flex1, u.textBold]}>Dark Mode</Text>
        <Switch
          style={[u.flex1]}
          value={darkMode}
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
  );
}
