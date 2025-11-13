import React, { useState } from "react";
import { View, ScrollView } from "react-native";

import Detail from "../pages/Detail"; // Ensure this path is correct

import Card from "../components/Card"; // Ensure this path is correct
import Header from "../components/Header"; // Ensure this path is correct

import { savedList } from "../datafield"; // Your data source

import { useTheme } from "../theme/global";

export default function Saved() {
  const { colors, u, styles } = useTheme();
  const [selected, setSelected] = useState(null);

  // Show detail if property selected
  if (selected)
    return <Detail property={selected} close={() => setSelected(null)} />;

  return (
    <View style={[u.flex1, u.col, styles.background]}>
      <Header title="Saved List" />

      <ScrollView showsVerticalScrollIndicator={false}>
        {savedList.map((item) => (
          <Card key={item.id} item={item} onPress={() => setSelected(item)} />
        ))}
      </ScrollView>
    </View>
  );
}
