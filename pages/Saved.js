import React, { useState } from "react";
import { View, ScrollView, Text } from "react-native";
import { useTheme } from "../theme/global";
import { u } from "../theme/utility";
import Details from "./Details";
import Card from "../components/Card";

export default function Saved() {
  const { colors } = useTheme();
  const [selected, setSelected] = useState(null);

  const savedList = [
    {
      id: 1,
      image: require("../assets/home.jpg"),
      price: "$1,850+",
      name: "Skyline Apartments",
      address: "233 St Perry Ave, Dallas, TX",
      details: ["1-3 Bedrooms", "1-2 Bathrooms"],
      phone: "+11234567890",
      owner: { name: "John Doe", rating: 4.7 }
    },
    {
      id: 2,
      image: require("../assets/house.jpg"),
      price: "$2,330+",
      name: "The Modern",
      address: "1000 Rentpath Way, Atlanta, GA",
      details: ["2-4 Bedrooms", "1-3 Bathrooms"],
      phone: "+19876543210",
      owner: { name: "Sarah Taylor", rating: 4.9 }
    },
  ];

  if (selected) return <Details property={selected} close={() => setSelected(null)} />;

  return (
    <View style={[u.flex1, { backgroundColor: colors.background }]}>

      <Text style={[
        u.textXl, u.textBold, u.p20, u.pt80, u.border, u.borderColor,
        { color: colors.text }
      ]}>
        Saved List
      </Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        {savedList.map((item) => (
          <Card key={item.id} item={item} onPress={() => setSelected(item)} />
        ))}
      </ScrollView>

    </View>
  );
}
