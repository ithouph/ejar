import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { useTheme } from "../theme/global";
import Details from "./Details";
import Card from "../components/Card";

export default function Discover({ setPage }) {
  const { colors, styles, u } = useTheme();
  const [selected, setSelected] = useState(null);

  const savedList = [
    {
      id: 1,
      image: require("../assets/home.jpg"),
      price: "$1,850+",
      name: "Skyline Apartments",
      address: "233 St Perry Ave, Dallas, TX",
      details: ["1-3 Bedrooms", "1-2 Bathrooms", "90m²", "Furnished", "Balcony"],
      phone: "+11234567890",
      whatsapp: "+11234567890",
      owner: { name: "John Doe", rating: 4.7 },
    },
    {
      id: 2,
      image: require("../assets/house.jpg"),
      price: "$2,330+",
      name: "The Modern",
      address: "1000 Rentpath Way, Atlanta, GA",
      details: ["2-4 Bedrooms", "1-3 Bathrooms", "120m²", "Newly Renovated", "City View"],
      phone: "+19876543210",
      whatsapp: "+19876543210",
      owner: { name: "Sarah Taylor", rating: 4.9 },
    },
  ];

  // Open property full details
  if (selected) return <Details property={selected} close={() => setSelected(null)} />;

  return (
    <View style={[u.flex1, u.col, styles.background]}>

      {/* Header */}
      <Text
        style={[
          u.textXl,
          u.textBold,
          u.mb0,
          u.border,
          u.p20,
          u.pt80,
          u.borderColor,
          { color: colors.txt },
        ]}
      >
        Welcome, Sidi
      </Text>

      {/* Property List */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {savedList.map((item) => (
          <Card key={item.id} item={item} onPress={() => setSelected(item)} />
        ))}
      </ScrollView>
    </View>
  );
}
